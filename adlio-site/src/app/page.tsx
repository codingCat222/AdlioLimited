"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Marquee from "@/components/home/Marquee";
import Footer from "@/components/layout/Footer";

import type { Variants } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const services = [
  { category: "ENGINEERING", title: "Custom Software Development", desc: "Tailor-made applications that automate workflows and improve operational control." },
  { category: "ENTERPRISE", title: "Enterprise Application Development", desc: "Robust solutions for large-scale operations, data management and compliance." },
  { category: "WEB", title: "Web Application Development", desc: "Secure, scalable and responsive platforms across all devices." },
  { category: "MOBILE", title: "Mobile Application Development", desc: "Intuitive Android and iOS apps for customers, employees and stakeholders." },
  { category: "FINTECH", title: "FinTech Solutions", desc: "Banking, onboarding, transaction processing and compliance systems." },
  { category: "CLOUD", title: "Cloud & Integration", desc: "Unified technology ecosystem improving efficiency and data accuracy." },
];

const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "5+", label: "Years of Excellence" },
  { num: "20+", label: "Clients Served" },
];

const projects = [
  { category: "Web Design & Development", title: "ClubSync", desc: "A high-end digital experience for a club automotive care brand." },
  { category: "Web Design & Development", title: "Premium Auto Customization", desc: "An interactive platform for vehicle customization and bookings." },
  { category: "Web Design & Development", title: "Carezest", desc: "An immersive platform for a care coordination company." },
  { category: "Mobile Application", title: "Smart Event Check-In App", desc: "An intuitive mobile application for event organizers." },
];

