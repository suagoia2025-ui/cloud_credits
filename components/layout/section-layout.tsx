import { AppHeader } from "@/components/layout/app-header";

export function SectionLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            {title}
          </h1>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            {description}
          </p>
        </section>
        {children}
      </main>
    </div>
  );
}
