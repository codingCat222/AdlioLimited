"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    { title: "Custom Software Development", category: "Engineering", description: "We design and develop tailor-made software applications that align with specific business requirements, helping organizations automate workflows, improve productivity, and gain greater operational control." },
    { title: "Enterprise Application Development", category: "Engineering", description: "Our team develops robust enterprise-grade solutions that support large-scale operations, data management, reporting, compliance, and business intelligence." },
    { title: "Web Application Development", category: "Engineering", description: "We create secure, scalable, and responsive web applications that enable organizations to deliver seamless digital experiences across devices and platforms." },
    { title: "Mobile Application Development", category: "Engineering", description: "Our mobile solutions help businesses connect with customers, employees, and stakeholders through intuitive Android and iOS applications." },
    { title: "FinTech Solutions", category: "FinTech", description: "With extensive experience working with financial institutions, we develop secure banking and financial technology solutions that support customer onboarding, transaction processing, reporting, compliance, and operational efficiency." },
    { title: "Digital Transformation Consulting", category: "Consulting", description: "We help organizations modernize legacy systems, optimize business processes, and leverage emerging technologies to remain competitive in an evolving digital landscape." },
    { title: "Systems Integration", category: "Integration", description: "Our integration services enable businesses to connect multiple systems, applications, and databases into a unified technology ecosystem that improves efficiency and data accuracy." },
    { title: "Business Process Automation", category: "Automation", description: "We implement intelligent automation solutions that reduce manual workloads, improve accuracy, and accelerate business operations." },
    { title: "Cloud Solutions", category: "Cloud", description: "We assist organizations in adopting cloud technologies that improve scalability, security, accessibility, and business continuity." },
    { title: "Technical Support and Maintenance", category: "Support", description: "Our commitment extends beyond deployment. We provide ongoing support, system monitoring, maintenance, and enhancements to ensure long-term performance and reliability." },
  ];

  return (
    <section className="min-h-screen pt-40 pb-24 px-8 max-w-7xl mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-20">
        <p className="text-muted text-[10px] tracking-widest uppercase mb-6">Services Capabilities</p>
        <h1 className="text-7xl md:text-8xl font-bold text-white leading-[1] tracking-tight mb-8">
          Crafting the future of <br /> digital experiences.
        </h1>
        <p className="text-muted text-xl max-w-3xl">
          Adlio blends technical excellence with strategic intuition to build solutions that don't just work, they resonate.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border">
        {services.map((service, index) => (
          <div key={index} className="p-12 border-b md:border-b-0 md:border-r border-border last:border-r-0 flex flex-col justify-between min-h-[360px] bg-card/20 hover:bg-card/40 transition-colors">
            <div className="space-y-4">
              <div className="flex justify-between items-start"><p className="text-muted text-[10px] tracking-widest uppercase">{service.category}</p><span className="text-muted text-xs">0{index + 1}</span></div>
              <h3 className="text-3xl font-bold text-white">{service.title}</h3>
              <p className="text-muted text-sm max-w-sm leading-relaxed">{service.description}</p>
            </div>
            <Link href="/contact" className="text-muted hover:text-white transition-colors text-xs tracking-widest uppercase mt-8 inline-block">Explore →</Link>
          </div>
        ))}
      </motion.div>
    </section>
  );
}