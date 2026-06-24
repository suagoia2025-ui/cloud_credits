import { GlassCard } from "@/components/shared/glass-card";
import { getProvider } from "@/lib/data/providers";
import { alertLevel, remainingCredits, usagePercent } from "@/lib/utils/credits";
import { cn } from "@/lib/utils/cn";
import type { CreditAccount } from "@/types/cloud";

const statusStyles = {
  ok: "bg-[var(--status-success)]/15 text-[var(--status-success)]",
  warning: "bg-[var(--status-warning)]/15 text-[var(--status-warning)]",
  critical: "bg-[var(--status-error)]/15 text-[var(--status-error)]",
};

const statusLabels = {
  ok: "Saludable",
  warning: "Atención",
  critical: "Crítico",
};

export function ProviderCard({ account }: { account: CreditAccount }) {
  const provider = getProvider(account.provider);
  const usage = usagePercent(account);
  const remaining = remainingCredits(account);
  const status = alertLevel(account);

  return (
    <GlassCard hover className="animate-fade-in">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-sm"
            style={{ backgroundColor: `${provider?.color}22` }}
          >
            {provider?.icon}
          </span>
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              {provider?.shortName}
            </p>
            <p className="text-xs text-[var(--text-muted)]">{account.label}</p>
          </div>
        </div>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
            statusStyles[status]
          )}
        >
          {statusLabels[status]}
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-baseline justify-between">
          <span className="text-xl font-bold text-[var(--text-primary)]">
            ${remaining.toFixed(remaining < 10 ? 2 : 0)}
          </span>
          <span className="text-xs text-[var(--text-muted)]">{usage}% usado</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--surface-3)]">
          <div
            className={cn(
              "h-full rounded-full transition-all",
              status === "critical"
                ? "bg-[var(--status-error)]"
                : status === "warning"
                  ? "bg-[var(--status-warning)]"
                  : "bg-[var(--status-success)]"
            )}
            style={{ width: `${Math.min(usage, 100)}%` }}
          />
        </div>
      </div>
    </GlassCard>
  );
}
