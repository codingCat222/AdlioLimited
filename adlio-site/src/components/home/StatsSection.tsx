"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { number: 50, suffix: "+", label: "Projects Delivered" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
    { number: 5, suffix: "+", label: "Years of Excellence" },
    { number: 20, suffix: "+", label: "Clients Served" },
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto border-t border-border">
      <div className="flex justify-between items-end mb-12">
        <p className="text-muted text-xs tracking-widest uppercase">In Numbers</p>
        <p className="text-muted text-xs tracking-widest uppercase">2020 — 2026</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-border border-t border-border">
        {stats.map((stat, index) => (
          <Counter key={index} number={stat.number} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>
    </section>
  );
}

// Separate component to handle individual counter logic
function Counter({ number, suffix, label }: { number: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Animate from 0 to the target number
      let start = 0;
      const duration = 1500; // 1.5 seconds
      const stepTime = 20; // Update every 20ms
      const steps = duration / stepTime;
      const increment = number / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <div ref={ref} className="py-12 px-6 border-b md:border-b-0 border-border">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold text-white mb-2"
      >
        {count}
        <span className="text-6xl font-bold text-white">{suffix}</span>
      </motion.p>
      <p className="text-muted text-xs tracking-widest uppercase">{label}</p>
    </div>
  );
}