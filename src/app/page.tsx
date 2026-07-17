import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground select-none flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 text-5xl">
          🚧
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Under Construction
        </h1>

        <p className="mx-auto max-w-[420px] text-base text-muted-foreground leading-relaxed mb-10">
          I&apos;m giving this space a fresh coat of code. Something new is brewing — check back soon.
        </p>

        <Link
          href="https://x.com/Adiiizi"
          target="_blank"
          className="inline-flex h-10 items-center justify-center rounded-full border border-input bg-background px-4 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current mr-2">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          @Adiiizi
        </Link>
      </div>
    </div>
  );
}
