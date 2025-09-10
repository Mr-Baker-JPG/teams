# License Options (Ad‑Free & Free‑Forever Principle)

Goal: Enforce “ad‑free by design” and “free‑forever” while maximizing community
contribution and adoption.

Important reality check:

- OSI‑approved open source licenses (GPL/AGPL/MIT/Apache) explicitly allow
  commercial use, including selling and hosting. You cannot legally forbid
  “selling the software” and remain OSI‑open‑source.
- If you must strictly prohibit selling/ads, the license becomes
  source‑available (not OSI‑open‑source). That’s acceptable if deliberate, but
  it changes positioning.

## Option A — AGPLv3 + Policy + Trademark (Recommended)

- License: AGPLv3 (strong copyleft, forces network‑deployers to share changes).
- Add: “Ad‑Free Covenant” (policy doc) stating no ads/trackers in official
  distribution.
- Add: Trademark policy and project name usage rules to prevent using the
  official marks on ad‑supported or paid forks.
- Governance: Maintainers enforce policy in official repo/distribution. Forks
  can add ads, but cannot use trademarks or claim affiliation. Pros:
- True open source, encourages contributions; AGPL offers strongest reciprocity.
- Clear governance and code‑level exclusion of ad tech. Cons:
- Does not legally prevent third parties from selling a rebranded fork without
  trademarks.

## Option B — Non‑Commercial + No‑Ads Custom License (Strict Enforcement)

- License: Custom “NC + No‑Ads” license (or Commons Clause‑style restriction).
- Effect: Forbids selling and ad monetization. Source is available. Pros:
- Strong legal enforcement of principles. Cons:
- Not OSI open source; reduces ecosystem adoption, some distros/companies will
  avoid it.

## Option C — Dual License (AGPLv3 + Commercial Source‑Available)

- Default: AGPLv3 for community.
- Commercial: Offer separate source‑available license with additional terms
  (e.g., no‑ads, branding usage) for partners. Pros:
- Flexibility for different audiences. Cons:
- More legal overhead; requires clear governance.

## Option D — SSPL or BSL Variants (Not Recommended Here)

- SSPL/BSL impose restrictions; controversial; likely overkill for this
  project’s goals.

---

## Recommendation

Choose Option A (AGPLv3 + Ad‑Free Covenant + Trademark Policy). It keeps the
project truly open while protecting the official distribution. Combine with
code‑level decisions (no ad libraries) and CI checks.

## Next Steps (Sprint 0)

1. Add LICENSE: AGPLv3.
2. Add `docs/ad-free-covenant.md` (policy), `docs/trademark-policy.md`.
3. Add `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, and a simple GOVERNANCE section
   in README.
4. Add a linter/check that blocks inclusion of known ad/analytics packages in
   dependencies.
5. Document “No Ads” principle in `README.md` and home page.

## Policy Draft Pointers

- Ad‑Free Covenant should ban ad SDKs, trackers, and 3rd‑party behavioral
  analytics; allow privacy‑respecting, self‑hosted metrics (optional) with
  opt‑in.
- Trademark policy should forbid use of project name/logo on any distribution
  that includes ads or violates the covenant.
