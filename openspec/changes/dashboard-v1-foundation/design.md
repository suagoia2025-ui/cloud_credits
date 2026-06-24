## Context

Greenfield project targeting personal/startup use: track credits across GCP, AWS, Vercel, Railway, and Supabase; inform deployment decisions; surface legal credit programs; emphasize cybersecurity hygiene. V1 is frontend-only with mock data; backend (FastAPI + Supabase PostgreSQL) comes in phase 2.

## Goals / Non-Goals

**Goals:**
- Single-page dashboard with at-a-glance credit health across 5 providers
- Day/night theme with Liquid Glass SuaGO aesthetics
- Type-safe data schema reusable for future API and DB
- Directory of official credit programs (static v1)
- Security posture widget with actionable checklist items

**Non-Goals:**
- Live billing API integration (AWS Cost Explorer, GCP Billing, etc.)
- Multi-tenant auth and RLS (phase 2 with Supabase)
- Full deployment recommendation engine
- Automated challenge/scraper for credit programs

## Decisions

### 1. Next.js 14 App Router (frontend-only v1)
**Why:** Aligns with SuaGO stack; Server Components for static/mock data; easy Vercel deploy later.
**Alternative:** Vite SPA — rejected (loses SSR, SuaGO conventions).

### 2. `next-themes` for day/night toggle
**Why:** Battle-tested, handles `localStorage` + `prefers-color-scheme`, no flash on load with `suppressHydrationWarning`.
**Alternative:** Manual CSS class toggle — more boilerplate, FOUC risk.

### 3. CSS custom properties for dual-theme Liquid Glass
**Why:** Single component library; `:root` + `[data-theme="light"]` token sets; copper brand consistent across modes.
**Alternative:** Tailwind `dark:` only — insufficient for glass-specific rgba tokens.

### 4. Mock data in `lib/data/` with shared `types/cloud.ts`
**Why:** Unblocks UI; types become PostgreSQL/API contract in phase 2.
**Alternative:** JSON fixtures only — loses TypeScript inference.

### 5. Dashboard layout: 12-column responsive grid
```
┌──────────────────────────────────────────────────┐
│ Header: Logo | Nav | ThemeToggle                 │
├────────┬────────┬────────┬────────┬───────────────┤
│ KPI 1  │ KPI 2  │ KPI 3  │ KPI 4  │  (4 cards)  │
├────────────────────────────┬─────────────────────┤
│ Provider Credit Grid (5)   │ Security Widget   │
├────────────────────────────┼─────────────────────┤
│ Alerts Panel               │ Quick Actions     │
└────────────────────────────┴─────────────────────┘
```

## Data Schema v1 (TypeScript → future PostgreSQL)

```typescript
type CloudProvider = 'gcp' | 'aws' | 'vercel' | 'railway' | 'supabase';

interface CreditAccount {
  id: string;
  provider: CloudProvider;
  label: string;
  balance: number;
  consumed: number;
  currency: 'USD';
  expiresAt: string | null;
  alertThresholds: { warning: 70; critical: 90 };
}

interface Project {
  id: string;
  name: string;
  type: 'production' | 'staging' | 'lab' | 'security';
  providers: CloudProvider[];
  monthlyEstimateUsd: number;
}

interface CreditProgram {
  id: string;
  provider: CloudProvider;
  name: string;
  type: 'free-tier' | 'trial' | 'startup' | 'education' | 'referral' | 'event';
  creditAmount: string;
  eligibility: string;
  officialUrl: string;
}

interface SecurityCheck {
  id: string;
  provider: CloudProvider | 'global';
  category: 'iam' | 'secrets' | 'network' | 'data' | 'billing';
  title: string;
  passed: boolean;
  priority: 'high' | 'medium' | 'low';
}

interface DashboardAlert {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  provider?: CloudProvider;
  message: string;
}
```

**Future PostgreSQL tables:** `providers`, `credit_accounts`, `projects`, `credit_programs`, `security_checks`, `dashboard_alerts` — UUID PKs, `snake_case`, RLS when auth lands.

## Risks / Trade-offs

- **[Mock data drift]** → Document sync task when APIs connect; single `types/cloud.ts` source.
- **[No real billing]** → Clear "manual entry" UX in v1.1; alerts based on user-entered values.
- **[Theme flash on SSR]** → `next-themes` + `suppressHydrationWarning` on `<html>`.
- **[5 providers maintenance]** → Provider config as array in `lib/data/providers.ts`.

## Migration Plan

1. Ship v1 frontend to Vercel (static/mock).
2. Phase 2: Supabase tables matching types; FastAPI read API.
3. Phase 3: Webhook/manual sync for billing; deployment advisor logic.

## Open Questions

- ¿Entrada manual de créditos en v1.1 o esperar Supabase?
- ¿Un proyecto = una fila o multi-proyecto por proveedor desde v1?
