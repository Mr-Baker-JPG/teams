# Epic 2: Scheduling

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
