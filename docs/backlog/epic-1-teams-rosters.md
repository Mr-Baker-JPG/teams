# Epic 1: Teams & Rosters

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
