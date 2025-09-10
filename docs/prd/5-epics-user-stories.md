# 5. Epics & User Stories

## Epic 1 — Teams & Rosters (Launch Blocker)

User Stories

- As a coach, I can create a team and invite players/guardians.
- As a parent, I can update my child’s profile.
- As a school admin, I can export/import rosters (CSV).
- As an org admin, I can manage all team rosters.

Acceptance Criteria

- Org‑scoped RBAC enforced for all roster actions (coach, player, guardian,
  admin).
- CSV import validates required fields and handles duplicates with a master
  record strategy.
- CSV export includes all contact fields; timezone-safe fields.
- Create/edit/remove players/guardians; guardian invite triggers email.

## Epic 2 — Scheduling (Launch Blocker)

User Stories

- As a coach, I can create/edit/delete practices, games, and meetings.
- As a parent/player, I can view my team’s calendar.
- As a parent with multiple teams, I can view a combined calendar (see Epic 6).
- As an org admin, I can view all team schedules.

Acceptance Criteria

- Notifications are triggered on event creation/updates/cancellations.
- Calendar supports list and month/week views; timezone aware.
- iCal/ICS export available per team; conflict hints within team resources.
- Performance: calendar queries ≤1s for ≤50 players.

## Epic 3 — Availability (Launch Blocker)

User Stories

- As a player, I can mark attendance (Yes/No/Maybe) per event.
- As a coach, I can see availability summaries per event/team.
- As a parent, I get reminders for unmarked availability.

Acceptance Criteria

- RSVP status visible to coach; filterable by status.
- Reminder job sends nudges for unmarked within 24h of event.
- Export availability across teams (admin scope).

## Epic 4 — Messaging & Announcements (Launch Blocker)

User Stories

- As a coach, I can send team‑wide announcements.
- As a parent, I can message the coach privately.
- As a player, I can participate in basic team chat.
- As an org admin, I can send org‑wide announcements.

Acceptance Criteria

- Thread list + message history; unread states.
- RBAC enforced; audit log entries for message events; retention policy defined.
- Basic text only; media and rich embeds out of scope for V1.

## Epic 5 — Notifications & Preferences (V1 Important)

User Stories

- As a parent, I get an email when a new event is scheduled.
- As a player, I get a push notification when an event is canceled.
- As a user, I can manage my notification preferences (email/push).
- As an admin, I can view notification errors.

Acceptance Criteria

- Preferences support opt‑in/out per channel; stored per user.
- Email via Resend (with SMTP fallback); PWA push supported.
- Retries ≥3 with exponential backoff; DLQ for failures; admin error log route.

## Epic 6 — Multi‑Team Support (V1 Important)

User Stories

- As a parent/coach, I can switch between teams from a header/menu.
- As a parent, I can see a unified calendar across my teams.

Acceptance Criteria

- Team switcher component; RBAC scope preserved on switch.
- Unified calendar render ≤2s for ≤5 teams and ≤100 events.
- Persistent selection (session‑based) and accessible navigation.

## Epic 7 — Self‑Hosting Setup (V1 Important)

User Stories

- As IT staff, I can deploy via Docker Compose.
- As a volunteer, I can follow setup docs end‑to‑end.
- As an org admin, I can configure email and branding in a setup wizard.

Acceptance Criteria

- `docker-compose up` works out‑of‑box with `.env.example`.
- Setup wizard creates org + admin user and validates email provider.
- Docs validated by a non‑developer; health endpoints exposed (`/healthz`,
  `/readyz`).

---
