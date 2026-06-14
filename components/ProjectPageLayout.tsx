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

function isValidSlug(slug?: string): boolean {
  if (!slug) return false;
  const s = slug.trim();
  return (
    s !== "" &&
    s !== "#" &&
    !s.startsWith("#") &&
    s !== "in-progress" &&
    s !== "coming-soon"
  );
}

export default function ProjectMDXLayout({
  children,
  currentProject,
  moreProjects = [],
}: ProjectLayoutProps) {
  const hasLiveLink = isValidLink(currentProject.liveLink);
  const hasGithubLink = isValidLink(currentProject.githubLink);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 lg:py-20 min-h-screen">
      {/* Back nav */}
      <nav className="mb-10">
        <Link
          href="/projects"
          className="mt-20 group inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/40 hover:text-emerald-400 transition-colors duration-200">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Projects
        </Link>
      </nav>

      {/* Hero */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-14 border border-white/[0.06] shadow-[0_8px_48px_rgba(0,0,0,0.5)]">
        <div className="relative w-full aspect-[21/9] min-h-[220px]">
          <Image
            src={currentProject.image}
            alt={currentProject.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-7 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {currentProject.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-semibold tracking-wider text-emerald-400/90 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                {tech}
              </span>
            ))}
            {currentProject.techStack.length > 4 && (
              <span className="text-xs text-white/40">
                +{currentProject.techStack.length - 4} more
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {currentProject.title}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14 xl:gap-20">
        {/* Main content */}
        <main className="min-w-0">
          {/* Description lede */}
          <p className="text-white/70 text-base leading-relaxed mb-10 max-w-[72ch] border-l-2 border-emerald-500/40 pl-5">
            {currentProject.description}
          </p>

          <article
            className="
              prose prose-zinc dark:prose-invert max-w-none

              prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-white
              prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-5
              prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4

              prose-p:text-white/75 prose-p:leading-[1.85] prose-p:text-base prose-p:mb-6

              prose-a:text-emerald-400 prose-a:no-underline
              prose-a:border-b prose-a:border-emerald-500/40
              hover:prose-a:border-emerald-400
              prose-a:transition-colors prose-a:duration-150

              prose-code:text-emerald-300/90 prose-code:bg-white/[0.06]
              prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
              prose-code:font-mono prose-code:text-[13.5px]
              prose-code:before:content-none prose-code:after:content-none

              prose-pre:bg-white/[0.03] prose-pre:border prose-pre:border-white/10
              prose-pre:rounded-xl
              [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-[13.5px]

              prose-blockquote:not-italic
              prose-blockquote:border-l-2 prose-blockquote:border-emerald-500/40
              prose-blockquote:bg-white/[0.02] prose-blockquote:px-6 prose-blockquote:py-4
              prose-blockquote:rounded-r-xl prose-blockquote:text-white/50 prose-blockquote:text-base

              prose-img:rounded-xl prose-img:border prose-img:border-white/10
              prose-hr:border-white/10 prose-hr:my-14

              prose-strong:text-white/95 prose-strong:font-semibold
              prose-li:text-white/75 prose-li:my-2 prose-li:text-base

              prose-table:text-sm prose-table:my-8
              prose-table:border-separate prose-table:border-spacing-0
              prose-table:border prose-table:border-white/10 prose-table:rounded-xl prose-table:overflow-hidden
              prose-th:bg-white/[0.04] prose-th:px-5 prose-th:py-3.5
              prose-th:text-left prose-th:text-xs prose-th:font-semibold
              prose-th:uppercase prose-th:tracking-wider prose-th:text-white/40
              prose-th:border-b prose-th:border-white/10
              prose-td:px-5 prose-td:py-3.5 prose-td:text-white/65
              prose-td:border-b prose-td:border-white/[0.06]
              [&_tr:last-child_td]:border-b-0

              [&_table]:block [&_table]:overflow-x-auto sm:[&_table]:table
            ">
            {children}
          </article>
        </main>

        {/* Sidebar */}
        <aside className="block">
          <div className="lg:sticky lg:top-10 space-y-10">
            {/* CTA buttons */}
            {(hasLiveLink || hasGithubLink) && (
              <div className="flex flex-col gap-3">
                {hasLiveLink && (
                  <a
                    href={currentProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2.5
                      w-full h-12 px-5 rounded-xl
                      bg-emerald-500 hover:bg-emerald-400
                      text-black font-semibold text-sm tracking-wide
                      transition-colors duration-150
                      shadow-[0_0_32px_rgba(52,211,153,0.18)]
                    ">
                    <LinkIcon className="w-4 h-4" />
                    View live
                  </a>
                )}
                {hasGithubLink && (
                  <a
                    href={currentProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2.5
                      w-full h-12 px-5 rounded-xl
                      bg-white/[0.05] hover:bg-white/[0.09]
                      border border-white/10 hover:border-white/20
                      text-white/80 hover:text-white font-semibold text-sm tracking-wide
                      transition-all duration-150
                    ">
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </div>
            )}

            {/* Demo credentials */}
            {currentProject.credentials && (
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-white/35 mb-3">
                  Demo access
                </p>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden font-mono">
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
                    <span className="text-xs text-white/35 uppercase tracking-widest">
                      User
                    </span>
                    <span className="text-sm text-emerald-400 font-semibold">
                      {currentProject.credentials.user}
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3.5">
                    <span className="text-xs text-white/35 uppercase tracking-widest">
                      Pass
                    </span>
                    <span className="text-sm text-emerald-400 font-semibold">
                      {currentProject.credentials.pass}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Tech stack */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/35 mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {currentProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 bg-white/[0.05] text-white/65 border border-white/10 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* More projects */}
            {moreProjects.length > 0 && (
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-white/35 mb-3">
                  More projects
                </p>
                <div className="flex flex-col gap-0.5">
                  {moreProjects.slice(0, 3).map((project) =>
                    isValidSlug(project.slug) && !project.inProgress ? (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group flex items-center gap-3 px-2.5 py-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.05] transition-all duration-200">
                        <div className="relative w-14 h-10 shrink-0 rounded-lg overflow-hidden bg-white/5 border border-white/10">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="56px"
                            className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-medium leading-snug text-white/55 group-hover:text-white/90 transition-colors duration-150 line-clamp-2">
                            {project.title}
                          </h4>
                          <time className="text-xs text-white/30 mt-0.5 block">
                            {project.date}
                          </time>
                        </div>
                      </Link>
                    ) : (
                      <div
                        key={project.slug}
                        className="flex items-center gap-3 px-2.5 py-2.5 -mx-2.5 rounded-xl opacity-30 cursor-default select-none">
                        <div className="relative w-14 h-10 shrink-0 rounded-lg overflow-hidden bg-white/5 border border-white/10">
                          {isValidLink(project.image) ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="56px"
                              className="object-cover grayscale"
                            />
                          ) : (
                            <div className="w-full h-full bg-white/5" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-medium leading-snug text-white/50 line-clamp-2">
                            {project.title}
                          </h4>
                          <span className="text-xs text-white/30 mt-0.5 block uppercase tracking-wide">
                            Coming soon
                          </span>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
