# Epic 3: Availability

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
