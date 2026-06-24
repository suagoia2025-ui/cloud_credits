import { AlertTriangle, Info, ShieldAlert } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { getProvider } from "@/lib/data/providers";
import { cn } from "@/lib/utils/cn";
import type { DashboardAlert } from "@/types/cloud";

const severityConfig = {
  critical: {
    icon: ShieldAlert,
    className: "border-[var(--status-error)]/30 bg-[var(--status-error)]/8",
    dot: "bg-[var(--status-error)]",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-[var(--status-warning)]/30 bg-[var(--status-warning)]/8",
    dot: "bg-[var(--status-warning)]",
  },
  info: {
    icon: Info,
    className: "border-[var(--status-info)]/30 bg-[var(--status-info)]/8",
    dot: "bg-[var(--status-info)]",
  },
};

export function AlertsPanel({ alerts }: { alerts: DashboardAlert[] }) {
  return (
    <GlassCard>
      <h2 className="text-sm font-semibold text-[var(--text-primary)]">
        Alertas
      </h2>
      <p className="mt-0.5 text-xs text-[var(--text-muted)]">
        Billing, expiración y ciberseguridad
      </p>

      <ul className="mt-4 space-y-2">
        {alerts.length === 0 ? (
          <li className="text-sm text-[var(--text-secondary)]">
            Sin alertas activas
          </li>
        ) : (
          alerts.map((alert) => {
            const config = severityConfig[alert.severity];
            const Icon = config.icon;
            const provider = alert.provider
              ? getProvider(alert.provider)
              : null;

            return (
              <li
                key={alert.id}
                className={cn(
                  "flex items-start gap-3 rounded-xl border p-3",
                  config.className
                )}
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-secondary)]" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-[var(--text-primary)]">
                    {alert.message}
                  </p>
                  {provider && (
                    <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                      {provider.shortName}
                    </p>
                  )}
                </div>
                <span
                  className={cn("mt-1.5 h-2 w-2 shrink-0 rounded-full", config.dot)}
                />
              </li>
            );
          })
        )}
      </ul>
    </GlassCard>
  );
}
