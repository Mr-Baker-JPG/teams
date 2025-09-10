# 7. Dependencies

**Core Stack**: Epic Stack, React Router v7, SQLite, Prisma, TypeScript,
Tailwind. **Auth**: Epic Stack Auth (Remix Auth). **Email/Notifications**:
Resend, Web Push API, queue system. **Hosting**: Docker, Fly.io/Render/Railway,
GitHub Actions. **Monitoring**: Logtail, Sentry (optional). **Testing**: Vitest,
Playwright, axe-core. **Docs/Governance**: Docusaurus/Epic Docs, GitHub
Projects.

**Third-Party Risk Assessment:**

- **Resend (Email)** → Outage risk. Mitigation: SMTP fallback.
- **SQLite** → Scalability limits. Mitigation: Migration path in V2.
- **Hosting Providers** → Vendor lock-in. Mitigation: Docker portability.
- **SaaS Tools (Sentry, Logtail)** → Optional, not required for core system.

---
