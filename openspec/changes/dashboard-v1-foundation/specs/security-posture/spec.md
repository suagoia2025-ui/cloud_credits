## ADDED Requirements

### Requirement: Dashboard shows security posture summary
The system SHALL display a security posture widget on the dashboard with overall score, passed checks count, and top pending recommendations.

#### Scenario: Security widget renders
- **WHEN** dashboard loads
- **THEN** security widget shows score (0–100), count of passed/total checks, and up to 3 pending items

### Requirement: Security checks are provider-aware
Each security check SHALL reference a provider (or `global`) and a category: `iam`, `secrets`, `network`, `data`, or `billing`.

#### Scenario: Provider-specific check listed
- **WHEN** a check applies to Supabase RLS
- **THEN** check displays provider badge `Supabase` and category `data`

### Requirement: Security highlights cyber-use cases
The dashboard SHALL include at least one informational alert recommending isolated accounts/projects for security labs versus production workloads.

#### Scenario: Lab isolation tip shown
- **WHEN** user has active projects tagged as `lab` or `security`
- **THEN** alerts panel includes isolation recommendation for lab environments
