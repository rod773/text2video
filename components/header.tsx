"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
            T2V
          </div>
          <span className="text-lg font-semibold">Text2Video</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex md:hidden items-center justify-center size-9 rounded-lg border border-border hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1">
            <span className={cn("block h-0.5 w-5 bg-foreground transition-all", mobileOpen && "translate-y-[6px] rotate-45")} />
            <span className={cn("block h-0.5 w-5 bg-foreground transition-all", mobileOpen && "opacity-0")} />
            <span className={cn("block h-0.5 w-5 bg-foreground transition-all", mobileOpen && "-translate-y-[6px] -rotate-45")} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/40 md:hidden"
          >
            <nav className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <Button variant="ghost" size="sm" className="w-full">
                  Sign In
                </Button>
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
