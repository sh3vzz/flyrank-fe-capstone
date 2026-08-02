# FL-03: Portfolio Content Map & Through-Line

**Project Context:** FlyRank Internship Capstone Portfolio
**Primary Audience:** Tech Recruiters / Engineering Leads
**Goal (Action defined in Chapter 1):** Visitor requests an interview.

---

## 1. The One-Line Claim

_This is the single sentence a visitor should remember, greeting them on the Homepage._

> **Claim:** "Software engineering intern specializing in building resilient, accessible web interfaces and mathematical tools through rigorous, AI-assisted development."

---

## 2. Content Map (Site Blueprint)

_The flow of pages and sections, ordered to showcase the strongest proof first, all laddering up to the primary goal._

### Page 1: Homepage / Main Landing (`index.html`)

| Section                 | Content / Proof Point                                                                                                                          | Call to Action (CTA)                                                                      |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| **Hero**                | The One-Line Claim (above) + Brief introduction context.                                                                                       | `"View My Featured Work"` (Scrolls to Featured section)                                   |
| **Featured Case Study** | **FE-03 React Settings Form.** Leading with the strongest proof: production-grade code with Zod validation.                                    | `"Read the Full Case Study"` (Links to `settings-form.html`)                              |
| **Work Samples Grid**   | Summary tiles for other work: <br>1. **Recurrence Relation Solver** (C++ command line drill). <br>2. **Image Curation Log** (Design judgment). | `"View All Case Studies"` (Links to `projects.html`)                                      |
| **Skills & Philosophy** | Core Tech (React, Zod, C++) + Development Philosophy (rigorous testing, performance).                                                          | N/A                                                                                       |
| **Contact / Footer**    | Final pitch connecting to the primary goal.                                                                                                    | **`"Let's Build Something: Request an Interview"`** (Final Call, links to `contact.html`) |

### Page 2: Project Case Study Detail (`settings-form.html`)

_This page focuses on proving technical capability for a single high-quality piece._

| Section                | Content / Proof Point                                                                              | Call to Action (CTA)                                  |
| :--------------------- | :------------------------------------------------------------------------------------------------- | :---------------------------------------------------- |
| **Title / Intro**      | "Building a Production-Ready Settings Form with Zod."                                              | N/A                                                   |
| **The Problem**        | Highlighting the challenge of messy state, poor validation, and broken accessibility in raw forms. | N/A                                                   |
| **The Solution**       | Detail how React Hook Form + Zod solved it. _Screenshot of schema._                                | `"View the Full Repo"` (Links to GitHub)              |
| **The Implementation** | Breakdown of decision making (Performance vs. Accessibility). _Screenshot of the final UI._        | `"Try the Live Demo"` (Links to deployed URL)         |
| **Key Takeaways**      | What was learned about engineering discipline.                                                     | `"See More Projects"` (Links back to `projects.html`) |

---

## 3. "Still Need to Gather" (Blocker) List

_An honest inventory of missing proof elements to ensure build week is not blocked._

- [ ] **Live Deployed Demo URL** for the FE-03 Settings Form (needed for `settings-form.html`).
- [ ] **Final GitHub Repo URLs** for both the React Form and the C++ solver (needed on all project pages).
- [ ] **Final Real Captures (Screenshots)**, clean and cropped, showing:
  - [ ] The Zod Schema definition in VS Code.
  - [ ] The final React Form UI showing error states.
  - [ ] The C++ terminal output trace showing the recurrence relation solution.
- [ ] **One Professional Real Headshot** for the bio/homepage section.

---

## 📈 Evaluation Criteria Check

_This deliverable passes because:_

- It contains a single, memorable, non-paragraph claim.
- All page sections are prioritized, with the strongest technical work (FE-03) leading.
- All CTAs (view work, try demo, request repo) progressively _ladder up_ to the main action of requesting an interview.
- The "Still Need to Gather" list is concrete and technical, preventing blockers during the build phase.
