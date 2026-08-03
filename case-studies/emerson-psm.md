# Emerson DeltaV™ PSM — Case Study Draft

> **Working draft for the Figma frame (node 625:88).** Paste each block into the frame, then refine.
> Follows `CASE_STUDY_GUIDE.md` (proof-first: lead with problem → role → outcome, deep-dive on Variants).
>
> **Legend:**
> - `【CONFIRM: …】` = a blank only you can fill (role, dates, impact, research). I've drafted a best guess where useful — replace it.
> - `【PICK ONE】` = I've drafted options; choose/edit.
> - All screen names/data shown (SRV_ABC_1, Variant_ABC_1, class-A, "Value here") are **sample/placeholder data already in the mockups**, so they're portfolio-safe. 【CONFIRM: any screenshot still needs blurring before public use.】

---

## ZONE 1 — ABOVE THE FOLD (the proof zone)

**Eyebrow:** UX/UI Case Study

**Title:** Emerson DeltaV™ PSM — Making recipe variants manageable at scale

**One-line summary (a stranger could repeat):**
A recipe-management tool for regulated pharma manufacturing, where I redesigned how engineers create, compare, and control hundreds of site-specific recipe variants.

**Snapshot bar:**
| | |
|---|---|
| **Role** | 【CONFIRM: e.g. "Product Designer (UX/UI)" — sole designer? part of a team?】 |
| **Timeline** | 【CONFIRM: your window — the release plan ran Jul 2023 → Jul 2024】 |
| **Platform** | Web (desktop enterprise application) |
| **Tools** | Figma, 【CONFIRM: others — Azure DevOps for handoff?】 |
| **Client** | Emerson (via QBurst) — DeltaV™ MES |

**The Challenge (1–2 sentences):**
In regulated manufacturing, a single master recipe spawns dozens of site-specific *variants* — and engineers had no reliable way to see how those variants differed, which were out of sync with the parent, or who was editing them. That ambiguity is a compliance and quality risk.

**The Outcome (one-line proof — 【PICK ONE】):**
- *(scope)* Delivered the Variants experience as the flagship MVP of the PKM v11 release (1,700-story-point scope) — create, compare, version, and sync recipe variants in one place. 【CONFIRM】
- *(decision)* Introduced a side-by-side comparison matrix that let engineers scan 32+ variants against the parent recipe with version and sync status inline — replacing manual, error-prone cross-checking. 【CONFIRM】
- *(impact)* 【CONFIRM: any metric or qualitative result — adoption, review-time reduction, stakeholder sign-off】

**Hero visual:** the Compare Variants matrix
`SS/Variants/4 Variant compare/Un-restricted/0.5.1.1_SR - variant comparison.jpg`

---

## ZONE 2 — THE STORY

### Context & Business Challenge

DeltaV™ MES is Emerson's platform for running batch manufacturing in regulated industries — pharma, biotech, chemicals. It digitizes recipes and batch records so plants can eliminate paper, cut errors, and release product faster while staying audit-ready.

Within it, **PSM / PKM (Process Knowledge Management)** handles recipes. A *master* recipe rarely runs unchanged: every site adapts it to its own equipment, materials, and constraints, producing many **site-recipe variants**. Over time a single recipe step can have **30+ variants**, each with its own version history.

The problem: variants had drifted into an unmanageable state.
- No side-by-side way to see **how two variants differ** (equipment, materials, parameters, samplings).
- No visibility into whether a variant was **in sync with its parent** master recipe.
- No clear **version control** — who had a variant checked out, which version was current.
- No **access control** on sensitive variants.

In a regulated environment, that ambiguity isn't just friction — it's a traceability and compliance liability.

### My Role & Contribution
【CONFIRM — be specific; "specific beats humble". Draft to edit:】
I led the UX/UI design for the **Variants** experience end-to-end — problem framing, information architecture, wireframes, high-fidelity design, and developer handoff — and also contributed to 【CONFIRM: supporting features you owned: color-coding, cloning studies, annotation hyperlinks, export?】. I worked directly with stakeholders **Bob and Kim** on scoping and release planning, alongside 【CONFIRM: QBurst team — other designers/PMs/devs】.

### Research & Discovery
【CONFIRM — what actually happened. Draft options to edit:】
- Reviewed the existing DeltaV recipe tooling and documented current flows (clone, rearrange, annotate, export) to map where variants broke down.
- Worked from the product requirement documents and **stakeholder sessions with Bob & Kim** to frame scope and priorities across the PKM v11 / QRM release.
- 【CONFIRM: any engineer interviews, field study, or usability testing — or state honestly if it was PRD- and stakeholder-driven.】

### The Variants Problem — deep dive (the flagship)

This is where I'll go deepest. Four sub-flows, each framed as *problem → decision → solution*:

**1. Creating a variant — "Save as New Site Recipe Variant"**
From the recipe editor, an engineer can branch a site-specific variant without disturbing the master. The action lives in the **My Workplace** save menu alongside "Save" and "Save as New Shared Recipe," so branching is a deliberate, discoverable choice rather than an accidental overwrite.
*Visual:* `SS/Variants/01 save as variant.jpg`

