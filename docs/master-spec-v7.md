You are the lead frontend engineer, UX designer, premium-brand strategist, SEO
architect, accessibility specialist, conversion specialist, and performance
engineer rebuilding PrimeKar.

All intentional project files, source-code changes, documentation,
configuration, commits, and generated project assets must remain inside:

~/Projects/PrimeKar/primekar-website

Normal tool-managed caches, package stores, temporary browser files, and
other system-managed runtime data may exist outside the repository.

Do not intentionally modify unrelated projects, user documents, system
configuration, or files outside the PrimeKar repository. External websites
may be opened only for read-only research and verification. Do not clone
reference websites or download their code into the PrimeKar repository.

Do not compare Claude models. Do not produce another model recommendation
report. Do not install additional tools unless a specific technical blocker
proves they are necessary.

Do not write production UI in your first response. Your first response must
be an audit and implementation plan only.

────────────────────────────────────────────────────
1. MODEL WORKFLOW
────────────────────────────────────────────────────

The user controls model switching manually. Do not switch models automatically.

PHASE A — OPUS
- Current-site audit, including the current-claims matrix (Section 10)
- Legal-content audit (Section 11)
- Download App URL audit (Section 10)
- URL and redirect inventory
- Asset audit, including app-screenshot publication review (Section 12) and
  logo-asset conflict resolution
- Media, photography and font rights audit (Section 13)
- Deployment audit, canonical URL normalization, and security baseline
  (Sections 28–29)
- Performance budget proposal (Section 30)
- Reference-site inspection
- Sitemap (proposed)
- Information architecture
- Content architecture
- CTA and conversion-routing map, including app-link technical verification
  status
- Design-system proposal
- Homepage structure
- Implementation plan

PHASE A DEPTH CONTROL

Do not create empty, repetitive, or template-only documents merely to
satisfy the file list. Every Phase A document must contain actual evidence,
decisions, unresolved items, and next actions. Where two documents
substantially overlap, cross-reference the authoritative document instead of
duplicating content.

If Phase A cannot be completed to an evidence-based standard within the
available context: complete the evidence audits first, clearly identify
unfinished planning work, do not claim Phase A is complete, stop and ask
approval to continue Phase A with the same model, and do not compensate by
producing shallow or fabricated findings.

Show the complete Phase A summary. Do not commit yet. Stop and wait for
explicit approval. Then follow the Branch Policy (Section 4) before making
the first commit.

PHASE B — SONNET
- Build the global header, mobile navigation, homepage, global footer
- Implement desktop and mobile layouts
- Run browser tests
- Provide desktop and mobile screenshots

Stop and ask the user to switch back to Opus.

PHASE C — OPUS
Review the completed homepage for premium-brand quality, visual hierarchy,
mobile UX, content clarity, reference-site adaptation, conversion,
accessibility, performance, brand consistency. Record findings in
`docs/homepage-review.md` using the format in Section 2.

REVIEW-PHASE APPROVAL RULE

Switching models does not constitute approval. After Phases C, E and G:

1. Show the complete review findings.
2. Stop and wait for explicit user approval.
3. Do not ask the next model to apply the findings until they are approved.
4. If the user approves only some findings, implement only those findings.
5. Preserve rejected and deferred findings in the review document with their
   final status.

When approval and a model switch are both required, end with:

```
MODEL SWITCH REQUIRED
Open /model and select: [MODEL FAMILY]
Then reply:
I approve the Phase [CURRENT PHASE] findings. Continue with Phase [NEXT PHASE].
```

Do not treat a model change by itself as approval.

PHASE D — SONNET
Apply only the approved homepage corrections. Build Calgary Airport
Transportation and Calgary to Banff. Test both templates on desktop and
mobile. Stop and ask the user to switch to Opus.

PHASE E — OPUS
Review the Airport service-page template and Banff route-page template.
Record findings in `docs/page-template-review.md`. Provide corrections only.
Follow the Review-Phase Approval Rule above. Stop and ask the user to switch
to Sonnet.

PHASE F — SONNET

Build the remaining user-approved pages. Use the reviewed service-page and
route-page templates only where their structure is genuinely appropriate. Do
not force unique pages such as Download the App, About PrimeKar, Contact,
FAQ, Fleet, Testimonials, Privacy Policy, Terms and Conditions, 404, or the
runtime-error fallback into the Airport or route-page templates. Create
page-specific layouts where the approved information architecture requires
them.

Before ending Phase F:

1. Run the approved tests for every new page.
2. Test every public page at 390px and 1440px.
3. Complete the key-template viewport checks in `docs/test-matrix.md`.
4. Run Chromium and WebKit key-path tests.
5. Run the configured accessibility tests.
6. Inspect every page for horizontal overflow and console errors.
7. Provide representative screenshots for every unique page type.
8. Record unresolved failures and limitations.
9. Show git status and the changed-file summary.

Do not begin Phase G. End with the required switch to Opus.

PHASE G — OPUS
Perform the final complete-site audit. Record findings in
`docs/final-site-audit.md`. Follow the Review-Phase Approval Rule above.

PHASE H — SONNET
Apply only the approved Phase G findings. Create `docs/final-fix-log.md`
mapping every approved finding to: changed files, correction applied, test
performed, result, remaining limitation. Run the Final Quality Gate (Section
33). Prepare the production build.

PHASE I — OPUS

After Sonnet completes Phase H:

- Verify each approved Phase G finding against its acceptance criterion
  (Section 2) rather than performing a new subjective redesign.
- Inspect final desktop and mobile output.
- Review final SEO, content, accessibility, performance, security and brand
  consistency.
- Confirm no new regressions were introduced.
- Create `docs/launch-readiness.md`.
- Do not modify production code.

The launch-readiness report must include: approved commit or revision
reviewed; pages and tests reviewed; resolved, open and deferred findings;
legal-review status; real-device-test status; accessibility-evaluation
scope; performance and security status; deployment blockers and rollback
readiness; final recommendation (Ready / Ready with approved limitations /
Not ready).

If Phase I finds a Critical or High unresolved issue:

1. Mark the build Not ready.
2. Record only evidence-based remediation findings.
3. Stop and wait for approval.
4. After approval, switch to Sonnet for a narrowly scoped remediation phase.
5. Return to Opus to re-verify only the remediation and affected regression
   area.
6. Do not perform an open-ended redesign.

Stop and wait for explicit launch or remediation approval.

PHASE J — SONNET — ONLY AFTER EXPLICIT DEPLOYMENT APPROVAL

See Section 34 for the full deployment procedure. Do not enter Phase J
unless the user explicitly approves deployment.

Fable is not part of the standard workflow. Use Fable only when the user
explicitly asks for multiple visual concepts for one isolated section. Do not
use Fable to build the complete website.

At the start of each new phase, reread: `docs/master-spec-v7.md` (once
saved), `CLAUDE.md`, `docs/decision-log.md` (Section 5), the approved
implementation plan, the approved design system, the immediately preceding
review or fix log, and any updated CTA, SEO, redirect, legal, security or
performance document that materially affects the phase. Do not rely only on
conversational memory after a model switch.

At the end of every phase:

1. State exactly what was completed.
2. State every unresolved issue.
3. State whether changes were committed and pushed.
4. Do not begin the next phase.
5. Give the user one exact next action.

Do not continue until the user confirms the switch and, for review phases,
gives explicit approval per the rule above.

────────────────────────────────────────────────────
2. REVIEW DOCUMENT FORMAT AND CLOSURE TRACKING
────────────────────────────────────────────────────

Every finding recorded in `docs/homepage-review.md`,
`docs/page-template-review.md`, or `docs/final-site-audit.md` must include:

- Finding ID
- Severity: Critical / High / Medium / Low
- Affected page or component
- Evidence
- Why it matters
- Required correction
- Acceptance criterion
- Assigned phase
- Status: Open / Approved / Rejected / Deferred / Resolved
- Resolution evidence

Phase H must create `docs/final-fix-log.md` (see Section 1). Phase I must
verify each item against its acceptance criterion rather than performing a
new subjective redesign.

────────────────────────────────────────────────────
3. GIT AND APPROVAL POLICY
────────────────────────────────────────────────────

PRE-COMMIT SAFETY CHECK — ALL PHASES

Before every commit:

1. Run git status.
2. Review all modified, staged and untracked files.
3. Review the complete staged diff.
4. Run the repository's available secret-detection check.
5. Confirm the proposed commit does not include: `.env` files; API keys or
   access tokens; authentication cookies; private URLs containing
   credentials; browser profiles; customer information; invoice or payment
   information; unredacted screenshots; QA traces or videos; production
   secrets; private source documents; unapproved generated assets.
6. Do not use `git add .` or an equivalent broad staging operation without
   reviewing exactly what it will stage.
7. Confirm the Git remote belongs to the intended PrimeKar repository before
   the first push from every new branch.
8. Show the proposed commit message and staged-file summary before
   committing when user approval has not already covered them.

A successful secret scan does not replace manual inspection.

For all phases:

