# Cloud Credits Hub

**Panel central para gestionar créditos cloud, costos y postura de seguridad en un solo lugar.**

Multi-cloud · FinOps · Ciberseguridad · Next.js 14

---

## El problema

Startups y equipos pequeños suelen operar en varias plataformas cloud a la vez. Sin visibilidad centralizada:

- Los créditos se agotan sin aviso
- El consumo real no se cruza con el presupuesto
- Los labs de seguridad comparten cuentas con producción
- Los programas oficiales de créditos (AWS Activate, GCP trials, etc.) se pierden en documentación dispersa

**Cloud Credits Hub** consolida saldos, alertas, programas legales y checklist de seguridad en un dashboard diseñado para uso diario.

---

## Qué incluye (v1)

| Módulo | Descripción |
|--------|-------------|
| **Dashboard** | KPIs de créditos, consumo estimado, runway y proyectos activos |
| **Créditos por proveedor** | Saldos, % consumido, umbrales de alerta y fechas de expiración |
| **Alertas inteligentes** | Críticas, warnings e info según consumo y vencimientos |
| **Postura de seguridad** | Score + checklist priorizado (IAM, secrets, network, billing) |
| **Directorio de programas** | Catálogo filtrable de créditos oficiales por proveedor |
| **Tema día / noche** | UI Liquid Glass con persistencia local, optimizada para sesiones largas |

### Proveedores soportados

GCP · AWS · Vercel · Railway · Supabase

### En roadmap

- Motor de decisión de deploy (wizard multi-cloud)
- Tracker de retos legales y hackathons
- Backend FastAPI + Supabase PostgreSQL
- Integración con APIs de billing en tiempo real

---

## Vista previa

> Sustituye estas imágenes con capturas de tu instancia local o deploy.

| Dashboard (modo oscuro) | Directorio de programas |
|-------------------------|---------------------------|
| _Captura pendiente_ | _Captura pendiente_ |

---

## Stack técnico

| Capa | Tecnología |
|------|------------|
| Frontend | Next.js 14 App Router, React 18, TypeScript |
| Estilos | Tailwind CSS, tokens CSS Liquid Glass |
| Tema | `next-themes` (light / dark sin flash) |
| Iconos | Lucide React |
| Spec-driven | OpenSpec (SDD) |
| Datos v1 | Mock tipado en TypeScript |
| Backend (fase 2) | FastAPI + PostgreSQL (planificado) |

### Prácticas de ingeniería

- **OpenSpec SDD** — specs, diseño y tasks antes del código (`openspec/changes/`)
- **Tipos como contrato** — `types/cloud.ts` listo para API y base de datos
- **Lógica de dominio pura** — cálculos de runway, alertas y score en `lib/utils/credits.ts`
- **Headers de seguridad** — CSP, HSTS, X-Frame-Options, Referrer-Policy en `next.config.mjs`
- **Arquitectura por capas** — preparada para communication → domain → data

---

## Inicio rápido

### Requisitos

- Node.js 20+
- npm 10+

### Instalación

```bash
git clone <repo-url>
cd aws_credits
npm install
cp .env.example .env.local   # opcional en v1
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

### Scripts

```bash
npm run dev      # desarrollo (con file polling para macOS)
npm run build    # build de producción
npm run start    # servidor de producción
npm run lint     # ESLint
```

### Build de producción

```bash
npm run build && npm run start
```

---

## Estructura del proyecto

```
app/
  (dashboard)/     # Dashboard principal + layout con navegación
  directory/       # Catálogo de programas de créditos
  deploy/          # Stub — asesor de deploy (fase 2)
  challenges/      # Stub — tracker de retos (fase 2)
components/
  dashboard/       # Alertas, proveedores, seguridad, acciones rápidas
  directory/       # Lista y filtros de programas
  shared/          # GlassCard, KPI, theme toggle
lib/
  data/            # Mock data y configuración de proveedores
  utils/           # Lógica de créditos y utilidades
types/             # Contratos TypeScript (→ PostgreSQL en fase 2)
openspec/          # Specs SDD (proposal, design, tasks)
styles/            # Tokens Liquid Glass (light / dark)
```

---

## Arquitectura de datos (v1)

El modelo cubre cuentas de crédito, proyectos, programas oficiales, checks de seguridad y alertas del dashboard. Los mocks en `lib/data/mock.ts` demuestran el flujo completo; los tipos en `types/cloud.ts` definen el contrato para la API futura.

```typescript
// Ejemplo: umbrales y proyección de agotamiento
usagePercent(account)   // % consumido del pool total
alertLevel(account)     // ok | warning | critical
computeSummary(...)     // runway en días según burn rate
buildAlerts(...)        // alertas por consumo, expiración y contexto
securityScore(checks)   // score 0–100 + pendientes priorizados
```

---

## OpenSpec

Este proyecto sigue **Spec-Driven Development** con [OpenSpec](https://github.com/Fission-AI/OpenSpec):

```bash
openspec change validate dashboard-v1-foundation
```

Documentación del cambio activo en `openspec/changes/dashboard-v1-foundation/`.

---

## Autor

**Ricardo Suárez** — [suago.dev](https://suago.dev)

Full-stack engineer · FinOps · Multi-cloud · Spec-driven development

---

## Licencia

Privado — consultar autor para uso comercial.
