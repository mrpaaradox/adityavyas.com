import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 will-change-transform">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Aditya Vyas
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#projects" className="transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#blog" className="transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="#about" className="transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <Link href="https://github.com/mrpaaradox" target="_blank">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://x.com/Adiiizi" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/aditya-vyas-63650b3a4/" target="_blank">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
          
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