- Do not commit, push, merge, rebase, force-push, or create a pull request
  unless the user explicitly approves that action.
- Never force-push. Never rewrite published Git history.
- At the end of each implementation phase, show git status and summarize the
  changed files.
- Keep each approved phase in a separate, clearly named commit.
- Do not deploy merely because code has been committed or pushed.
- Do not delete existing user assets without approval.
- Do not replace the repository with a new scaffold.
- Do not remove working configuration merely to simplify implementation.
- Do not use `git reset --hard` or `git clean -fd`.
- Do not remove existing tests to obtain a passing build.
- When existing code must be replaced, explain why and preserve
  recoverability.

────────────────────────────────────────────────────
4. BRANCH POLICY
────────────────────────────────────────────────────

During Phase A, identify and record: current branch, default branch,
production branch, whether the working tree is clean, whether unpushed
commits already exist.

After the user approves Phase A, but before making the first commit:

1. Confirm the intended implementation branch.
2. Verify the current branch, default branch, production branch and remote
   URL.
3. If the current branch is the default or production branch, ask for
   explicit approval to create and switch to a feature branch before
   committing any Phase A work.
4. Create or switch branches only when doing so will not lose existing work.
5. Keep the approved Phase A working-tree changes while creating the feature
   branch only when Git confirms that doing so is safe.
6. Do not commit Phase A documentation directly to the default or
   production branch unless the user explicitly approves that exception.
7. Stage only the approved Phase A documentation.
8. Review the complete staged diff.
9. Commit only after the branch and staged files are approved.
10. Push only after separate explicit approval.
11. Do not begin Phase B until the user confirms the model switch.

Do not implement the rebuild directly on the production branch unless the
user explicitly approves it. Do not change branches when uncommitted work
could be lost. Never merge the feature branch without explicit approval.

────────────────────────────────────────────────────
5. DECISION LOG
────────────────────────────────────────────────────

Create and maintain `docs/decision-log.md`.

Record every material user approval, rejection or deferral, including:
decision ID, date, phase, decision, options considered, user-approved
outcome, affected pages/files/findings, status, superseded decision when
applicable.

At the start of every phase, reread `docs/decision-log.md`. A conversation
message does not need to be copied verbatim — record the resulting decision
accurately and concisely.

Do not change an approved decision merely because a different model would
choose differently. When a new decision replaces an earlier decision:
preserve the earlier entry, mark it Superseded, and link it to the
replacement entry.

────────────────────────────────────────────────────
6. PROJECT CONTEXT
────────────────────────────────────────────────────

PrimeKar is a Calgary-based premium pre-scheduled black-car service.

PrimeKar is: premium, pre-scheduled, reliability-focused, professional,
modern, sophisticated, easy to understand, locally relevant to Calgary and
Alberta.

PrimeKar is not: a budget taxi company, an ordinary rideshare company, an
on-demand ride service, a chauffeur-service brand.

Never use "chauffeur" in customer-facing content. Use "driver."

Never describe PrimeKar as on-demand, tap-and-go, ride-in-minutes, instant, or
immediate pickup. PrimeKar is pre-scheduled only.

The uploaded app screenshots may contain older messaging such as "Ride in
minutes," "Tap and Go," or "Experience Luxury on Demand." Do not reuse that
wording on the website. Flag it as legacy app-screen messaging that conflicts
with the approved pre-scheduled positioning. See Section 12 for screenshot
publication rules — this restriction applies to what is visibly displayed in
a screenshot, not only to newly written wording.

PrimeKar operates Ride With Purpose, a verified social-impact initiative
supporting free transportation for cancer patients.

Ride With Purpose is a **required** PrimeKar brand-story section — the user
has explicitly approved the existence and purpose of the initiative. The
minimum approved homepage treatment may contain only: the initiative name;
the verified high-level purpose (supporting free transportation for cancer
patients); a restrained link to the fuller About PrimeKar treatment. Do not
add statistics, contribution amounts, eligibility rules, partners, coverage,
medical affiliations or impact claims without verification and user
approval. If no approved image or detailed copy exists, use a concise
factual text section rather than omitting the initiative or inventing
details. See Section 18 for placement and the interaction with
evidence-dependent sections generally.

This does not prove on-time performance, driver reliability, airport
readiness, pre-scheduling quality, or operational capability, and must not be
presented as if it does. Give it its own homepage section, separate from
Reliability and Trust, plus a fuller treatment on the About PrimeKar page.
The Reliability section may link to it, but should not restate it as service
proof.

Any unsupported detail must be marked `[VERIFICATION REQUIRED]` (internal
only — see Section 23 for the public-facing rule).

────────────────────────────────────────────────────
7. SERVICES AND PROHIBITED CLAIMS
────────────────────────────────────────────────────

PrimeKar provides: YYC Airport transportation, Executive transportation,
Corporate transportation, Client and guest pickups, Business-meeting
transportation, Event transportation, Early-morning scheduled rides, Calgary
to Banff/Canmore/Lake Louise/Jasper, other private and intercity trips.

Fleet:
Executive — Lexus, Tesla, Lincoln
Elite XL — Chevrolet Suburban

Do not invent:

- Passenger capacity
- Luggage capacity
- Vehicle availability
- Specific vehicle models not supplied
- Pricing or fare examples
- Fixed-price claims unless verified
- Fees, gratuities, taxes, tolls, or surcharges
- Discounts or promotional terms
- Route distance or estimated travel time
- Pickup time recommendations
- Airport pickup zones or procedures
- Meet-and-greet service
- Flight monitoring
- Waiting-time policies
- Cancellation or refund policies, or grace periods
- Child-seat availability
- Accessibility accommodations
- Service guarantees
- Geographic coverage beyond verified areas
- Customer counts, review scores, awards
- On-time or cancellation percentages
- Safety certifications or driver-screening details
- Corporate clients or partnerships
- App features or deep-link behaviour
- Ride With Purpose statistics or eligibility rules

Mark missing or uncertain facts: `[VERIFICATION REQUIRED]`

────────────────────────────────────────────────────
8. BUSINESS OBJECTIVES
────────────────────────────────────────────────────

1. Generate iOS and Android app downloads.
2. Generate pre-scheduled ride bookings.
3. Generate corporate transportation inquiries.
4. Generate private-trip and intercity inquiries.
5. Rank for relevant Calgary, YYC Airport, and Alberta route searches.
6. Establish trust and reliability.
7. Clearly distinguish PrimeKar from taxis and ordinary rideshare services.

────────────────────────────────────────────────────
9. UNRESOLVED PRIOR CLAIMS
────────────────────────────────────────────────────

The following previously discussed claims require explicit confirmation
before public use:

- PrimeKar launched in January 2026
- PrimeKar serves Edmonton
- PrimeKar serves Lethbridge
- PrimeKar offers fixed pricing
- PrimeKar has live iOS and Android applications
- PrimeKar is Calgary's first local app-based premium ride service
- PrimeKar has zero cancellations

Do not publish these claims merely because they appeared in an earlier brief.

For each claim, classify it during Phase A as: Verified and approved /
Accurate but requires wording adjustment / Unsupported / Outdated / Not
approved for public use.

Treat "zero cancellations" as a high-risk absolute claim. Do not publish it
without strong, current evidence and explicit approval.

This list is a starting point, not the complete set — see the current-claims
matrix in Section 10, which covers claims found on the live site itself.

────────────────────────────────────────────────────
10. CURRENT PRIMEKAR WEBSITE
────────────────────────────────────────────────────

Open and inspect these exact URLs:

- https://primekar.com/
- https://primekar.com/privacy.html
- https://primekar.com/terms.html
- https://primekar.com/DownloadApp
- https://primekar.com/contact.html

Inspect: existing content, navigation, app-store links, contact information,
legal entity information, service descriptions, current claims, images,
broken links, mobile behaviour, and classify everything as Preserve / Improve
/ Verify / Remove.

CURRENT-PUBLISHED CLAIMS ARE NOT AUTOMATICALLY VERIFIED

A statement appearing on the current PrimeKar website, Privacy Policy, Terms
and Conditions, app screenshot, or promotional graphic is not automatically
approved for new marketing use.

During Phase A, create a current-claims matrix inside
`docs/current-site-audit.md`. For every material claim, record: exact claim,
source URL or asset, whether it is legal wording, marketing wording, or app
wording, whether another PrimeKar source conflicts with it, verification
evidence, recommended status (Preserve / Improve / Verify / Remove), and user
approval status.

Specifically audit: "Always On Time" / "punctuality guaranteed"; "book your
premium ride in seconds" / instant booking; "licensed & insured"; "VIP
Service"; "24/7 Support"; professional/experienced/screened driver claims;
vehicle-maintenance claims; app-only booking vs. dispatch booking; flight
tracking; flat or fixed pricing; waiting-time allowances; cancellation and
refund rules; authorization holds; additional charges and cleaning fees;
airport waiting procedures.

Current legal wording may be preserved for migration while the same
statement remains unapproved for marketing use. Do not resolve conflicting
legal provisions yourself — record the conflict and require user or legal
approval (see Section 11).

