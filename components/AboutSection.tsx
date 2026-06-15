"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-24 px-6 max-w-7xl mx-auto transition-all duration-1000 motion-reduce:transition-none ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}>
      <SectionHeader title="About" accent="Me" className="mx-0" />

      <div className="mt-2 w-full">
        <div className="space-y-6 text-white/70 text-[17px] leading-relaxed">
          <p>
            I&apos;m Vivek, a Computer Science student and software engineer who
            enjoys building reliable web applications with an
            infrastructure-first mindset. My experience with Linux, networking,
            and FTTH systems gives me a practical understanding of how software
            operates in real-world environments, from development to deployment.
          </p>
          <p>
            I enjoy building end-to-end solutions - from frontend interfaces and
            backend services to deployment and operations - while focusing on
            performance, scalability, and maintainability.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/about"
            className="group inline-flex h-11 items-center gap-2.5 rounded-lg border border-white/[0.18] bg-transparent px-5 text-[14px] font-medium text-white/70 transition-all duration-200 hover:border-white/[0.2] hover:bg-white/[0.03] hover:text-white active:scale-[0.98]">
            Read the full story
            <ArrowRight
              size={16}
              className="text-white/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
