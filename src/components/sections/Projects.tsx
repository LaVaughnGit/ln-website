"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.01-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.86.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const GITHUB_USER = "LaVaughnGit";

const projects = [
  {
    title: "Project One",
    description:
      "A placeholder for your first project. Describe what it does, the problem it solves, and what makes it interesting.",
    tags: ["Python", "PyTorch", "FastAPI"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Project Two",
    description:
      "A placeholder for your second project. Highlight the key technical decisions and outcomes.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Project Three",
    description:
      "A placeholder for your third project. Focus on impact — what did you build and why does it matter?",
    tags: ["Next.js", "TailwindCSS", "Vercel"],
    github: "https://github.com",
    demo: null,
  },
];

function GitHubActivity() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const activityGraphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USER}&theme=${isDark ? "github-dark" : "github"}&hide_border=true&bg_color=00000000&area=true`;

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&hide_border=true&bg_color=00000000&title_color=${isDark ? "e6edf3" : "24292f"}&text_color=${isDark ? "8b949e" : "57606a"}&icon_color=${isDark ? "58a6ff" : "0969da"}&ring_color=${isDark ? "58a6ff" : "0969da"}`;

  const streakUrl = `https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USER}&hide_border=true&background=00000000&ring=${isDark ? "58a6ff" : "0969da"}&fire=${isDark ? "58a6ff" : "0969da"}&currStreakLabel=${isDark ? "e6edf3" : "24292f"}&sideLabels=${isDark ? "8b949e" : "57606a"}&dates=${isDark ? "8b949e" : "57606a"}&currStreakNum=${isDark ? "e6edf3" : "24292f"}&sideNums=${isDark ? "e6edf3" : "24292f"}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 space-y-6"
    >
      {/* Stats row */}
      <div className="flex flex-wrap gap-4 justify-center">
        {mounted && (
          <>
            <img
              src={streakUrl}
              alt="GitHub Streak"
              className="h-auto w-full max-w-sm rounded-lg"
            />
          </>
        )}
      </div>

      {/* Contribution activity graph */}
      {mounted && (
        <div className="rounded-xl overflow-hidden border border-border">
          <img
            src={activityGraphUrl}
            alt="GitHub Contribution Activity"
            className="w-full h-auto"
          />
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <GitHubActivity />
      </div>
    </section>
  );
}
