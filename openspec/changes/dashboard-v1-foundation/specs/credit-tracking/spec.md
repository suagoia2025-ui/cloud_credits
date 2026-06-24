## ADDED Requirements

### Requirement: Credit accounts track balance and consumption
The system SHALL model each credit account with provider, balance, currency, consumed amount, alert thresholds (70% and 90%), and optional expiration date.

#### Scenario: Credit usage calculated
- **WHEN** a credit account has balance 300 and consumed 210
- **THEN** system displays 70% usage and triggers warning-level alert status

#### Scenario: Credit expiration displayed
- **WHEN** a credit account has an expiration date within 30 days
- **THEN** dashboard shows expiration warning in alerts panel

### Requirement: Dashboard projects credit runway
The system SHALL estimate days-until-depletion based on average daily burn rate across all active credit accounts.

#### Scenario: Runway projection
- **WHEN** total remaining credits are $150 and average daily burn is $10
- **THEN** dashboard displays approximately 15 days of runway

### Requirement: Alert panel surfaces billing risks
The system SHALL show alerts sorted by severity: critical (≥90% usage or ≤7 days runway), warning (≥70% usage or expiring credits), info (general tips).

#### Scenario: Critical alert visible
- **WHEN** any provider credit usage reaches 90% or more
- **THEN** alerts panel shows a critical alert for that provider
