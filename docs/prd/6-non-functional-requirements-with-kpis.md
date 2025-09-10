# 6. Non-Functional Requirements (with KPIs)

**Performance**

- ≤500ms average API response time.
- ≤2s load on broadband; ≤4s on 4G.
- ≤1s roster/calendar queries (≤50 players).

**Reliability**

- Managed hosting uptime ≥99% monthly.
- Email retries ≥3 times with exponential backoff.

**Security**

- TLS 1.2+ for all traffic.
- argon2id password hashing.
- Account lockout after 5 failed logins.
- 0 critical vulnerabilities in penetration tests.

**Compliance & Privacy**

- FERPA/GDPR review checklist before launch.
- Right-to-be-forgotten implemented.
- No third‑party marketing/ads/tracking. Operational processors (e.g., email
  provider/SMTP) permitted with DPAs and documented in privacy policy.
- Privacy policy displayed at login.

**Usability**

- WCAG 2.1 AA compliance.
- Lighthouse ≥90 mobile performance/accessibility.
- PWA offline cache (calendar/roster) ≥24h.

**Maintainability**

- ≥80% test coverage on core modules.
- CI/CD must pass all builds/tests before merge.
- Plugin API stubbed in V1.

---
