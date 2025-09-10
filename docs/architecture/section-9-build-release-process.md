# Section 9 — Build & Release Process

- **Environments:** Local, Staging, Production.
- **Branching:** trunk-based; SemVer releases.
- **CI/CD:** GitHub Actions with lint, type-check, Vitest, Playwright, axe-core,
  build, Docker publish.
- **Releases:** Tagged, changelog auto-generated, deploy to hosting.
- **Rollback:** Last 2 Docker images + DB snapshot.
- **Cadence:** Patches as needed, minors monthly, majors at roadmap milestones.

---
