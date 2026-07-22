"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Link as LinkIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  inProgress?: boolean;
  credentials?: {
    user: string;
    pass: string;
  };
}

interface ProjectLayoutProps {
  children: React.ReactNode;
  currentProject: Project;
  moreProjects?: Project[];
}

function isValidLink(link?: string): boolean {
  if (!link) return false;
  const l = link.trim();
  return (
    l !== "" &&
    l !== "#" &&
    !l.startsWith("#") &&
    l !== "in-progress" &&
    l !== "coming-soon"
  );
}

export default function ProjectMDXLayout({
  children,
  currentProject,
  moreProjects = [],
}: ProjectLayoutProps) {
  const hasLiveLink = isValidLink(currentProject.liveLink);
  const hasGithubLink = isValidLink(currentProject.githubLink);

  // Links / tech stack / demo credentials — shown right after the hero on
  // mobile, and inside the sticky sidebar panel on desktop.
  const infoPanel = (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-6">
      {(hasLiveLink || hasGithubLink) && (
        <div className="flex flex-col gap-2">
          {hasLiveLink && (
            <a
              href={currentProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-semibold transition-colors duration-150">
              <LinkIcon className="w-3.5 h-3.5" />
              View live
            </a>
          )}
          {hasGithubLink && (
            <a
              href={currentProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 text-white/80 hover:text-white text-sm font-semibold transition-colors duration-150">
              <FaGithub className="w-3.5 h-3.5" />
              Source
            </a>
          )}
        </div>
      )}

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-white/35 mb-3">
          Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {currentProject.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-white/50 bg-white/[0.05] px-2.5 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {currentProject.credentials && (
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/35 mb-3">
            Demo access
          </p>
          <div className="text-sm font-mono text-white/70 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-white/35 text-xs">user</span>
              <span>{currentProject.credentials.user}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/35 text-xs">pass</span>
              <span>{currentProject.credentials.pass}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const morePanel = moreProjects.length > 0 && (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-white/35 mb-4">
        More projects
      </p>
      <div className="flex flex-col gap-4">
        {moreProjects.slice(0, 3).map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex items-center gap-3">
            <div className="relative w-16 aspect-video shrink-0 rounded-lg overflow-hidden bg-white/[0.05]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="64px"
                className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-200"
              />
            </div>
            <h4 className="text-sm font-medium text-white/55 group-hover:text-white/90 transition-colors duration-150 line-clamp-2">
              {project.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      {/* Back nav */}
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/40 hover:text-emerald-400 transition-colors duration-200 mb-12">
        <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
        Projects
      </Link>

      <div className="grid lg:grid-cols-[1fr_320px] gap-14 xl:gap-20">
        {/* Main column */}
        <main className="min-w-0 max-w-3xl">
          {/* Title + meta */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
              {currentProject.title}
            </h1>
            <time className="text-sm text-white/35">{currentProject.date}</time>
            <p className="text-white/70 text-base leading-relaxed mt-5">
              {currentProject.description}
            </p>
          </header>

          {/* Hero image */}
          <div className="relative w-full max-h-[380px] aspect-video rounded-xl overflow-hidden border border-white/10 mb-8">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Mobile-only: links / stack / credentials right below the hero */}
          <div className="lg:hidden mb-14 space-y-4">
            {infoPanel}
            {morePanel}
          </div>

          {/* Article body */}
          <article
            className="
              prose prose-invert max-w-none
              prose-headings:font-semibold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-5
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
              prose-p:text-white/75 prose-p:leading-[1.85]
              prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
              prose-code:text-emerald-300/90 prose-code:bg-white/[0.06] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-white/[0.03] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
              prose-blockquote:border-l-2 prose-blockquote:border-emerald-500/40 prose-blockquote:not-italic prose-blockquote:text-white/50
              prose-img:rounded-xl prose-img:border prose-img:border-white/10
              prose-hr:border-white/10
              prose-strong:text-white/95
              prose-li:text-white/75
            ">
            {children}
          </article>
        </main>

        {/* Sidebar — desktop only */}
        <aside className="hidden lg:block lg:sticky lg:top-16 lg:self-start space-y-6">
          {infoPanel}
          {morePanel}
        </aside>
      </div>
    </div>
  );
}
