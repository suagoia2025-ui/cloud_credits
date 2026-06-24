## ADDED Requirements

### Requirement: Directory lists official credit programs per provider
The system SHALL provide a `/directory` page listing legal, official credit and free-tier programs for GCP, AWS, Vercel, Railway, and Supabase.

#### Scenario: Directory page accessible
- **WHEN** user navigates to `/directory`
- **THEN** system displays programs grouped by provider with name, description, typical credit amount, eligibility summary, and official URL

### Requirement: Programs are marked by acquisition type
Each directory entry SHALL include a type tag: `free-tier`, `trial`, `startup`, `education`, `referral`, or `event`.

#### Scenario: Filter by program type
- **WHEN** user selects a program type filter
- **THEN** directory list shows only programs matching that type

### Requirement: Directory links open official sources
Each program entry SHALL include an external link to the provider's official documentation or application page, opened in a new tab with `rel="noopener noreferrer"`.

#### Scenario: External link security
- **WHEN** user clicks an official program link
- **THEN** link opens in new tab with `noopener noreferrer` attributes
