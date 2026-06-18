"use client";

export default function Philosophy() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p className="text-muted text-xs tracking-widest uppercase mb-6">Our Philosophy</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            We don't just build websites. <br />
            We craft digital experiences <br />
            that <span className="border-b-4 border-[#C8F031]">move</span> people to act.
          </h2>
          <p className="text-muted text-lg leading-relaxed max-w-lg">
            Every pixel, every interaction, every line of code serves a purpose. We obsess over the details so your users don't have to think, they just feel it.
          </p>
        </div>
        <div className="relative hidden lg:flex items-center justify-center overflow-hidden">
          <div className="text-[15rem] font-bold text-white/5 tracking-tighter select-none absolute right-0 top-0 leading-none">
            Design
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-border overflow-hidden">
        <div className="flex whitespace-nowrap gap-12 text-muted text-xs tracking-widest uppercase animate-scroll">
          <span>Identity</span><span>Web Design</span><span>Branding</span><span>Development</span><span>Motion</span><span>SEO</span><span>Strategy</span>
          <span>UI/UX</span><span>Identity</span><span>Web Design</span><span>Branding</span><span>Development</span>
        </div>
      </div>
    </section>
  );
}