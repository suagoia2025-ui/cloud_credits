export type CloudProvider = "gcp" | "aws" | "vercel" | "railway" | "supabase";

export type ProjectType = "production" | "staging" | "lab" | "security";

export type ProgramType =
  | "free-tier"
  | "trial"
  | "startup"
  | "education"
  | "referral"
  | "event";

export type AlertSeverity = "critical" | "warning" | "info";

export type SecurityCategory =
  | "iam"
  | "secrets"
  | "network"
  | "data"
  | "billing";

export interface ProviderMeta {
  id: CloudProvider;
  name: string;
  shortName: string;
  color: string;
  icon: string;
}

export interface CreditAccount {
  id: string;
  provider: CloudProvider;
  label: string;
  balance: number;
  consumed: number;
  currency: "USD";
  expiresAt: string | null;
  alertThresholds: { warning: number; critical: number };
}

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  providers: CloudProvider[];
  monthlyEstimateUsd: number;
}

export interface CreditProgram {
  id: string;
  provider: CloudProvider;
  name: string;
  type: ProgramType;
  creditAmount: string;
  eligibility: string;
  officialUrl: string;
}

export interface SecurityCheck {
  id: string;
  provider: CloudProvider | "global";
  category: SecurityCategory;
  title: string;
  passed: boolean;
  priority: "high" | "medium" | "low";
}

export interface DashboardAlert {
  id: string;
  severity: AlertSeverity;
  provider?: CloudProvider;
  message: string;
}

export interface DashboardSummary {
  totalCreditsUsd: number;
  totalConsumedUsd: number;
  monthlyBurnUsd: number;
  runwayDays: number;
  activeProjects: number;
}
