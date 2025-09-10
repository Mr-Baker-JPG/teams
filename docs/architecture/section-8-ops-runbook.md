# Section 8 — Ops Runbook

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
