# Architecture Document

**Project:** Open-Source Team & Club Management Platform **Prepared By:**
Architect (Sam 🏗️, BMAD Persona)

---

## Section 1 — Purpose & Goals

**Purpose:** The architecture must support a free, ad-free, open-source platform
for school and club team management. It should ensure the system is:

- Simple to deploy and maintain for schools with limited IT resources.
- Secure and compliant with student data privacy regulations.
- Extensible for future growth without major rework.
- Based on **Epic Stack** defaults to minimize complexity and onboarding
  friction.

**Architectural Goals:**

1. **Self-Hosting First:** Deployment must be achievable by school IT staff or
   volunteers using Docker with minimal setup.
2. **Ad-Free Guarantee:** No ad-serving libraries, trackers, or monetization
   hooks in the codebase.
3. **Secure by Default:** HTTPS everywhere, strong authentication, and
   role-based access control.
4. **Extensible Core:** Prepare a plugin/add-on architecture for community
   contributions and future features.
5. **Lightweight & Performant:** SQLite + Epic Stack defaults must support
   typical school usage efficiently.
6. **Cloud-Friendly:** Managed hosting option should scale via Docker
   portability across providers (Fly.io, Render, Railway).

**Non-Goals:**

- ❌ No support for enterprise-scale SaaS with thousands of concurrent users.
- ❌ No payments, fundraising, or sponsorship features.
- ❌ No ads, trackers, or data monetization.
- ❌ Not intended to replace full-blown Student Information Systems (SIS).
- ❌ No dependency on closed/proprietary services that break OSS principles.

---

## Section 2 — System Overview & Context

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

## Section 3 — Detailed Component Design

- **Server-Side Modules:** Remix routes/actions, Auth (argon2id), RBAC, Zod
  validation, audit log.
- **Client (PWA):** Offline caching, push subscription, WCAG 2.1 AA
  accessibility.
- **Data Model:** Normalized schema with strict org scoping.
- **Queues:** Background jobs for email, push, reminders, retries with DLQ.
- **Error Handling:** Structured logs, friendly UX toasts, Sentry optional.
- **Security Controls:** HTTPS, RBAC enforcement, CSRF protection, secrets via
  env vars, audit logging.
- **Setup Wizard:** Org creation, admin user, branding, email provider config.
- **Backup & Restore:** Nightly SQLite backups, admin-triggered CSV exports.
- **Extensibility:** Plugin hooks (`onUserCreated`, `onEventChanged`, etc.) for
  V2.
- **Multi-Tenancy:** V1 = single-tenant; V2-ready with strict org scoping.
- **Testing Strategy:** Vitest (unit/integration), Playwright (E2E), axe-core
  (a11y), load/security checks.

---

## Section 4 — API & Route Specifications

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

## Section 5 — Deployment Topologies

**Self-Hosted (V1):**

- Single container (app+jobs) + reverse proxy.
- SQLite on encrypted volume.
- TLS via proxy (Caddy/Traefik/nginx).

**Managed Hosting:**

- Single-tenant containers; scaling vertical-first.
- Secrets in platform manager.
- Observability optional.

**Migration/Upgrade:**

- Prisma forward-only migrations.
- Rollback by reverting container + DB snapshot.

---

## Section 6 — Security & Compliance Checklist

- **Identity & Access:** argon2id, account lockouts, secure cookies.
- **Transport & Storage:** TLS 1.2+, encrypted SQLite volumes, daily backups.
- **Data Protection:** PII minimization, GDPR/FERPA compliance,
  right-to-be-forgotten.
- **App Security:** Input validation, CSRF protection, audit logging.
- **Testing:** Security regression tests in CI, OWASP checks, WCAG audits.

---

## Section 7 — Data Model & Schema Notes

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

## Section 8 — Ops Runbook

- **Backups:** Nightly snapshots (encrypted, 30-day retention), weekly restore
  tests.
- **Secrets:** `.env` for self-host; secret managers for hosting; quarterly
  rotation.
- **Monitoring:** `/healthz`, `/readyz`, latency/error metrics.
- **Incident Response:** Sev 1–3 categorization, rollback to last stable image,
  post-incident review.
- **Maintenance:** Weekly DLQ checks, monthly integrity check, quarterly secret
  rotation, annual DR test.
- **Managed SLA:** 99% uptime, 30-day rolling backups, 24h response time.

---

## Section 9 — Build & Release Process

- **Environments:** Local, Staging, Production.
- **Branching:** trunk-based; SemVer releases.
- **CI/CD:** GitHub Actions with lint, type-check, Vitest, Playwright, axe-core,
  build, Docker publish.
- **Releases:** Tagged, changelog auto-generated, deploy to hosting.
- **Rollback:** Last 2 Docker images + DB snapshot.
- **Cadence:** Patches as needed, minors monthly, majors at roadmap milestones.

---

## Section 10 — Architecture Risks & Future Considerations

**Risks:**

- SQLite scalability limits.
- Notification delivery dependency on Resend/Web Push.
- Self-hosting complexity for low-tech schools.
- Security vulnerabilities in OSS.
- Community contribution drift from principles.

**Future Considerations:**

- Migration path to Postgres for scale.
- Plugin ecosystem and integration APIs.
- Multi-tenant hosting for V2+.
- Native mobile wrappers.
- SIS/directory integrations.
- Advanced compliance (HIPAA, COPPA).
- Richer observability (metrics pipelines) while avoiding tracking/ads.
