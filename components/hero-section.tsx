"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 size-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 size-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <Sparkles className="size-4" />
              <span>AI-Powered Video Generation</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Turn Your Text Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Stunning Videos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Describe your vision and let AI bring it to life. No camera, no studio, no editing skills needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="gap-2 text-base h-11 px-6">
              Start Creating Free
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base h-11 px-6">
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <span className="flex size-2 rounded-full bg-green-500" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="flex size-2 rounded-full bg-green-500" />
              4K output
            </span>
            <span className="flex items-center gap-1.5">
              <span className="flex size-2 rounded-full bg-green-500" />
              Fast rendering
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
