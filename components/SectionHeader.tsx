"use client";
import { cn } from "@/lib/utils"; // Standard shadcn helper, or use string template

interface SectionHeaderProps {
  title: string;
  accent: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  accent,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-7xl mx-auto mb-12", className)}>
      <div className="flex flex-col gap-3">
        {/* Title and Dot */}
        <div className="flex items-baseline gap-1.5">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {title} <span className="text-emerald-400">{accent}</span>
          </h2>
        </div>

        {/* Optional Description */}
        {description && (
          <p className="text-slate-400 text-lg max-w-6xl leading-relaxed">
            {description}
          </p>
        )}

        {/* The line anchored below */}
        <div className="h-[1px] w-full bg-gradient-to-r from-emerald-500/40 via-emerald-500/10 to-transparent mt-1" />
      </div>
    </div>
  );
}
