import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://viveksahu.com",
  ),

  title: {
    default: "Vivek Sahu | Full-Stack Engineer & Systems Architect",
    template: "%s | Vivek Sahu",
  },

  description:
    "Full-Stack Engineer & Systems Architect based in India. Specializing in scalable backend systems, cloud infrastructure, Kubernetes, AWS, and distributed systems. Open to full-time and remote roles.",

  keywords: [
    "Vivek Sahu",
    "Full-Stack Engineer",
    "Systems Architect",
    "Backend Engineer",
    "Cloud Infrastructure",
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "AWS",
    "Docker",
    "Kubernetes",
    "Cloudflare",
    "Linux",
    "Distributed Systems",
    "AI Agents",
    "Infrastructure Engineer",
    "Platform Engineer",
    "Software Engineer India",
    "Remote Engineer",
  ],

  authors: [{ name: "Vivek Sahu", url: "https://viveksahu.com" }],
  creator: "Vivek Sahu",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://viveksahu.com",
    siteName: "Vivek Sahu",
    title: "Vivek Sahu | Full-Stack Engineer & Systems Architect",
    description:
      "Full-Stack Engineer & Systems Architect based in India. Scalable backend systems, cloud infrastructure, and distributed systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vivek Sahu — Full-Stack Engineer & Systems Architect",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vivek Sahu | Full-Stack Engineer & Systems Architect",
    description:
      "Full-Stack Engineer & Systems Architect based in India. Scalable backend systems, cloud infrastructure, and distributed systems.",
    site: "@vivek_src",
    creator: "@vivek_src",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://viveksahu.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className="dark h-full antialiased">
      <head>
        <link rel="preload" href="/bg.webp" as="image" type="image/webp" />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-emerald-500/30">
        <Providers>
          <DynamicBackground />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
