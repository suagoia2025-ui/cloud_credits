## Why

Gestionar créditos y costos en cinco plataformas cloud (GCP, AWS, Vercel, Railway, Supabase) de forma manual genera desperdicio, facturas sorpresa y despliegues subóptimos. Necesitamos un panel central que consolide saldos, alertas y decisiones de deploy sin sacrificar prácticas de ciberseguridad, empezando por un dashboard v1 con visibilidad inmediata y tema día/noche para uso prolongado.

## What Changes

- Crear **Cloud Credits Hub** como aplicación Next.js 14 con diseño Liquid Glass y modo claro/oscuro.
- Implementar **Dashboard v1** con resumen de créditos por proveedor, alertas de consumo y estado de seguridad básico.
- Definir **esquema de datos v1** (TypeScript + contrato futuro PostgreSQL) para proveedores, cuentas de crédito, proyectos, retos legales y checklists de seguridad.
- Incluir **directorio informativo** (vista lista de programas oficiales de créditos por proveedor, datos estáticos en v1).
- Establecer stubs de navegación para **motor de decisión de deploy** y **tracker de retos** (fases posteriores).
- Configurar OpenSpec como fuente de verdad SDD antes de cualquier backend.

## Capabilities

### New Capabilities

- `dashboard-overview`: Panel principal con KPIs, grid de proveedores, alertas y accesos rápidos.
- `credit-tracking`: Modelo y UI para saldos, consumo estimado, umbrales de alerta y proyección de agotamiento.
- `provider-directory`: Catálogo informativo de programas de créditos legales por proveedor (GCP, AWS, Vercel, Railway, Supabase).
- `theme-system`: Tema día/noche persistente con tokens Liquid Glass adaptados a light y dark mode.
- `security-posture`: Widget de postura de seguridad mínima por proyecto/proveedor en el dashboard.

### Modified Capabilities

- _(ninguna — proyecto greenfield)_

## Impact

- **Nuevo repo frontend** en `/` con Next.js 14, Tailwind, `next-themes`, componentes Liquid Glass.
- **OpenSpec** en `openspec/changes/dashboard-v1-foundation/` con proposal, specs, design y tasks.
- **Sin backend en v1** — datos mock en `lib/data/`; contrato de tipos listo para API FastAPI + Supabase.
- **Fuera de alcance v1**: integración billing APIs, auth multi-usuario, motor de decisión completo, scrapers de retos.
