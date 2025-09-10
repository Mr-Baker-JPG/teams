# Product Requirements Document (PRD)

**Project:** Open-Source Team & Club Management Platform **Prepared By:**
Product Manager (Alex 👔, BMAD Persona)

---

## 1. Purpose & Scope

**Purpose:** The purpose of this project is to provide schools and community
organizations with a free, ad-free, open-source team management platform. The
product solves two core problems:

1. Existing solutions are either unaffordable or supported by inappropriate
   advertising.
2. Current tools are bloated with features schools don’t need.

This platform will deliver the essential workflows — scheduling, roster
management, availability tracking, and communication — in a way that is safe,
reliable, and extensible.

**Scope (V1):**

- ✅ In Scope:
  - Team & roster management
  - Scheduling (practices, games, events)
  - Availability tracking
  - Messaging & announcements
  - Notifications (basic email + PWA push)
  - Multi-team support
  - Self-hosting setup (SQLite, Docker, documentation)

- ❌ Out of Scope (V1):
  - Payments, fundraising, sponsorship features
  - Coaching/training modules
  - Media galleries
  - Statistics, analytics, or performance tracking
  - Full-scale mobile apps (beyond PWA support)
  - Support for non-school community leagues (deferred to V2)

---

## 2. Objectives & Success Criteria

**Objectives:**

1. Deliver a functional MVP supporting rosters, scheduling, availability
   tracking, and messaging.
2. Ensure the platform is **ad-free and free forever**, enforced by licensing.
3. Provide a self-hosting path (SQLite + Docker + docs) usable by basic IT
   staff.
4. Launch with at least **one pilot school** actively using the system.
5. Prepare an optional managed hosting option for schools lacking IT capacity.

**Success Criteria (V1 Launch):**

- **Adoption:** At least 1 pilot school actively using all four core workflows.
- **Functionality:** All “Launch Blocker” features achieve **95%+ test pass
  rate**.
- **Usability:** Core tasks (create roster, schedule events, send announcements)
  achievable within **3 clicks** from dashboard.
- **Hosting:** Docker deployment successfully tested by a non-developer.
- **Community Engagement:** At least 1 external contributor PR merged
  pre-launch.

---

## 3. Key Features & Requirements

**1. Team & Roster Management**

- Create/manage multiple teams.
- Add/remove players, coaches, guardians.
- Role-based permissions.
- Export/import roster (CSV).

**2. Scheduling**

- Create/edit/delete practices, games, meetings.
- Calendar view with team filters.
- Export to Google/iCal.
- Notifications for updates.

**3. Availability Tracking**

- Mark attendance (Yes/No/Maybe).
- Coaches see availability summary.
- Reminders for unmarked availability.

**4. Messaging & Announcements**

- Team-wide announcements.
- Direct messages (coach ↔ parent).
- Team chat (basic text).
- Message history stored securely.

**5. Notifications**

- Email via Resend.
- PWA push notifications.
- User opt-in/out preferences.

**6. Multi-Team Support**

- Coaches/parents switch between teams.
- Unified dashboard for multi-team users.

**7. Self-Hosting Setup**

- SQLite database (Epic Stack default).
- Docker deployment with env configs.
- Setup wizard for admin + email config.
- Non-developer tested docs.

---

## 4. Constraints & Assumptions

**Constraints:**

1. **Ad‑Free & Free‑Forever (Official):** Enforced via AGPL‑3.0‑or‑later plus
   Ad‑Free Covenant and Trademark Policy. Third parties may operate forks or
   services, but cannot use our marks on ad‑supported distributions.
2. **Technology:** Must use Epic Stack (React Router v7, SQLite, Prisma,
   TypeScript).
3. **No Payments:** Monetization limited to optional hosting/services; no
   fundraising/sponsorship modules.
4. **Privacy:** FERPA/GDPR compliance required.
5. **Governance:** Core maintainers enforce ad‑free principles and policies.

**Assumptions:**

1. Schools have minimal IT staff or volunteers capable of Docker setup.
2. Some schools will require optional managed hosting.
3. Roster, scheduling, and messaging are primary workflows.
4. Community will extend platform via OSS contributions.
5. Most parents/guardians will access via mobile browsers (PWA covers needs).

---

## 5. Epics & User Stories

