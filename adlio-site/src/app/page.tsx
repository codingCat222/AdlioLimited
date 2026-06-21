"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "@/components/home/Marquee";
import Footer from "@/components/layout/Footer";
import HeroCanvas from "@/components/home/HeroCanvas";
import { Building2, Landmark, Stethoscope, Briefcase } from "lucide-react";
import { portfolioItems } from "@/lib/data";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
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

const industries = [
  { label: "Banking", sub: "Financial institutions", icon: Building2 },
  { label: "Government", sub: "Public sector agencies", icon: Landmark },
  { label: "Healthcare", sub: "Health tech systems", icon: Stethoscope },
  { label: "SMEs", sub: "Growing businesses", icon: Briefcase },
];

const heroSlides = [
  {
    bg: "#0B1120",
    tagline: "Enterprise Technology Partner",
    headline: (
      <>
        Software{" "}
        <span className="text-[#3B82F6]">built for</span>{" "}
        institutions that can&apos;t afford to fail.
      </>
    ),
    subtext: "Custom systems, fintech infrastructure, and digital transformation for banks, government agencies, and enterprises across Africa.",
  },
  {
    bg: "#1E1B4B",
    tagline: "Digital Transformation Experts",
    headline: (
      <>
        Modernizing{" "}
        <span className="text-[#3B82F6]">legacy systems</span>{" "}
        into future-ready infrastructure.
      </>
    ),
    subtext: "We help organizations automate processes, optimize performance, and leverage emerging technologies to stay ahead.",
  },
  {
    bg: "#1C3D5A",
    tagline: "Trusted by Institutions",
    headline: (
      <>
        Security, scalability, and{" "}
        <span className="text-[#3B82F6]">precision</span>{" "}
        at every level of your organization.
      </>
    ),
    subtext: "From banking to government, our enterprise-grade solutions are built to handle mission-critical operations.",
  },
  {
    bg: "#0F172A",
    tagline: "Africa&apos;s Tech Partner",
    headline: (
      <>
        Empowering{" "}
        <span className="text-[#3B82F6]">growth</span>{" "}
        through innovation and exceptional delivery.
      </>
    ),
    subtext: "We are committed to building smarter businesses across the continent with world-class technology.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];
  const featuredProjects = portfolioItems.slice(0, 4);

  return (
    <main className="min-h-screen">

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden transition-colors duration-1000"
        style={{ backgroundColor: slide.bg }}
      >
        <div className="absolute inset-0 z-0 opacity-60">
          <HeroCanvas />
        </div>
        <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-20">
          <AnimatePresence mode="wait">
            <motion.p
              key={`tag-${currentSlide}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease }}
              className="text-[#3B82F6] text-xs tracking-[0.2em] font-semibold uppercase mb-6"
            >
              {slide.tagline}
            </motion.p>
          </AnimatePresence>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`head-${currentSlide}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.7, ease }}
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight mb-6"
                >
                  {slide.headline}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`sub-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.1, ease }}
                  className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-2xl mb-8"
                >
                  {slide.subtext}
                </motion.p>
              </AnimatePresence>

              <motion.div {...fadeUp(0.3)} className="flex items-center gap-4 flex-wrap">
                <Link href="/contact" className="px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition-colors text-sm">
                  Explore our services
                </Link>
                <Link href="/contact" className="px-8 py-4 border border-white/20 text-[#94A3B8] font-medium rounded-lg hover:border-[#3B82F6] hover:text-white transition-colors text-sm">
                  Talk to us
                </Link>
              </motion.div>

              <div className="flex items-center gap-2 mt-10">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === currentSlide ? "w-6 h-2 bg-[#3B82F6]" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="lg:col-span-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <p className="text-[10px] text-[#94A3B8] tracking-[0.15em] font-semibold uppercase mb-4">Trusted Across</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { num: "10+", label: "Service lines", accent: false },
                  { num: "12", label: "Industries served", accent: false },
                  { num: "6", label: "Step process", accent: true },
                  { num: "FinTech", label: "Core specialism", accent: false },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className={`text-2xl font-bold ${item.accent ? "text-[#3B82F6]" : "text-white"}`}>{item.num}</div>
                    <div className="text-[11px] text-[#94A3B8] mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY BAR ── */}
      <section className="relative overflow-hidden">
        <div className="bg-[#0F172A] px-6 md:px-8 py-3 flex items-center justify-between">
          <p className="text-[10px] text-[#475569] tracking-[0.2em] uppercase font-medium">Industries We Serve</p>
          <p className="text-[10px] text-[#475569] tracking-[0.2em] uppercase font-medium">12 Sectors</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
                viewport={{ once: true }}
                className={`relative group px-8 py-8 bg-[#3B82F6] hover:bg-[#2563EB] transition-colors duration-300 cursor-pointer
                  ${i < 3 ? "border-r border-[#2563EB]" : ""}
                  ${i < 2 ? "border-b border-[#2563EB] md:border-b-0" : ""}
                `}
              >
                <div className="text-[10px] text-blue-300/60 font-mono tracking-widest mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mb-3 text-white"><Icon size={24} /></div>
                <div className="text-white font-bold text-xl leading-tight mb-1">{ind.label}</div>
                <div className="text-blue-200 text-sm">{ind.sub}</div>
                <div className="absolute bottom-6 right-6 text-blue-300/0 group-hover:text-blue-200/80 transition-all duration-300 text-lg">→</div>
              </motion.div>
            );
          })}
        </div>
        <div className="bg-[#0F172A] px-6 md:px-8 py-3 flex items-center gap-6 overflow-hidden">
          {["Banking & Finance", "FinTech", "Healthcare", "Government", "Education", "Insurance", "Manufacturing", "Logistics", "Retail", "SMEs", "Hospitality", "Professional Services"].map((s, i) => (
            <span key={i} className="text-[10px] text-[#334155] tracking-widest uppercase whitespace-nowrap font-medium flex items-center gap-4">
              {s}{i < 11 && <span className="text-[#3B82F6] text-[8px] ml-4">◆</span>}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease }}
                viewport={{ once: true }}
                className="bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl p-6 border-t-4 border-t-transparent hover:border-t-[#3B82F6] transition-all group"
              >
                <div className="w-9 h-9 bg-[#EFF6FF] rounded-lg flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                </div>
                <p className="text-[10px] text-[#94A3B8] tracking-widest uppercase mb-2">{s.category}</p>
                <h3 className="text-[#0F172A] font-semibold text-base leading-snug mb-1">{s.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{s.desc}</p>
                <Link href="/services" className="inline-block mt-4 text-[10px] text-[#3B82F6] font-medium tracking-widest uppercase group-hover:underline">
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
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
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
              <p className="text-[#64748B] text-sm mt-3 max-w-lg leading-relaxed">
                A showcase of our best projects across various industries.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease }}
                viewport={{ once: true }}
                className="group bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:border-[#3B82F6] transition-colors"
              >
                <div className="relative aspect-[4/3] bg-[#F8F9FB]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase mb-1">{item.category}</p>
                  <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#3B82F6] transition-colors line-clamp-2">{item.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed line-clamp-2">{item.description}</p>
                  {item.isDemo ? (
                    <Link href="/contact" className="mt-3 inline-block px-4 py-2 bg-[#3B82F6] text-white text-xs font-semibold rounded-lg hover:bg-[#2563EB] transition-colors">
                      Request Demo
                    </Link>
                  ) : (
                    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-[#3B82F6] font-medium hover:underline">
                      View Project ↗
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/portfolio" className="px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition-colors text-sm">
              See more →
            </Link>
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
              transition={{ duration: 0.7, ease }}
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