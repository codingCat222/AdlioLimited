import SectionLabel from "@/components/shared/SectionLabel";
import { companyInfo, coreValues, processSteps } from "@/lib/data";

export default function AboutPage() {
  return (
    <section className="pt-40 pb-24 px-8 max-w-7xl mx-auto">
      <div className="mb-24">
        <SectionLabel text="About Adlio" />
        <h1 className="text-7xl md:text-8xl font-bold mt-6 mb-8 text-white leading-[1] tracking-tight">
          We build scalable <br /> software that moves <br /> businesses forward.
        </h1>
        <p className="text-muted text-xl max-w-2xl">
          Adlio is a product-driven software studio helping startups and growing businesses design, build, and launch high-performance digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white">Our Vision</h2>
          <p className="text-muted text-lg leading-relaxed">{companyInfo.vision}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white">Our Mission</h2>
          <p className="text-muted text-lg leading-relaxed">{companyInfo.mission}</p>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="p-8 border border-border rounded-xl bg-card/30">
              <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-white mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-6xl font-bold text-muted/30">0{index + 1}</span>
              <p className="text-xl font-medium text-white pt-2">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}