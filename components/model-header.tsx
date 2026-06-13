const tags = [
  { label: "Physical AI", href: "#" },
  { label: "autonomous vehicles", href: "#" },
  { label: "image-to-world", href: "#" },
  { label: "robotics", href: "#" },
  { label: "text-to-world", href: "#" },
];

export function ModelHeader() {
  return (
    <div className="border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-start gap-4 sm:gap-6">
          <div className="hidden sm:flex size-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#76b900]/20 to-[#76b900]/5 border border-[#76b900]/20">
            <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[#76b900]">
              <path d="M11.5 1.5L1.5 7.875V16.125L11.5 22.5L21.5 16.125V7.875L11.5 1.5ZM11.5 3.375L19.5 8.5V15.5L11.5 20.625L3.5 15.5V8.5L11.5 3.375Z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                NVIDIA
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[#76b900]/30 bg-[#76b900]/10 px-2.5 py-0.5 text-xs font-medium text-[#76b900]">
                <span className="size-1.5 rounded-full bg-[#76b900]" />
                Free Endpoint
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              cosmos3-nano
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
                  Generates physics-aware videos from text prompts or an image prompt for physical AI development.
                </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <a
                  key={tag.label}
                  href={tag.href}
                  className="inline-flex items-center rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {tag.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
