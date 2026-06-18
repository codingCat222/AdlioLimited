"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-40 pb-24 px-8 max-w-7xl mx-auto relative z-10">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-7xl md:text-8xl font-bold text-white leading-[1] tracking-tight mb-8">
        We build scalable <br /> software that moves <br /> businesses forward.
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-muted text-xl max-w-2xl mb-20">
        Adlio is a product-driven software studio helping startups and growing businesses design, build, and launch high-performance digital products.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <div className="space-y-4"><h2 className="text-4xl font-bold text-white">Our Vision</h2><p className="text-muted text-lg leading-relaxed">To become one of Africa's leading technology companies, empowering businesses and institutions through innovative digital solutions that drive efficiency, growth, and transformation.</p></div>
        <div className="space-y-4"><h2 className="text-4xl font-bold text-white">Our Mission</h2><p className="text-muted text-lg leading-relaxed">To develop world-class technology solutions that help organizations automate processes, optimize performance, improve customer engagement, and achieve operational excellence.</p></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 border border-border rounded-xl bg-card/30"><h3 className="text-2xl font-bold mb-3 text-white">Excellence</h3><p className="text-muted text-sm leading-relaxed">We strive for the highest standards in every project we undertake.</p></div>
          <div className="p-8 border border-border rounded-xl bg-card/30"><h3 className="text-2xl font-bold mb-3 text-white">Innovation</h3><p className="text-muted text-sm leading-relaxed">We embrace creativity and technology to solve complex business challenges.</p></div>
          <div className="p-8 border border-border rounded-xl bg-card/30"><h3 className="text-2xl font-bold mb-3 text-white">Integrity</h3><p className="text-muted text-sm leading-relaxed">We operate with honesty, transparency, and professionalism.</p></div>
          <div className="p-8 border border-border rounded-xl bg-card/30"><h3 className="text-2xl font-bold mb-3 text-white">Customer Success</h3><p className="text-muted text-sm leading-relaxed">Our clients' success remains the foundation of our own growth.</p></div>
          <div className="p-8 border border-border rounded-xl bg-card/30"><h3 className="text-2xl font-bold mb-3 text-white">Accountability</h3><p className="text-muted text-sm leading-relaxed">We take ownership of our commitments and consistently deliver results.</p></div>
          <div className="p-8 border border-border rounded-xl bg-card/30"><h3 className="text-2xl font-bold mb-3 text-white">Continuous Improvement</h3><p className="text-muted text-sm leading-relaxed">We continuously learn, evolve, and improve to remain at the forefront of technology innovation.</p></div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
        <h2 className="text-4xl font-bold text-white mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4"><span className="text-6xl font-bold text-muted/30">01</span><p className="text-xl font-medium text-white pt-2">Discovery and Requirements Analysis</p></div>
          <div className="flex items-start gap-4"><span className="text-6xl font-bold text-muted/30">02</span><p className="text-xl font-medium text-white pt-2">Solution Design and Planning</p></div>
          <div className="flex items-start gap-4"><span className="text-6xl font-bold text-muted/30">03</span><p className="text-xl font-medium text-white pt-2">Development and Testing</p></div>
          <div className="flex items-start gap-4"><span className="text-6xl font-bold text-muted/30">04</span><p className="text-xl font-medium text-white pt-2">Deployment and Implementation</p></div>
          <div className="flex items-start gap-4"><span className="text-6xl font-bold text-muted/30">05</span><p className="text-xl font-medium text-white pt-2">Training and Knowledge Transfer</p></div>
          <div className="flex items-start gap-4"><span className="text-6xl font-bold text-muted/30">06</span><p className="text-xl font-medium text-white pt-2">Ongoing Support and Continuous Improvement</p></div>
        </div>
      </motion.div>
    </section>
  );
}