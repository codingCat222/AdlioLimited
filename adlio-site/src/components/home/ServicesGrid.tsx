import Link from "next/link";
import { services } from "@/lib/data";

export default function ServicesGrid() {
  const preview = services.slice(0, 4);

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12 border-b border-border pb-8">
        <div>
          <p className="text-muted text-xs tracking-widest uppercase mb-2">What We Do</p>
          <h2 className="text-5xl font-bold text-white">Services built for <br /> ambitious brands.</h2>
        </div>
        <Link href="/services" className="text-muted hover:text-white transition-colors text-sm">
          View all services →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
        {preview.map((service, index) => (
          <div key={index} className="p-12 border-b md:border-b-0 border-border flex flex-col justify-between min-h-[320px] bg-card/20 hover:bg-card/40 transition-colors">
            <div className="space-y-2">
              <p className="text-muted text-[10px] tracking-widest uppercase">{service.category || "Service"}</p>
              <h3 className="text-4xl font-bold text-white">{service.title}</h3>
              <p className="text-muted text-sm max-w-sm">{service.description}</p>
            </div>
            <Link href="/contact" className="text-muted hover:text-white transition-colors text-xs tracking-widest uppercase mt-8 inline-block">
              Explore →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}