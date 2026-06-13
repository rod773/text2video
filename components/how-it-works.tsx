"use client";

import { motion } from "framer-motion";
import { Type, Wand2, Video } from "lucide-react";

const steps = [
  {
    icon: Type,
    title: "Write Your Prompt",
    description: "Describe the video you want to create in natural language. Be as detailed or as simple as you like.",
    step: "01",
  },
  {
    icon: Wand2,
    title: "AI Works Its Magic",
    description: "Our AI analyzes your text, generates scenes, applies effects, and composes a soundtrack.",
    step: "02",
  },
  {
    icon: Video,
    title: "Download & Share",
    description: "Preview your video, make adjustments, and download in 4K. Share directly to social media.",
    step: "03",
  },
];

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.8, ease: "easeInOut" as const },
  },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Three simple steps from idea to video.
          </p>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <motion.div
            className="absolute top-12 left-[15%] right-[15%] h-px hidden md:block bg-gradient-to-r from-transparent via-border to-transparent"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                  <step.icon className="size-7 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {step.step}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
