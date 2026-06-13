"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Palette,
  Globe,
  Download,
  Shield,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate high-quality videos in seconds, not hours. Our AI processes your text instantly.",
  },
  {
    icon: Palette,
    title: "Multiple Styles",
    description: "From cinematic to anime, choose from a wide range of visual styles for your video.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Type your prompt in any language. Our AI understands and creates videos from any text.",
  },
  {
    icon: Download,
    title: "4K Export",
    description: "Download your videos in up to 4K resolution. Ready for social media or professional use.",
  },
  {
    icon: Shield,
    title: "Commercial License",
    description: "All generated videos come with full commercial rights. Use them anywhere you want.",
  },
  {
    icon: Layers,
    title: "Scene Control",
    description: "Describe complex scenes with multiple elements and watch them come together perfectly.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Powerful features to turn your imagination into stunning video content.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="h-full border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <feature.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
