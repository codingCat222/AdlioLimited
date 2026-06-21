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
    <footer className="relative bg-[#0A0A0F] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:flex-wrap gap-12 md:justify-between">
        <div className="flex flex-col gap-4 flex-1 min-w-[220px] md:max-w-xs">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center text-white font-bold text-sm">A</div>
            <span className="text-xl font-bold text-white">adlio<span className="text-[#3B82F6]">.</span></span>
          </Link>
          <p className="text-[#6E6E6E] text-sm leading-relaxed max-w-xs">
            Building smarter businesses through technology. Empowering Africa with innovative digital solutions.
          </p>
        </div>

        <div className="flex flex-col gap-4 flex-1 min-w-[140px]">
          <h4 className="text-white text-xs font-semibold tracking-widest uppercase">— Services</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#6E6E6E]">
            <li><Link href="/services" className="hover:text-[#3B82F6] transition-colors">FinTech Solutions</Link></li>
            <li><Link href="/services" className="hover:text-[#3B82F6] transition-colors">Enterprise Apps</Link></li>
            <li><Link href="/services" className="hover:text-[#3B82F6] transition-colors">Cloud & Integration</Link></li>
            <li><Link href="/services" className="hover:text-[#3B82F6] transition-colors">Automation</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 flex-1 min-w-[140px]">
          <h4 className="text-white text-xs font-semibold tracking-widest uppercase">— Company</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#6E6E6E]">
            <li><Link href="/about" className="hover:text-[#3B82F6] transition-colors">About us</Link></li>
            <li><Link href="/industries" className="hover:text-[#3B82F6] transition-colors">Industries</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#3B82F6] transition-colors">Work</Link></li>
            <li><Link href="/contact" className="hover:text-[#3B82F6] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 flex-1 min-w-[240px] md:max-w-sm">
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

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row md:justify-center text-center text-[#3A3A3A] text-xs">
        <span>© {new Date().getFullYear()} Adlio Limited. All rights reserved. Lagos, Nigeria.</span>
      </div>

      {/* Fixed WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/2347083786348?text=Hello%20Adlio%20Limited%2C%20I%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-black/50 hover:scale-110 transition-transform"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"></span>
          <svg viewBox="0 0 24 24" className="relative w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-[#FF3B30] text-white text-[10px] font-bold rounded-full border-2 border-[#0A0A0F]">
            1
          </span>
        </a>
      </div>
    </footer>
  );
}