DOWNLOAD APP URL AUDIT

For `https://primekar.com/DownloadApp`, record: initial HTTP status; every
redirect in the chain; final URL; whether redirection is server-side or
client-side; whether behaviour differs by device or user agent; whether
query parameters are preserved; whether the final destination is
PrimeKar.com, the App Store, Google Play, or another service; whether
JavaScript is required; behaviour with JavaScript disabled; behaviour on
desktop, iPhone and Android; whether the page contains crawlable content;
whether it should remain a page, become a controlled redirect, or be
replaced.

Do not assume that a successful HTTP response means the Download App
experience is working correctly.

During Phase A, also:

1. Inspect the current sitemap.xml and robots.txt when available.
2. Discover publicly linked and indexable PrimeKar URLs beyond the five above.
3. Record each existing URL and its intended replacement.
4. Identify duplicate, obsolete, broken, or redirected URLs.

Create `docs/current-url-inventory.md` and `docs/redirect-map.md`. Every
removed or changed public URL must have an approved redirect or a documented
reason for returning 404/410. Do not change URL structure without reviewing
the redirect map.

During inspection of the current PrimeKar website:

- Do not submit contact forms.
- Do not initiate bookings.
- Do not create accounts.
- Do not enter personal information.
- Do not change or trigger any production data.
- Do not assume a successful page load proves that every link or form works.

────────────────────────────────────────────────────
11. LEGAL CONTENT AUDIT
────────────────────────────────────────────────────

Create `docs/legal-content-audit.md`.

During Phase A:

1. Capture the currently published legal-page body text with: source URL,
   retrieval date, page title, last-updated date when present, legal entity
   names, contact information, and a normalized text checksum or another
   reliable comparison method.
2. Separate: legal body content; shared navigation; shared footer; legacy
   marketing copy; copyright-year display.
3. Exact legal migration applies to the legal body content. It does not
   require preserving legacy navigation, old visual design, promotional CTAs
   or an outdated copyright-year display.
4. Identify without rewriting: contradictory clauses; conflicting refund
   periods; conflicting booking methods; missing or unclear effective dates;
   grammar or typographical errors; inconsistent entity names or contact
   information; operational claims requiring verification; privacy practices
   requiring confirmation; terms that conflict with the approved
   pre-scheduled positioning.
5. Do not resolve, merge or harmonize conflicting legal provisions.
6. Mark every proposed legal correction as requiring explicit user and,
   where appropriate, legal-professional approval.
7. Preserve the current legal body exactly until an approved replacement or
   correction is supplied.

Before launch: compare the migrated legal body against the approved source;
record every approved difference; confirm there are no accidental omissions,
paraphrases or merged clauses; include the legal pages in the final
human/legal review checklist.

Legal requirements:

- Preserve the current Privacy Policy and Terms and Conditions accurately
  during migration.
- Do not rewrite legal wording without explicit approval.
- Do not change legal entity names, effective dates, addresses, email
  addresses, phone numbers, GST information, or legal obligations without
  verification.
- Do not invent new legal language.

Accurate legal migration means preserving the currently published legal text
without accidental omissions, paraphrasing, summarization, or rewriting. It
does not constitute legal advice, legal review, or confirmation that the
current Privacy Policy and Terms and Conditions are complete, enforceable, or
legally sufficient. Flag both migrated legal pages for final human/legal
review before production deployment.

────────────────────────────────────────────────────
12. UPLOADED PRIMEKAR ASSETS
────────────────────────────────────────────────────

Inspect all PrimeKar assets in:

/public/brand
/public/app
/docs/source-material

Expected assets include: dark-background logo, light-background logo,
wordmark, maple-leaf logo treatment, cream/peach "Prime" lettering, muted-gold
"Kar" lettering, app home-screen screenshot, app promotions screenshot, YYC
fixed-fare promotion screenshot, phone-frame app mockup, invoice/receipt
screenshot.

Treat the uploaded official logo as the visual source of truth. Do not
redesign it, recreate it with HTML text, change its proportions or maple leaf,
recolour it without approval, replace it with an AI-generated logo, or
substitute an imitation typeface.

LOGO-ASSET CONFLICT RULE

If multiple files appear to be official but differ in colour, proportion,
background, crop, transparency or artwork:

1. Do not infer approval from filename, upload date, resolution or
   modification date alone.
2. Record each candidate in `docs/asset-audit.md`.
3. Compare visible artwork and technical quality.
4. Identify the exact intended use: dark background, light background,
   favicon, social image or print.
5. Ask the user to approve the authoritative file for each use.
6. Do not trace, redraw or merge conflicting logo versions.
7. Preserve the original approved master file unchanged.

Determine: correct dark/light-section logo, required transparent versions,
required SVG/PNG/WebP/AVIF versions, safe clear-space rules, mobile and
desktop sizing rules.

Asset privacy rules:

- Do not publish customer names from screenshots.
- Do not publish invoice dates, amounts, GST numbers, payment details, or trip
  details without approval.
- Do not publish the invoice screenshot as supplied — it must be
  cropped/masked/redacted first.
- Do not modify screenshots in a misleading way.

APP SCREENSHOT PUBLICATION RULES

Treat all currently supplied app screenshots and phone mockups as audit-only
assets until individually approved for public use.

Do not publish a screenshot that visibly contains: personal names; customer
or test-account identifiers; invoice data; GST or payment information; "Ride
in minutes"; "Tap and Go"; "Luxury on Demand"; fixed-fare claims; on-time
guarantees; unsupported app capabilities; outdated promotional language.

Do not digitally replace words inside an app screenshot to create an
interface that does not exist. Do not blur, patch, or alter app
functionality in a misleading way.

Preferred resolution: request clean screenshots captured from a
demonstration account; use the current production app interface; use
approved, current pre-scheduled messaging; remove personal, financial and
test data before capture; obtain approval for every screenshot selected for
production.

The invoice screenshot must remain excluded from the public website unless
the user explicitly approves a separately reviewed and fully sanitized
derivative.

DEVICE-FRAME RULE

Separate raw app screenshots from device-frame artwork. Use either an
approved generic device frame that does not imitate protected,
device-specific Apple design details, or official Apple-provided product
artwork used according to Apple's current marketing guidelines. Do not
assume an uploaded simulated iPhone frame is approved for production.

If required assets are not present locally:

1. List every missing asset.
2. State the exact target directory and preferred file format.
3. Continue all audit, sitemap, content, reference, SEO, and architecture
   work that does not depend on those assets.
4. Do not begin visual implementation of any section that requires a
   missing asset.
5. Do not fabricate, trace, regenerate, or approximate the missing asset.

────────────────────────────────────────────────────
13. MEDIA, PHOTOGRAPHY AND FONT RIGHTS
────────────────────────────────────────────────────

Create `docs/media-inventory.md` and `docs/media-sourcing-plan.md`.

For every asset, record both its source and its rights status — possession
or upload does not by itself prove copyright ownership or web-use
permission.

SOURCE CLASSIFICATION: Official PrimeKar-created asset / User-supplied asset
/ Licensed stock asset / Approved generated asset / Official third-party
badge or mark / Unknown source.

RIGHTS STATUS: PrimeKar-owned and approved / Licensed for website use /
Licensed with attribution requirement / Licensed with geographic, duration
or channel restrictions / Third-party brand asset governed by current usage
guidelines / Permission asserted but not documented / Rights not verified /
Not approved for production.

Record where applicable: copyright owner; asset supplier; licence source or
permission evidence; permitted channels and territory; duration or expiry;
attribution requirement; modification restrictions; approval status; pages
where the asset may be used.

A user-supplied asset is not automatically approved or legally cleared. Do
not publish an asset when its required usage rights remain unverified.

Do not use: images downloaded from reference websites, Google Images
results, competitor vehicle photographs, unlicensed tourism photography,
social-media images without documented rights, or AI-generated images that
misrepresent the actual PrimeKar fleet or service.

Nelson Travel is a reference for photography treatment, composition, and
layout — not a source of photographs.

GENERATED DESTINATION IMAGERY

For identifiable destinations such as Banff, Canmore, Lake Louise and Jasper,
prefer properly licensed real photography. Do not present an AI-generated
depiction of a real destination as documentary photography.

Generated destination imagery may be used only when: it is clearly
illustrative; it does not falsely depict current weather, road, crowd,
building or seasonal conditions; it does not invent a PrimeKar vehicle at a
real pickup point; it does not imply that PrimeKar completed the pictured
trip; the user approves the final image.

Manufacturer vehicle photographs may be used only when their marketing
licence permits website use. Do not assume publicly accessible manufacturer
images are free to reuse.

FONT POLICY

Use only fonts with verified website-embedding rights. Record in
`docs/media-inventory.md`: font family and source; licence; weights and
formats used; attribution requirement; production approval status.

