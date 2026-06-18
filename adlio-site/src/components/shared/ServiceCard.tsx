"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon?: string;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-[#C8F031]/30 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-[#C8F031] transition-colors">
          {service.title}
        </h3>
        <span className="text-gray-500 group-hover:text-[#C8F031] transition-colors text-xl">
          ↗
        </span>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">
        {service.description}
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-block text-sm text-[#C8F031] font-medium opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Get started with this service →
      </Link>
    </motion.div>
  );
}