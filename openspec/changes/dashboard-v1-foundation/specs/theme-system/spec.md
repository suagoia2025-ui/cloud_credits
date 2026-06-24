## ADDED Requirements

### Requirement: Application supports light and dark themes
The system SHALL provide day (light) and night (dark) themes togglable from the dashboard header.

#### Scenario: Theme toggle
- **WHEN** user clicks the theme toggle control
- **THEN** application switches between light and dark mode with a smooth transition on surface colors

### Requirement: Theme preference persists across sessions
The system SHALL persist the user's theme preference in `localStorage` and respect `prefers-color-scheme` on first visit when no preference is stored.

#### Scenario: First visit without stored preference
- **WHEN** user visits for the first time with OS dark mode enabled
- **THEN** application renders in dark mode by default

#### Scenario: Returning user preference
- **WHEN** user previously selected light mode
- **THEN** application renders in light mode on subsequent visits

### Requirement: Liquid Glass tokens adapt per theme
The system SHALL define separate CSS custom property sets for light and dark themes covering glass surfaces, copper brand accents, text contrast, and status colors.

#### Scenario: Readable contrast in both themes
- **WHEN** theme is light or dark
- **THEN** primary text maintains WCAG AA contrast (4.5:1 minimum) against surface backgrounds