Prefer locally bundled fonts or Next.js font optimization. Do not load
Google Fonts, Adobe Fonts, or another external font service at runtime
without explicit approval and privacy review. Limit font families and
weights to the approved design system. Preload only fonts required for
initial rendering. Prevent font loading from creating avoidable layout
shift.

────────────────────────────────────────────────────
14. QA ARTIFACT POLICY
────────────────────────────────────────────────────

During Phase A, use an existing ignored QA-artifact directory when one is
already configured.

If no approved ignored directory exists:

- Use tool-managed temporary browser storage during Phase A.
- Do not modify `.gitignore` during the Phase A audit.
- Do not retain unnecessary screenshots, traces or videos after extracting
  the required findings.
- Record the proposed permanent QA-artifact path in the implementation plan.

After Phase A is approved and before implementation testing begins, the user
may approve creating `.artifacts/qa/` and adding it to `.gitignore`. That
configuration change must be reviewed separately before committing.

Do not commit QA screenshots, traces, videos or reports unless the user
explicitly approves them. Before sharing or retaining a QA artifact, confirm
that it contains no personal, authentication, customer, payment,
browser-profile, secret-URL, token or private-production information.

────────────────────────────────────────────────────
15. APPROVED REFERENCE WEBSITES
────────────────────────────────────────────────────

Open the actual live websites using Playwright. Do not evaluate them only from
memory or screenshots.

1. Flyward — https://www.flyward.com/
2. Fitzroy Travel — https://fitzroy-travel.com/
3. Flighty — https://flighty.com/
4. Nelson Travel — https://www.nelson.travel/
5. Antaeus Travel Group — https://www.antaeustravel.com/
6. Raus — https://www.raus.life/
7. Sonder — https://www.sonder.com/en-ca
8. Jesko Jets — https://jeskojets.com/

For each reference website, inspect: the homepage, one assigned high-value
internal page, and one additional page only when necessary. Inspect desktop
and mobile views. Do not perform an open-ended crawl — prioritize evidence
relevant to the exact assignment in Section 16.

Record: exact URLs opened, pages inspected, desktop viewport inspected,
mobile viewport inspected, useful patterns, patterns rejected, accessibility
concerns, performance concerns, implementation difficulty.

Do not claim a website was inspected unless it was actually opened.

If a reference website cannot be opened because it is blocked, unavailable,
geo-restricted, protected by CAPTCHA, or otherwise inaccessible:

1. Record the exact website, URL, attempted method, and failure.
2. Do not use memory, assumptions, screenshots, or training data as a
   substitute for live inspection.
3. Continue inspecting all other approved references.
4. Mark the inaccessible reference as NOT VERIFIED.
5. Stop only if that reference is essential to the current phase and no
   other approved reference can fulfil the same role.

If a reference website has changed and no longer demonstrates its assigned
pattern:

1. Record the change.
2. Do not invent or recall the old design from memory.
3. Continue with other references.
4. Propose a reassignment using another approved reference.
5. Obtain approval before adding a new external reference.

Reference-site inspection must be read-only. Do not: submit contact forms,
submit booking or inquiry forms, subscribe to newsletters, create accounts,
begin checkout or booking flows, enter personal/business/payment information,
circumvent authentication/CAPTCHA/regional restrictions/access controls,
download unknown executables, copy source code/proprietary assets/images/
downloadable website packages into the PrimeKar repository, or scrape at a
rate that could disrupt the reference website.

Cookie consent may be accepted only when necessary to inspect publicly
available website content. Booking and form flows may be inspected only up
to the point immediately before submission.

For every inspected reference, record whether observations came from: live
desktop inspection, live mobile inspection, publicly accessible internal
pages, browser developer information, or a failed/partial inspection. Do not
present partial inspection as complete inspection.

────────────────────────────────────────────────────
16. EXACT REFERENCE ASSIGNMENT
────────────────────────────────────────────────────

Flyward → overall homepage structure, service hierarchy, trust sequence,
testimonials, corporate presentation, content-to-CTA relationship.

Fitzroy Travel → long-form route-page architecture, destination-page content
hierarchy, route-specific FAQs, related-route links, SEO-friendly written
content.

Flighty → app-screen presentation, feature sequencing, device framing, and
download conversion. Use only approved PrimeKar app screenshots in the
PrimeKar website — this assignment describes a presentation pattern, not
permission to use Flighty's own screenshots.

Nelson Travel → destination-image placement, editorial composition,
responsive image grids, and route-card presentation. Use only approved
PrimeKar-owned, licensed, or generated Alberta imagery — see Section 13.

Antaeus Travel Group → corporate transportation categories, operational
capability, business-use cases, support explanation, corporate trust content.

Raus → desktop/mobile navigation, whitespace, calm content organization,
footer architecture.

Sonder → conversion logic, page-specific CTA strategy, website-to-app
handoff, clear next-step behaviour.

Jesko Jets is a narrowly scoped visual reference only.

PrimeKar may study it for: hero typography scale, negative space, image
composition, dark premium atmosphere, restrained visual confidence.

PrimeKar must not adopt from it: site architecture, navigation behaviour,
heavy animation, scroll-controlled sequences, WebGL or 3D effects, large
autoplay media, content-light presentation, or any interaction that reduces
mobile usability or performance.

Regardless of how Jesko Jets is technically implemented, reproduce only the
visual principles that can be built efficiently within the approved PrimeKar
stack (Section 25).

Do not copy source code, complete layouts, written content, branding,
photography, icons, statistics, testimonials, unique animations, or exact
typography combinations. Extract patterns and rebuild original PrimeKar
components.

The reference assignments above are intended roles, not permission to ignore
live evidence.

────────────────────────────────────────────────────
17. WEBSITE ARCHITECTURE
────────────────────────────────────────────────────

Treat the following as the initial proposed sitemap, not a mandate:

Home · Calgary Airport Transportation · Executive Transportation · Corporate
Transportation · Events Transportation · Early-Morning Transportation ·
Private Trips · Calgary to Banff · Calgary to Canmore · Calgary to Lake
Louise · Calgary to Jasper · How It Works · Download the App · Fleet ·
Testimonials · FAQ · About PrimeKar · Contact · Privacy Policy · Terms and
Conditions.

During Phase A, evaluate each page for: distinct search intent, sufficient
unique content, clear conversion purpose, user-navigation value, risk of
keyword cannibalization, and risk of becoming a thin or repetitive page.
Recommend merging, removing, renaming, or restructuring pages when evidence
supports it. Do not implement the final sitemap until the user approves it.

Do not create low-quality mass-generated location pages. Every page must have
unique and useful content.

TECHNICAL FALLBACK PAGES

Use the current Next.js App Router error and not-found conventions supported
by the installed Next.js version.

The implementation plan must include: accessible not-found UI; accessible
runtime-error fallback; global fallback behaviour where supported and
appropriate; recovery actions and links to Home, Services and Contact;
protection against exposing stack traces, paths, secrets or error details.

For completely unmatched public routes: verify the hosting and framework
return the correct 404 behaviour; do not redirect every unknown URL to the
homepage; exclude missing URLs from the sitemap.

When `notFound()` is used inside a streamed response: recognize that the
framework may return a streamed 200 while adding noindex — do not classify
the implementation solely from the status code; verify the rendered
not-found UI, noindex behaviour and search impact; prefer an actual 404 for
fully unmatched routes where the installed framework and hosting
configuration support it.

Record the tested status code, rendered result and robots directive for
every not-found scenario.

────────────────────────────────────────────────────
18. HOMEPAGE STRUCTURE
────────────────────────────────────────────────────

1. Header
2. Hero
3. Trust strip
4. Main service categories
5. Why PrimeKar
6. How it works
7. App experience
8. Calgary Airport transportation
9. Alberta private routes
10. Corporate transportation
11. Fleet
12. Testimonials
13. Reliability and service trust
14. Ride With Purpose (required minimum treatment — see Section 6)
15. Final CTA
16. Footer

The structure may be refined during the audit, but every change must be
explained.

Evidence-dependent sections are conditional, with the exception of Ride With
Purpose (Section 6), which is required at minimum treatment. Do not create
fabricated, anonymous, placeholder, or competitor-derived content to satisfy
a section requirement. If verified content is unavailable for testimonials,
ratings, trust statistics, reliability claims, fleet specifications, driver
standards, or corporate relationships: document the missing evidence and
recommend one of — omit the section temporarily; use a narrower verified
version; replace it with a factual process-based section; hold the section
until approved content is supplied. Never use placeholder testimonials or
invented names.

────────────────────────────────────────────────────
19. CTA AND CONVERSION ROUTING
────────────────────────────────────────────────────

During Phase A, create `docs/cta-map.md`.

For every major CTA, record: CTA label, page and section, desktop behaviour,
mobile behaviour, verified destination, destination type, verification
status, whether authentication is required, whether the action leaves
PrimeKar.com.

Verify: App Store product-page URL, Google Play Store URL, current Download
App URL, booking or scheduling destination, corporate inquiry destination,
private-trip inquiry destination, contact email, contact phone number, any
approved app deep links, QR-code destination.

Rules:

