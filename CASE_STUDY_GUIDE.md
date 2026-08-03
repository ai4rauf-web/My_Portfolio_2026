# Case Study Guide

How to write and build case-study detail pages for this portfolio.

> **Scope:** This is the standard for **new** case studies going forward.
> The existing `Hubbit` and `Lashic` pages are intentionally left as-is (process-first)
> and are **not** migrated to this structure.

---

## 1. The one principle: lead with proof, not process

A hiring manager scans a case study in seconds and asks *"what did this person do, and did it work?"* — **before** reading any methodology. Source: [Superhive — UX Design Portfolio Review](https://www.superhive.co/ux-design-portfolio-review-what-hiring-managers-look-for).

The single biggest mistake (and the thing Hubbit/Lashic do that we're fixing here) is opening with paragraphs of discovery before any payoff. So every new case study is split into two zones:

- **Zone 1 — Above the fold (the proof zone):** problem → role → outcome → hero, all scannable without effort.
- **Zone 2 — The process story:** the deep dive, where every section earns its place with a payoff.

The reviewer's scan path we're designing for:

1. **Role clarity** — a plain sentence a stranger could repeat.
2. **Relevance** — is this the kind of work I'm hiring for?
3. **Ownership** — what did *you* do vs. the team? ("Specific beats humble.")
4. **Proof above the fold** — an outcome, a decision, or a before/after, immediately.
5. **Low friction** — working links, mobile-ready, no dead ends.

---

## 2. Page structure

### Zone 1 — Above the fold (proof zone)

| Order | Section | What it contains | Length |
|---|---|---|---|
| 1 | **Eyebrow + Title** | Category (e.g. "UX/UI Case Study") + project name | 1 line each |
| 2 | **One-line summary** | Plain-language "what this is," repeatable by a stranger. No jargon. | 1 sentence |
| 3 | **Snapshot bar** | Role · Timeline · Platform · Tools · Client (see §4) | 5 quick facts |
| 4 | **The Challenge** | The business/user problem, stated plainly | 1–2 sentences |
| 5 | **The Outcome** | The headline proof — a metric, or a key decision + its effect. **Pulled up from the bottom.** | 1–2 lines |
| 6 | **Hero visual** | The single strongest shot/mockup/video | — |

### Zone 2 — The process story (below the fold)

| Order | Section | What it contains |
|---|---|---|
| 7 | **Context & Business Challenge** | Fuller framing: who the client is, why it mattered, the stakes and constraints |
| 8 | **My Role & Contribution** | Explicit "I did X" boundary. Distinguish concept work vs. shipped work. **Mandatory.** |
| 9 | **Research & Discovery** | Users, interviews, competitive/existing-product audit → the key findings |
| 10 | **UX Problems Identified** | The framed problems/insights that came out of research (not a feature list) |
| 11 | **Design Thinking & Decisions** | IA, user flows, and **decisions explained with trade-offs** — the strongest proof format |
| 12 | **Wireframes & Iteration** | Low/mid-fi work, and **what testing changed** (before/after with a reason) |
| 13 | **Final UI Solution** | Hi-fi screens, design system, the shipped result |
| 14 | **Impact & Results** | The full outcome — metrics + qualitative results (the top "Outcome" line, expanded) |
| 15 | **Reflection** | 2–3 lines: what you learned / would do next. Keep it short. |
| 16 | **Next project + Footer** | Prev/Next navigation, shared footer |

This maps directly onto the classic sequence — business challenge → research → UX problems → design thinking → wireframes → final UI → impact — with the crucial change that **a teaser of the outcome moves to the top** while the full Impact section stays at the bottom.

---

## 3. The three non-negotiable rules

1. **Proof moves up.** A one-line outcome sits in Zone 1. The full Results section stays at the bottom (§14). The top line is a teaser; the bottom is the evidence.
2. **"My Role" is required and specific.** Name exactly what you owned. "Led the design of X and shipped Y" beats "crafted human-centered experiences."
3. **Every process section earns its place with a payoff.** End (or open) each with a decision, a trade-off, a before/after, or a test result. Never process for its own sake.

### Proof formats (in order of strength)

Use whichever the project actually has — don't invent metrics:

1. **Quantified outcome** — "conversion up 40%, adoption up 30%."
2. **Decision with trade-offs** — "chose tap over swipe because 90% of users found it faster."
3. **Before/after with a reason** — the old flow vs. the new, and why.
4. **Test result in one line** — "6/6 participants completed the task unaided."
5. **A constraint that shaped the solution** — "one shared device per floor forced a glanceable-first design."

**No hard metrics?** The Zone-1 "Outcome" line falls back to #2–#5 above (a decision, before/after, test result, or the shipped scope). This is expected and still counts as proof.

---

## 4. Snapshot bar spec

Five quick facts, in this order:

| Field | Example |
|---|---|
| **Role** | Lead Product Designer |
| **Timeline** | 3 months · 2025 |
| **Platform** | iOS · Android · Web |
| **Tools** | Figma, Principle, Lottie |
| **Client** | e& UAE *(link if public)* |

Keep values short. `Tools` mirrors the "Made with" chip style used on the Lab cards.

---

## 5. Code implementation

### Approach: shared section components, composed per study

New case studies are **assembled from a shared library of section components** — not hand-built from scratch, and not force-fit into one rigid template. This keeps every study on the same structure while allowing per-study ordering and custom media layouts.

```
Page (per study)  =  compose shared sections in the order above,
                     feeding each its content as props.
```

### File & asset conventions

| Thing | Location / pattern |
|---|---|
| Page component | `src/pages/CaseStudy<Name>.tsx` |
| Route | `/projects/<slug>` in `src/App.tsx` (with the `<ScrollToTop>` already in place) |
| Shared section components | `src/components/casestudy/*` |
| Images | `src/assets/<slug>/` (export from Figma, like Hubbit/Lashic) |
| Video | Cloudinary (see the Lab video setup); poster via a `so_<seconds>` frame |
| Entry on Home | add to `src/data/projects.ts` and link its `View Details` to `/projects/<slug>` |

### Shared component library (to build with the first new study)

Promote the informal helpers already living inside `CaseStudyHubbit.tsx` / `CaseStudyLashic.tsx` (`SectionLabel`, `SectionTitle`, `Body`, `Collage`) into `src/components/casestudy/` and add the proof-zone pieces. Intended API:

```tsx
// Layout wrapper: max-width, padding, Back button, Next-project nav, Footer.
<CaseStudyLayout backTo="/" next={{ to: '/projects/x', label: 'Next Project' }}>…</CaseStudyLayout>

// Zone 1 — the proof zone.
<CaseStudyHero
  eyebrow="UX/UI Case Study"
  title="B2B application for traders & suppliers"
  summary="A plain sentence a stranger can repeat."
  snapshot={{ role, timeline, platform, tools: [...], client: { label, href } }}
  challenge="The problem in 1–2 sentences."
  outcome="The headline proof, one line."          // the teaser
  hero={{ kind: 'image' | 'video', src, poster? }}
/>

// Zone 2 — reusable building blocks, composed in order.
<Section label="Research & Discovery" title="…">…<Body>…</Body></Section>
<MediaFigure src="…" alt="…" caption="…" />          // single image/video + caption
<Gallery items={[…]} layout="grid | scroll | collage" />
<ProofCallout>Decision + trade-off, or a before/after.</ProofCallout>
<ImpactStats stats={[{ value: '40%', label: 'conversion' }, …]} />   // metric tiles
```

Design tokens are already in `tailwind.config.js` (`ink`, `charcoal`, `muted`, `surface`, tag colors; IBM Plex Sans). Reuse them — don't introduce new ones.

### Composition skeleton (per study)

```tsx
export default function CaseStudyExample() {
  return (
    <CaseStudyLayout backTo="/" next={{ to: '/projects/next', label: 'Next Project' }}>
      <CaseStudyHero {...hero} />                    {/* Zone 1 */}

      <Section label="Context" title="…"> … </Section>          {/* Zone 2 */}
      <Section label="My Role" title="…"> … </Section>          {/* required */}
      <Section label="Research & Discovery" title="…"> … </Section>
      <Section label="UX Problems" title="…"> … </Section>
      <Section label="Design Decisions" title="…"> <ProofCallout>…</ProofCallout> </Section>
      <Section label="Wireframes" title="…"> <Gallery … /> </Section>
      <Section label="Final UI" title="…"> <Gallery … /> </Section>
      <Section label="Impact" title="…"> <ImpactStats … /> </Section>
      <Section label="Reflection" title="…"> … </Section>
    </CaseStudyLayout>
  )
}
```

---

## 6. Author checklist (before publishing a case study)

- [ ] Title + a one-sentence summary a stranger could repeat.
- [ ] Snapshot bar filled: Role · Timeline · Platform · Tools · Client.
- [ ] The Challenge is stated in 1–2 plain sentences, above the fold.
- [ ] An Outcome/proof line sits above the fold (metric, decision, or before/after).
- [ ] "My Role" section names exactly what you owned (concept vs. shipped).
- [ ] Every Zone-2 section ends with a payoff (decision / trade-off / before-after / test result).
- [ ] Full Impact section at the bottom, with real outcomes (no invented metrics).
- [ ] Reflection kept to 2–3 lines.
- [ ] Images optimized; video on Cloudinary with a non-black poster frame.
- [ ] Route added, `View Details` linked from Home, Prev/Next nav works.
- [ ] Checked on desktop **and** mobile; no horizontal overflow; all links work.
- [ ] Peer 30-second scan: can they say what you did and whether it worked?

---

## 7. Fill-in-the-blank content template

Copy this to draft a new study before touching code.

```
CATEGORY: (e.g. UX/UI Case Study)
TITLE:
SUMMARY (1 sentence, plain language):

SNAPSHOT
  Role:
  Timeline:
  Platform:
  Tools:
  Client:

THE CHALLENGE (1–2 sentences):
THE OUTCOME (1 line — the proof teaser):
HERO (image/video):

--- process ---

CONTEXT & BUSINESS CHALLENGE:
MY ROLE (what I owned; concept vs. shipped):
RESEARCH & DISCOVERY (methods → key findings):
UX PROBLEMS IDENTIFIED:
DESIGN THINKING & DECISIONS (each with a trade-off):
WIREFRAMES & ITERATION (what testing changed):
FINAL UI SOLUTION:
IMPACT & RESULTS (metrics + qualitative):
REFLECTION (2–3 lines):
```
