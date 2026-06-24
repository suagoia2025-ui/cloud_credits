import { Shield, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { getProvider } from "@/lib/data/providers";
import type { SecurityCheck } from "@/types/cloud";

interface SecurityWidgetProps {
  score: number;
  passed: number;
  total: number;
  pending: SecurityCheck[];
}

export function SecurityWidget({
  score,
  passed,
  total,
  pending,
}: SecurityWidgetProps) {
  return (
    <GlassCard>
      <div className="flex items-center gap-2">
        <Shield className="h-4 w-4 text-[var(--accent)]" />
        <h2 className="text-sm font-semibold text-[var(--text-primary)]">
          Postura de seguridad
        </h2>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div
          className="relative flex h-20 w-20 items-center justify-center rounded-full"
          style={{
            background: `conic-gradient(var(--accent) ${score}%, var(--surface-3) 0)`,
          }}
        >
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-[var(--surface-1)]">
            <span className="text-lg font-bold text-[var(--text-primary)]">
              {score}
            </span>
            <span className="text-[9px] text-[var(--text-muted)]">/ 100</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-[var(--text-secondary)]">
            <span className="font-semibold text-[var(--status-success)]">
              {passed}
            </span>{" "}
            de {total} checks OK
          </p>
          <p className="mt-1 text-xs text-[var(--text-muted)]">
            IAM · Secrets · RLS · Billing
          </p>
        </div>
      </div>

      {pending.length > 0 && (
        <ul className="mt-4 space-y-2 border-t border-[var(--glass-border)] pt-4">
          {pending.map((check) => {
            const provider =
              check.provider === "global"
                ? "Global"
                : getProvider(check.provider)?.shortName;

            return (
              <li
                key={check.id}
                className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
              >
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--status-warning)]" />
                <span>
                  <span className="font-medium text-[var(--text-primary)]">
                    [{provider}]
                  </span>{" "}
                  {check.title}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </GlassCard>
  );
}
