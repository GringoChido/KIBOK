"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  gradient: string;
}

export const BlogGrid = ({ posts }: { posts: Post[] }) => (
  <div className="grid gap-8 sm:grid-cols-2">
    {posts.map((post, i) => (
      <ScrollReveal key={post.slug} delay={i * 0.1}>
        <Link href={`/blog/${post.slug}`} className="group block">
          <div
            className={`aspect-[16/10] rounded-sm bg-gradient-to-br ${post.gradient} transition-transform duration-500 group-hover:scale-[1.02]`}
          />
          <time className="mt-4 block font-body text-xs uppercase tracking-wider text-kibok-warm-gray">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <h2 className="mt-2 font-heading text-xl font-bold text-kibok-ink transition-colors group-hover:text-kibok-brown">
            {post.title}
          </h2>
          <p className="mt-2 font-body text-sm text-kibok-warm-gray">
            {post.excerpt}
          </p>
        </Link>
      </ScrollReveal>
    ))}
  </div>
);