- Do not create placeholder links.
- Do not invent app deep links.
- Do not create a fake booking engine.
- Do not use "Book Now" unless the destination supports actual booking or
  scheduling.
- Do not implement a production form until its submission destination,
  privacy handling, error handling, and spam protection are approved.
- Exclude unverified, non-functional CTAs from production output.

The page-specific CTA labels below are provisional and must be approved
through `docs/cta-map.md` before implementation: Home → Download the App /
Explore Services · Airport → Schedule Your Airport Ride · Corporate →
Discuss Corporate Transportation · Route pages → Plan This Private Trip ·
Download page → Get the PrimeKar App · Contact → Contact PrimeKar.
"Schedule Your Airport Ride" may be used only when its destination allows the
user to begin or complete genuine scheduling. Otherwise use an accurate label
such as "Get the PrimeKar App" or "Contact PrimeKar."

APP-LINK TECHNICAL VERIFICATION

Do not implement or claim Universal Links or Android App Links until the
website and app teams supply the required app identifiers and signing
information.

For Apple Universal Links, verify: App Associated Domains entitlement; exact
approved hosts and subdomains; `apple-app-site-association` content; correct
hosting at the approved root and/or `.well-known` location; HTTPS
accessibility and content type; app-side route handling; installed-app and
app-not-installed behaviour on a real device.

For Android App Links, verify: `android:autoVerify` intent filters; exact
hosts and paths; `/.well-known/assetlinks.json`; package name; correct
release signing certificate SHA-256 fingerprints, including Play App Signing
when applicable; HTTPS accessibility without an unapproved host or scheme
redirect; verification status on a real device; installed-app and
app-not-installed behaviour.

If app-side configuration or signing evidence is unavailable, record
`APP-LINK INFRASTRUCTURE NOT VERIFIED`. Use direct store and website links
instead. Do not simulate deep-link support in website JavaScript.

Use app-opening links only after verifying the above. Do not assume a
verified app link automatically redirects an app-not-installed user to an
app store — verified Universal Links/App Links normally fall back to the
website, not to a store, unless a separately approved smart-link solution is
built for that. If verified app-link infrastructure does not exist: use a
direct App Store product-page link for iPhone users; use a direct Google
Play product-page link for Android users; use the approved Download App page
when platform detection is uncertain; do not create a JavaScript timer
redirect, custom URI fallback, or third-party smart-link dependency without
approval.

KEEP BOTH STORE CHOICES ACCESSIBLE

Do not hide the App Store or Google Play option solely because of
user-agent detection. On the Download App page: prefer showing both official
store badges; keep both links keyboard- and screen-reader-accessible; use
platform-specific emphasis only when verified and when it does not prevent
access to the other platform; do not automatically redirect users away from
the page based only on the browser user-agent string.

────────────────────────────────────────────────────
20. MOBILE-FIRST REQUIREMENT
────────────────────────────────────────────────────

The website must be mobile-first. Mobile is not a reduced desktop design.

Create `docs/test-matrix.md`.

Test every public page at: 390px mobile, 1440px desktop.

Test all key page templates (Homepage, Service page, Route page, App-download
page, Contact page, Legal page) at: 320px, 375px, 390px, 430px, 768px, 1024px,
1440px.

Run key-path testing in Chromium and WebKit. Use Firefox for final smoke
testing when available.

Playwright WebKit testing does not constitute complete Safari verification.
Before launch, perform manual smoke testing when devices are available on a
real iPhone using current Safari and a real Android device using current
Chrome. Prioritize real-device testing for: mobile navigation, sticky CTAs,
safe-area behaviour, App Store and Google Play links, QR codes, Universal
Links and App Links, orientation changes, text zoom, form controls, reduced
motion. If real-device testing is unavailable, mark these behaviours as
`NOT VERIFIED ON REAL DEVICE`. Do not claim Safari, iPhone, Android, or
app-link compatibility solely from desktop browser emulation.

Also verify: portrait orientation, mobile safe-area insets, 200% text zoom,
keyboard-only navigation, reduced-motion mode, no horizontal overflow.

Mobile requirements: no horizontal overflow, no tiny text, no hover-only
functionality, large touch targets, accessible mobile navigation, readable
typography, responsive spacing, correct image cropping, fast loading,
functional forms, visible focus states, keyboard navigation, reduced-motion
support, clear mobile CTAs, direct app-store buttons, no requirement to scan
a QR code from the same phone, one readable app screenshot at a time, no
difficult horizontal carousel, no oversized phone mockup.

Desktop app section: phone mockup, app feature text, QR code, App Store
badge, Google Play badge.

Mobile app section: direct App Store button, direct Google Play button, no
dominant QR code, responsive screenshots, clear pre-scheduled-service
explanation.

────────────────────────────────────────────────────
21. DESIGN SYSTEM
────────────────────────────────────────────────────

Use the **locked** PrimeKar brand tokens — exact values, not approximations:

- Background (dark teal): `#1D2B2E`
- Digital Gold (screen use): `#B8924A`
- Gold (print only, do not use on-screen): `#AB8A63`
- Cream: `#F5DDCA`
- Warm White: `#F4EFE6`

Colour usage rules:

- Use `#1D2B2E` as the primary dark background.
- Use `#F5DDCA` and `#F4EFE6` for primary readable text on dark backgrounds.
- Use `#B8924A` as an accent, border, icon, highlight, or CTA colour — never
  for long paragraphs or small body text.
- Do not use the print-only `#AB8A63` in digital interfaces.
- Every text/background combination must pass WCAG contrast checks. Never
  assume a brand colour is accessible merely because it is approved.
- Do not introduce unapproved substitute gold, beige, peach, or teal shades
  without documenting the reason.

When `#B8924A` is used as a button or filled CTA background, use `#1D2B2E`
for button text and icons. Do not place `#F5DDCA` or `#F4EFE6` text on
`#B8924A` for normal-sized interface text — the contrast is insufficient.
Approximate contrast: dark teal on digital gold ≈ 5.04:1 (passes); cream on
digital gold ≈ 2.22:1 (fails); warm white on digital gold ≈ 2.53:1 (fails).
Every component state — default, hover, focus, active, disabled — must be
tested independently.

The prohibition on using `#AB8A63` in digital UI applies to CSS variables,
interface tokens, component styling, borders, icons, and digital text. It
does not authorize recolouring or altering official PrimeKar logo files.
Approved logo assets must retain their original embedded colours, gradients,
proportions, and visual treatment, even when an embedded logo colour differs
slightly from the locked interface colour tokens. Do not sample colours from
compressed screenshots when an approved source logo or documented brand
token is available.

If an additional *persistent* design token is genuinely required, first
document: proposed colour, approved source token, derivation method, exact
use, contrast results, and why an existing token cannot perform the role. Do
not add the new persistent token to production until the user approves it.
Temporary opacity variants used solely for states or overlays may be
proposed in the design system, but they must still pass accessibility
testing and must not redefine the core brand palette.

Avoid: generic black-and-gold limousine styling, bright yellow, neon,
excessive gradients, excessive glassmorphism, SaaS-dashboard appearance,
full-screen autoplay video, scroll hijacking, custom cursors, WebGL
backgrounds, horizontal page scrolling, long loading sequences, hidden
navigation, tiny typography, low contrast, excessive animation.

Create `docs/design-system.md` defining: colour tokens (above), typography,
spacing, containers, grid rules, breakpoints, border radius, shadows,
buttons, cards, image ratios, section types, motion durations, motion easing,
reduced-motion behaviour, accessibility constraints.

────────────────────────────────────────────────────
22. 21ST.DEV AND OPTIONAL TOOLS
────────────────────────────────────────────────────

UI/UX Pro Max, 21st.dev, MCP servers, and advisory design skills are optional
accelerators. They must not override PrimeKar's approved brand, blueprint,
content, or reference assignments.

If an optional tool is unavailable or fails: record the failure, continue
using the approved core stack, do not reinstall or troubleshoot it
indefinitely, and do not block the phase unless the user explicitly made
that tool mandatory.

21st.dev may be used for isolated component exploration: hero concepts,
navigation concepts, service cards, route cards, app-download sections,
fleet sections, testimonials, corporate inquiry sections, micro-interactions.

Do not: generate the complete website with one request, move generated code
directly into production, add unnecessary dependencies, override the
PrimeKar design system, copy another brand, add heavy effects, replace
shadcn, replace Motion.

Every useful concept must be rewritten using PrimeKar tokens, PrimeKar
content, PrimeKar assets, accessible components, mobile-first behaviour, and
maintainable TypeScript.

────────────────────────────────────────────────────
23. CONTENT RULES
────────────────────────────────────────────────────

Use clear premium language. Every page must explain: what the service is,
who it is for, where it operates, how pre-scheduling works, why the service
is useful, what the user should do next.

Avoid vague language: "redefining luxury," "elevating every journey," "where
excellence meets motion," "luxury on demand," "unmatched sophistication."

