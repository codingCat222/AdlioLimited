"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (res.ok) { setStatus("success"); setFormData({ name: "", email: "", company: "", message: "" }); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <section className="min-h-screen pt-40 pb-24 px-8 max-w-7xl mx-auto bg-white">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-20">
        <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-6">Contact Us</p>
        <h1 className="text-6xl md:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-8">
          Let's create something <br /> extraordinary.
        </h1>
        <p className="text-[#64748B] text-lg max-w-xl leading-relaxed">
          Tell us about your project. We will respond within 24 hours with a personal note and next steps.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8 bg-[#F8F9FB] p-8 rounded-2xl border border-[#E2E8F0]">
          <div className="pb-6 border-b border-[#E2E8F0]">
            <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase font-medium mb-1">Email</p>
            <p className="text-[#0F172A] text-lg font-medium">company@adliolimited.com</p>
          </div>
          <div className="pb-6 border-b border-[#E2E8F0]">
            <p className="text-[#94A3B8] text-[10px] tracking-widest uppercase font-medium mb-1">Location</p>
            <p className="text-[#0F172A] text-lg font-medium">Africa</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-[#64748B] text-xs tracking-widest uppercase font-medium">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-[#F8F9FB] border border-[#E2E8F0] rounded-lg text-[#0F172A] outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#94A3B8]" placeholder="John Samuel" />
            </div>
            <div className="space-y-1">
              <label className="text-[#64748B] text-xs tracking-widest uppercase font-medium">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-[#F8F9FB] border border-[#E2E8F0] rounded-lg text-[#0F172A] outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#94A3B8]" placeholder="john@company.com" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[#64748B] text-xs tracking-widest uppercase font-medium">Company Name</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-[#F8F9FB] border border-[#E2E8F0] rounded-lg text-[#0F172A] outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#94A3B8]" placeholder="Adlio Limited" />
          </div>
          <div className="space-y-1">
            <label className="text-[#64748B] text-xs tracking-widest uppercase font-medium">Your Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 bg-[#F8F9FB] border border-[#E2E8F0] rounded-lg text-[#0F172A] outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#94A3B8] resize-none" placeholder="Tell us about your project..." />
          </div>
          <button type="submit" disabled={status === "loading"} className="w-full py-4 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition-colors disabled:opacity-50">
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <p className="text-[#3B82F6] text-center text-sm font-medium">✓ Message sent successfully. We will be in touch.</p>}
          {status === "error" && <p className="text-red-500 text-center text-sm font-medium">✗ Something went wrong. Please try again.</p>}
        </form>
      </motion.div>
    </section>
  );
}