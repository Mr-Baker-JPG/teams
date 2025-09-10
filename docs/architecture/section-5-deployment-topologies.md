# Section 5 — Deployment Topologies

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