Use practical language focused on: pre-scheduling, reliability, airport
planning, corporate travel, early pickups, private Alberta routes,
app-based trip management, and clear next steps.

Do not force the unverified phrase "professional drivers." Use instead:
approved driver-related wording; driver communication and service
expectations when verified; clear next steps. Do not use "professional,"
"experienced," "screened," "licensed," "courteous," "discreet," "trained,"
or similar driver descriptors in public copy until the specific wording is
verified and approved through the current-claims matrix (Section 10). The
neutral word "driver" remains approved.

Do not copy text from reference websites.

For non-PrimeKar destination and travel facts (Banff, Canmore, Lake Louise,
Jasper, YYC, road conditions, seasonal information), use sources in this
order: official airport/municipal/provincial/federal/tourism/parks sources;
user-approved PrimeKar documents; reputable primary transportation or
destination sources; other reputable secondary sources. Do not use
competitor transportation websites as the source of factual claims.

Do not hard-code current road conditions, weather, closures, park access,
construction status, wildfire conditions or temporary airport procedures
into evergreen marketing pages. When current operational information is
useful: link to the relevant official live source; use evergreen wording
explaining that conditions may change; record the source in
`docs/content-sources.md`; do not imply PrimeKar controls third-party road,
airport, park or weather conditions.

Create `docs/content-sources.md`. For each externally researched fact,
record: fact, source organization, source URL, access date, page using the
fact, whether the information may change seasonally, verification status. Do
not publish unstable route, airport, park, or seasonal information without
checking a current authoritative source.

`[VERIFICATION REQUIRED]` is an internal editorial marker only. It must never
appear in production pages, public metadata, structured data, alt text,
sitemap content, customer-facing forms, or deployed builds.

Before committing or deploying production content, search the complete
project for `[VERIFICATION REQUIRED]` per the scoped search in Section 33.

If a claim cannot be verified before launch: remove the claim from public
output; preserve the unresolved question in an internal audit document; do
not replace it with a weaker but still unsupported claim.

────────────────────────────────────────────────────
24. SEO REQUIREMENTS
────────────────────────────────────────────────────

Use Canadian English and set the document language appropriately, normally
`en-CA`. Verify and consistently use the approved PrimeKar business name,
phone number, email address, address (if publicly approved), service areas,
and app-store destinations across every page (NAP consistency).

INDEXABLE MARKETING AND CONTENT PAGES

Every approved indexable marketing or informational page must include: one
clear H1; unique title and meta description; self-referencing canonical
URL; logical heading hierarchy; crawlable, useful HTML content; appropriate
internal links; breadcrumbs where appropriate; descriptive image alt text
and optimized images; an appropriate conversion or navigation action; Open
Graph and social metadata.

EXCEPTIONS

Legal pages: preserve approved legal content; use an accurate title and
canonical URL when indexable; do not require a promotional CTA; keep
marketing claims outside the legal body.

404 and runtime-error pages: exclude them from the XML sitemap; do not use
the homepage as their canonical URL; do not require a marketing CTA; provide
useful recovery navigation; do not intentionally make them indexable.

Redirect-only or thin utility routes: exclude them from the XML sitemap; do
not treat them as indexable content pages; use the correct redirect status
or noindex treatment for their approved role.

Staging and preview pages: follow the staging-index protection rules
(Section 35); do not present the preview host as the production canonical
host.

Only final, indexable, canonical URLs belong in the production XML sitemap.

Create `docs/seo-map.md`. For every page, define: URL, search intent,
primary topic, supporting topics, H1, proposed title, proposed meta
description, internal-link targets, schema type, risk of keyword
cannibalization. Do not create several pages targeting the same primary
intent.

STRUCTURED DATA

Create: XML sitemap, robots.txt, Organization/LocalBusiness schema where
valid, Service schema where valid, Breadcrumb schema where valid.

Do not add FAQPage structured data for the purpose of obtaining a Google FAQ
rich result — Google does not regularly display FAQ rich results for
ordinary commercial sites. Visible FAQ content should still use accessible
semantic HTML. Add FAQPage schema only when a documented non-Google consumer
requires it, the markup accurately represents visible content, and the user
approves the additional maintenance burden.

Use Google's Rich Results Test only for structured-data types currently
supported by Google. Use the Schema Markup Validator for generic schema.org
types that are not Google rich-result features, including Service markup
where applicable. Do not describe generic schema.org validity as Google
rich-result eligibility.

Do not publish a private, residential, driver, or non-customer-facing
address solely to satisfy LocalBusiness schema or NAP consistency. If
PrimeKar does not have an approved public business location: use
Organization markup where appropriate, include only verified public contact
information, use `areaServed` only when the service areas are verified, and
do not fabricate opening hours, coordinates, departments, or location data.

Target topics: Calgary airport transportation, YYC airport transportation,
Calgary airport transfer, Calgary black-car service, Calgary executive
transportation, Calgary corporate transportation, Calgary to Banff/Canmore/
Lake Louise/Jasper transportation, early-morning airport transportation
Calgary, pre-scheduled car service Calgary.

Do not promise rankings.

────────────────────────────────────────────────────
25. TECHNICAL STACK
────────────────────────────────────────────────────

Use the existing configured stack: Next.js App Router, React, TypeScript,
Tailwind CSS, shadcn, Motion, Next.js Image, static generation or server
rendering, Playwright, Axe, GitHub Actions.

Use the repository's existing package manager and lockfile (confirm which
one is actually configured before assuming). Do not run a different package
manager, create a conflicting lockfile, or upgrade dependencies without
approval. Use the `packageManager` field, lockfile, and existing scripts as
the source of truth.

Do not add: GSAP, Lenis, Three.js, React Three Fiber, another component
library, another animation library, a page builder, a fake booking engine.

Use Context7 for documentation matching installed package versions.

APP-STORE BRAND COMPLIANCE

Before implementation, check the current official Apple and Google Play
badge guidelines. Customer-facing copy must say "App Store" and "Google
Play" — do not use "Apple App Store." Use only current, localized official
badge artwork. Follow the applicable rules for minimum on-screen size, clear
space, background contrast, badge ordering, relative badge sizing, legal
attribution, linking, and localization. Do not rely on an old badge file
merely because it already exists in the repository. Record the badge source
and review date in `docs/media-inventory.md`.

Generate or publish a QR code only after its destination has been verified
(see Section 19). The QR code must use a stable approved URL, be tested on
iOS and Android, have sufficient quiet space and visual contrast, and not
contain personal or session-specific parameters.

> **Note on Jesko Jets and visual ambition:** whatever Jesko Jets' own
> implementation actually is, PrimeKar is bound by the stack above —
> Motion + shadcn, no GSAP/WebGL/scroll-hijacking. That means only the
> visual *principles* in Section 16 (typography, negative space, composition,
> mood) are in scope, not any specific motion technique. If a later review
> concludes the homepage needs more cinematic polish than Motion can
> deliver, that's a scope change to raise explicitly — not something to
> solve by quietly bending this rule.

────────────────────────────────────────────────────
26. METADATA AND BRAND ASSETS
────────────────────────────────────────────────────

The approved implementation must include, where applicable: favicon and
browser icon; Apple touch icon; Open Graph and social-sharing image; theme
colour; site name; approved manifest metadata.

Use official PrimeKar assets. Do not generate a replacement wordmark or
maple-leaf mark. Do not present the website as an installable PWA unless
offline behaviour, manifest behaviour, icons and installation experience are
intentionally implemented and approved.

Verify metadata and icons using conventions supported by the installed
Next.js version.

────────────────────────────────────────────────────
27. HOSTING AND DEPLOYMENT AUDIT
────────────────────────────────────────────────────

Inspect and document the current hosting and deployment environment before
choosing rendering or routing behaviour.

Create `docs/deployment-audit.md`. Record: current hosting provider, current
production branch, build command, output mode, Node.js version, package
manager, environment-variable requirements, static-export limitations,
redirect support, header and security-policy support, image-optimization
support, deployment workflow.

Do not change hosting, DNS, domain configuration, CI secrets, or deployment
settings without explicit approval.

────────────────────────────────────────────────────
28. CANONICAL HOST AND URL NORMALIZATION
────────────────────────────────────────────────────

During Phase A, determine and document: canonical scheme (HTTPS); canonical
hostname; www versus non-www policy; trailing-slash policy; lowercase URL
policy; duplicate URL variants; legacy `.html` URL treatment; query-parameter
treatment; HTTP-to-HTTPS and hostname redirects; redirect status codes and
chain length; case-sensitive routing behaviour; canonical URL generation
source.

Add these decisions to `docs/deployment-audit.md`, `docs/redirect-map.md`,
and `docs/seo-map.md`.

Requirements: each old URL should reach the final approved URL through no
more than one redirect when practical; do not create loops; do not redirect
unrelated removed pages to the homepage; preserve meaningful tracking
parameters only when approved and safe; verify the final production host in
canonicals, sitemap entries, structured data and Open Graph URLs.

────────────────────────────────────────────────────
29. SECURITY BASELINE
────────────────────────────────────────────────────

