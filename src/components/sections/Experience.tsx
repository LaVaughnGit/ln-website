"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Company Name",
    period: "Summer 2024",
    description:
      "Placeholder — describe your responsibilities, technologies used, and key accomplishments here.",
  },
  {
    role: "Research Assistant",
    company: "University Lab",
    period: "2023 – 2024",
    description:
      "Placeholder — describe the research area, your contributions, and any publications or outcomes.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-border pl-6 space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[1.625rem] top-1.5 h-3 w-3 rounded-full bg-foreground border-2 border-background" />
              <p className="text-xs text-muted-foreground mb-1">{exp.period}</p>
              <h3 className="font-semibold text-lg">{exp.role}</h3>
              <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
