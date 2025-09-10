# Ad‑Free Covenant

This project is committed to being ad‑free by design.

Principles:

- No advertising SDKs, ad networks, or tracking pixels.
- No behavioral analytics or cross‑site tracking.
- Telemetry is opt‑in, privacy‑preserving, and self‑hosted only (if used at
  all).
- Documentation, demo, and official builds must not include any form of ads.

Allowed (optional):

- Self‑hosted, privacy‑preserving metrics (e.g., Plausible self‑hosted) with
  explicit opt‑in and clear disclosure.
- Log aggregation and error monitoring that do not track end‑users across sites
  and are fully disclosed in docs.

Enforcement:

- CI includes a guard to block known ad/tracker packages in dependencies.
- Maintainers will reject contributions that introduce ad tech or tracking.
- Trademark policy forbids using project marks on distributions that include
  ads.