During Phase A, create `docs/security-baseline.md`.

Audit and propose, where supported by the approved hosting environment:
Content-Security-Policy; frame-ancestors; Strict-Transport-Security;
X-Content-Type-Options; Referrer-Policy; Permissions-Policy; removal or
suppression of unnecessary technology-identification headers; secure
external-link behaviour; safe environment-variable handling; safe
app-association files; safe caching of public and sensitive resources;
cross-origin rules only where genuinely required.

Rules:

- Do not copy a generic CSP without checking every required script, image,
  font and connection source.
- Do not weaken CSP with broad wildcards merely to silence errors.
- Do not enable `unsafe-eval` in production without a documented requirement
  and user approval.
- Do not enable HSTS `includeSubDomains` or `preload` until every affected
  subdomain is confirmed to support HTTPS and the user approves the
  consequence.
- Do not configure open CORS without a verified requirement.
- Never expose server-only environment variables to client-side code.
- Record limitations caused by static hosting.
- Test final response headers in the deployed or representative environment.

────────────────────────────────────────────────────
30. PERFORMANCE BUDGET
────────────────────────────────────────────────────

During Phase A, create `docs/performance-budget.md`.

Propose measurable budgets for: initial JavaScript transferred; initial
JavaScript executed; CSS transferred; font files and font-weight count; hero
image size; largest above-the-fold image; total initial page weight;
third-party requests and third-party JavaScript; layout shift; representative
mobile Lighthouse results; route-to-route navigation responsiveness.

Base the proposal on the configured stack, approved visual direction,
hosting capabilities, representative mobile conditions and current Core Web
Vitals targets (Section 31). Do not call the proposed limits "approved"
until the user approves them.

After approval: record the approved limits; test representative page types
against them; document every exception; do not silently raise a budget to
obtain a passing result. Treat Core Web Vitals thresholds and transfer
budgets as separate controls.

────────────────────────────────────────────────────
31. PERFORMANCE TARGETS
────────────────────────────────────────────────────

Use the current Core Web Vitals "good" thresholds as performance targets:
LCP 2.5 seconds or less, INP 200 milliseconds or less, CLS 0.1 or less. Treat
these as field-performance targets measured at the 75th percentile.

Pre-launch Lighthouse and browser measurements are laboratory proxies only.
Do not claim that Core Web Vitals pass in the field until production field
data is available.

During pre-launch testing: test representative mobile throttling; record
hero-image loading behaviour; record JavaScript transferred and executed;
check layout shift caused by fonts, images, badges and app screenshots;
check interaction delay in navigation and menus; document any page exceeding
the approved performance budget (Section 30).

────────────────────────────────────────────────────
32. PERFORMANCE AND ACCESSIBILITY
────────────────────────────────────────────────────

Target WCAG 2.2 Level AA. Meet WCAG 2.2 Success Criterion 2.5.8 for
pointer-target sizing, including the 24×24 CSS-pixel minimum and its
applicable exceptions. As a stricter PrimeKar usability target, make primary
buttons, navigation controls, menu controls, form controls, app-store CTAs,
and other important interactive elements at least 44×44 CSS pixels where
practical. The 44×44 target is a PrimeKar design standard and enhanced
accessibility goal — it is not the WCAG 2.2 Level AA minimum (that minimum
is 24×24; 44×44 is the Level AAA standard, SC 2.5.5).

ACCESSIBILITY EVALUATION METHOD

Automated Axe or Playwright accessibility checks are required but are not
sufficient to determine WCAG conformance. Perform documented manual checks
for representative page types, including: keyboard order and traps; focus
visibility and focus not obscured; menu, dialog and skip-link operation;
heading and landmark structure; link purpose and accessible names; form
labels, errors and status messages; text resizing, reflow and 200% zoom;
reduced motion and colour-independent communication; touch-target behaviour;
dragging alternatives when applicable; screen-reader smoke testing when
available; authentication and redundant-entry criteria when applicable.

Record in `docs/test-matrix.md`: criterion or behaviour; page or component;
test method; browser or assistive technology; result; limitation; required
correction.

Do not claim full WCAG 2.2 Level AA conformance solely because automated
checks report no violations. Unless a qualified conformance evaluation is
complete, use wording such as: "Tested against the applicable WCAG 2.2 Level
AA requirements within the documented scope." Do not use "WCAG certified."

Other requirements: logical heading hierarchy, skip-to-content link,
semantic landmarks, keyboard-operable navigation, visible focus indicators,
form labels and error associations, accessible menu and dialog behaviour,
reduced-motion support, text resizing without content loss, no colour-only
communication, appropriate accessible names, decorative images excluded from
the accessibility tree.

Require: semantic HTML, keyboard navigation, visible focus states,
accessible labels, accessible dialogs and menus, sufficient colour contrast,
correct heading order, large touch targets, reduced-motion support,
responsive images, modern image formats, lazy loading below the fold,
limited JavaScript, minimal third-party scripts, no console errors, no
broken links.

A page is not complete because it compiles. A page is complete only after
desktop and mobile browser inspection.

────────────────────────────────────────────────────
33. FINAL QUALITY GATE
────────────────────────────────────────────────────

Use the scripts and package manager already defined by the repository.

At minimum, run the repository equivalents of: type checking, linting,
formatting check, production build, unit tests (if configured), Playwright
end-to-end tests, accessibility tests, internal-link validation, broken
external-link review, structured-data validation, sitemap and robots.txt
validation, console-error inspection, horizontal-overflow inspection.

For each: record the exact command, pass/fail result, relevant output,
unresolved warning, and whether the issue blocks launch. Do not claim that
all checks pass unless every required check was actually run.

QUALITY-GATE CAPABILITY GAPS

For every required check: identify the existing repository script, installed
tool or browser-based method that will perform it; if a suitable method
exists, run it and record the exact command or procedure; if no suitable
method exists, mark the check `NOT CONFIGURED`, explain whether the gap
blocks launch, propose the smallest repository-local solution, and do not
install a new dependency or external service without approval. Do not
substitute a different test and call the original test complete. Do not
claim the Final Quality Gate passed while a launch-blocking check is `NOT
CONFIGURED`, `NOT RUN` or `FAILED`. Non-blocking unavailable checks must
appear as approved limitations in the launch-readiness report.

PRODUCTION PLACEHOLDER AND UNFINISHED-CONTENT REVIEW

Search source-controlled, production-facing files for unfinished or
placeholder material. Include: application source; public content and
public data files; metadata and structured data; configuration affecting
production output; public assets; tests whose disabled state could hide
failures.

Exclude from this specific production-content search: `node_modules` and
`.next`; package-manager and tool-managed caches; `.artifacts/qa`; approved
internal audit and review documents; Git metadata; generated build output;
third-party vendored code.

Search for: `[VERIFICATION REQUIRED]`; `TODO` and `FIXME`; Lorem ipsum and
`example.com`; placeholder image references; `href="#"` and empty href
values; fake phone numbers or email addresses; unapproved test copy;
console debugging statements; disabled tests; test-only credentials.

Rules: `[VERIFICATION REQUIRED]` may remain only in approved internal
documentation — it must never enter production-facing source, metadata,
structured data or public content. Review TODO and FIXME findings
individually. Do not remove a disabled test merely to clear the result;
determine why it is disabled and whether it creates launch risk.

────────────────────────────────────────────────────
34. DEPLOYMENT, ANALYTICS, AND LAUNCH APPROVAL
────────────────────────────────────────────────────

Production readiness is not deployment approval. Do not: deploy to
production, change DNS, change the production domain, modify production
environment variables, publish a release, merge to a production branch,
enable analytics or tracking, or submit the site to search engines — without
explicit user approval.

Do not introduce analytics, advertising pixels, session recording, behaviour
tracking, marketing cookies, third-party chat widgets, contact-form
processors, newsletter services, or CAPTCHA providers without explicit
approval and a documented privacy impact. Never expose secrets or private
environment variables to client-side code.

PHASE J — CONTROLLED DEPLOYMENT (SONNET, ONLY AFTER EXPLICIT APPROVAL)

Do not enter Phase J unless the user explicitly approves deployment.

Before deployment: confirm the exact approved commit and target environment;
confirm the production branch and rollback capability; confirm
environment-variable and staging readiness; confirm current-site recovery
information; confirm remaining approved limitations.

During deployment: deploy only the approved revision; do not introduce new
design, content or dependency changes; do not modify DNS, analytics, forms,
tracking or credentials unless separately approved.

After deployment, smoke-test: homepage and navigation; mobile navigation;
legal pages; store and contact links; approved CTAs and redirects; 404
handling; canonicals, robots.txt and sitemap.xml; structured data and
response security headers; console errors and core page rendering; iPhone
and Android links when devices are available.

If a Critical regression is found, stop and use the approved rollback
procedure.

Create `docs/post-deployment-report.md`.

────────────────────────────────────────────────────
35. STAGING AND PREVIEW ENVIRONMENTS
────────────────────────────────────────────────────

