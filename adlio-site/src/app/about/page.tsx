"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { companyInfo, coreValues, processSteps } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white pt-40 pb-24 px-8 max-w-7xl mx-auto">
      
      {/* ── HERO ── */}
      <div className="mb-28">
        <SectionLabel text="About Adlio" />
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-6">
              We build scalable <br /> 
              software that moves <br />
              businesses forward.
            </h1>
            <div className="w-16 h-[3px] bg-[#3B82F6] mb-6" />
            <p className="text-[#64748B] text-lg leading-relaxed max-w-xl">
              Adlio is a product-driven software studio helping startups and growing businesses design, build, and launch high-performance digital products.
            </p>
          </div>
          <div className="lg:col-span-5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-2xl p-8 flex flex-col justify-center">
            <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-2">Founded</p>
            <p className="text-5xl font-bold text-[#0F172A]">2020</p>
            <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
              <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase font-semibold mb-2">Headquarters</p>
              <p className="text-[#0F172A] text-lg font-medium">Africa</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── VISION & MISSION ── */}
      <div className="mb-28 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-10 bg-[#F8F9FB] border border-[#E2E8F0] rounded-2xl relative">
          <div className="absolute -left-[1px] top-0 bottom-0 w-[4px] bg-[#3B82F6] rounded-l-2xl" />
          <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-4">Our Vision</p>
          <h3 className="text-3xl font-bold text-[#0F172A] mb-4">Building the Future</h3>
          <p className="text-[#64748B] text-base leading-relaxed">{companyInfo.vision}</p>
        </div>
        <div className="p-10 bg-[#F8F9FB] border border-[#E2E8F0] rounded-2xl relative">
          <div className="absolute -left-[1px] top-0 bottom-0 w-[4px] bg-[#3B82F6] rounded-l-2xl" />
          <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-4">Our Mission</p>
          <h3 className="text-3xl font-bold text-[#0F172A] mb-4">Driving Excellence</h3>
          <p className="text-[#64748B] text-base leading-relaxed">{companyInfo.mission}</p>
        </div>
      </div>

      {/* ── CORE VALUES ── */}
      <div className="mb-28">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A]">Our Core Values</h2>
          <div className="w-16 h-[1px] bg-[#E2E8F0]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <div 
              key={index} 
              className="group p-8 border border-[#E2E8F0] rounded-xl bg-white hover:bg-[#F8F9FB] hover:border-[#3B82F6] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#3B82F6] font-bold text-sm">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#3B82F6] transition-colors">
                  {value.title}
                </h3>
              </div>
              <p className="text-[#64748B] text-sm leading-relaxed pl-14">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROCESS ── */}
      <div className="mb-28">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A]">How We Work</h2>
          <div className="w-16 h-[1px] bg-[#E2E8F0]" />
        </div>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-[#E2E8F0] hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6 pl-0 md:pl-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>
                <div className="pt-1">
                  <p className="text-[#0F172A] font-semibold text-lg leading-snug">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ACCORDION ── */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-[#0F172A]">Why Choose Adlio</h2>
          <div className="w-16 h-[1px] bg-[#E2E8F0]" />
        </div>
        <div className="space-y-4">
          <AccordionItem 
            title="Proven Industry Experience" 
            content="Our leadership team and consultants have successfully delivered technology solutions for various organizations, including financial institutions and enterprise clients across multiple sectors."
          />
          <AccordionItem 
            title="Client-Centered Approach" 
            content="We prioritize understanding our clients' business objectives before recommending technology solutions, ensuring every project delivers meaningful business value."
          />
          <AccordionItem 
            title="Innovation-Driven Culture" 
            content="We continuously explore emerging technologies and modern development practices to deliver future-ready solutions."
          />
          <AccordionItem 
            title="Scalability & Long-Term Partnership" 
            content="Our solutions are designed to grow alongside our clients' businesses, supporting future expansion. We view every client relationship as a long-term partnership."
          />
        </div>
      </div>

    </section>
  );
}

// ── ACCORDION COMPONENT ──
function AccordionItem({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#E2E8F0] rounded-xl bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-[#F8F9FB]"
      >
        <span className="text-lg font-semibold text-[#0F172A]">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
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
            <div className="p-6 pt-0 text-[#64748B] text-sm leading-relaxed border-t border-[#E2E8F0]">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}