**2. The variant canvas & recipe structure**
Each variant opens in the same step-based canvas (RF_step_01 → RF_step_02) with its full attribute tree — Equipment Class, Equipment, Materials, Parameters, Samplings — so a variant is edited in the same mental model as the master, lowering the learning curve.
*Visuals:* `SS/Variants/1 Variant canvas/*`

**3. Comparing variants — the comparison matrix (the core)**
The heart of the solution. A **side-by-side matrix**: attribute tree down the left, variants across as columns. Key decisions:
- **Handling scale:** 32+ variants can't fit on screen, so the matrix paginates ("Showing 1 to 6 of 32") rather than cramming or truncating.
- **Version transparency:** every column shows three badges inline — *Variant Recipe Version*, *Parent Site Recipe Version*, *Variant Recipe Step Version* — so drift is visible at a glance.
- **Sync status:** an **"Out of Sync"** indicator plus a *"Show Out of Sync Variant"* filter lets engineers cut straight to the variants that need attention. 【trade-off to describe: default noise vs. focus】
- **Version control:** each variant carries its live state — **Check In / Check Out**, with save/refresh — so concurrent editing is safe and visible.
- **Access control:** sensitive variants appear **Restricted** with a **"Request for Access"** path; unrestricted ones are directly editable. (Two designed states — see the *Restricted* vs *Un-restricted* screen sets.)
- **Context:** inline **comments** on values let reviewers flag issues without leaving the comparison.
*Visuals:* `SS/Variants/4 Variant compare/Un-restricted/*` and `.../Restricted/*`; selection: `SS/Variants/3 Variant selection for comparison/*`

**4. Variant steps — enable / disable**
Engineers can turn individual steps on or off within a variant, tailoring the flow to a site without cloning an entirely new recipe.
*Visuals:* `SS/Variants/6 Variant Steps/*`, `SS/Variants/7 Steps/*`; doc: `Documentation/07_Doc_Variant_Steps_Disable:Enable.pdf`

**(Also designed: variant upgrade** — pulling parent updates into a variant. 【CONFIRM scope/inclusion】)

### Design decisions & trade-offs (call out 2–3 as proof)
【Draft — refine with your reasoning:】
- **Matrix over list:** chose a dense comparison matrix so differences read spatially; paid for it with horizontal scale, solved by pagination + a persistent attribute tree.
- **Status made visible, not hidden:** version badges and sync indicators live *in* each column instead of behind a menu — traceability is the whole point.
- **Reused the master-recipe canvas** for variants to avoid teaching a second mental model.

### Supporting breadth (brief — shows scope without sprawl)
Alongside Variants, the PKM v11 / QRM release included work I 【CONFIRM: contributed to / led】: **color-coding of study values** (QRM), **cloning studies** (C&E + FMEA), **rearranging rows**, **clickable hyperlinks in annotation**, **comments on FMEA/FRT/PS**, and **export/import of studies**. Show 2–3 as a compact gallery so the reviewer sees the breadth, then return to Variants as the depth.
*Visuals:* `SS/QRM Color/*`, `Documentation/*`, `SS/doc/Doc_Advance_Filter_*`

### Final UI Solution
A cohesive, version-controlled variant workspace built on the DeltaV design system (`EMR_Style guide`) — consistent recipe canvas, the comparison matrix, and the version/sync/access patterns, handed off to development 【CONFIRM: via Azure DevOps】.

### Impact & Results
【CONFIRM — the most important part; no invented numbers. Draft scaffold:】
- **Shipped:** the Variants experience anchored the **PKM v11 MVP** (1,700 SP scope) in the release plan agreed with Bob & Kim. 【CONFIRM it shipped / status】
- **Qualitative:** 【CONFIRM: stakeholder feedback, adoption across sites, review-time or error reduction】
- If no metrics exist, we lead the outcome with the **decision + before/after** instead (per the guide) — e.g. "manual cross-checking of variants → one comparison view with inline version & sync status."

### Reflection (2–3 lines)
【Draft — edit to your voice:】
The biggest lesson: in regulated enterprise tools, **making state visible is the design.** Engineers didn't need more features — they needed to trust what they were looking at. Version, sync, and access status shown inline did more for confidence than any new capability.

### Next project / footer
Prev/Next navigation + shared footer (matches Hubbit/Lashic pages).

---

## Open items for Rauf (the blanks above, collected)
1. **Role** — exactly what you owned (Variants only, or + which supporting features); sole designer or team.
2. **Timeline** — your involvement window & duration.
3. **Team** — who to credit (QBurst designers/PMs/devs; Bob & Kim confirmed as client stakeholders).
4. **Research** — what genuinely happened (interviews? audit? PRD + stakeholder only?).
5. **Impact** — anything real: shipped status, adoption, feedback, scope delivered.
6. **Confidentiality** — is this cleared for public portfolio use as-is, or do any screens need blurring?
7. **Variant upgrade** — include it as a 5th sub-flow or leave out?
