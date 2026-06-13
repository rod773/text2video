"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "json" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border border-border/60 bg-muted/30 overflow-hidden">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/40 bg-muted/20">
        <span className="text-[10px] text-muted-foreground uppercase">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? (
            <>
              <Check className="size-3" />
              Copied
            </>
          ) : (
            <>
              <Copy className="size-3" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-3 overflow-x-auto">
        <code className="text-xs leading-relaxed text-foreground/90 font-mono">{code}</code>
      </pre>
    </div>
  );
}
