import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllPostsMetadata } from "@/lib/blog-utils";

export default function BlogPage() {
  const posts = getAllPostsMetadata();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <header className="max-w-2xl mb-16 px-4 sm:px-0">
          <h1 className="text-4xl font-bold tracking-tight mb-4 lg:text-5xl">Blog</h1>
          <p className="text-muted-foreground text-lg lg:text-xl">
            Thoughts on engineering, AI, and building software that scales.
          </p>
        </header>

        <div className="grid gap-16 max-w-4xl px-4 sm:px-0">
          {posts.map((post) => (
            <article key={post.slug} className="group relative flex flex-col items-start">
              <h2 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors lg:text-3xl">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative z-10">{post.title}</span>
                </Link>
              </h2>
              <div className="relative z-10 order-first mb-3 flex items-center text-sm text-muted-foreground gap-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-primary/70" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-primary/70" /> {post.readTime}
                </span>
              </div>
              <p className="relative z-10 mt-2 text-muted-foreground leading-relaxed text-lg">
                {post.description}
              </p>
              <div className="relative z-10 mt-4 flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                Read article
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
