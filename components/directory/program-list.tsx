"use client";

import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { getProvider, PROVIDERS } from "@/lib/data/providers";
import { cn } from "@/lib/utils/cn";
import type { CreditProgram, ProgramType } from "@/types/cloud";

const typeLabels: Record<ProgramType, string> = {
  "free-tier": "Free Tier",
  trial: "Trial",
  startup: "Startup",
  education: "Educación",
  referral: "Referral",
  event: "Evento",
};

const allTypes: ProgramType[] = [
  "free-tier",
  "trial",
  "startup",
  "education",
  "referral",
  "event",
];

export function ProgramList({ programs }: { programs: CreditProgram[] }) {
  const [filter, setFilter] = useState<ProgramType | "all">("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? programs
        : programs.filter((p) => p.type === filter),
    [programs, filter]
  );

  const grouped = useMemo(() => {
    const map = new Map<string, CreditProgram[]>();
    for (const provider of PROVIDERS) {
      map.set(
        provider.id,
        filtered.filter((p) => p.provider === provider.id)
      );
    }
    return map;
  }, [filtered]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium transition-colors",
            filter === "all"
              ? "bg-[var(--accent-muted)] text-[var(--accent)]"
              : "text-[var(--text-secondary)] hover:bg-[var(--glass-bg)]"
          )}
        >
          Todos
        </button>
        {allTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setFilter(type)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition-colors",
              filter === type
                ? "bg-[var(--accent-muted)] text-[var(--accent)]"
                : "text-[var(--text-secondary)] hover:bg-[var(--glass-bg)]"
            )}
          >
            {typeLabels[type]}
          </button>
        ))}
      </div>

      {PROVIDERS.map((provider) => {
        const items = grouped.get(provider.id) ?? [];
        if (items.length === 0) return null;

        return (
          <section key={provider.id}>
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[var(--text-primary)]">
              <span>{provider.icon}</span>
              {provider.name}
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {items.map((program) => (
                <GlassCard key={program.id}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="rounded-full bg-[var(--accent-muted)] px-2 py-0.5 text-[10px] font-semibold uppercase text-[var(--accent)]">
                        {typeLabels[program.type]}
                      </span>
                      <h3 className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
                        {program.name}
                      </h3>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-[var(--status-success)]">
                      {program.creditAmount}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[var(--text-secondary)]">
                    {program.eligibility}
                  </p>
                  <a
                    href={program.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:underline"
                  >
                    Programa oficial
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </GlassCard>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
