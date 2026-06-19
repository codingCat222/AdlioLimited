"use client";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { industries } from "@/lib/data";

export default function IndustriesPage() {
  return (
    <section className="min-h-screen pt-40 pb-24 px-8 max-w-7xl mx-auto bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="mb-20"
      >
        <SectionLabel text="Industries We Serve" />
        <h1 className="text-6xl md:text-7xl font-bold mt-6 mb-8 text-[#0F172A] leading-[1.1] tracking-tight">
          Diverse. Dynamic. Ready.
        </h1>
        <p className="text-[#64748B] text-lg max-w-3xl">
          Adlio Limited serves a diverse range of industries, partnering with ambitious organizations across multiple sectors.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.3 }} 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl border border-[#E2E8F0] bg-[#F8F9FB] hover:bg-white hover:border-[#3B82F6] transition-all text-center group cursor-default"
          >
            <p className="font-bold text-xl text-[#0F172A] group-hover:text-[#3B82F6] transition-colors">
              {industry}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}