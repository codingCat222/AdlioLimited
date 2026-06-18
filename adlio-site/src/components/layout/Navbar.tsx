"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0D0D0F]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Adlio Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold tracking-tight text-white">
            adlio<span className="text-[#C8F031]">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm text-gray-300 hover:text-[#C8F031] transition-colors">Services</Link>
          <Link href="/industries" className="text-sm text-gray-300 hover:text-[#C8F031] transition-colors">Industries</Link>
          <Link href="/about" className="text-sm text-gray-300 hover:text-[#C8F031] transition-colors">About</Link>
          <Link href="/portfolio" className="text-sm text-gray-300 hover:text-[#C8F031] transition-colors">Work</Link>
          <Link href="/contact" className="text-sm text-gray-300 hover:text-[#C8F031] transition-colors">Contact</Link>
          <Link href="/contact" className="px-5 py-2.5 bg-[#C8F031] text-[#0D0D0F] text-sm font-semibold rounded-full hover:bg-[#b5d82b] transition-colors">
            Get Started
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0D0D0F] border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          <Link href="/services" className="text-gray-300 hover:text-[#C8F031]">Services</Link>
          <Link href="/industries" className="text-gray-300 hover:text-[#C8F031]">Industries</Link>
          <Link href="/about" className="text-gray-300 hover:text-[#C8F031]">About</Link>
          <Link href="/portfolio" className="text-gray-300 hover:text-[#C8F031]">Work</Link>
          <Link href="/contact" className="text-gray-300 hover:text-[#C8F031]">Contact</Link>
          <Link href="/contact" className="px-5 py-2.5 bg-[#C8F031] text-[#0D0D0F] font-semibold rounded-full text-center">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}