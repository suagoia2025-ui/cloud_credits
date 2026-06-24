import { SectionLayout } from "@/components/layout/section-layout";
import { ComingSoon } from "@/components/shared/coming-soon";

export default function DeployPage() {
  return (
    <SectionLayout
      title="Asesor de deploy"
      description="Recomendaciones de dónde desplegar cada pieza según créditos, escala y seguridad"
    >
      <ComingSoon
        title="Motor de decisión de deploy"
        description="Wizard que analizará tipo de app, tráfico, DB, auth y créditos disponibles para recomendar la mejor combinación multi-cloud."
      />
    </SectionLayout>
  );
}
