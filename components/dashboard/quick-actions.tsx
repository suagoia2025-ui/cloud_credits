import { BookOpen, GitBranch, Target } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/glass-card";

const actions = [
  {
    href: "/directory",
    label: "Directorio de créditos",
    description: "Programas oficiales por proveedor",
    icon: BookOpen,
  },
  {
    href: "/deploy",
    label: "Asesor de deploy",
    description: "¿Dónde desplegar cada pieza?",
    icon: GitBranch,
  },
  {
    href: "/challenges",
    label: "Retos legales",
    description: "Hackathons, educación, startups",
    icon: Target,
  },
];

export function QuickActions() {
  return (
    <GlassCard>
      <h2 className="text-sm font-semibold text-[var(--text-primary)]">
        Acciones rápidas
      </h2>
      <ul className="mt-4 space-y-2">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <li key={action.href}>
              <Link
                href={action.href}
                className="flex items-center gap-3 rounded-xl border border-transparent p-3 transition-colors hover:border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)]"
              >
                <div className="rounded-lg bg-[var(--accent-muted)] p-2 text-[var(--accent)]">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {action.label}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {action.description}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </GlassCard>
  );
}
