"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Marquee from "@/components/home/Marquee";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-transparent">
        <div className="absolute top-32 left-8 right-8 max-w-7xl mx-auto flex justify-between text-[10px] text-muted tracking-[0.2em] z-10 pointer-events-none">
          <span>ADLIO LIMITED — EST. 2020</span>
          <span className="text-[#C8F031]">● NOW BOOKING — Q4 2026</span>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center mt-10">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-7xl md:text-8xl lg:text-[7.5rem] font-bold text-white leading-[0.9] tracking-tight mb-8">
            We design and build <br />
            digital products that <br />
            move markets forward.
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-12 border-t border-border pt-8">
            <p className="text-muted text-left max-w-md text-sm md:text-base">
              Premium design and development partnership for ambitious teams shipping at scale.
            </p>
            <div className="flex items-center gap-6 mt-6 md:mt-0">
              <Link href="/contact" className="px-8 py-3 bg-white text-[#0D0D0F] font-semibold rounded-sm hover:bg-gray-200 transition-colors flex items-center gap-2">
                Start a project →
              </Link>
              <Link href="/portfolio" className="text-muted hover:text-white transition-colors text-sm">
                View work
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-8 text-[10px] text-muted tracking-widest uppercase z-10 hidden md:block">
          Scroll to explore
        </div>
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-muted text-xs tracking-widest uppercase mb-6">Our Philosophy</p>
            <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              We don't just build websites. <br />
              We craft digital experiences <br />
              that <span className="border-b-4 border-[#C8F031]">move</span> people to act.
            </motion.h2>
            <p className="text-muted text-lg leading-relaxed max-w-lg">
              Every pixel, every interaction, every line of code serves a purpose. We obsess over the details so your users don't have to think, they just feel it.
            </p>
          </div>
          <div className="relative hidden lg:flex items-center justify-center overflow-hidden">
            <div className="text-[15rem] font-bold text-white/5 tracking-tighter select-none absolute right-0 top-0 leading-none">
              Design
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-border overflow-hidden">
          <Marquee />
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto border-t border-border">
        <div className="flex justify-between items-end mb-12">
          <p className="text-muted text-xs tracking-widest uppercase">In Numbers</p>
          <p className="text-muted text-xs tracking-widest uppercase">2020 — 2026</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-border border-t border-border">
          <div className="py-12 px-6 border-b md:border-b-0 border-border"><p className="text-6xl font-bold text-white mb-2">50+</p><p className="text-muted text-xs tracking-widest uppercase">Projects Delivered</p></div>
          <div className="py-12 px-6 border-b md:border-b-0 border-border"><p className="text-6xl font-bold text-white mb-2">98%</p><p className="text-muted text-xs tracking-widest uppercase">Client Satisfaction</p></div>
          <div className="py-12 px-6 border-b md:border-b-0 border-border"><p className="text-6xl font-bold text-white mb-2">5+</p><p className="text-muted text-xs tracking-widest uppercase">Years of Excellence</p></div>
          <div className="py-12 px-6 border-b md:border-b-0 border-border"><p className="text-6xl font-bold text-white mb-2">20+</p><p className="text-muted text-xs tracking-widest uppercase">Clients Served</p></div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-8">
          <div><p className="text-muted text-xs tracking-widest uppercase mb-2">What We Do</p><h2 className="text-5xl font-bold text-white">Services built for <br /> ambitious brands.</h2></div>
          <Link href="/services" className="text-muted hover:text-white transition-colors text-sm">View all services →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
          <div className="p-12 border-b md:border-b-0 border-border flex flex-col justify-between min-h-[320px] bg-card/20 hover:bg-card/40 transition-colors">
            <div className="space-y-2"><p className="text-muted text-[10px] tracking-widest uppercase">Engineering</p><h3 className="text-4xl font-bold text-white">Custom Software Development</h3><p className="text-muted text-sm max-w-sm">We design and develop tailor-made software applications that align with specific business requirements.</p></div>
            <Link href="/contact" className="text-muted hover:text-white transition-colors text-xs tracking-widest uppercase mt-8 inline-block">Explore →</Link>
          </div>
          <div className="p-12 border-b md:border-b-0 border-border flex flex-col justify-between min-h-[320px] bg-card/20 hover:bg-card/40 transition-colors">
            <div className="space-y-2"><p className="text-muted text-[10px] tracking-widest uppercase">Engineering</p><h3 className="text-4xl font-bold text-white">Enterprise Application Development</h3><p className="text-muted text-sm max-w-sm">Robust enterprise-grade solutions that support large-scale operations and data management.</p></div>
            <Link href="/contact" className="text-muted hover:text-white transition-colors text-xs tracking-widest uppercase mt-8 inline-block">Explore →</Link>
          </div>
          <div className="p-12 border-b md:border-b-0 border-border flex flex-col justify-between min-h-[320px] bg-card/20 hover:bg-card/40 transition-colors">
            <div className="space-y-2"><p className="text-muted text-[10px] tracking-widest uppercase">Engineering</p><h3 className="text-4xl font-bold text-white">Web Application Development</h3><p className="text-muted text-sm max-w-sm">We create secure, scalable, and responsive web applications for seamless digital experiences.</p></div>
            <Link href="/contact" className="text-muted hover:text-white transition-colors text-xs tracking-widest uppercase mt-8 inline-block">Explore →</Link>
          </div>
          <div className="p-12 border-b md:border-b-0 border-border flex flex-col justify-between min-h-[320px] bg-card/20 hover:bg-card/40 transition-colors">
            <div className="space-y-2"><p className="text-muted text-[10px] tracking-widest uppercase">Engineering</p><h3 className="text-4xl font-bold text-white">Mobile Application Development</h3><p className="text-muted text-sm max-w-sm">Intuitive Android and iOS applications for customers, employees, and stakeholders.</p></div>
            <Link href="/contact" className="text-muted hover:text-white transition-colors text-xs tracking-widest uppercase mt-8 inline-block">Explore →</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto border-t border-border">
        <div className="flex justify-between items-end mb-12">
          <div><p className="text-muted text-xs tracking-widest uppercase mb-2">Selected Work</p><h2 className="text-5xl font-bold text-white">Featured work.</h2></div>
          <Link href="/portfolio" className="text-muted hover:text-white transition-colors text-sm">View all projects →</Link>
        </div>
        <div className="space-y-0 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-border">
            <div className="md:col-span-5 bg-card rounded-lg aspect-video flex items-center justify-center text-muted border border-border">Project Image</div>
            <div className="md:col-span-7 flex flex-col justify-center"><p className="text-muted text-xs tracking-widest uppercase mb-2">Web Design and Development</p><h3 className="text-5xl font-bold text-white mb-4">CLubSync</h3><p className="text-muted text-sm max-w-lg">A high-end digital experience for a club automotive care brand.</p><Link href="#" target="_blank" className="mt-6 text-sm text-white border-b border-white/20 hover:border-[#C8F031] transition-colors inline-block">View Project</Link></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-border">
            <div className="md:col-span-5 bg-card rounded-lg aspect-video flex items-center justify-center text-muted border border-border">Project Image</div>
            <div className="md:col-span-7 flex flex-col justify-center"><p className="text-muted text-xs tracking-widest uppercase mb-2">Web Design and Development</p><h3 className="text-5xl font-bold text-white mb-4">Premium Auto Customization</h3><p className="text-muted text-sm max-w-lg">An interactive platform for vehicle customization.</p><Link href="#" target="_blank" className="mt-6 text-sm text-white border-b border-white/20 hover:border-[#C8F031] transition-colors inline-block">View Project</Link></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-border">
            <div className="md:col-span-5 bg-card rounded-lg aspect-video flex items-center justify-center text-muted border border-border">Project Image</div>
            <div className="md:col-span-7 flex flex-col justify-center"><p className="text-muted text-xs tracking-widest uppercase mb-2">Web Design and Development</p><h3 className="text-5xl font-bold text-white mb-4">Carezest</h3><p className="text-muted text-sm max-w-lg">An immersive website for a care company.</p><Link href="#" target="_blank" className="mt-6 text-sm text-white border-b border-white/20 hover:border-[#C8F031] transition-colors inline-block">View Project</Link></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-border">
            <div className="md:col-span-5 bg-card rounded-lg aspect-video flex items-center justify-center text-muted border border-border">Project Image</div>
            <div className="md:col-span-7 flex flex-col justify-center"><p className="text-muted text-xs tracking-widest uppercase mb-2">Mobile Application</p><h3 className="text-5xl font-bold text-white mb-4">Smart Event Check-In App</h3><p className="text-muted text-sm max-w-lg">An intuitive mobile application for event organizers.</p><Link href="#" target="_blank" className="mt-6 text-sm text-white border-b border-white/20 hover:border-[#C8F031] transition-colors inline-block">View Project</Link></div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto border-t border-border">
        <div className="text-center">
          <p className="text-muted text-xs tracking-widest uppercase mb-6">Ready to create</p>
          <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="text-7xl md:text-9xl font-bold text-white leading-[0.9] tracking-tight mb-12">
            something truly <br /> great?
          </motion.h2>
          <Link href="/contact" className="px-10 py-4 bg-white text-[#0D0D0F] font-semibold rounded-sm hover:bg-gray-200 transition-colors inline-block text-lg">
            Start your project →
          </Link>
        </div>
      </section>
      <Footer />
    </main>

  );
}