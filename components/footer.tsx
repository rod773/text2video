import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  Product: ["Features", "Pricing", "API", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy", "Terms", "License", "Cookies"],
  Social: ["Twitter", "GitHub", "Discord", "YouTube"],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                T2V
              </div>
              <span className="text-lg font-semibold">Text2Video</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Turn your ideas into stunning videos with AI. No experience needed.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="h-9 text-sm max-w-48" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-3">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Text2Video. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
