"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          LaVaughn
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          Software Engineer & ML Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a href="#projects" className={buttonVariants({ size: "lg" })}>
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </a>
          <a
            href="/resume.pdf"
            download="Lavan_Naveh_Resume.pdf"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <FileText className="mr-2 h-4 w-4" />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
