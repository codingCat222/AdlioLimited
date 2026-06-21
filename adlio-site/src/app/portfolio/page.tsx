"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

const items = [
  {
    title: "Carezest – Caregiving Services Management Platform",
    category: "Web and Mobile App Development",
    description: "A centralized platform designed to manage caregiving services between care agencies, caregivers, and family members. Streamlines caregiver onboarding, scheduling, task assignment, and real-time care tracking.",
    image: "/image/img11.png",
    link: "https://carezestservice.com",
    isDemo: false,
  },
  {
    title: "Cartify Market – E-commerce Marketplace Platform",
    category: "WebApp Development",
    description: "A modern online marketplace connecting buyers and sellers. Enables product listing, secure payments, order management, and real-time inventory tracking.",
    image: "/image/img12.png",
    link: "https://crarty.vercel.app",
    isDemo: false,
  },
  {
    title: "CRARTY AI – AI-Powered SaaS Brand Studio",
    category: "WebApp Development",
    description: "A cloud-based SaaS platform that helps users generate, design, and refine brand identities using AI — logos, brand assets, and visual concepts.",
    image: "/image/img14.png",
    link: "https://carttifys-jvyd.vercel.app",
    isDemo: false,
  },
  {
    title: "Adlio Asset Manager – Inbuilt Data Tracking System",
    category: "Web Design and Development",
    description: "A comprehensive asset management solution with an integrated data tracking system, providing real-time visibility into asset records, usage, and performance.",
    image: "/image/img2.jpeg",
    link: "https://your-live-project-link.com",
    isDemo: true,
  },
  {
    title: "Custom-made Automated Ajo App",
    category: "WebApp Development",
    description: "A custom automated Ajo (savings and contribution) platform that streamlines group savings, contribution tracking, payment management, and member administration.",
    image: "/image/img.jpeg",
    link: "https://ajo.alfabashirucommunications.com",
    isDemo: false,
  },
  {
    title: "Custom-made Bank App",
    category: "FinTech",
    description: "A secure digital banking application enabling users to perform transactions, manage accounts, track balances, and access banking services seamlessly from any device.",
    image: "/image/img9.jpeg",
    link: "https://alfabashirucommunications.com/home",
    isDemo: false,
  },
  {
    title: "Food Safety Compliance Web App",
    category: "Web Application",
    description: "A compliance management platform helping food businesses maintain safety standards. Streamlines inspections, record keeping, and compliance monitoring.",
    image: "/image/img5.jpeg",
    link: "https://nuelsfoodsafety.com",
    isDemo: false,
  },
  {
    title: "Online Legal Consultancy Web App",
    category: "Enterprise Solutions",
    description: "A digital platform connecting clients with legal professionals for consultation, appointment scheduling, case management, and secure document sharing.",
    image: "/image/img6.jpeg",
    link: "https://urbanlegalclinic.com",
    isDemo: false,
  },
  {
    title: "Custom-made Mini Bank",
    category: "FinTech",
    description: "A lightweight digital banking solution for managing accounts, transfers, deposits, and transaction records with real-time balance updates.",
    image: "/image/img8.jpeg",
    link: "https://alfabashirucommunications.com",
    isDemo: false,
  },
  {
    title: "Online Dating App",
    category: "Web and Mobile",
    description: "A modern dating platform with user profiles, smart matching, real-time messaging, and a seamless cross-platform experience on both web and mobile.",
    image: "/image/img7.jpeg",
    link: "https://notjustdating.com",
    isDemo: false,
  },
  {
    title: "Analytics Dashboard",
    category: "Business Intelligence",
    description: "Real-time data visualization and reporting for business leaders. Centralizes KPIs and operational metrics into a single actionable view.",
    image: "/image/img10.jpeg",
    link: "https://your-live-project-link.com",
    isDemo: true,
  },
];

export default function PortfolioPage() {
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
              Selected Work
            </p>
            <div className="flex items-end justify-between gap-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tight">
                Featured <span className="text-[#3B82F6]">work.</span>
              </h1>
              <p className="text-[#64748B] text-sm max-w-sm leading-relaxed hidden md:block">
                A selection of enterprise systems, fintech platforms, and digital products delivered for clients across Africa.
              </p>
            </div>
          </motion.div>

          {/* ── GRID ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.04, ease: [0.25, 0.1, 0.25, 1] as const }}
                viewport={{ once: true }}
                className="group bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:border-[#3B82F6] hover:shadow-sm transition-all"
              >
                <div className="relative aspect-[4/3] bg-[#F8F9FB]">
                  <Image
                    src={item.image.trim()}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.isDemo && (
                    <div className="absolute top-3 right-3 bg-[#0F172A]/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-widest uppercase">
                      Demo
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase mb-1">{item.category.trim()}</p>
                  <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#3B82F6] transition-colors leading-snug line-clamp-2">
                    {item.title.trim()}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed line-clamp-2">{item.description.trim()}</p>
                  <div className="mt-4">
                    {item.isDemo ? (
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3B82F6] text-white text-xs font-semibold rounded-lg hover:bg-[#2563EB] transition-colors"
                      >
                        Request Demo →
                      </Link>
                    ) : (
                      <Link
                        href={item.link.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[#3B82F6] font-medium hover:underline"
                      >
                        View Project ↗
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── BOTTOM CTA ── */}
          <div className="mt-20 p-10 bg-[#0F172A] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase mb-3">Start a project</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to build something that lasts?</h3>
              <p className="text-[#64748B] text-sm mt-2 max-w-sm">Tell us about your project and we&apos;ll respond within 24 hours.</p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition-colors text-sm whitespace-nowrap flex-shrink-0"
            >
              Start a conversation →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}