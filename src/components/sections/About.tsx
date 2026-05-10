"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 text-muted-foreground text-lg leading-relaxed"
        >
          <p>
            I&apos;m a software engineer passionate about building things at the intersection of
            software engineering and machine learning. I enjoy crafting clean, scalable code
            and exploring how AI can solve real-world problems.
          </p>
          <p>
            When I&apos;m not coding, you can find me diving into research papers, working on
            personal projects, or learning something new.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
