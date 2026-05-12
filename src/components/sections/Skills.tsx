"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

const iconMap: Record<string, { src: string; invert?: boolean }> = {
  Python:       { src: `${BASE}/python/python-original.svg` },
  TypeScript:   { src: `${BASE}/typescript/typescript-original.svg` },
  JavaScript:   { src: `${BASE}/javascript/javascript-original.svg` },
  Java:         { src: `${BASE}/java/java-original.svg` },
  "C++":        { src: `${BASE}/cplusplus/cplusplus-original.svg` },
  SQL:          { src: `${BASE}/mysql/mysql-original.svg` },
  "C#":         { src: `${BASE}/csharp/csharp-original.svg` },
  Ruby:         { src: `${BASE}/ruby/ruby-original.svg` },
  React:        { src: `${BASE}/react/react-original.svg` },
  "Next.js":    { src: `${BASE}/nextjs/nextjs-original.svg`, invert: true },
  "Node.js":    { src: `${BASE}/nodejs/nodejs-original.svg` },
  PyTorch:      { src: `${BASE}/pytorch/pytorch-original.svg` },
  TensorFlow:   { src: `${BASE}/tensorflow/tensorflow-original.svg` },
  FastAPI:      { src: `${BASE}/fastapi/fastapi-original.svg` },
  Git:          { src: `${BASE}/git/git-original.svg` },
  Docker:       { src: `${BASE}/docker/docker-original.svg` },
  AWS:          { src: `${BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
  Vercel:       { src: `${BASE}/vercel/vercel-original.svg`, invert: true },
  PostgreSQL:   { src: `${BASE}/postgresql/postgresql-original.svg` },
  Linux:        { src: `${BASE}/linux/linux-original.svg` },
  Claude:       { src: `${SI}/anthropic/000000`, invert: true },
  Cursor:       { src: `${SI}/cursor/000000`, invert: true },
  Gemini:       { src: `${SI}/googlegemini/4285F4` },
};

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "C#", "Ruby"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "PyTorch", "TensorFlow", "FastAPI"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "PostgreSQL", "Linux", "Claude", "Cursor", "Gemini"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10"
        >
          Skills
        </motion.h2>

        <div className="space-y-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const icon = iconMap[skill];
                  return (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3 gap-1.5">
                      {icon && (
                        <img
                          src={icon.src}
                          alt={skill}
                          width={16}
                          height={16}
                          className={`inline-block${icon.invert ? " dark:invert" : ""}`}
                        />
                      )}
                      {skill}
                    </Badge>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
