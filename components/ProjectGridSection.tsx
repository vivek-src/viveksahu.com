"use client";

import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ArrowRight, ExternalLink, Clock, Lock, Link2Off } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  credentials?: {
    user: string;
    pass: string;
  };
}

interface ProjectGridProps {
  projects: Project[];
}

// button/badge based on the link provided
const renderProjectStatus = (liveLink: string) => {
  if (liveLink === "in-progress") {
    return (
      <span className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.02] px-4 text-[12px] font-semibold text-white/50 cursor-not-allowed">
        <Clock className="h-3.5 w-3.5" />
        In progress
      </span>
    );
  }
  if (!liveLink || liveLink === "#" || liveLink === "na") {
    return (
      <span className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.02] px-4 text-[12px] font-semibold text-white/40 cursor-not-allowed">
        <Link2Off className="h-3.5 w-3.5" />
        No demo
      </span>
    );
  }
  // Default to Live state
  return (
    <a
      href={liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-emerald-400 px-4 text-[12px] font-bold text-emerald-950 transition-all hover:bg-emerald-300 active:scale-[0.98]">
      <ExternalLink className="h-3.5 w-3.5" />
      Live demo
    </a>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}>
      <div className="group flex flex-col lg:flex-row overflow-hidden rounded-[14px] border border-white/[0.08] border-t-white/[0.18] bg-white/[0.03] transition-colors duration-200 hover:bg-white/[0.05] hover:border-t-emerald-400/40">
        {/* Image column */}
        <NextLink
          href={`/projects/${project.slug}`}
          className="w-full lg:w-[46%] shrink-0 p-5">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white/[0.03]">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </NextLink>

        {/* Content column */}
        <div className="flex flex-1 flex-col justify-between gap-5 px-6 pb-7 pt-5 lg:pl-2 lg:pr-7 lg:py-7">
          {/* Top: meta + title + desc + credentials + stack */}
          <div className="flex flex-col gap-4">
            {/* Title */}
            <h3 className="text-[22px] font-bold text-white transition-colors group-hover:text-emerald-400">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-[14px] leading-[1.7] text-white/70 line-clamp-3 lg:max-w-[95%]">
              {project.description}
            </p>

            {/* Credentials — only shown when present */}
            {project.credentials && (
              <div className="flex items-center gap-3 rounded-md border border-emerald-500/10 bg-emerald-500/[0.04] px-3 py-2">
                <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-emerald-400/70 flex-shrink-0">
                  <Lock className="h-3 w-3" />
                  Demo
                </span>
                <div className="h-3 w-px bg-white/[0.08]" />
                <span className="font-mono text-[11px] text-white/35">
                  U:{" "}
                  <span className="text-white/60">
                    {project.credentials.user}
                  </span>
                </span>
                <div className="h-3 w-px bg-white/[0.08]" />
                <span className="font-mono text-[11px] text-white/35">
                  P:{" "}
                  <span className="text-white/60">
                    {project.credentials.pass}
                  </span>
                </span>
              </div>
            )}

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-[5px] border border-white/[0.15] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70 transition-colors hover:border-emerald-500/25 hover:bg-emerald-500/[0.06] hover:text-emerald-400 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions — clear hierarchy: primary > ghost > text */}
          <div className="flex items-center gap-2">
            {/* Render dynamically based on link status */}
            {renderProjectStatus(project.liveLink)}

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/[0.2] bg-transparent px-4 text-[12px] font-medium text-white/70 transition-all hover:bg-white/[0.05] hover:text-white/85 active:scale-[0.98]">
              <FaGithub className="h-3.5 w-3.5" />
              Source
            </a>

            <NextLink
              href={`/projects/${project.slug}`}
              className="ml-auto inline-flex h-9 items-center gap-1 rounded-lg px-2 text-[13px] font-medium text-emerald-400/90 transition-colors hover:text-emerald-400">
              Details
              <ArrowRight className="h-3.5 w-3.5" />
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <SectionHeader
        title="Featured "
        accent="Projects"
        description="Projects focused on building and deploying real-world systems across frontend, backend, and infrastructure."
      />
      <div className="flex flex-col gap-6 mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
