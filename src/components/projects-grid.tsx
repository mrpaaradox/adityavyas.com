import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Discord Clone",
    description: "Full-stack messaging platform with real-time video, audio, and text chat using Socket.io and WebRTC.",
    link: "#",
    github: "https://github.com/mrpaaradox/discord-final",
    tags: ["Next.js", "Socket.io", "Prisma", "Tailwind"],
  },
  {
    title: "AI Music Gen",
    description: "Generative AI application for creating custom audio tracks and music sequences.",
    link: "#",
    github: "https://github.com/mrpaaradox/ai-music-gen",
    tags: ["Python", "Modal", "React", "AI"],
  },
  {
    title: "AI Watermark Remover",
    description: "Computer vision tool to intelligently remove watermarks from images using inpainting algorithms.",
    link: "#",
    github: "https://github.com/mrpaaradox/ai-watermark-remover",
    tags: ["OpenCV", "Python", "FastAPI", "React"],
  },
  {
    title: "AI Agents Monopoly",
    description: "A simulation of the classic board game where LLM-powered agents compete and strategize.",
    link: "#",
    github: "https://github.com/mrpaaradox/ai-monopoly",
    tags: ["AI", "Game Dev", "React", "GenAI"],
  },
  {
    title: "Slack Clone",
    description: "Enterprise messaging architecture with channel management and threaded conversations.",
    link: "#",
    github: "https://github.com/mrpaaradox/slack",
    tags: ["Full-stack", "Real-time", "Redux", "Tailwind"],
  },
];

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground max-w-[600px]">
            A selection of my recent work in AI, real-time communications, and full-stack engineering.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:bg-accent/50"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-3 w-3" /> Source
                </Link>
                <Link
                  href={project.link}
                  className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-3 w-3" /> Live Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
