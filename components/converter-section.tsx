"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sparkles,
  Wand2,
  Film,
  Settings2,
  Play,
  Download,
  Loader2,
  Clock,
  Music,
  Video,
} from "lucide-react";

const styles = [
  { value: "cinematic", label: "Cinematic" },
  { value: "anime", label: "Anime" },
  { value: "realistic", label: "Realistic" },
  { value: "claymation", label: "Claymation" },
  { value: "pixel-art", label: "Pixel Art" },
  { value: "3d-render", label: "3D Render" },
];

const aspectRatios = [
  { value: "16:9", label: "Landscape (16:9)" },
  { value: "9:16", label: "Portrait (9:16)" },
  { value: "1:1", label: "Square (1:1)" },
  { value: "4:3", label: "Standard (4:3)" },
];

export function ConverterSection() {
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
    <section id="converter" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Create Your Video
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Describe the scene you want to see, pick a style, and let AI do the rest.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-6"
          >
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Wand2 className="size-4 text-primary" />
                    Your Prompt
                  </label>
                  <Textarea
                    placeholder="Describe the video you want to create... e.g., 'A serene sunset over a mountain lake with birds flying in the distance, cinematic lighting'"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[120px] resize-y"
                  />
                  <p className="text-xs text-muted-foreground">
                    Be as detailed as possible for better results.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-5">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <Settings2 className="size-4 text-primary" />
                  Settings
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">Style</label>
                    <Select value={style} onValueChange={handleStyleChange}>
                      <SelectTrigger>
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

                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">Aspect Ratio</label>
                    <Select value={aspectRatio} onValueChange={handleAspectRatioChange}>
                      <SelectTrigger>
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

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Clock className="size-3.5" />
                      Duration
                    </label>
                    <Badge variant="secondary" className="text-xs">
                      {duration[0]}s
                    </Badge>
                  </div>
                  <Slider
                    value={duration}
                    onValueChange={handleDurationChange}
                    min={3}
                    max={30}
                    step={1}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>3s</span>
                    <span>30s</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              size="lg"
              className="w-full gap-2 text-base h-12"
              onClick={handleGenerate}
              disabled={!prompt.trim() || generating}
            >
              {generating ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Generating your video...
                </>
              ) : (
                <>
                  <Sparkles className="size-5" />
                  Generate Video
                </>
              )}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardContent className="pt-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Film className="size-4 text-primary" />
                  <h3 className="text-sm font-medium">Preview</h3>
                </div>

                <div className="flex-1 flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30 min-h-[300px]">
                  {generating ? (
                    <div className="text-center space-y-3">
                      <div className="relative mx-auto size-16">
                        <div className="absolute inset-0 rounded-full border-4 border-muted" />
                        <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin" />
                      </div>
                      <p className="text-sm text-muted-foreground">Creating your masterpiece...</p>
                    </div>
                  ) : videoUrl ? (
                    <div className="text-center space-y-4 p-6">
                      <div className="mx-auto size-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Video className="size-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Video Ready!</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Your {duration[0]}s {style} video is ready
                        </p>
                      </div>
                      <div className="flex gap-2 justify-center">
                        <Button size="sm" className="gap-1.5">
                          <Play className="size-4" />
                          Play
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1.5">
                          <Download className="size-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-3 p-6">
                      <div className="mx-auto size-16 rounded-full bg-muted flex items-center justify-center">
                        <Film className="size-8 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your generated video will appear here
                      </p>
                    </div>
                  )}
                </div>

                <Separator className="my-4" />

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Music className="size-3.5" />
                  <span>AI-generated soundtrack included</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
