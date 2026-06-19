"use client";

export default function Marquee() {
  const techStack = [
    "FinTech", ".NET", "C#", "PHP Laravel", "SQL Server", "JavaScript",
    "React", "Next.js", "API Integration", "Cloud Tech", "Mobile Dev",
    "Cybersecurity", "Enterprise Software", "Digital Transformation",
  ];

  return (
    <div className="py-4 bg-white overflow-hidden border-y border-[#E2E8F0]">
      <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused]">
        {[...techStack, ...techStack].map((tech, index) => (
          <span key={index} className="mx-6 text-[#94A3B8] text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-6">
            {tech}
            <span className="text-[#3B82F6] text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}