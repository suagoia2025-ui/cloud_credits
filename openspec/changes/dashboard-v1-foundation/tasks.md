## 1. OpenSpec & Project Setup

- [x] 1.1 Initialize OpenSpec (`openspec init`)
- [x] 1.2 Create change `dashboard-v1-foundation` with proposal.md
- [x] 1.3 Write capability specs (dashboard, credits, directory, theme, security)
- [x] 1.4 Write design.md with data schema v1
- [x] 1.5 Validate change with `openspec change validate dashboard-v1-foundation`

## 2. Frontend Scaffold

- [x] 2.1 Scaffold Next.js 14 App Router + TypeScript + Tailwind
- [x] 2.2 Add `next-themes`, `clsx`, `tailwind-merge`
- [x] 2.3 Configure security headers in `next.config.mjs`
- [x] 2.4 Add `.env.example` and `.gitignore`

## 3. Theme System (day/night)

- [x] 3.1 Create `styles/liquid-glass.css` with light/dark tokens
- [x] 3.2 Implement `ThemeProvider` and `ThemeToggle` components
- [x] 3.3 Wire theme in root `layout.tsx` with `suppressHydrationWarning`

## 4. Data Layer (v1 mock)

- [x] 4.1 Define types in `types/cloud.ts`
- [x] 4.2 Create provider config and mock credit accounts
- [x] 4.3 Create mock programs, security checks, alerts, projects
- [x] 4.4 Add pure functions: usage %, runway days, alert severity

## 5. Dashboard UI

- [x] 5.1 Build `GlassCard`, `ProviderCard`, `KpiCard` shared components
- [x] 5.2 Implement dashboard page with KPI row and provider grid
- [x] 5.3 Implement alerts panel and security posture widget
- [x] 5.4 Add dashboard layout with header nav and quick actions
- [x] 5.5 Add `loading.tsx` skeleton for dashboard segment

## 6. Directory Page

- [x] 6.1 Implement `/directory` with provider grouping and type filter
- [x] 6.2 Add stub pages `/deploy` and `/challenges` with "coming soon"

## 7. Verify

- [x] 7.1 Run `npm run build` without errors
- [x] 7.2 Manual check: theme toggle persists across reload
- [x] 7.3 Manual check: all 5 providers visible on dashboard
