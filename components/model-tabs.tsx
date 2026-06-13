"use client";

import { cn } from "@/lib/utils";

const tabs = [
  { id: "experience", label: "Experience", active: true },
  { id: "model-card", label: "Model Card" },
  { id: "deploy", label: "Deploy" },
  { id: "system-card", label: "System Card" },
];

export function ModelTabs() {
  return (
    <div className="border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-0 -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={cn(
                "px-4 py-3 text-sm font-medium border-b-2 transition-colors",
                tab.active
                  ? "border-[#76b900] text-[#76b900]"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
