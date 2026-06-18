"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioPage() {
  const items = [
    { title: "Luxury Auto Spa", category: "Web Design and Development", description: "A high-end digital experience for a luxury automotive care brand, focusing on seamless booking and brand storytelling." },
    { title: "Premium Auto Customization", category: "Web Design and Development", description: "An interactive platform for vehicle customization, allowing users to visualize modifications in real-time." },
    { title: "Luxury Villa Experience", category: "Web Design and Development", description: "An immersive website for a luxury villa rental service, highlighting property details and guest experiences." },
    { title: "Smart Event Check-In App", category: "Mobile Application", description: "An intuitive mobile application for event organizers and attendees to streamline check-in processes and networking." },
  ];

  return (
    <section className="min-h-screen pt-40 pb-24 px-8 max-w-7xl mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-20">
        <p className="text-muted text-[10px] tracking-widest uppercase mb-6">Selected Work</p>
        <h1 className="text-7xl md:text-8xl font-bold text-white leading-[1] tracking-tight mb-8">
          Featured work.
        </h1>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8">
            <div className="bg-card rounded-xl aspect-video flex items-center justify-center text-muted border border-border">Project Image</div>
            <div className="flex flex-col justify-center">
              <p className="text-muted text-xs tracking-widest uppercase mb-2">{item.category}</p>
              <h3 className="text-4xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-muted text-sm">{item.description}</p>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="mt-6 text-white border-b border-white/20 hover:border-[#C8F031] transition-colors inline-block">View Project</Link>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}