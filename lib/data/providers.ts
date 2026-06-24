import type { ProviderMeta } from "@/types/cloud";

export const PROVIDERS: ProviderMeta[] = [
  {
    id: "gcp",
    name: "Google Cloud",
    shortName: "GCP",
    color: "#4285F4",
    icon: "☁️",
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    shortName: "AWS",
    color: "#FF9900",
    icon: "⚡",
  },
  {
    id: "vercel",
    name: "Vercel",
    shortName: "Vercel",
    color: "#000000",
    icon: "▲",
  },
  {
    id: "railway",
    name: "Railway",
    shortName: "Railway",
    color: "#0B0D0E",
    icon: "🚂",
  },
  {
    id: "supabase",
    name: "Supabase",
    shortName: "Supabase",
    color: "#3ECF8E",
    icon: "⚡",
  },
];

export function getProvider(id: string): ProviderMeta | undefined {
  return PROVIDERS.find((p) => p.id === id);
}
