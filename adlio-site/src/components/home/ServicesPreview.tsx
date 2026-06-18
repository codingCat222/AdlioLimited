import Link from "next/link";
import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/lib/data";

export default function ServicesPreview() {
  // Show only the first 3 services on the homepage
  const previewServices = services.slice(0, 3);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-[#C8F031] text-sm tracking-widest uppercase mb-2">
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-white">
            Services that drive transformation.
          </h2>
        </div>
        <Link href="/services" className="text-[#C8F031] hover:underline font-medium">
          View all services →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {previewServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}