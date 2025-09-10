# Section 1 — Purpose & Goals

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
