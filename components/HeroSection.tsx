import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowRight, Download, Mail, MapPin, ChevronDown } from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Linux",
  "Docker",
  "AWS",
  "Networking",
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-24 sm:px-8">
      {/* Gradient BG*/}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.38) 50%, transparent 65%)",
        }}
      />

      {/* Centered max-w-7xl container, content left-aligned inside it */}
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex max-w-2xl flex-col items-start">
          {/* 1 — Availability badge */}
          {/* Status + Location */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2 px-4 py-2 my-3 font-medium tracking-wide rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-400">
                Open to Opportunities
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-sm text-foreground/90">
              <MapPin className="w-3.5 h-3.5" />
              India
            </div>
          </div>

          {/* 2 — Headline */}
          <h1
            className="text-4xl font-bold leading-[1.1] tracking-[-1.2px] text-white sm:text-5xl lg:text-[54px]"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.45)" }}>
            Building Reliable Systems
            <br />
            from Frontend to Infrastructure
          </h1>

          {/* Name / role — subordinate to headline */}
          {/* <p className="mt-4 text-sm tracking-wide text-foreground">
            Vivek Sahu
          </p> */}

          {/* 3 — Description */}
          <p
            className="mt-5 max-w-xl text-[20px] leading-[1.8] text-foreground/90"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
            Full-stack engineer with experience in web development, cloud
            infrastructure, Linux, networking and system design.
          </p>

          {/* 4 — CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-400 px-6 text-[14px] font-bold text-emerald-950 transition-all hover:-translate-y-0.5 hover:bg-emerald-300 active:translate-y-px">
              View projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/[0.14] bg-black/25 px-6 text-[14px] font-medium text-white/70 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/[0.22] hover:text-white/90 active:translate-y-px">
              <Download className="h-3.5 w-3.5" />
              Download resume
            </a>
          </div>

          {/* 5 — Skills */}
          <div className="mt-9 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/[0.11] bg-black/20 px-3 py-1 text-[12px] tracking-wide text-foreground/70 backdrop-blur-sm">
                {s}
              </span>
            ))}
          </div>

          {/* 6 — Social links */}
          <div className="mt-9 flex items-center gap-5 text-foreground/80">
            <a
              href="mailto:mail@viveksahu.com"
              aria-label="Email"
              className="transition-colors hover:text-emerald-400">
              <Mail className="h-[22px] w-[22px]" />
            </a>
            <a
              href="https://github.com/vivek-src"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-emerald-400">
              <FaGithub className="h-[22px] w-[22px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-src/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-emerald-400">
              <FaLinkedin className="h-[22px] w-[22px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
