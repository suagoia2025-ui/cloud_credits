import { ProgramList } from "@/components/directory/program-list";
import { SectionLayout } from "@/components/layout/section-layout";
import { creditPrograms } from "@/lib/data/mock";

export default function DirectoryPage() {
  return (
    <SectionLayout
      title="Directorio de créditos"
      description="Programas oficiales y legales para obtener créditos en GCP, AWS, Vercel, Railway y Supabase"
    >
      <ProgramList programs={creditPrograms} />
    </SectionLayout>
  );
}
