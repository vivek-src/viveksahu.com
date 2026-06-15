"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Layout,
  Server,
  Cloud,
  Database,
  Binary,
  Cpu,
  Bot,
  Brain,
  Unplug,
  MonitorCog,
  Cog,
  Network,
  UserKey,
  Bug,
  FileCog,
} from "lucide-react";
import { FaAws, FaJava, FaCloudflare } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiRedis,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiLinux,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiPandas,
  SiPlotly,
  SiShadcnui,
  SiOpensourceinitiative,
  SiClaude,
  SiWebrtc,
  SiJsonwebtokens,
  SiZod,
  SiApachekafka,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

import SectionHeader from "@/components/SectionHeader";

const TECH_STACK = [
  {
    category: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind", "shadcn/ui", "Vite"],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Express",
      "WebSockets",
      "REST",
      "gRPC",
      "JWT",
      "Auth.js",
      "WebRTC",
      "Testing",
      "Zod",
      "Kafka",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Cloudflare",
      "Nginx",
      "Linux",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Redis"],
  },
  {
    category: "Core Concepts",
    skills: ["DSA", "OOPs", "Networks", "OS", "System Design"],
  },
  {
    category: "AI & ML",
    skills: [
      "AI Agents",
      "Claude Code",
      "Workflow Automation",
      "Local AI",
      "Pandas",
      "Matplot Lib",
      "NumPy",
    ],
  },
];

const getSkillIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    TypeScript: <SiTypescript color="#3178C6" />,
    JavaScript: <SiJavascript color="#F7DF1E" />,
    Python: <SiPython color="#3776AB" />,
    Java: <FaJava color="#ED8B00" />,
    "C++": <SiCplusplus color="#00599C" />,
    SQL: <Database size={16} color="#336791" />,
    "HTML/CSS": <Layout size={16} color="#E34F26" />,

    React: <SiReact color="#61DAFB" />,
    "Next.js": <SiNextdotjs color="#ffffff" />,
    Tailwind: <SiTailwindcss color="#06B6D4" />,
    "shadcn/ui": <SiShadcnui size={16} color="#ffffff" />,
    Vite: <SiVite color="#646CFF" />,

    "Node.js": <SiNodedotjs color="#5FA04E" />,
    Express: <SiExpress color="#ffffff" />,
    WebSockets: <Unplug size={16} className="text-emerald-400" />,
    REST: <Server size={16} className="text-sky-500" />,
    gRPC: <Cog size={16} className="text-teal-400" />,
    JWT: <SiJsonwebtokens color="#db2777" />,
    "Auth.js": <UserKey size={16} className="text-violet-500" />,
    WebRTC: <SiWebrtc color="#6B9BD2" />,
    Testing: <Bug size={16} className="text-red-400" />,
    Zod: <SiZod color="#3068B7" />,
    Kafka: <SiApachekafka color="#ffffff" />,

    AWS: <FaAws color="#FF9900" />,
    Docker: <SiDocker color="#2496ED" />,
    Kubernetes: <SiKubernetes color="#326CE5" />,
    Cloudflare: <FaCloudflare color="#F38020" />,
    Nginx: <SiNginx color="#00B140" />,
    Linux: <SiLinux color="#FCC624" />,
    Prometheus: <SiPrometheus color="#E6522C" />,
    Grafana: <SiGrafana color="#F46800" />,

    PostgreSQL: <SiPostgresql color="#336791" />,
    MongoDB: <SiMongodb color="#47A248" />,
    MySQL: <SiMysql color="#4479A1" />,
    Prisma: <SiPrisma color="#ffffff" />,
    Redis: <SiRedis color="#FF4438" />,

    DSA: <Binary size={16} className="text-emerald-400" />,
    OOPs: <Code2 size={16} className="text-blue-400" />,
    Networks: <Network size={16} className="text-sky-400" />,
    OS: <Cpu size={16} className="text-purple-400" />,
    "System Design": <MonitorCog size={16} className="text-indigo-400" />,

    Cloud: <Cloud size={16} className="text-sky-400" />,
    "Networking & Infrastructure": (
      <Network size={16} className="text-lime-500" />
    ),
    "AI Agents": <Bot size={16} className="text-blue-400" />,
    "Open Source": <SiOpensourceinitiative size={16} color="#3DA639" />,

    "Claude Code": <SiClaude color="#D97757" />,
    "Workflow Automation": <FileCog size={16} />,
    "Local AI": <Brain size={16} className="text-purple-400" />,
    Pandas: <SiPandas color="#E70488" />,
    "Matplot Lib": <SiPlotly color="#3F4F75" />,
  };

  return icons[name] || <Code2 size={16} className="text-zinc-500" />;
};

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
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
      <SectionHeader title="Tech Stack &" accent="Tools" />

      {/* Contiguous Grid Layout */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-white/[0.07] bg-white/[0.01] overflow-hidden">
        {TECH_STACK.map((item, index) => (
          <div
            key={item.category}
            className={`
              group/category p-6 md:p-8 
              border-white/[0.07] transition-colors duration-300 hover:bg-white/[0.02]
              border-b last:border-b-0
              md:border-r md:even:border-r-0
              ${
                index < Math.floor((TECH_STACK.length - 1) / 2) * 2
                  ? "md:border-b"
                  : "md:border-b-0"
              }
            `}>
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <h3 className="font-mono text-[12px] font-semibold tracking-[0.15em] uppercase text-white/75 transition-colors duration-300 group-hover/category:text-emerald-400">
                {item.category}
              </h3>
            </div>

            {/* Skills Pills Container */}
            <div className="flex flex-wrap gap-2.5">
              {item.skills.map((skill) => (
                <div
                  key={skill}
                  className="
                    group flex items-center gap-2 rounded-lg
                    border border-white/[0.08] bg-white/[0.03] 
                    px-3.5 py-2 
                    text-[13px] font-medium text-white/65 
                    backdrop-blur-md transition-all duration-300 ease-out cursor-default
                    
                    hover:border-emerald-500/30 hover:bg-emerald-500/[0.04] hover:text-white 
                    hover:-translate-y-0.5 hover:shadow-[0_8px_16px_-6px_rgba(0,0,0,0.5)]
                  ">
                  {/* Full color icon by default, with a slight scale effect on hover */}
                  <span className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">
                    {getSkillIcon(skill)}
                  </span>
                  <span className="whitespace-nowrap tracking-wide">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
