# Section 4 — API & Route Specifications

- **Auth:** `/login`, `/logout`, `/register`
- **Organizations:** `/org`, `/org/overview`, `/org/email-provider`
- **Teams:** `/teams`, `/teams/:teamId`
- **Rosters:** `/teams/:teamId/roster`, `/guardianships`
- **Events:** `/teams/:teamId/events`, `/events/:eventId`
- **Availability:** `/events/:eventId/availability`
- **Messaging:** `/threads`, `/threads/:id/messages`
- **Notifications:** `/me/notifications`, admin error logs
- **Exports/Search:** `/exports/attendance.csv`, `/search`

All requests scoped by `organization_id` with deny-by-default RBAC.

---