### Epic 1 — Teams & Rosters (Launch Blocker)

User Stories

- As a coach, I can create a team and invite players/guardians.
- As a parent, I can update my child’s profile.
- As a school admin, I can export/import rosters (CSV).
- As an org admin, I can manage all team rosters.

Acceptance Criteria

- Org‑scoped RBAC enforced for all roster actions (coach, player, guardian,
  admin).
- CSV import validates required fields and handles duplicates with a master
  record strategy.
- CSV export includes all contact fields; timezone-safe fields.
- Create/edit/remove players/guardians; guardian invite triggers email.

### Epic 2 — Scheduling (Launch Blocker)

User Stories

- As a coach, I can create/edit/delete practices, games, and meetings.
- As a parent/player, I can view my team’s calendar.
- As a parent with multiple teams, I can view a combined calendar (see Epic 6).
- As an org admin, I can view all team schedules.

Acceptance Criteria

- Notifications are triggered on event creation/updates/cancellations.
- Calendar supports list and month/week views; timezone aware.
- iCal/ICS export available per team; conflict hints within team resources.
- Performance: calendar queries ≤1s for ≤50 players.

### Epic 3 — Availability (Launch Blocker)

User Stories

- As a player, I can mark attendance (Yes/No/Maybe) per event.
- As a coach, I can see availability summaries per event/team.
- As a parent, I get reminders for unmarked availability.

Acceptance Criteria

- RSVP status visible to coach; filterable by status.
- Reminder job sends nudges for unmarked within 24h of event.
- Export availability across teams (admin scope).

### Epic 4 — Messaging & Announcements (Launch Blocker)

User Stories

- As a coach, I can send team‑wide announcements.
- As a parent, I can message the coach privately.
- As a player, I can participate in basic team chat.
- As an org admin, I can send org‑wide announcements.

Acceptance Criteria

- Thread list + message history; unread states.
- RBAC enforced; audit log entries for message events; retention policy defined.
- Basic text only; media and rich embeds out of scope for V1.

### Epic 5 — Notifications & Preferences (V1 Important)

User Stories

- As a parent, I get an email when a new event is scheduled.
- As a player, I get a push notification when an event is canceled.
- As a user, I can manage my notification preferences (email/push).
- As an admin, I can view notification errors.

Acceptance Criteria

- Preferences support opt‑in/out per channel; stored per user.
- Email via Resend (with SMTP fallback); PWA push supported.
- Retries ≥3 with exponential backoff; DLQ for failures; admin error log route.

### Epic 6 — Multi‑Team Support (V1 Important)

User Stories

- As a parent/coach, I can switch between teams from a header/menu.
- As a parent, I can see a unified calendar across my teams.

Acceptance Criteria

- Team switcher component; RBAC scope preserved on switch.
- Unified calendar render ≤2s for ≤5 teams and ≤100 events.
- Persistent selection (session‑based) and accessible navigation.

### Epic 7 — Self‑Hosting Setup (V1 Important)

User Stories

- As IT staff, I can deploy via Docker Compose.
- As a volunteer, I can follow setup docs end‑to‑end.
- As an org admin, I can configure email and branding in a setup wizard.

Acceptance Criteria

- `docker-compose up` works out‑of‑box with `.env.example`.
- Setup wizard creates org + admin user and validates email provider.
- Docs validated by a non‑developer; health endpoints exposed (`/healthz`,
  `/readyz`).

---

## 6. Non-Functional Requirements (with KPIs)

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

## 7. Dependencies

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

## 8. Open Issues

1. Hosting offering scope (single-tenant vs multi-tenant).
2. External FERPA/GDPR compliance audit.
3. Notification preference granularity.
4. Multi-org support (deferred, but requires early planning).
5. Branding customization (V1 or V2).
6. Document and publish Ad‑Free Covenant and Trademark Policy in the product
   site and README (repo done; product docs pending).

---

## 9. Approval & Sign-Off

**Prepared By:**

- Product Manager (Alex 👔, BMAD Persona)

**Reviewed By:**

- Analyst (Mary 📊)
- Architect (Sam 🏗️)
- QA Engineer (Jordan 🧪)
- UX Expert (Taylor 🎨)

**Approval Required From:**

- Product Owner (Chris 📌)
- Core Maintainers (Governance & Licensing enforcement)
