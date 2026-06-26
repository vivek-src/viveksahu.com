"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "w-full py-10 mt-20 border-t transition-all duration-300",
        "backdrop-blur-lg bg-background/30 border-white/10 shadow-lg shadow-black/5",
      )}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-4">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary transition-all group-hover:bg-primary/20">
                <Image
                  src="/initial.png"
                  alt="Initial"
                  width={24}
                  height={24}
                />
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground">
                Vivek<span className="text-primary">.</span>
              </span>
            </Link>
          </div>

          {/* Social Links  */}
          <div className="flex items-center justify-center gap-8">
            <Link
              href="https://github.com/vivek-src"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors">
              <FaGithub className="size-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vivek-src/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors">
              <FaLinkedin className="size-5" />
            </Link>
            <Link
              href="https://x.com/vivek_src"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors">
              <FaSquareXTwitter className="size-5" />
            </Link>
          </div>

          {/* Copyright Section*/}
          <div className="flex flex-col items-center md:items-end gap-1.5 text-center md:text-right">
            <p className="text-sm font-medium text-foreground/80">
              © {currentYear} Vivek Sahu
            </p>
            <p className="text-[10.5px] text-muted-foreground font-mono uppercase tracking-tighter">
              If you read footers, we should talk. Seriously, email me.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
