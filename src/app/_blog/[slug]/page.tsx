import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getPostBySlug } from "@/lib/blog-utils";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-12 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <article>
            <header className="flex flex-col gap-6 mb-16">
              <div className="flex items-center text-sm text-muted-foreground gap-4">
                <span className="flex items-center gap-1 font-semibold text-primary uppercase tracking-wider text-xs">Blog Post</span>
                <span className="opacity-40">•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 opacity-70" /> {metadata.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4 opacity-70" /> {metadata.readTime}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                {metadata.title}
              </h1>
            </header>

            <div className="prose prose-zinc dark:prose-invert max-w-none text-lg leading-relaxed">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
