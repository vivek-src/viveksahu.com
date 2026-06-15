"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { BlogPost } from "@/components/BlogPageLayout";

interface BlogGridProps {
  posts?: BlogPost[];
}

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
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
      { threshold: 0.1 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={cn(
        "transition-all duration-1000 ease-out h-full",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
      )}>
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <Card className="relative h-full flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-black/40 via-black/20 to-transparent backdrop-blur-2xl hover:border-emerald-400/20 hover:bg-white/6 transition-all duration-500 p-0 cursor-pointer">
          {/* Blog image */}
          <div className="relative aspect-[16/9.6] w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              priority={false}
              quality={75}
            />
          </div>

          <CardContent className="flex-1 flex flex-col p-7 pt-2">
            {/* Tags */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
              {post.tags?.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-emerald-500 text-[10px] font-bold uppercase tracking-[0.5px]">
                  #{tag}
                </span>
              ))}
            </div>
            {/* Bottom meta */}
            <div className="mt-auto py-1.5 pb-3 flex items-center justify-between">
              <span className="text-xs font-mono text-white/60 tracking-wider">
                {post.date}
              </span>
            </div>

            {/* title */}
            <h3 className="text-[21px] leading-[1.15] font-semibold text-white group-hover:text-emerald-500 transition-colors line-clamp-2 mb-3">
              {post.title}
            </h3>

            {/* excerpt */}
            <p className="text-white/70 text-[14.5px] leading-relaxed line-clamp-3 flex-1">
              {post.excerpt}
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default function BlogGridSection({ posts = [] }: BlogGridProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Blog"
          accent=""
          description="Notes on building systems, exploring technologies, and documenting engineering decisions."
        />

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
            <p className="text-white/30 font-mono text-sm">No posts yet.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <Button
            nativeButton={false}
            variant="outline"
            className="h-12 rounded-xl px-9 text-sm uppercase tracking-widest group  bg-gradient-to-br from-black/30 via-black/15 to-transparent
              backdrop-blur-2xl
              border border-white/10 
              border-t-white/25 
              shadow-[0_20px_50px_rgba(0,0,0,0.3)]
               hover:bg-white/6"
            render={(props) => <Link {...props} href="/blog" />}>
            Explore All Articles
            <div className="ml-3 w-6 h-6 flex items-center justify-center ">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
