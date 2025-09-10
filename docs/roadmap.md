# Roadmap (V1 → MVP)

Status: Discovery docs (brief, PRD, architecture) are done. This roadmap turns
them into an execution plan.

## Phase 2 — Core MVP Build (target: 4–6 sprints)

Exit criteria (from PRD):

- 1 pilot school active on all 4 core workflows
- 95%+ test pass on launch blockers
- Docker self-host verified by a non-dev
- Ad-free and free-forever principle documented and enforced (see license
  decision)

### Sprint 0 — Foundations & Decisions (now)

- Decide license + policy to uphold “ad‑free, free‑forever” (see
  `docs/license-options.md`).
- Confirm org scoping model (single-tenant V1) and RBAC roles.
- Align Prisma schema to V1 entities (Organization, Team, User, Membership,
  Event, Availability, Message[Thread], NotificationPreference).
- Baseline CI: typecheck, lint, unit (Vitest), e2e (Playwright), a11y (axe).
- Create feature flags or route stubs for MVP epics.

### Sprint 1 — Teams & Rosters (Launch Blocker)

Deliverables:

- Teams: CRUD, membership roles (coach, player, guardian), org scope enforced.
- Roster: Add/edit/remove players and guardians; CSV import/export.
- UX: Team list, roster table, role badges.
- Tests: unit + Playwright happy paths; CSV import edge cases.
- Routes: `/teams`, `/teams/:teamId`, `/teams/:teamId/roster`.

### Sprint 2 — Scheduling (Launch Blocker)

Deliverables:

- Events: practices/games/meetings CRUD; team filter; conflict hints.
- Calendar views (list + month/week).
- iCal/ICS export; timezone handling.
- Routes: `/teams/:teamId/events`, `/events/:eventId`.

### Sprint 3 — Availability (Launch Blocker)

Deliverables:

- RSVP (Yes/No/Maybe) per user; summaries for coaches.
- Reminders for unmarked availability (job + email stub).
- Route: `/events/:eventId/availability`.

### Sprint 4 — Messaging & Announcements (Launch Blocker)

Deliverables:

- Team-wide announcements; coach↔parent direct messages; basic team chat.
- Thread list + message history; RBAC + audit log on messages.
- Routes: `/threads`, `/threads/:id/messages`.

### Sprint 5 — Notifications & Preferences (Important V1)

Deliverables:

- Email via Resend (with SMTP fallback); PWA push opt‑in.
- User notification preferences; retries and DLQ.
- Admin error log view.

## Phase 3 — MVP Launch

- Self-hosting docs (Docker) validated by non-developer.
- Staging → pilot school onboarding; uptime monitors.
- Governance: CONTRIBUTING, CODE_OF_CONDUCT, maintainers policy.

## Phase 4 — Stabilization & Community

- Security hardening, backups/runbook validation, plugin hooks scaffold.

Notes:

- Multi-team user dashboard can land across Sprints 2–3 (thin slice first).
- Keep SQLite; plan V2 Postgres path in architecture (already noted).
