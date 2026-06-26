"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  Check,
  Copy,
  Download,
  MapPin,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const EMAIL = "mail@viveksahu.com";
const LOCATION = "Raipur, Chhattisgarh, India";

const socials = [
  {
    label: "GitHub",
    handle: "@vivek-src",
    href: "https://github.com/vivek-src",
    icon: <FaGithub className="size-5" />,
    color: "hover:text-white",
  },
  {
    label: "LinkedIn",
    handle: "in/vivek-src",
    href: "https://www.linkedin.com/in/vivek-src/",
    icon: <FaLinkedin className="size-5" />,
    color: "hover:text-blue-400",
  },
  {
    label: "Twitter / X",
    handle: "@vivek-src",
    href: "https://x.com/vivek_src",
    icon: <FaSquareXTwitter className="size-5" />,
    color: "hover:text-sky-400",
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const el = document.createElement("textarea");
        el.value = EMAIL;
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.focus();
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silently fail
    }
  };

  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Vivek_Sahu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-7xl mx-auto px-6 py-20 z-10">
      <SectionHeader
        title="Let's"
        accent="Connect"
        description="Open to full-time roles. If you're building something interesting, I'm probably interested too."
      />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Direct Contact & Status */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="group relative flex flex-1 flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
            {/* Background Decorative Element */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/10" />

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <Mail className="size-4 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Send me an email
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-white transition-colors hover:text-emerald-400 break-all">
                  {EMAIL}
                </a>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white">
                    {copied ? (
                      <Check className="size-4 text-emerald-400" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                    {copied ? "Copied!" : "Copy Address"}
                  </button>

                  <button
                    onClick={handleDownloadResume}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white">
                    <Download className="size-4" />
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.01] p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5">
                <MapPin className="size-5 text-white/40" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                  Location
                </span>
                <span className="text-sm font-medium text-white/80">
                  {LOCATION}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.01] p-5">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <span className="absolute h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="absolute h-2 w-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                  Availability
                </span>
                <span className="text-sm font-medium text-white/80">
                  Open to full-time roles
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Social Links */}
        <div className="lg:col-span-5 h-full">
          <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-black/20 p-4 md:p-8">
            <div className="flex flex-col gap-1 mb-4">
              <h3 className="text-lg font-semibold text-white">
                Social Profiles
              </h3>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02]">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/40 transition-all duration-300 group-hover:bg-emerald-500/10 group-hover:text-emerald-400`}>
                      {social.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-semibold text-white/90 group-hover:text-white transition-colors">
                        {social.label}
                      </span>
                      <span className="text-xs font-mono text-white/30 group-hover:text-white/50 transition-colors">
                        {social.handle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