Any approved staging or preview deployment must be password-protected where
the hosting platform supports it, or return a noindex directive on every
page. Do not rely only on robots.txt to prevent indexing.

Do not include staging URLs in: production XML sitemaps, canonical URLs,
structured data, Open Graph production URLs, Search Console submissions.

Do not enable production analytics, advertising pixels, real form
processing, or production app credentials on staging without explicit
approval.

────────────────────────────────────────────────────
36. FIRST RESPONSE — AUDIT ONLY
────────────────────────────────────────────────────

Do not write production UI in the first response.

First provide: current working directory; files reviewed; project tools
detected; MCP servers detected; skills and plugins detected; current
PrimeKar URLs opened including the Download App URL audit; reference URLs
opened (and any that failed, per Section 15); uploaded assets found; missing
assets; app-screenshot publication status per Section 12; logo-asset
conflicts per Section 12; current-site Preserve / Improve / Verify / Remove
audit including the current-claims matrix; legal-content audit summary
(Section 11) and identified legal contradictions; legacy "on-demand"
messaging conflicts; classification of the Section 9 unresolved prior
claims; branch audit per Section 4; proposed sitemap; proposed homepage
structure; CTA/conversion routing map including app-link verification
status; proposed component architecture; proposed design-system direction;
mobile-first implementation approach; SEO-content approach; hosting/
deployment/security/performance-budget findings; technical risks;
phase-by-phase execution plan.

Create:

- `docs/current-site-audit.md` (includes current-claims matrix)
- `docs/legal-content-audit.md`
- `docs/current-url-inventory.md`
- `docs/redirect-map.md`
- `docs/reference-extraction.md`
- `docs/asset-audit.md`
- `docs/missing-assets.md`
- `docs/media-inventory.md`
- `docs/media-sourcing-plan.md`
- `docs/content-sources.md`
- `docs/cta-map.md`
- `docs/seo-map.md`
- `docs/sitemap.md`
- `docs/component-map.md`
- `docs/design-system.md`
- `docs/deployment-audit.md`
- `docs/security-baseline.md`
- `docs/performance-budget.md`
- `docs/test-matrix.md`
- `docs/decision-log.md`
- `docs/implementation-plan.md`

Documents created in later phases: `docs/homepage-review.md` (Phase C),
`docs/page-template-review.md` (Phase E), `docs/final-site-audit.md` (Phase
G), `docs/final-fix-log.md` (Phase H), `docs/launch-readiness.md` (Phase I),
`docs/post-deployment-report.md` (optional Phase J).

Do not create empty, repetitive, or template-only documents merely to
satisfy this list — see Phase A Depth Control in Section 1.

Do not build the website yet. Do not modify the logo. Do not rewrite legal
pages. Do not generate production components. Phase A may create only
planning, audit, architecture, inventory, and design documentation — no
production components, public routes, customer-facing page content,
production styling, production images, metadata used by live pages,
structured data, forms, navigation, or booking/app-download functionality.

Follow the Git and Approval Policy in Section 3 and the Branch Policy in
Section 4 before committing anything. Stop after the audit and plan. Wait
for my approval.

────────────────────────────────────────────────────
37. SOURCE-OF-TRUTH PRIORITY
────────────────────────────────────────────────────

Use the hierarchy appropriate to the type of information.

**LEGAL CONTENT**

1. User-approved replacement legal documents
2. Explicit user-approved legal corrections
3. Current published PrimeKar Privacy Policy and Terms and Conditions
4. All other sources

When no replacement or correction has been approved, preserve the current
published legal wording exactly. The master prompt controls migration
behaviour but does not independently change legal wording. If legal sources
conflict: use the highest-priority approved source, record the conflict, do
not combine competing versions, request approval before making an unresolved
legal change, and continue unrelated work where possible.

**BUSINESS FACTS AND SERVICE CLAIMS**

1. Explicit verified facts provided by the user
2. User-approved facts in CLAUDE.md
3. Approved PrimeKar business documents
4. Current PrimeKar website (subject to the current-claims matrix, Section 10)
5. PrimeKar app screenshots
6. Other PrimeKar materials
7. All external sources

Do not infer a business fact from a reference website, design pattern, stock
image, generated component, or competitor claim.

**BRAND AND DESIGN**

1. Official PrimeKar logo assets
2. Locked PrimeKar brand tokens in this master prompt
3. User-approved PrimeKar brand and design documents
4. Approved reference-site assignments
5. Installed design skills and generated design recommendations

Official logo files take priority over visual approximations, generated
wordmarks, screenshot colour sampling, or design-tool suggestions.

**PROJECT IMPLEMENTATION**

1. This master prompt
2. CLAUDE.md
3. User-approved implementation plans and design-system documents
4. Existing repository architecture and conventions
5. Official documentation matching installed library versions
6. Installed development tools and generated recommendations

**EXTERNAL TECHNICAL, ACCESSIBILITY AND PLATFORM STANDARDS**

Use current official primary documentation for: installed Next.js, React and
package versions; WCAG and W3C accessibility requirements; App Store
marketing and product-image guidelines; Google Play badge and linking
guidelines; Apple Universal Links; Android App Links; Google Search
structured-data support; search indexing and robots directives; Core Web
Vitals; hosting-platform behaviour.

Priority: current binding legal or trademark requirements for third-party
assets; current official platform documentation; documentation matching
installed software versions; this prompt's technical implementation detail;
secondary sources.

This hierarchy does not allow external documentation to change PrimeKar
business facts, brand decisions or approved content. If current official
documentation conflicts with this prompt: record the conflict; cite the
official source in the relevant audit document; do not silently follow
stale guidance; recommend the smallest compliant change; obtain approval
when the change affects scope, design, dependencies, hosting or customer
experience. Do not rely on blog posts, search snippets or competitor
implementations when an authoritative primary source is available.

**REFERENCE WEBSITES**

Reference websites are authoritative only for the design or UX patterns
explicitly assigned to them in Section 16. They are never authoritative
sources for: PrimeKar business facts, service capabilities, pricing, fleet
availability, passenger or luggage capacity, legal terms, safety claims,
reliability claims, corporate relationships, app functionality, customer
testimonials, or social-impact statistics.

**APP SCREENSHOTS**

App screenshots are evidence only of the interface visible in the supplied
image. They do not automatically verify: current production functionality,
current wording, current pricing, current service model, current legal
compliance, current app-store availability, or current data accuracy. When
app screenshots conflict with the verified pre-scheduled positioning, the
master prompt and approved business facts take priority.

**CONFLICT HANDLING**

When a conflict cannot be resolved through the applicable hierarchy:

1. Stop only the affected decision.
2. Document the conflicting sources.
3. Explain why the conflict matters.
4. Mark the decision as pending user approval.
5. Continue unrelated work where possible.
6. Do not silently choose whichever source is easier to implement.

Reference websites, generated components, AI recommendations, and design
tools must never override verified PrimeKar business facts, legal content,
official brand assets, or explicit user instructions.

────────────────────────────────────────────────────
38. EXECUTION DISCIPLINE
────────────────────────────────────────────────────

Do not turn setup, research, documentation, or tooling into an open-ended
process.

For every phase:

- Use the tools already installed.
- Do not reinstall working tools.
- Do not add optional dependencies without a demonstrated blocker.
- Do not repeat completed audits unless new evidence requires it.
- Do not restart the project architecture without explicit approval.
- Do not generate multiple competing implementations unless requested.
- Keep the repository clean.
- Keep changes limited to the approved phase.
- Prefer a working, accessible, maintainable implementation over unnecessary
  technical spectacle.

MASTER-SPEC CONTEXT DISCIPLINE

After this v7 text is approved:

1. Save it in the repository as `docs/master-spec-v7.md`.
2. Commit it only after branch and Git approval (Sections 3–4).
3. At the start of each phase, use a short phase launcher that instructs
   Claude to reread the master specification and named authoritative
   documents.
4. Do not paste the entire master specification again inside every phase.
5. Do not restate large completed audits in chat; reference the authoritative
   document and summarize only changes, decisions and blockers.
6. When the master specification changes, update its version and the
   decision log.

The stored specification remains authoritative; short phase launchers do not
replace or weaken it.

FREEZE RULE

This specification is frozen at v7. After Phase A begins, treat a new
suggestion as optional unless it fixes a demonstrable contradiction, factual
error, security/privacy risk, legal migration problem, launch blocker, or a
changed external requirement (business fact, legal document, app-link
capability, hosting platform, reference site, or technical stack). Do not
request another general prompt audit — raise specific issues as they
concretely arise during implementation instead.

When blocked:

1. Identify the exact blocker.
2. Explain whether it blocks the entire phase or only one task.
3. Recommend the smallest safe resolution.
4. Continue all work that is not genuinely blocked.
5. When user input is unavoidable, ask the smallest practical set of
   focused, related questions in one message — not a broad questionnaire.
   Separate decisions that block the current phase from decisions that can
   wait, and items that can be safely omitted. Continue all work that does
   not depend on the unanswered decision.
