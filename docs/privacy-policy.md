# Privacy Policy (Draft)

This project is committed to protecting the privacy of students, parents,
coaches, and school administrators. This draft policy outlines how data is
collected, used, and protected when using the official distributions of the
software.

Scope

- Applies to official project distributions and managed hosting offerings.
- Self-hosted deployments are responsible for their own compliance; we provide
  guidance and defaults to support privacy.

What We Collect

- Account data: name, email, role, organization and team membership.
- Roster data: player/guardian information necessary for team communication and
  scheduling.
- Event and availability data: practices/games/meetings, RSVP statuses.
- Notification preferences and delivery metadata (success/failure codes).
- System logs and error reports (no cross-site tracking; Sentry/Logtail optional
  and disclosed).

What We Do Not Collect

- No behavioral advertising identifiers, third-party trackers, or marketing
  analytics.
- No sale of personal data.

Use of Data

- Provide core features: rosters, scheduling, availability, messaging,
  notifications.
- Operate and secure the service: authentication, auditing, abuse prevention.
- Improve reliability and performance; optional telemetry is opt-in and
  self-hosted if used.

Legal Basis

- Consent for optional features (e.g., push notifications) and telemetry.
- Legitimate interests for core service operation and security.
- Schools remain data controllers for student data under FERPA/GDPR.

Data Retention

- Message retention policy is configurable; defaults documented.
- Backups retained for 30 days by default; restore testing performed regularly.

Third-Party Processors

- Email delivery: Resend (with SMTP fallback) or school-provided SMTP.
- Error/log aggregation (optional): Sentry/Logtail or self-hosted alternatives.
- All processors are documented here; Data Processing Agreements (DPAs) apply
  for managed hosting.

Your Rights

- Access, correction, and deletion (Right-to-be-Forgotten) workflows are
  supported.
- School administrators can export user data and initiate deletion queues.

Security

- TLS 1.2+, role-based access control, argon2id hashing, rate limiting, and
  audit logs.
- Encrypted storage for databases/volumes where supported by the hosting
  provider.

Contact

- For privacy inquiries about official distributions, open an issue or email the
  maintainers listed in the repository.

Status

- Draft for MVP; subject to legal review and updates prior to production launch.
