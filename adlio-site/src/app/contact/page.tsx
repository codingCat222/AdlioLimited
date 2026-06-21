"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/layout/Footer";
import { Phone, MessageCircle, Mail, MapPin, ArrowUpRight } from "lucide-react";

const contactDetails = [
  { icon: Phone, label: "Call Us", value: "07088153349" },
  { icon: MessageCircle, label: "WhatsApp", value: "+234 708 378 6348" },
  { icon: Mail, label: "Email", value: "support@adliolimited.com" },
  { icon: MapPin, label: "Location", value: "15, Boundary Road, Akowonjo Lagos" },
];

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <main className="min-h-screen bg-white/95 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="mb-16"
          >
            <p className="text-[#3B82F6] text-[10px] tracking-widest uppercase font-semibold mb-4">Contact Us</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-6">
              Let&apos;s create something <br className="hidden md:block" />
              <span className="text-[#3B82F6]">extraordinary.</span>
            </h1>
            <p className="text-[#64748B] text-lg max-w-xl leading-relaxed">
              Tell us about your project. We will respond within 24 hours with a personal note and next steps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
          >
            {/* Left — contact details */}
            <div className="bg-[#F8F9FB] rounded-2xl border border-[#E2E8F0] p-8">
              <p className="text-[10px] text-[#94A3B8] tracking-widest uppercase font-semibold mb-6">Get in touch</p>
              {contactDetails.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className={`flex items-start gap-4 py-5 ${i < contactDetails.length - 1 ? "border-b border-[#E2E8F0]" : ""}`}>
                    <div className="w-9 h-9 bg-[#EFF6FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-[#3B82F6]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#94A3B8] tracking-widest uppercase font-medium mb-1">{item.label}</p>
                      <p className="text-[#0F172A] font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                );
              })}


              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/+2347083786348?text=Hello%20Adlio%20Limited%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-between w-full px-5 py-4 bg-[#25D366] hover:bg-[#1ebe5d] transition-colors rounded-xl group"
              >
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-sm">Chat on WhatsApp</p>
                    <p className="text-white/70 text-xs">We typically reply in minutes</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-white/70 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Right — form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[#64748B] text-[10px] tracking-widest uppercase font-medium">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-[#F8F9FB] border border-[#E2E8F0] rounded-lg text-[#0F172A] text-sm outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#94A3B8]"
                    placeholder="John Samuel" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[#64748B] text-[10px] tracking-widest uppercase font-medium">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-[#F8F9FB] border border-[#E2E8F0] rounded-lg text-[#0F172A] text-sm outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#94A3B8]"
                    placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[#64748B] text-[10px] tracking-widest uppercase font-medium">Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F8F9FB] border border-[#E2E8F0] rounded-lg text-[#0F172A] text-sm outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#94A3B8]"
                  placeholder="Adlio Limited" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[#64748B] text-[10px] tracking-widest uppercase font-medium">Your Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                  className="w-full px-4 py-3 bg-[#F8F9FB] border border-[#E2E8F0] rounded-lg text-[#0F172A] text-sm outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#94A3B8] resize-none"
                  placeholder="Tell us about your project more than 10 characters..." />
              </div>
              <button type="submit" disabled={status === "loading"}
                className="w-full py-4 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition-colors disabled:opacity-50 text-sm">
                {status === "loading" ? "Sending..." : "Send Message →"}
              </button>
              {status === "success" && <p className="text-[#3B82F6] text-center text-sm font-medium">✓ Message sent. We will be in touch within 24 hours.</p>}
              {status === "error" && <p className="text-red-500 text-center text-sm font-medium">✗ Something went wrong. Please try again.</p>}
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-[#E2E8F0]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.684162250187!2d3.2348931!3d6.5689909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8fd3fa54dfa3%3A0x2af64f0459f4ff34!2s15%20Boundary%20Rd%2C%20Akowonjo%2C%20Lagos!5e0!3m2!1sen!2sng!4v1712345678901!5m2!1sen!2sng"
              width="100%" height="380" style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Adlio Limited Office Location"
            />
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}