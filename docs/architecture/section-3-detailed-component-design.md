# Section 3 — Detailed Component Design

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
