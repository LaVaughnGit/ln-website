"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "B.S. Computer Science",
    school: "Your University",
    period: "2021 – 2025",
    details: "Relevant coursework: Machine Learning, Data Structures, Algorithms, Computer Vision.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10"
        >
          Education
        </motion.h2>

        <div className="relative border-l border-border pl-6 space-y-10">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[1.625rem] top-1.5 h-3 w-3 rounded-full bg-foreground border-2 border-background" />
              <p className="text-xs text-muted-foreground mb-1">{edu.period}</p>
              <h3 className="font-semibold text-lg">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm mb-2">{edu.school}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
