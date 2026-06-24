import { GlassCard } from "@/components/shared/glass-card";

export function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <GlassCard className="mx-auto max-w-lg text-center">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
        Próximamente
      </p>
      <h2 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
        {title}
      </h2>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">{description}</p>
    </GlassCard>
  );
}
