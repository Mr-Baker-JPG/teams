# Prioritized Backlog (MVP)

Status: Derived from PRD/Architecture. Use this to create issues.

## Epics (priority order)

1. Teams & Rosters — Launch Blocker
2. Scheduling — Launch Blocker
3. Availability — Launch Blocker
4. Messaging & Announcements — Launch Blocker
5. Notifications & Preferences — V1 Important

6) Multi-Team Support — V1 Important
7) Self-Hosting Docs & Setup Wizard — V1 Important
8) RBAC & Org Scoping — Cross-cutting foundation
9) CI/CD & Quality Gates — Cross-cutting foundation
10) Observability & Error Handling (minimal) — V1 Nice-to-have

---

## Epic 1: Teams & Rosters

User Stories:

- Coach can create a team and invite players/guardians.
- Admin can import/export roster CSV.
- Parent can update child profile.

Acceptance:

- Org-scoped access; roles enforced (coach, player, guardian, admin).
- CSV import validates required fields and handles duplicates with a master
  record strategy.

Tasks:

- Prisma: Team, Membership, Guardianship, RosterMembership.
- Routes/UI: `/teams`, `/teams/:teamId`, `/teams/:teamId/roster`.
- CSV import/export utilities + tests.
- RBAC policies + unit tests.
- E2E: create team, add players, guardian invite flow (stubbed).
- Guardian invite email via Resend (SMTP fallback) + test stub.
- Parent profile update route/forms + optimistic UI + tests.
- CSV duplicate handling with master record strategy + unit tests.

## Epic 2: Scheduling

Stories:

- Coach creates practices/games; parents see calendar.
- Parent with multiple teams sees combined calendar.

Acceptance:

- Notifications on event create/update/cancel.
- Timezone aware; conflict hint within same team.

Tasks:

- Prisma: Event, Resource (optional), indices.
- Routes/UI: calendar list/month; ICS export.
- Validation + tests; E2E for create/edit/delete.
- Notification hooks (email/push) for create/update/cancel.
- Timezone normalization/display tests; server/client consistency.
- Performance test: calendar queries ≤1s for ≤50 players.

## Epic 3: Availability

Stories:

- Player marks Yes/No/Maybe; coach sees summary.

Acceptance:

- RSVP status visible to coach; filterable by status.
- Reminders sent for unmarked within 24h of event.

Tasks:

- Prisma: Availability.
- Routes/UI: `/events/:eventId/availability`.
- Worker job: reminder email stub; retries.
- Coach availability summary view (per event/team) + tests.
- RSVP filters (Yes/No/Maybe) in UI and API.
- Admin export across teams (CSV) + access checks.

## Epic 4: Messaging & Announcements

Stories:

- Coach posts announcement; parent sends direct message; basic team chat.
  Acceptance:
- Thread list, message history, unread states; audit log entries; retention
  policy defined.

Tasks:

- Prisma: MessageThread, Message, AuditLog.
- Routes/UI: `/threads`, `/threads/:id/messages`.
- RBAC + retention policy.
- Unread state tracking per thread/user + tests.
- Retention cleanup job + tests.

## Epic 5: Notifications & Preferences

Tasks:

- Resend adapter + SMTP fallback; PWA push subscription.
- NotificationPreference model; user settings page.
- DLQ/retry mechanism; admin error log route.
- Preferences UI (opt‑in/out per channel) + persistence tests.
- Exponential backoff ≥3 retries; SMTP fallback path tests.

## Epic 6: Multi-Team Support

Stories:

- Parent/coach can switch between teams from header/menu.
- Parent with multiple teams sees a unified calendar view.

Acceptance:

- RBAC scope preserved when switching teams.
- Unified calendar render ≤2s for ≤5 teams and ≤100 events.
- Persistent selection (session‑based) and accessible navigation.

Tasks:

- UI: Team switcher component; global context for active team(s).
- Calendar: filter + merge multiple teams; perf test.
- Tests: E2E team switch and combined calendar.
- Persist selection in session; restore on login.
- Accessibility: labels and keyboard navigation for switcher.

## Foundations: RBAC & Org Scoping

Tasks:

- Deny-by-default policy helpers; orgId on all queries.
- Seed roles; tests for access boundaries.

## Foundations: Compliance & Privacy

Tasks:

- Implement and test Right‑to‑be‑Forgotten flow (data export + deletion queues).
- Privacy policy page; document processors (email/push) and DPAs.
- Account lockout after 5 failed logins (unit/integration tests).
- Backups: nightly job and weekly restore test automation; runbook docs.

## Foundations: CI/CD & Quality Gates

Tasks:

- Ensure lint, typecheck, Vitest, Playwright, axe run in CI.
- Minimal seed data + test harness docs.

## Epic 7: Self-Hosting Docs & Setup Wizard

Tasks:

- Docker Compose works out‑of‑box with `.env.example`; health endpoints exposed
  (`/healthz`, `/readyz`).
- Setup wizard creates org + admin user; validates email provider configuration.
- Self-hosting guide validated by non-developer; feedback loop captured.
