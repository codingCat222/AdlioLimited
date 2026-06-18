"use client";

export default function Marquee() {
  const techStack = [
    ".NET", "C#", "PHP Laravel", "SQL Server", "JavaScript", 
    "React", "API Integration", "Cloud Tech", "Mobile Dev", "Cybersecurity"
  ];

  return (
    <div className="py-12 bg-white/5 overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused]">
        {[...techStack, ...techStack].map((tech, index) => (
          <span
            key={index}
            className="mx-6 text-gray-400 text-sm font-medium tracking-wider uppercase"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}