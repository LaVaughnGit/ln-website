"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — only render after mount
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full border border-border bg-background shadow-md hover:shadow-lg text-muted-foreground hover:text-foreground transition-all"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
