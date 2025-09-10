# Section 2 — System Overview & Context

**High-Level System Flow:**

```
Users (Parents, Players, Coaches, Org Admins, IT)
           │  HTTPS (PWA)
           ▼
   ┌───────────────────────────┐
   │     Web Client (PWA)      │ React Router v7 + Epic Stack UI
   └─────────────┬─────────────┘
                 │  HTTPS
                 ▼
   ┌───────────────────────────┐
   │  App Server (Epic Stack)  │ Remix runtime, RBAC, validation
   └───────┬──────────┬────────┘
           │          │
   SQLite  │          │ Queue / Jobs
 (Prisma)  │          │ (email, retries, reminders)
           ▼          ▼
   ┌─────────────┐  ┌───────────────────┐
   │  Database   │  │ Background Worker │
   └─────────────┘  └─────────┬─────────┘
                               │
                      External Services
                               ▼
               ┌──────────────────────────┐
               │  Resend (Email)          │
               │  Web Push API (PWA)      │
               │  Sentry/Logtail (opt.)   │
               └──────────────────────────┘
```

**Deployment Models:**

- **Self-Hosted:** Docker compose; single-tenant per school.
- **Managed Hosting:** Single-tenant containers per school; portable across
  Fly.io/Render/Railway.

**Data Domains:** Organization, Team, User, Membership, Event, Availability,
MessageThread, Message, NotificationPreference, PushSubscription, AuditLog.

---
