import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto border-t border-border">
      <div className="text-center">
        <p className="text-muted text-xs tracking-widest uppercase mb-6">Ready to create</p>
        <h2 className="text-7xl md:text-9xl font-bold text-white leading-[0.9] tracking-tight mb-12">
          something truly <br /> great?
        </h2>
        <Link href="/contact" className="px-10 py-4 bg-white text-[#0D0D0F] font-semibold rounded-sm hover:bg-gray-200 transition-colors inline-block text-lg">
          Start your project →
        </Link>
      </div>
    </section>
  );
}