"use client";

export default function StatsSection() {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years of Excellence" },
    { number: "20+", label: "Clients Served" },
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto border-t border-border">
      <div className="flex justify-between items-end mb-12">
        <p className="text-muted text-xs tracking-widest uppercase">In Numbers</p>
        <p className="text-muted text-xs tracking-widest uppercase">2020 — 2026</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-border border-t border-border">
        {stats.map((stat, index) => (
          <div key={index} className="py-12 px-6 border-b md:border-b-0 border-border">
            <p className="text-6xl font-bold text-white mb-2">{stat.number}</p>
            <p className="text-muted text-xs tracking-widest uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}