"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "glass-card flex h-9 w-9 items-center justify-center rounded-xl",
        "text-[var(--text-secondary)] hover:text-[var(--accent)]"
      )}
      aria-label={isDark ? "Activar modo día" : "Activar modo noche"}
      title={isDark ? "Modo día" : "Modo noche"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">
        Tema actual: {theme === "system" ? "sistema" : theme}
      </span>
    </button>
  );
}
