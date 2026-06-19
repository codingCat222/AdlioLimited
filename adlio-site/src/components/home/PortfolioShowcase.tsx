import Link from "next/link";
import { portfolioItems } from "@/lib/data";

export default function PortfolioShowcase() {
  const preview = portfolioItems.slice(0, 3);

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto border-t border-border">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-muted text-xs tracking-widest uppercase mb-2">Selected Work</p>
          <h2 className="text-5xl font-bold text-white">Featured work.</h2>
        </div>
        <Link href="/portfolio" className="text-muted hover:text-white transition-colors text-sm">
          View all projects →
        </Link>
      </div>
      <div className="space-y-0 border-t border-border">
        {preview.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-border">
            <div className="md:col-span-5 bg-card rounded-lg aspect-video flex items-center justify-center text-muted border border-border">
              Project Image
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <p className="text-muted text-xs tracking-widest uppercase mb-2">{item.category}</p>
              <h3 className="text-5xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-muted text-sm max-w-lg">{item.description}</p>
              <Link href={item.link} target="_blank" className="mt-6 text-sm text-white border-b border-white/20 hover:border-[#C8F031] transition-colors inline-block">
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}