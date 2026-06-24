import { SectionLayout } from "@/components/layout/section-layout";
import { ComingSoon } from "@/components/shared/coming-soon";

export default function ChallengesPage() {
  return (
    <SectionLayout
      title="Retos legales"
      description="Hackathons, programas educativos y retos oficiales para ganar créditos cloud"
    >
      <ComingSoon
        title="Tracker de retos y elegibilidad"
        description="Seguimiento de progreso en AWS Educate, Cloud Skills Boost, hackathons y programas startup con recordatorios de deadlines."
      />
    </SectionLayout>
  );
}
