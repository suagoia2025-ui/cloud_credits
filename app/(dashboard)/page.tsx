import {
  Cloud,
  DollarSign,
  FolderKanban,
  Timer,
} from "lucide-react";
import { AlertsPanel } from "@/components/dashboard/alerts-panel";
import { ProviderCard } from "@/components/dashboard/provider-card";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { SecurityWidget } from "@/components/dashboard/security-widget";
import { KpiCard } from "@/components/shared/kpi-card";
import { getDashboardData } from "@/lib/data/mock";

export default function DashboardPage() {
  const { summary, creditAccounts, alerts, security } = getDashboardData();

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Créditos, alertas y postura de seguridad — GCP · AWS · Vercel · Railway ·
          Supabase
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          label="Créditos disponibles"
          value={`$${summary.totalCreditsUsd.toFixed(0)}`}
          hint="Suma de saldos activos"
          icon={<DollarSign className="h-4 w-4" />}
        />
        <KpiCard
          label="Consumo mensual est."
          value={`$${summary.monthlyBurnUsd}`}
          hint="Basado en proyectos activos"
          icon={<Cloud className="h-4 w-4" />}
        />
        <KpiCard
          label="Runway estimado"
          value={`${summary.runwayDays} días`}
          hint="Al ritmo de consumo actual"
          icon={<Timer className="h-4 w-4" />}
        />
        <KpiCard
          label="Proyectos activos"
          value={String(summary.activeProjects)}
          hint="Prod, staging, labs"
          icon={<FolderKanban className="h-4 w-4" />}
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Créditos por proveedor
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {creditAccounts.map((account) => (
              <ProviderCard key={account.id} account={account} />
            ))}
          </div>
        </div>
        <SecurityWidget
          score={security.score}
          passed={security.passed}
          total={security.total}
          pending={security.pending}
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <AlertsPanel alerts={alerts} />
        <QuickActions />
      </section>
    </div>
  );
}
