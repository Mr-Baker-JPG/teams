# Section 7 — Data Model & Schema Notes

- Entities: Organization, User, Membership, Team, RosterMembership,
  Guardianship, Event, Availability, Resource, MessageThread, Message,
  NotificationPreference, PushSubscription, AuditLog.
- Strict org scoping on all queries.
- Indices on hot paths (events by team/date, availability, memberships).
- Soft-delete/archival instead of destructive deletes.
- Reporting views for coach/admin dashboards.
- Enumerations centralized in TypeScript + Prisma.
- Migration strategy: Prisma forward-only, SQLite→Postgres path for V2.

---
