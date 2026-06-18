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

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Failed to subscribe. Please try again.");
    }
  };

  return (
    <footer className="bg-[#0D0D0F] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Brand */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold text-white">
            adlio<span className="text-[#C8F031]">.</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Building smarter businesses through technology. Empowering Africa with innovative digital solutions.
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/services" className="hover:text-[#C8F031] transition-colors">Services</Link></li>
            <li><Link href="/industries" className="hover:text-[#C8F031] transition-colors">Industries</Link></li>
            <li><Link href="/about" className="hover:text-[#C8F031] transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#C8F031] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Stay Updated</h4>
          <p className="text-gray-400 text-sm">Get the latest insights on tech and digital transformation.</p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white outline-none focus:border-[#C8F031] transition-colors placeholder:text-gray-500"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-5 py-2 bg-[#C8F031] text-[#0D0D0F] text-sm font-semibold rounded-full hover:bg-[#b5d82b] transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
          {status === "success" && (
            <p className="text-[#C8F031] text-sm mt-2">✓ Subscribed successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm mt-2">✗ {errorMessage}</p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Adlio Limited. All rights reserved.
      </div>
    </footer>
  );
}