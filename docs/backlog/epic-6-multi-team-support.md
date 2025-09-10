# Epic 6: Multi-Team Support

Stories:

- Parent/coach can switch between teams from header/menu.
- Parent with multiple teams sees a unified calendar view.

Acceptance:

- RBAC scope preserved when switching teams.
- Unified calendar render ≤2s for ≤5 teams and ≤100 events.
- Persistent selection (session‑based) and accessible navigation.

Tasks:

- UI: Team switcher component; global context for active team(s).
- Calendar: filter + merge multiple teams; perf test.
- Tests: E2E team switch and combined calendar.
- Persist selection in session; restore on login.
- Accessibility: labels and keyboard navigation for switcher.
