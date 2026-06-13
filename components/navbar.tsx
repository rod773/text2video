import Link from "next/link";

const navItems = [
  { label: "Explore", href: "#" },
  { label: "Models", href: "#", active: true },
  { label: "Skills", href: "#" },
  { label: "Blueprints", href: "#" },
  { label: "GPUs", href: "#" },
  { label: "Docs", href: "https://docs.api.nvidia.com/" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#76b900]">
              <path d="M11.5 1.5L1.5 7.875V16.125L11.5 22.5L21.5 16.125V7.875L11.5 1.5ZM11.5 3.375L19.5 8.5V15.5L11.5 20.625L3.5 15.5V8.5L11.5 3.375Z" />
            </svg>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                  item.active
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <Link
            href="#"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
