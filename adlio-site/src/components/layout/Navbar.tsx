"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Adlio Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold tracking-tight text-[#0F172A]">
            adlio<span className="text-[#3B82F6]">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-[#3B82F6] font-medium"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[#3B82F6] text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] transition-colors"
          >
            Get Started
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#0F172A]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#64748B] hover:text-[#3B82F6] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[#3B82F6] text-white font-semibold rounded-lg text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}