import { Navbar } from "@/components/navbar";
import { ProjectsGrid } from "@/components/projects-grid";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-24 md:py-32 overflow-hidden border-b border-border/50">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] opacity-15 animate-pulse will-change-opacity" />
          </div>
          
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-1000 will-change-transform">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 will-change-[transform,opacity]" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tighter sm:text-7xl mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 flex flex-col items-center will-change-transform">
              <span className="flex flex-wrap justify-center items-center gap-x-3">
                <span className="text-foreground">Building the</span>
                <span className="bg-foreground text-background px-4 py-1">Future of</span>
              </span>
              <span className="flex flex-wrap justify-center items-center gap-x-3 mt-2">
                <span className="bg-foreground text-background px-4 py-1">AI & Real-time</span>
                <span className="text-foreground">Systems</span>
              </span>
            </h1>
            
            <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300 will-change-transform">
              Software Engineer specializing in AI-integrated applications, 
              distributed systems, and high-performance communication platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 will-change-transform">
              <Link
                href="#projects"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Projects
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Blogs
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-[1fr_300px]">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    I&apos;m a Software Engineer with a passion for building systems that are both 
                    technically sophisticated and elegantly simple. My journey in tech is driven 
                    by curiosity and a relentless pursuit of engineering excellence.
                  </p>
                  <p>
                    Currently, I focus on the intersection of **AI integration** and **real-time communications**. 
                    I love tackling the challenges of distributed state management, low-latency 
                    data streaming, and creating intuitive interfaces for complex AI-driven workflows.
                  </p>
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-bold mb-6">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Next.js", "TypeScript", "React", "Node.js", 
                      "Python", "FastAPI", "PostgreSQL", "Prisma", 
                      "Tailwind", "Docker", "Socket.io", "Redis"
                    ].map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="rounded-2xl border border-border bg-card p-6 p-8 relative overflow-hidden group">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    Now
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>🚀 Building a private MDX blog engine</li>
                    <li>🤖 Fine-tuning local LLMs for coding tasks</li>
                    <li>📚 Studying distributed system patterns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectsGrid />

        {/* Blog Teaser Section */}
        <section id="blog" className="py-24 border-t border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Latest from the Blog</h2>
              <p className="text-muted-foreground max-w-[600px]">
                I write about engineering challenges, AI research, and full-stack development.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 p-8">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">Coming Soon</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">Writing informative articles very soon!</h3>
                <p className="text-muted-foreground mb-6">
                  I&apos;ll be sharing my experiences building scalable AI systems and real-time platforms. Stay tuned!
                </p>
                <div className="text-sm font-medium flex items-center gap-1 cursor-not-allowed text-muted-foreground">
                  Writing soon... <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto mb-12">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Link
                href="mailto:avyas8927@gmail.com"
                className="group flex flex-col items-center p-8 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">avyas8927@gmail.com</p>
              </Link>
              
              <Link
                href="https://x.com/Adiiizi"
                target="_blank"
                className="group flex flex-col items-center p-8 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current text-primary">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-1">X (Twitter)</h3>
                <p className="text-sm text-muted-foreground">@Adiiizi</p>
              </Link>

              <Link
                href="https://www.linkedin.com/in/aditya-vyas-63650b3a4/"
                target="_blank"
                className="group flex flex-col items-center p-8 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Aditya Vyas</p>
              </Link>

              <Link
                href="https://github.com/mrpaaradox"
                target="_blank"
                className="group flex flex-col items-center p-8 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">GitHub</h3>
                <p className="text-sm text-muted-foreground">mrpaaradox</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aditya Vyas. Built with ❤️ for coding</p>
        </div>
      </footer>
    </div>
  );
}
