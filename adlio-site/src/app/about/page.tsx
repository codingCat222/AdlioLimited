"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo, coreValues, processSteps } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-white/95 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* ── HERO ── */}
          <div className="mb-24">
            <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-4">About Adlio</p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <h1 className="text-5xl md:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-6">
                  We build scalable <br />
                  software that moves <br />
                  businesses <span className="text-[#3B82F6]">forward.</span>
                </h1>
                <div className="w-16 h-[3px] bg-[#3B82F6] mb-6" />
                <p className="text-[#64748B] text-lg leading-relaxed max-w-xl">
                  Adlio Limited is a forward-thinking technology company dedicated to delivering innovative software solutions that help businesses streamline operations, improve efficiency, and achieve sustainable growth across Africa.
                </p>
              </div>
              <div className="lg:col-span-5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-2xl p-8 flex flex-col justify-center">
                <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-2">Founded</p>
                <p className="text-5xl font-bold text-[#0F172A]">2020</p>
                <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                  <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase font-semibold mb-2">Headquarters</p>
                  <p className="text-[#0F172A] text-lg font-medium">Lagos, Nigeria</p>
                </div>
                <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                  <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase font-semibold mb-2">Focus</p>
                  <p className="text-[#0F172A] text-lg font-medium">Enterprise & FinTech</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── VISION & MISSION ── */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-[#F8F9FB] border border-[#E2E8F0] rounded-2xl relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3B82F6] rounded-l-2xl" />
              <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-4">Our Vision</p>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Building the Future</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{companyInfo.vision}</p>
            </div>
            <div className="p-10 bg-[#F8F9FB] border border-[#E2E8F0] rounded-2xl relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3B82F6] rounded-l-2xl" />
              <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-4">Our Mission</p>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Driving Excellence</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{companyInfo.mission}</p>
            </div>
          </div>

          {/* ── CORE VALUES ── */}
          <div className="mb-24">
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-[#E2E8F0]">
              <div>
                <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-2">What we stand for</p>
                <h2 className="text-4xl font-bold text-[#0F172A]">Our Core Values</h2>
              </div>
              <span className="text-[#94A3B8] text-[10px] tracking-widest uppercase hidden md:block">{coreValues.length} VALUES</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="group p-7 border border-[#E2E8F0] rounded-xl bg-white hover:bg-[#F8F9FB] hover:border-[#3B82F6] transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-9 h-9 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#3B82F6] font-bold text-xs flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#3B82F6] transition-colors">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed pl-[52px]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── PROCESS ── */}
          <div className="mb-24">
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-[#E2E8F0]">
              <div>
                <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-2">Our approach</p>
                <h2 className="text-4xl font-bold text-[#0F172A]">How We Work</h2>
              </div>
              <span className="text-[#94A3B8] text-[10px] tracking-widest uppercase hidden md:block">06 PHASES</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-5 p-6 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="pt-1.5">
                    <p className="text-[#0F172A] font-semibold text-sm leading-snug">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── WHY CHOOSE US — ACCORDION ── */}
          <div className="mb-8">
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-[#E2E8F0]">
              <div>
                <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-2">Why us</p>
                <h2 className="text-4xl font-bold text-[#0F172A]">Why Choose Adlio</h2>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { title: "Proven Industry Experience", content: "Our leadership team and consultants have successfully delivered technology solutions for various organizations, including financial institutions and enterprise clients across multiple sectors." },
                { title: "Client-Centered Approach", content: "We prioritize understanding our clients' business objectives before recommending technology solutions, ensuring every project delivers meaningful business value." },
                { title: "Innovation-Driven Culture", content: "We continuously explore emerging technologies and modern development practices to deliver future-ready solutions that keep our clients ahead of the curve." },
                { title: "Scalability & Long-Term Partnership", content: "Our solutions are designed to grow alongside our clients' businesses. We view every client relationship as a long-term partnership, providing ongoing support beyond project delivery." },
                { title: "Quality & Reliability", content: "We adhere to industry best practices, rigorous testing standards, and quality assurance processes to ensure dependable software performance every time." },
              ].map((item, i) => (
                <AccordionItem key={i} title={item.title} content={item.content} />
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

function AccordionItem({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#E2E8F0] rounded-xl bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F8F9FB] transition-colors"
      >
        <span className="text-base font-semibold text-[#0F172A]">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-[#3B82F6]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[#64748B] text-sm leading-relaxed border-t border-[#E2E8F0] pt-4">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}