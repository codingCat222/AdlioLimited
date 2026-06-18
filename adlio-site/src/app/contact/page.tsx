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
    <section className="min-h-screen pt-40 pb-24 px-8 max-w-7xl mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-20">
        <p className="text-muted text-[10px] tracking-widest uppercase mb-6">Contact Start</p>
        <h1 className="text-7xl md:text-8xl font-bold text-white leading-[1] tracking-tight mb-8">
          Let's create something <br /> extraordinary.
        </h1>
        <p className="text-muted text-xl max-w-xl">
          Tell us about your project. We will respond within 24 hours with a personal note and next steps.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="border-b border-border pb-6"><p className="text-muted text-xs tracking-widest uppercase mb-2">Email</p><p className="text-white text-lg">company@adliolimited.com</p></div>
          <div className="border-b border-border pb-6"><p className="text-muted text-xs tracking-widest uppercase mb-2">Location</p><p className="text-white text-lg">Africa</p></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-b border-border pb-2"><label className="text-muted text-xs tracking-widest uppercase block mb-1">What is your name?</label><input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-transparent text-white text-xl outline-none placeholder:text-muted/50" placeholder="John Samuel" /></div>
            <div className="border-b border-border pb-2"><label className="text-muted text-xs tracking-widest uppercase block mb-1">What is your email?</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent text-white text-xl outline-none placeholder:text-muted/50" placeholder="john@company.com" /></div>
          </div>
          <div className="border-b border-border pb-2"><label className="text-muted text-xs tracking-widest uppercase block mb-1">Company Name</label><input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-transparent text-white text-xl outline-none placeholder:text-muted/50" placeholder="Adlio Limited" /></div>
          <div className="border-b border-border pb-2"><label className="text-muted text-xs tracking-widest uppercase block mb-1">Your Message</label><textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full bg-transparent text-white text-lg outline-none placeholder:text-muted/50 resize-none" placeholder="Tell us about your project..." /></div>
          <button type="submit" disabled={status === "loading"} className="w-full py-4 bg-[#C8F031] text-[#0D0D0F] font-semibold hover:bg-[#b5d82b] transition-colors disabled:opacity-50">{status === "loading" ? "Sending..." : "Send Message"}</button>
          {status === "success" && <p className="text-[#C8F031] text-center text-sm">Message sent successfully. We will be in touch.</p>}
          {status === "error" && <p className="text-red-500 text-center text-sm">Something went wrong. Please try again.</p>}
        </form>
      </motion.div>
    </section>
  );
}