const industries = [
  { label: "Banking", sub: "Financial institutions", icon: "🏦" },
  { label: "Government", sub: "Public sector agencies", icon: "🏛️" },
  { label: "Healthcare", sub: "Health tech systems", icon: "🏥" },
  { label: "SMEs", sub: "Growing businesses", icon: "📈" },
];

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 bg-white/95 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full py-20">
          <motion.p {...fadeUp(0)} className="text-[#3B82F6] text-xs tracking-[0.2em] font-semibold uppercase mb-6">
            Enterprise Technology Partner
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-6">
                Software{" "}
                <span className="text-[#3B82F6]">built for</span>{" "}
                institutions that can't afford to fail.
              </motion.h1>
              <motion.p {...fadeUp(0.2)} className="text-[#64748B] text-base md:text-lg leading-relaxed max-w-lg mb-8">
                Custom systems, fintech infrastructure, and digital transformation for banks, government agencies, and enterprises across Africa.
              </motion.p>
              <motion.div {...fadeUp(0.3)} className="flex items-center gap-4">
                <Link href="/contact" className="px-7 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition-colors text-sm">
                  Explore our services
                </Link>
                <Link href="/contact" className="px-7 py-3 border border-[#E2E8F0] text-[#64748B] font-medium rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors text-sm">
                  Talk to us
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="bg-[#F1F5F9] rounded-2xl p-6 border border-[#E2E8F0]"
            >
              <p className="text-[10px] text-[#94A3B8] tracking-[0.15em] font-semibold uppercase mb-4">Trusted Across</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { num: "10+", label: "Service lines", accent: false },
                  { num: "12", label: "Industries served", accent: false },
                  { num: "6", label: "Step process", accent: true },
                  { num: "FinTech", label: "Core specialism", accent: false },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-[#E8ECF0]">
                    <div className={`text-2xl font-bold ${item.accent ? "text-[#3B82F6]" : "text-[#0F172A]"}`}>{item.num}</div>
                    <div className="text-[11px] text-[#94A3B8] mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY BAR — redesigned ── */}
      <section className="relative overflow-hidden">
        {/* top label row */}
        <div className="bg-[#0F172A] px-6 md:px-8 py-3 flex items-center justify-between">
          <p className="text-[10px] text-[#475569] tracking-[0.2em] uppercase font-medium">Industries We Serve</p>
          <p className="text-[10px] text-[#475569] tracking-[0.2em] uppercase font-medium">12 Sectors</p>
        </div>

        {/* main industry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`relative group px-8 py-8 bg-[#3B82F6] hover:bg-[#2563EB] transition-colors duration-300 cursor-pointer
                ${i < 3 ? "border-r border-[#2563EB]" : ""}
                ${i < 2 ? "border-b border-[#2563EB] md:border-b-0" : ""}
              `}
            >
              {/* number label */}
              <div className="text-[10px] text-blue-300/60 font-mono tracking-widest mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* icon */}
              <div className="text-2xl mb-3">{ind.icon}</div>

              {/* label */}
              <div className="text-white font-bold text-xl leading-tight mb-1">
                {ind.label}
              </div>

              {/* sub */}
              <div className="text-blue-200 text-sm">{ind.sub}</div>

              {/* arrow on hover */}
              <div className="absolute bottom-6 right-6 text-blue-300/0 group-hover:text-blue-200/80 transition-all duration-300 text-lg">
                →
              </div>
            </motion.div>
          ))}
        </div>

        {/* bottom strip */}
        <div className="bg-[#0F172A] px-6 md:px-8 py-3 flex items-center gap-6 overflow-hidden">
          {["Banking & Finance", "FinTech", "Healthcare", "Government", "Education", "Insurance", "Manufacturing", "Logistics", "Retail", "SMEs", "Hospitality", "Professional Services"].map((s, i) => (
            <span key={i} className="text-[10px] text-[#334155] tracking-widest uppercase whitespace-nowrap font-medium flex items-center gap-4">
              {s} {i < 11 && <span className="text-[#3B82F6] text-[8px]">◆</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-white border-y border-[#E2E8F0]">
        <Marquee />
      </div>

      {/* ── SERVICES ── */}
      <section className="bg-white py-24 px-6 md:px-8 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 pb-8 border-b border-[#E2E8F0]">
            <div>
              <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-2">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">End-to-end technology services.</h2>
              <p className="text-[#64748B] text-sm mt-3 max-w-lg leading-relaxed">
                Comprehensive solutions designed to support businesses at every stage of their digital transformation journey.
              </p>
            </div>
            <Link href="/services" className="text-[#64748B] hover:text-[#3B82F6] transition-colors text-sm whitespace-nowrap hidden md:block">
              View all services →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl p-6 border-t-4 border-t-transparent hover:border-t-[#3B82F6] transition-all group cursor-pointer"
              >
                <div className="w-9 h-9 bg-[#EFF6FF] rounded-lg flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                </div>
                <p className="text-[10px] text-[#94A3B8] tracking-widest uppercase mb-2">{s.category}</p>
                <h3 className="text-[#0F172A] font-semibold text-base leading-snug mb-2">{s.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{s.desc}</p>
                <Link href="/services" className="text-[10px] text-[#3B82F6] font-medium tracking-widest uppercase mt-4 inline-block group-hover:underline">
                  EXPLORE →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#F8F9FB] py-20 px-6 md:px-8 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-baseline mb-10">
            <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase">In Numbers</p>
            <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase">2020 — 2026</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#E2E8F0]">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`py-10 px-6 ${i < 3 ? "border-r border-[#E2E8F0]" : ""}`}
              >
                <p className="text-5xl font-bold text-[#0F172A] mb-2">{s.num}</p>
                <p className="text-[10px] text-[#94A3B8] tracking-widest uppercase">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="bg-white py-24 px-6 md:px-8 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 pb-8 border-b border-[#E2E8F0]">
            <div>
              <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-2">Selected Work</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">Featured work.</h2>
            </div>
            <Link href="/portfolio" className="text-[#64748B] hover:text-[#3B82F6] transition-colors text-sm whitespace-nowrap hidden md:block">
              View all projects →
            </Link>
          </div>
          <div className="space-y-0 border-t border-[#E2E8F0]">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-[#E2E8F0] group"
              >
                <div className="md:col-span-1 text-[#94A3B8] text-sm font-medium pt-1">{String(i + 1).padStart(2, "0")}</div>
                <div className="md:col-span-4 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl aspect-video flex items-center justify-center text-[#94A3B8] text-sm group-hover:border-[#3B82F6]/40 transition-colors">
                  Project Image
                </div>
                <div className="md:col-span-7 flex flex-col justify-center">
                  <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase mb-2">{p.category}</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3 group-hover:text-[#3B82F6] transition-colors">{p.title}</h3>
                  <p className="text-[#64748B] text-sm max-w-lg leading-relaxed">{p.desc}</p>
                  <Link href="#" className="mt-4 text-sm text-[#3B82F6] font-medium inline-block hover:underline">View Project ↗</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0A0A0F] py-32 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#3B82F6]/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <p className="text-[#6E6E6E] text-[10px] tracking-widest uppercase mb-4">Ready to build</p>
            <motion.h2
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight"
            >
              Something that<br />
              <span className="text-[#3B82F6]">lasts.</span>
            </motion.h2>
            <p className="text-[#6E6E6E] mt-4 max-w-md text-sm leading-relaxed">
              Tell us about your project — we respond within 24 hours with a personal note and next steps.
            </p>
          </div>
          <Link href="/contact" className="px-10 py-4 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition-colors text-base whitespace-nowrap">
            Start a conversation →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}