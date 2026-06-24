## ADDED Requirements

### Requirement: Dashboard displays consolidated cloud overview
The system SHALL render a dashboard page at `/` showing KPI summary cards, provider credit grid, alerts panel, security posture widget, and quick-action navigation stubs.

#### Scenario: User opens dashboard
- **WHEN** user navigates to `/`
- **THEN** system displays total available credits, estimated monthly burn, days-until-depletion projection, and active project count

#### Scenario: Dashboard loads with mock data in v1
- **WHEN** no backend API is configured
- **THEN** system renders dashboard using local mock data without errors

### Requirement: Dashboard supports five cloud providers
The dashboard SHALL display credit status for exactly these providers: GCP, AWS, Vercel, Railway, and Supabase.

#### Scenario: Provider grid renders all platforms
- **WHEN** dashboard loads successfully
- **THEN** each of the five providers appears as a card with name, balance, usage percentage, and status badge

### Requirement: Quick actions expose future modules
The dashboard SHALL provide navigation links to Directory (`/directory`), Deploy Advisor (`/deploy`), and Challenges (`/challenges`) even if those routes are partial stubs in v1.

#### Scenario: User clicks quick action
- **WHEN** user selects a quick-action link
- **THEN** system navigates to the corresponding route without full-page reload
