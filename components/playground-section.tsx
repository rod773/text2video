"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Play,
  Download,
  Loader2,
  Film,
  Settings2,
  Clock,
  Image as ImageIcon,
} from "lucide-react";

const styles = [
  { value: "cinematic", label: "Cinematic" },
  { value: "anime", label: "Anime" },
  { value: "realistic", label: "Realistic" },
  { value: "claymation", label: "Claymation" },
  { value: "3d-render", label: "3D Render" },
];

const aspectRatios = [
  { value: "16:9", label: "16:9" },
  { value: "9:16", label: "9:16" },
  { value: "1:1", label: "1:1" },
  { value: "4:3", label: "4:3" },
];

export function PlaygroundSection() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("cinematic");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [duration, setDuration] = useState([5]);
  const [generating, setGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setGenerating(true);
    await new Promise((r) => setTimeout(r, 3000));
    setVideoUrl("generated");
    setGenerating(false);
  };

  const handleStyleChange = (value: string | null) => {
    if (value) setStyle(value);
  };
  const handleAspectRatioChange = (value: string | null) => {
    if (value) setAspectRatio(value);
  };
  const handleDurationChange = (value: number | readonly number[]) => {
    setDuration(Array.isArray(value) ? [...value] : [value]);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="size-4 text-[#76b900]" />
              <h2 className="text-base font-semibold">Try it now</h2>
            </div>
            <p className="text-xs text-muted-foreground">
              Generate a video from a text prompt using the hosted API preview.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <ImageIcon className="size-3.5" />
              Prompt
            </label>
            <Textarea
              placeholder='e.g. "A robot moves through a clean industrial warehouse."'
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px] bg-muted/30 border-border/60 text-sm resize-y focus:border-[#76b900]/50"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">Style</label>
              <Select value={style} onValueChange={handleStyleChange}>
                <SelectTrigger className="bg-muted/30 border-border/60 h-8 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {styles.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">Aspect Ratio</label>
              <Select value={aspectRatio} onValueChange={handleAspectRatioChange}>
                <SelectTrigger className="bg-muted/30 border-border/60 h-8 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {aspectRatios.map((r) => (
                    <SelectItem key={r.value} value={r.value}>
                      {r.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="size-3" />
                Duration
              </label>
              <Badge variant="secondary" className="text-[10px] h-5 px-1.5">
                {duration[0]}s
              </Badge>
            </div>
            <Slider
              value={duration}
              onValueChange={handleDurationChange}
              min={3}
              max={30}
              step={1}
              className="[&_[data-slot=slider-track]]:bg-muted-foreground/20"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground">
              <span>3s</span>
              <span>30s</span>
            </div>
          </div>

          <Button
            size="default"
            className="w-full gap-2 bg-[#76b900] hover:bg-[#76b900]/90 text-black font-medium"
            onClick={handleGenerate}
            disabled={!prompt.trim() || generating}
          >
            {generating ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="size-4" />
                Generate
              </>
            )}
          </Button>

          <details className="group">
            <summary className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors list-none">
              <Settings2 className="size-3.5" />
              <span>Advanced options</span>
              <svg className="size-3 ml-auto group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="mt-3 space-y-3 text-xs text-muted-foreground">
              <p>Seed: <code className="text-foreground">42</code></p>
              <p>Guidance Scale: <code className="text-foreground">7.5</code></p>
              <p>Steps: <code className="text-foreground">50</code></p>
            </div>
          </details>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-lg border border-border/60 bg-card overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 bg-muted/30 border-b border-border/40">
              <div className="flex items-center gap-2">
                <Film className="size-3.5 text-muted-foreground" />
                <span className="text-xs font-medium">Output</span>
              </div>
              {videoUrl && (
                <div className="flex gap-1">
                  <Button size="xs" variant="ghost" className="h-6 gap-1 text-[10px]">
                    <Play className="size-3" />
                    Play
                  </Button>
                  <Button size="xs" variant="ghost" className="h-6 gap-1 text-[10px]">
                    <Download className="size-3" />
                    Download
                  </Button>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center min-h-[280px] bg-muted/10">
              {generating ? (
                <div className="text-center space-y-3 p-6">
                  <div className="relative mx-auto size-12">
                    <div className="absolute inset-0 rounded-full border-4 border-muted" />
                    <div className="absolute inset-0 rounded-full border-4 border-t-[#76b900] animate-spin" />
                  </div>
                  <p className="text-xs text-muted-foreground">Generating video...</p>
                </div>
              ) : videoUrl ? (
                <div className="text-center space-y-3 p-6">
                  <div className="mx-auto size-14 rounded-lg bg-[#76b900]/10 flex items-center justify-center border border-[#76b900]/20">
                    <Film className="size-6 text-[#76b900]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Video generated!</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {duration[0]}s &middot; {style} &middot; {aspectRatio}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-2 p-6">
                  <div className="mx-auto size-14 rounded-lg bg-muted/50 flex items-center justify-center border border-border/40">
                    <Film className="size-6 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your video will appear here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
