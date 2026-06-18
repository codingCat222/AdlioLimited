interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="w-8 h-[1px] bg-[#C8F031]" />
      <span className="text-muted text-[10px] tracking-[0.2em] uppercase">{text}</span>
    </div>
  );
}