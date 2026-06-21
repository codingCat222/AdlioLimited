"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

const services = [
  { title: "Custom Software Development", category: "Engineering", description: "We design and develop tailor-made software applications that align with specific business requirements, helping organizations automate workflows, improve productivity, and gain greater operational control." },
  { title: "Enterprise Application Development", category: "Enterprise", description: "Our team develops robust enterprise-grade solutions that support large-scale operations, data management, reporting, compliance, and business intelligence." },
  { title: "Web Application Development", category: "Engineering", description: "We create secure, scalable, and responsive web applications that enable organizations to deliver seamless digital experiences across devices and platforms." },
  { title: "Mobile Application Development", category: "Mobile", description: "Our mobile solutions help businesses connect with customers, employees, and stakeholders through intuitive Android and iOS applications." },
  { title: "FinTech Solutions", category: "FinTech", description: "With extensive experience working with financial institutions, we develop secure banking and financial technology solutions that support customer onboarding, transaction processing, reporting, compliance, and operational efficiency." },
  { title: "Digital Transformation Consulting", category: "Consulting", description: "We help organizations modernize legacy systems, optimize business processes, and leverage emerging technologies to remain competitive in an evolving digital landscape." },
  { title: "Systems Integration", category: "Integration", description: "Our integration services enable businesses to connect multiple systems, applications, and databases into a unified technology ecosystem that improves efficiency and data accuracy." },
  { title: "Business Process Automation", category: "Automation", description: "We implement intelligent automation solutions that reduce manual workloads, improve accuracy, and accelerate business operations." },
  { title: "Cloud Solutions", category: "Cloud", description: "We assist organizations in adopting cloud technologies that improve scalability, security, accessibility, and business continuity." },
  { title: "Technical Support & Maintenance", category: "Support", description: "Our commitment extends beyond deployment. We provide ongoing support, system monitoring, maintenance, and enhancements to ensure long-term performance and reliability." },
];

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen bg-white/95 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="mb-16 pb-10 border-b border-[#E2E8F0]"
          >
            <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-4">
              Services — Capabilities
            </p>
            <div className="flex items-end justify-between gap-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tight">
                Building the <span className="text-[#3B82F6]">systems</span><br />
                behind growth.
              </h1>
              <p className="text-[#64748B] text-sm max-w-sm leading-relaxed hidden md:block">
                From banking infrastructure to cloud migration — comprehensive technology solutions that organizations depend on at scale.
              </p>
            </div>
          </motion.div>

          {/* ── SERVICES GRID ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E2E8F0]"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] as const }}
                viewport={{ once: true }}
                className="p-8 border-b border-r border-[#E2E8F0] flex flex-col justify-between min-h-[280px] bg-white hover:bg-[#F8F9FB] transition-colors group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold">{service.category}</p>
                    <span className="text-[#E2E8F0] text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] leading-snug group-hover:text-[#3B82F6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{service.description}</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-block mt-6 text-[10px] text-[#3B82F6] font-semibold tracking-widest uppercase group-hover:underline"
                >
                  EXPLORE →
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* ── CTA ── */}
          <div className="mt-16 p-10 bg-[#0F172A] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase mb-3">Get started</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Not sure which service you need?</h3>
              <p className="text-[#64748B] text-sm mt-2 max-w-sm">Tell us about your challenge and we&apos;ll recommend the right approach.</p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition-colors text-sm whitespace-nowrap flex-shrink-0"
            >
              Talk to us →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}