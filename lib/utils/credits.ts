import type {
  CreditAccount,
  DashboardAlert,
  DashboardSummary,
  Project,
  SecurityCheck,
} from "@/types/cloud";

export function usagePercent(account: CreditAccount): number {
  const total = account.balance + account.consumed;
  if (total === 0) return 0;
  return Math.round((account.consumed / total) * 100);
}

export function remainingCredits(account: CreditAccount): number {
  return Math.max(0, account.balance);
}

export function alertLevel(
  account: CreditAccount
): "ok" | "warning" | "critical" {
  const pct = usagePercent(account);
  if (pct >= account.alertThresholds.critical) return "critical";
  if (pct >= account.alertThresholds.warning) return "warning";
  return "ok";
}

export function daysUntil(dateIso: string | null): number | null {
  if (!dateIso) return null;
  const diff = new Date(dateIso).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function computeSummary(
  accounts: CreditAccount[],
  projects: Project[],
  monthlyBurnUsd = 28
): DashboardSummary {
  const totalCreditsUsd = accounts.reduce((s, a) => s + a.balance, 0);
  const totalConsumedUsd = accounts.reduce((s, a) => s + a.consumed, 0);
  const dailyBurn = monthlyBurnUsd / 30;
  const runwayDays =
    dailyBurn > 0 ? Math.round(totalCreditsUsd / dailyBurn) : 999;

  return {
    totalCreditsUsd,
    totalConsumedUsd,
    monthlyBurnUsd,
    runwayDays,
    activeProjects: projects.length,
  };
}

export function buildAlerts(
  accounts: CreditAccount[],
  projects: Project[]
): DashboardAlert[] {
  const alerts: DashboardAlert[] = [];

  for (const account of accounts) {
    const pct = usagePercent(account);
    const days = daysUntil(account.expiresAt);

    if (pct >= account.alertThresholds.critical) {
      alerts.push({
        id: `crit-usage-${account.id}`,
        severity: "critical",
        provider: account.provider,
        message: `${account.label}: ${pct}% del crédito consumido`,
      });
    } else if (pct >= account.alertThresholds.warning) {
      alerts.push({
        id: `warn-usage-${account.id}`,
        severity: "warning",
        provider: account.provider,
        message: `${account.label}: ${pct}% del crédito consumido`,
      });
    }

    if (days !== null && days <= 30) {
      alerts.push({
        id: `exp-${account.id}`,
        severity: days <= 7 ? "critical" : "warning",
        provider: account.provider,
        message: `${account.label} expira en ${days} días`,
      });
    }
  }

  const hasLab = projects.some(
    (p) => p.type === "lab" || p.type === "security"
  );
  if (hasLab) {
    alerts.push({
      id: "lab-isolation",
      severity: "info",
      message:
        "Aisla labs de ciberseguridad en cuentas/proyectos separados de producción",
    });
  }

  const order = { critical: 0, warning: 1, info: 2 };
  return alerts.sort((a, b) => order[a.severity] - order[b.severity]);
}

export function securityScore(checks: SecurityCheck[]): {
  score: number;
  passed: number;
  total: number;
  pending: SecurityCheck[];
} {
  const passed = checks.filter((c) => c.passed).length;
  const total = checks.length;
  const score = total > 0 ? Math.round((passed / total) * 100) : 0;
  const pending = checks
    .filter((c) => !c.passed)
    .sort((a, b) => {
      const p = { high: 0, medium: 1, low: 2 };
      return p[a.priority] - p[b.priority];
    })
    .slice(0, 3);

  return { score, passed, total, pending };
}
