"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#0D0D0F]">
      <HeroCanvas />
      <div className="absolute top-32 left-8 right-8 max-w-7xl mx-auto flex justify-between text-[10px] text-muted tracking-[0.2em] z-10 pointer-events-none">
        <span>ADLIO LIMITED — EST. 2020</span>
        <span className="text-[#C8F031]">● NOW BOOKING — Q4 2026</span>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center mt-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-8xl lg:text-[7.5rem] font-bold text-white leading-[0.9] tracking-tight mb-8"
        >
          We design and build <br />
          digital products that <br />
          move markets forward.
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-12 border-t border-border pt-8">
          <p className="text-muted text-left max-w-md text-sm md:text-base">
            Premium design and development partnership for ambitious teams shipping at scale.
          </p>
          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <Link href="/contact" className="px-8 py-3 bg-white text-[#0D0D0F] font-semibold rounded-sm hover:bg-gray-200 transition-colors flex items-center gap-2">
              Start a project →
            </Link>
            <Link href="/portfolio" className="text-muted hover:text-white transition-colors text-sm">
              View work
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-8 text-[10px] text-muted tracking-widest uppercase z-10 hidden md:block">
        Scroll to explore
      </div>
    </section>
  );
}