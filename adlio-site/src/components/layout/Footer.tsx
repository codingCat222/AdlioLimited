"use client";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setEmail("");
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Failed to subscribe. Please try again.");
    }
  };

  return (
    <footer className="bg-[#0A0A0F] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center text-white font-bold text-sm">A</div>
            <span className="text-xl font-bold text-white">adlio<span className="text-[#3B82F6]">.</span></span>
          </Link>
          <p className="text-[#6E6E6E] text-sm leading-relaxed max-w-xs">
            Building smarter businesses through technology. Empowering Africa with innovative digital solutions.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-white text-xs font-semibold tracking-widest uppercase">— Services</h4>
          <ul className="space-y-3 text-sm text-[#6E6E6E]">
            <li><Link href="/services" className="hover:text-[#3B82F6] transition-colors">FinTech Solutions</Link></li>
            <li><Link href="/services" className="hover:text-[#3B82F6] transition-colors">Enterprise Apps</Link></li>
            <li><Link href="/services" className="hover:text-[#3B82F6] transition-colors">Cloud & Integration</Link></li>
            <li><Link href="/services" className="hover:text-[#3B82F6] transition-colors">Automation</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white text-xs font-semibold tracking-widest uppercase">— Company</h4>
          <ul className="space-y-3 text-sm text-[#6E6E6E]">
            <li><Link href="/about" className="hover:text-[#3B82F6] transition-colors">About us</Link></li>
            <li><Link href="/industries" className="hover:text-[#3B82F6] transition-colors">Industries</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#3B82F6] transition-colors">Work</Link></li>
            <li><Link href="/contact" className="hover:text-[#3B82F6] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white text-xs font-semibold tracking-widest uppercase">— Newsletter</h4>
          <p className="text-[#6E6E6E] text-sm">Get the latest insights on tech and digital transformation.</p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#6E6E6E]"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-4 py-2 bg-[#3B82F6] text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "..." : "→"}
            </button>
          </form>
          {status === "success" && <p className="text-[#3B82F6] text-sm">✓ Subscribed!</p>}
          {status === "error" && <p className="text-red-500 text-sm">✗ {errorMessage}</p>}
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 flex justify-between text-[#3A3A3A] text-xs">
        <span>© {new Date().getFullYear()} Adlio Limited. All rights reserved. Lagos, Nigeria.</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}