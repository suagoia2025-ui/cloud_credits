import { GlassCard } from "@/components/shared/glass-card";
import { cn } from "@/lib/utils/cn";

interface KpiCardProps {
  label: string;
  value: string;
  hint?: string;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
}

export function KpiCard({ label, value, hint, icon }: KpiCardProps) {
  return (
    <GlassCard className="animate-fade-in">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
            {label}
          </p>
          <p className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">
            {value}
          </p>
          {hint && (
            <p className="mt-1 text-xs text-[var(--text-secondary)]">{hint}</p>
          )}
        </div>
        {icon && (
          <div className="rounded-xl bg-[var(--accent-muted)] p-2 text-[var(--accent)]">
            {icon}
          </div>
        )}
      </div>
    </GlassCard>
  );
}
