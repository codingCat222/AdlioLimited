"use client";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";
import { industries } from "@/lib/data";

export default function IndustriesPage() {
  return (
    <>
      <main className="min-h-screen bg-white/95 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="mb-16"
          >
            <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-4">
              Industries We Serve
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-6">
              Diverse. Dynamic. <span className="text-[#3B82F6]">Ready.</span>
            </h1>
            <p className="text-[#64748B] text-lg max-w-2xl leading-relaxed">
              Adlio Limited serves a diverse range of industries, partnering with ambitious organizations across multiple sectors to deliver technology that creates real business value.
            </p>
          </motion.div>

          {/* ── STATS ROW ── */}
          <div className="grid grid-cols-3 gap-0 mb-16 border border-[#E2E8F0] rounded-2xl overflow-hidden">
            {[
              { num: "12", label: "Industries served" },
              { num: "50+", label: "Projects delivered" },
              { num: "20+", label: "Clients across Africa" },
            ].map((s, i) => (
              <div key={i} className={`py-8 px-8 bg-white ${i < 2 ? "border-r border-[#E2E8F0]" : ""}`}>
                <p className="text-4xl font-bold text-[#0F172A]">{s.num}</p>
                <p className="text-[10px] text-[#94A3B8] tracking-widest uppercase mt-2">{s.label}</p>
              </div>
            ))}
          </div>

          {/* ── INDUSTRIES GRID ── */}
          <div className="mb-4 pb-6 border-b border-[#E2E8F0] flex items-end justify-between">
            <div>
              <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-2">Sectors</p>
              <h2 className="text-3xl font-bold text-[#0F172A]">Who we work with</h2>
            </div>
            <span className="text-[#94A3B8] text-[10px] tracking-widest uppercase hidden md:block">
              {industries.length} SECTORS
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] as const }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8F9FB] hover:bg-white hover:border-[#3B82F6] hover:shadow-sm transition-all group cursor-default"
              >
                <div className="w-8 h-8 bg-[#EFF6FF] rounded-lg flex items-center justify-center mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
                </div>
                <p className="font-semibold text-sm text-[#0F172A] group-hover:text-[#3B82F6] transition-colors leading-snug">
                  {industry}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── CTA ── */}
          <div className="mt-20 p-10 bg-[#0F172A] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase mb-3">Work with us</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Don&apos;t see your industry?</h3>
              <p className="text-[#64748B] text-sm mt-2 max-w-sm">We work with organizations across all sectors. Get in touch and let&apos;s discuss your needs.</p>
            </div>
            <a
              href="/contact"
              className="px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition-colors text-sm whitespace-nowrap flex-shrink-0"
            >
              Talk to us →
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}