# EvoMesh Documentation Redesign — PLAN.md

## 1. Goal

Redesign the EvoMesh documentation website at:

https://evomesh.devart.solutions/

into a distinctive **Leonardo da Vinci / Renaissance engineering notebook inspired developer documentation experience**, while preserving modern usability, responsive behavior, accessibility, and excellent readability for technical content.

The visual direction must be:

> **Leonardo da Vinci notebook × modern Bootstrap developer documentation**

The final result should feel like a living technical codex documenting an evolving artificial system.

Do **not** create a museum-like, medieval, fantasy, steampunk, or kitschy design.

The site must remain clearly usable as modern software documentation.

Target balance:

- 70% modern developer documentation
- 30% Renaissance engineering notebook aesthetic

---

# 2. Core Product Context

EvoMesh is a local-first, self-improving multi-agent environment.

Core concepts include:

- persistent agents
- local model providers
- inter-agent communication
- agent memory/state
- skills
- permissions
- controlled code mutation
- candidate generations
- validation
- promotion
- environment evolution
- agent evolution

The visual language should reinforce these concepts.

The Renaissance notebook theme is not decoration only.

Use the metaphor:

```text
Observation
    ↓
Hypothesis
    ↓
Design
    ↓
Experiment
    ↓
Validation
    ↓
Evolution
```

This should visually parallel the EvoMesh lifecycle:

```text
Agent / Environment
        ↓
Candidate Mutation
        ↓
Validation
        ↓
Evaluation
        ↓
Promotion
        ↓
Generation N+1
```

---

# 3. Technology

Use:

- HTML5
- Bootstrap 5.3+
- modern CSS
- vanilla JavaScript
- Bootstrap Icons where appropriate
- Prism.js or Highlight.js for syntax highlighting if needed

Avoid adding large frontend frameworks unless the current project already uses one.

Do not migrate the documentation into React, Vue, Angular, Next.js, or another SPA framework solely for this redesign.

Prefer progressive enhancement.

The documentation must remain fast and mostly static.

---

# 4. Preserve Existing Documentation Content

Before modifying the UI:

1. Inspect the current documentation structure.
2. Preserve all existing technical documentation.
3. Preserve existing URLs where reasonably possible.
4. Preserve heading hierarchy where it is semantically correct.
5. Do not remove technical warnings, examples, CLI commands, API references, or configuration details.
6. Do not invent new EvoMesh behavior.
7. If a section is unclear, preserve its meaning rather than rewriting functionality.

The redesign is primarily visual, structural, and navigational.

Content rewriting is allowed only when required for:

- consistency
- headings
- labels
- navigation
- introductory copy

Do not change technical claims without supporting code or repository evidence.

---

# 5. Brand Concept

The documentation should present itself as:

```text
EVOMESH
CODEX EVOLUTIONIS
```

Possible supporting text:

> Machina quae se ipsam mutat.

Use Latin only as a small atmospheric device.

Primary documentation language remains English.

Do not overuse Latin.

Examples of acceptable decorative labels:

- Codex Evolutionis
- Figura
- Nota
- Cautio
- Generatio
- Experimentum

Do not translate technical documentation into Latin.

---

# 6. Main Hero

Create a visually strong homepage hero.

Suggested hierarchy:

```text
EVOMESH · CODEX I

Machines were built to obey.
EvoMesh is built to evolve.

A local-first environment where persistent agents live,
communicate, acquire reusable skills, and evolve in
isolated generations.
```

Include primary actions:

- Quick Start
- Architecture
- GitHub

The main illustration should be an original EvoMesh technical sketch.

Do not use Leonardo da Vinci portraits.

Do not make the Vitruvian Man the hero.

Instead create an original:

## Vitruvian Agent

A geometric diagram representing an autonomous agent.

Possible labels around the diagram:

```text
BELIEFS
GOALS
INTENTIONS
MEMORY
SKILLS
PERMISSIONS
```

The image should resemble an engineering notebook drawing made with:

- ink
- compass circles
- geometric construction lines
- arrows
- handwritten annotations

but remain clearly original and EvoMesh-specific.

Prefer SVG for diagrams.

---

# 7. Color System

Create a centralized CSS variable system.

Suggested starting palette:

```css
:root {
    --ev-paper: #f4eedf;
    --ev-paper-deep: #e8ddc6;

    --ev-ink: #302a21;
    --ev-ink-soft: #665b49;
    --ev-ink-muted: #837560;

    --ev-sepia: #896f45;
    --ev-rust: #8d4e36;
    --ev-olive: #68704b;

    --ev-border: rgba(74, 58, 38, 0.22);
    --ev-border-strong: rgba(74, 58, 38, 0.38);

    --ev-code-bg: #27251f;
    --ev-code-text: #e9dfc8;

    --ev-shadow: rgba(67, 53, 34, 0.14);
}
```

Use restrained colors.

Avoid bright SaaS blue/purple gradients.

Avoid neon AI aesthetics.

Avoid cyberpunk styling.

---

# 8. Typography

Recommended typography:

## Headings

Use a Renaissance-inspired serif such as:

- Cormorant Garamond
- EB Garamond
- Libre Baskerville

## Body

Use a highly readable serif or modern text font:

- Source Serif 4
- Literata
- system serif fallback

## Code

Use:

- JetBrains Mono
- IBM Plex Mono
- ui-monospace fallback

Typography must prioritize readability.

Do not use handwritten fonts for body text.

Handwritten-looking text may be used only for tiny decorative annotations.

---

# 9. Background and Texture

The main background should resemble very light aged paper.

Do not make the paper texture visually noisy.

Prefer:

```css
body {
    background-color: var(--ev-paper);
}
```

Optionally overlay a subtle texture.

Texture opacity should remain low.

Text contrast must meet WCAG accessibility requirements.

Do not reduce readability for aesthetic reasons.

---

# 10. Global Layout

Desktop layout:

```text
┌───────────────────────────────────────────────────────────────┐
│ EVOMESH / CODEX                Search       GitHub            │
├────────────────┬─────────────────────────────┬────────────────┤
│                │                             │                │
│ LEFT SIDEBAR   │ MAIN DOCUMENT              │ ON THIS PAGE   │
│                │                             │                │
│ navigation     │ content                     │ TOC            │
│                │                             │                │
└────────────────┴─────────────────────────────┴────────────────┘
```

Use Bootstrap grid.

Example:

```html
<div class="container-fluid docs-shell">
    <div class="row">

        <aside class="col-lg-2 docs-sidebar">
        </aside>

        <main class="col-lg-8 docs-content">
        </main>

        <aside class="col-lg-2 docs-toc">
        </aside>

    </div>
</div>
```

Exact widths may be adjusted.

The content column should not become excessively wide.

Recommended readable width:

```css
.docs-article {
    max-width: 850px;
}
```

---

# 11. Navbar

Create a slim sticky navbar.

Left side:

```text
EVOMESH
CODEX
```

or:

```text
EVOMESH / CODEX
```

Main navigation:

- Genesis
- Architecture
- Agents
- Skills
- Evolution
- Reference

Right side:

- Search
- GitHub

Mobile:

- Bootstrap navbar collapse or offcanvas navigation

Do not create an oversized marketing navbar.

---

# 12. Sidebar Navigation

The left documentation sidebar should feel like the index of a technical codex.

Example:

```text
CODEX EVOLUTIONIS

I.    Genesis
II.   Architecture
III.  The Environment
IV.   Agents
V.    Skills
VI.   Permissions
VII.  Local Intelligence
VIII. Evolution
IX.   Configuration
X.    CLI
XI.   Roadmap
```

Below each major entry, render actual documentation links.

Roman numerals are decorative navigation aids only.

Do not change canonical page names if URLs depend on them.

Highlight the active page.

Nested sections should collapse cleanly.

Sidebar should be sticky on desktop.

Use Bootstrap Offcanvas on mobile.

---

# 13. Right-Side Table of Contents

Desktop only.

Display:

```text
ON THIS PAGE

Overview
Lifecycle
State
Messages
Validation
Examples
```

Use generated anchors from headings.

Highlight the current heading using IntersectionObserver.

Hide this panel on smaller screens.

---

# 14. Homepage Sections

The homepage should contain:

## 14.1 Hero

Hero title, tagline, CTA buttons, Vitruvian Agent diagram.

## 14.2 What EvoMesh Is

Short technical explanation.

## 14.3 System Anatomy

Visual technical diagram showing:

```text
Human
  ↓
Channel
  ↓
EvoMesh Environment
  ├── Agent Registry
  ├── Message Bus
  ├── Persistence
  ├── Skills
  ├── Model Providers
  └── Candidate Workspace
```

## 14.4 Core Agents

Cards for:

- Agent Architect
- Guardian
- Evaluator
- Environment Evolver

## 14.5 Evolution Cycle

Visual generation diagram.

## 14.6 Quick Start

Terminal block.

## 14.7 Design Principles

Short principles such as:

- Local first
- Persistent state
- Controlled mutation
- Test before promotion
- Skills as reusable capabilities
- Human-controlled boundaries

Only include principles verified by the existing project.

---

# 15. Agent Cards

Create custom Bootstrap cards styled like engineering plates.

Each card should have:

```text
FIGURA I
[diagram]

AGENT ARCHITECT

Designs new agents through
structured dialogue.
```

Recommended mapping:

### Agent Architect

Visual concept:

- compass
- geometry
- drafting construction

### Guardian

Visual concept:

- boundary
- shield geometry
- gate mechanism

### Evaluator

Visual concept:

- scale
- measuring instrument
- calibration marks

### Environment Evolver

Visual concept:

- branching mechanism
- gears
- evolving machine assembly

Use original SVG line illustrations.

Do not copy historical illustrations directly.

---

# 16. Architecture Diagram

Create an original EvoMesh architecture SVG.

Style:

- hand-drawn engineering schematic
- sepia ink
- compass lines
- measurement marks
- labels
- arrows

Must remain understandable.

Suggested logical representation:

```text
                 HUMAN
                   │
                   ▼
              CHANNEL
                   │
                   ▼

        ╔════════════════════╗
        ║     EVOMESH        ║
        ║    ENVIRONMENT     ║
        ╚════════════════════╝

          │     │      │
          ▼     ▼      ▼

      Agents   Skills  Providers

          │
          ▼

      Persistence

          │
          ▼

    Candidate Workspace

          │
          ▼

      Generation N+1
```

The actual diagram must be visually polished.

---

# 17. Evolution Page

This should be one of the strongest visual pages.

Page heading:

```text
VIII
EVOLUTION

De mutatione machinae
```

Use the actual project terminology.

Create a large diagram:

```text
Generation N
     │
     ▼
Candidate Mutation
     │
     ▼
Validation
 ┌───┼───────────┐
 ▼   ▼           ▼
Lint Tests   Evaluation
 └───┼───────────┘
     ▼
Decision
 ┌───┴────┐
 ▼        ▼
Reject   Promote
           │
           ▼
     Generation N+1
```

Adjust stages to match the real implementation.

Do not invent validation stages.

Use repository/documentation evidence.

Include a decorative note:

> Nulla mutatio sine probatione.

Then immediately provide its English meaning:

> No mutation without validation.

This is atmospheric, not technical terminology.

---

# 18. Code Blocks

Code blocks must strongly contrast with the parchment UI.

Suggested styling:

```css
.codex-code {
    background: var(--ev-code-bg);
    color: var(--ev-code-text);

    border: 1px solid #574e3e;
    border-radius: 3px;

    box-shadow:
        4px 5px 0 var(--ev-shadow);
}
```

Provide a header:

```text
TERMINALIS                      COPY
```

or use the actual filename:

```text
evomesh.toml                    COPY
```

Add copy-to-clipboard functionality.

Preserve syntax highlighting.

Line wrapping should be handled correctly.

Long lines should allow horizontal scrolling.

---

# 19. Callouts

Replace generic Bootstrap alerts with custom Codex-style callouts.

Create types:

## Nota

General information.

```text
NOTA

The environment owns lifecycle,
messaging, state and permissions.
```

## Cautio

Important warning.

```text
CAUTIO

EvoMesh permissions are not
an operating-system security sandbox.
```

## Experimentum

Experimental feature.

## Principium

Design principle.

Use Bootstrap components underneath if helpful.

Use icons subtly.

Do not use emoji-heavy styling.

---

# 20. Tables

Technical tables must remain highly readable.

Use:

- thin sepia borders
- subtle alternating background
- strong header row
- responsive wrapper

Example:

```html
<div class="table-responsive codex-table">
    <table class="table">
```

Avoid excessive decoration.

---

# 21. Inline Code

Inline code should appear like a small dark or lightly tinted technical notation.

Example:

```css
:not(pre) > code {
    background: rgba(74,58,38,.08);
    border: 1px solid rgba(74,58,38,.12);
    padding: .12rem .3rem;
}
```

---

# 22. Figures

Create a reusable figure component.

Example:

```html
<figure class="codex-figure">

    <img src="..." alt="...">

    <figcaption>
        <span>FIG. VIII·III</span>
        Candidate generation lifecycle.
    </figcaption>

</figure>
```

Use figure numbering throughout diagrams.

Examples:

- FIG. I·I
- FIG. III·II
- FIG. VIII·III

This reinforces the codex identity.

---

# 23. Decorative Annotation System

Use occasional marginal annotations.

Examples:

```text
observation
hypothesis
mutation
validation
selection
```

Style them as handwritten engineering notes.

Keep them:

- small
- low contrast
- decorative
- non-essential

Never put required instructions only in handwritten text.

Do not use mirror writing for important content.

Mirror-writing-like decoration may appear in SVG backgrounds only.

---

# 24. Search

If documentation already has search, preserve it.

If not, implement lightweight documentation search.

Possible options:

- Pagefind
- Lunr
- static client-side index

Prefer Pagefind for static documentation if appropriate.

Search modal should use Bootstrap.

Keyboard shortcut:

```text
Ctrl / Cmd + K
```

Optional:

```text
/
```

if it does not interfere with inputs.

---

# 25. Mobile Experience

The redesign must work well on phones.

Requirements:

- navbar collapses
- documentation sidebar becomes offcanvas
- right TOC disappears
- diagrams remain responsive
- code blocks scroll horizontally
- tables scroll horizontally
- buttons remain touch-friendly
- hero stacks vertically
- typography scales gracefully

Do not simply hide navigation.

Use Bootstrap Offcanvas for documentation navigation.

---

# 26. Accessibility

Must support:

- semantic HTML
- keyboard navigation
- visible focus states
- high contrast
- accessible SVG titles/descriptions
- alt text
- proper heading hierarchy
- screen-reader labels
- `aria-current` for active navigation

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Animations should be reduced or disabled.

Do not use animations necessary to understand content.

---

# 27. Motion

Motion should be subtle.

Allowed:

- faint drawing-line reveal for hero SVG
- small hover movement
- underline animation
- TOC active transition

Avoid:

- particle systems
- floating AI blobs
- dramatic parallax
- constant gear rotation
- excessive scroll animations

The website should feel like a serious technical artifact.

---

# 28. Dark Mode

Dark mode is optional.

If implemented, do not make it cyberpunk.

Suggested concept:

> charcoal drafting desk

Example:

```text
background: #201e19
text: #e9dfc8
lines: #8b795d
accent: #b68c59
```

Persist user preference.

Also respect:

```css
prefers-color-scheme
```

Do not prioritize dark mode over the main parchment experience.

---

# 29. Footer

Create a minimal footer.

Possible structure:

```text
──────────────────────── ∞ ────────────────────────

EVOMESH

An experimental study in persistent artificial minds.

Dev-Art Solutions · MMXXVI
MIT License
GitHub
```

Verify the actual license before rendering it.

Do not display MIT if the project does not use MIT.

---

# 30. Suggested File Structure

Adapt to the existing project.

Preferred organization:

```text
docs/
│
├── index.html
├── architecture.html
├── agents.html
├── skills.html
├── evolution.html
├── configuration.html
├── cli.html
├── roadmap.html
│
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── evomesh-codex.css
│   │
│   ├── js/
│   │   └── docs.js
│   │
│   ├── img/
│   │   ├── vitruvian-agent.svg
│   │   ├── architecture.svg
│   │   ├── evolution.svg
│   │   └── agents/
│   │       ├── architect.svg
│   │       ├── guardian.svg
│   │       ├── evaluator.svg
│   │       └── environment-evolver.svg
│   │
│   └── fonts/
```

If documentation is generated from Markdown, prefer:

```text
docs-src/
├── index.md
├── architecture.md
├── agents.md
├── skills.md
├── evolution.md
└── ...

theme/
├── layout.html
├── partials/
└── assets/
```

Do not duplicate large HTML fragments manually if the current stack supports layouts/partials.

---

# 31. Reusable Components

Create reusable components/styles for:

- navbar
- docs sidebar
- mobile offcanvas navigation
- right TOC
- hero
- page header
- section divider
- code block
- copy button
- callout
- technical figure
- agent card
- table
- breadcrumb
- previous/next navigation
- footer

Avoid page-specific duplicated CSS.

---

# 32. Section Divider

Create a small reusable divider inspired by drafting marks.

Example:

```text
──────────── ◇ ────────────
```

or:

```text
A──────────────B
```

Use sparingly.

---

# 33. Page Header Pattern

Documentation pages should share a clear header.

Example:

```text
VIII

EVOLUTION

Controlled mutation and generational promotion.

De mutatione machinae
```

Under the title:

- short summary
- optional figure number
- optional technical diagram

The Latin subtitle must remain visually secondary.

---

# 34. Previous / Next Navigation

At the bottom of each documentation page:

```text
← VII · LOCAL INTELLIGENCE

IX · CONFIGURATION →
```

Use Bootstrap flex utilities.

This navigation should remain visible and clear.

---

# 35. Breadcrumbs

Use small breadcrumbs:

```text
CODEX / AGENTS / STATE
```

Style them like catalog references.

Do not use large Bootstrap breadcrumb boxes.

---

# 36. GitHub Integration

Include a GitHub link in:

- navbar
- footer

If existing documentation supports edit links, add:

```text
Edit this page on GitHub
```

Only if a stable source URL can be generated.

---

# 37. Performance

Goals:

- minimal JavaScript
- optimized SVG
- no giant uncompressed backgrounds
- lazy-load non-critical illustrations
- avoid unnecessary webfonts
- use font-display: swap
- minimize layout shift

Target Lighthouse:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

Do not sacrifice readability for scores.

---

# 38. SEO and Metadata

Ensure every page has:

- unique `<title>`
- description
- canonical URL where appropriate
- Open Graph metadata
- favicon
- proper language declaration

Suggested homepage title:

```text
EvoMesh — Self-Evolving Multi-Agent Environment
```

Possible description:

```text
EvoMesh is a local-first environment for persistent AI agents,
reusable skills, controlled mutation, and isolated evolution.
```

Use technically accurate wording.

---

# 39. Favicon / Mark

Create a simple EvoMesh documentation mark.

Suggested concept:

- circle
- geometric mesh
- four connected nodes
- central evolving core

Do not use Leonardo's face.

Do not use Vitruvian Man directly.

It should remain recognizable at 16×16 and 32×32.

---

# 40. Illustration Rules

All major illustrations should be original.

Visual language:

- pen-and-ink
- geometric construction
- sepia
- mechanical diagrams
- compass circles
- measurement ticks
- arrows
- architectural notation

Avoid:

- copyrighted scans used as backgrounds
- copied Leonardo drawings
- generic AI brain images
- robots
- glowing neural networks
- circuit-board stock art

The visual identity should suggest:

> Renaissance engineer documenting an artificial ecosystem.

---

# 41. Vitruvian Agent SVG

Create an original hero SVG.

Suggested structure:

```text
                    GOALS
                      |
             ┌─────────────┐
             │             │
 BELIEFS ────┤    CORE     ├──── SKILLS
             │             │
             └─────────────┘
                /       \
               /         \
          MEMORY       INTENTIONS

             PERMISSIONS
```

Use:

- multiple concentric circles
- geometry lines
- compass marks
- labelled axes
- small annotations

Do not depict a recognizable human body copied from Vitruvian Man.

Prefer an abstract agent-core representation.

---

# 42. Technical Truthfulness

Before visualizing architecture or processes:

1. inspect repository code
2. inspect existing docs
3. verify terminology
4. verify lifecycle
5. verify agent names
6. verify mutation/evolution workflow
7. verify configuration names
8. verify CLI commands

Documentation visuals must describe actual EvoMesh behavior.

If implementation and docs differ, do not silently choose one.

Add a TODO or fix the inconsistency with evidence.

---

# 43. Implementation Stages

## Stage 1 — Audit

Inspect:

- current docs framework
- current navigation
- existing CSS
- existing pages
- markdown source
- build tooling
- deployment
- GitHub Actions
- project license
- EvoMesh architecture terminology

Document findings.

---

## Stage 2 — Design Tokens

Implement:

```text
colors
typography
spacing
borders
shadows
code palette
callouts
figure system
```

Create:

```text
evomesh-codex.css
```

---

## Stage 3 — Shell

Build:

- navbar
- left sidebar
- main content layout
- right TOC
- mobile offcanvas
- footer

Verify responsiveness before styling every page.

---

## Stage 4 — Homepage

Implement:

- hero
- Vitruvian Agent
- system anatomy
- core agents
- evolution cycle
- quick start
- principles

---

## Stage 5 — Documentation Pages

Apply reusable layout to all documentation.

Do not manually fork the design per page.

---

## Stage 6 — Diagrams

Create original SVGs:

```text
vitruvian-agent.svg
architecture.svg
evolution.svg
architect.svg
guardian.svg
evaluator.svg
environment-evolver.svg
```

---

## Stage 7 — Interaction

Implement:

- copy code
- mobile nav
- active sidebar
- TOC highlight
- search
- reduced motion support

---

## Stage 8 — QA

Verify:

- desktop
- tablet
- phone
- Chrome
- Firefox
- Edge
- Safari if practical

Check:

- broken links
- overflow
- code scrolling
- SVG scaling
- active nav
- anchor links
- search
- copy buttons
- accessibility

---

# 44. Required Screens

At minimum verify:

```text
1440 × 900
1280 × 800
1024 × 768
768 × 1024
390 × 844
360 × 800
```

Ensure content remains usable at each size.

---

# 45. Acceptance Criteria

The redesign is complete only when:

- [ ] Existing documentation content remains accessible
- [ ] Existing important URLs are preserved or redirected
- [ ] Bootstrap 5 is used correctly
- [ ] Navbar is responsive
- [ ] Sidebar works on desktop
- [ ] Sidebar becomes offcanvas on mobile
- [ ] Right-side TOC works on desktop
- [ ] Code blocks support copy
- [ ] Syntax highlighting works
- [ ] Tables are responsive
- [ ] Figures scale correctly
- [ ] Original EvoMesh SVG diagrams exist
- [ ] Hero includes an original Vitruvian Agent concept
- [ ] No Leonardo portrait is used
- [ ] No direct copy of Vitruvian Man is used
- [ ] No stolen historical scan is required for the design
- [ ] Site remains readable without decorative assets
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Reduced motion is respected
- [ ] Mobile layout has been verified
- [ ] All existing documentation links have been tested
- [ ] No fake EvoMesh functionality has been introduced
- [ ] Architecture visuals match the repository
- [ ] Evolution visuals match the implementation
- [ ] Footer license is verified
- [ ] GitHub links point to the correct repository
- [ ] Homepage clearly explains EvoMesh within one viewport
- [ ] Overall visual style feels like Leonardo engineering notes rather than generic vintage styling

---

# 46. Design Anti-Patterns

Do NOT:

- create a medieval website
- make pages look burned or torn
- use unreadable script fonts
- use parchment textures behind code
- use fake wax seals
- use quills as UI controls
- add old-map decorations
- use steampunk gears everywhere
- use AI neon gradients
- add excessive animations
- use Leonardo portraits
- directly reproduce Vitruvian Man
- use generic robot illustrations
- sacrifice documentation usability for aesthetics
- hide technical navigation behind decorative UI
- rewrite technical behavior without checking code

---

# 47. Desired Emotional Result

A developer opening EvoMesh documentation should feel:

> This is a serious experimental engineering project.

Then:

> The system is not merely executing commands. It has architecture, memory, controlled mutation, and generations.

And finally:

> This documentation itself feels like the laboratory notebook of the machine.

The design should communicate intellectual curiosity, engineering discipline, experimentation, and evolution.

---

# 48. Final Deliverables

Codex should deliver:

1. redesigned documentation site
2. reusable Bootstrap documentation shell
3. `evomesh-codex.css`
4. responsive navigation
5. responsive sidebar/offcanvas
6. right-side TOC
7. original SVG diagram system
8. Vitruvian Agent hero illustration
9. architecture SVG
10. evolution SVG
11. agent illustrations
12. code copy component
13. custom callouts
14. responsive tables
15. search if technically appropriate
16. mobile QA
17. accessibility QA
18. updated documentation README describing how the theme is maintained

---

# 49. Final Validation

Before finishing:

Run the documentation locally.

Inspect every major page visually.

Check browser console errors.

Check broken links.

Check at least one long technical page.

Check at least one page containing:

- code
- table
- callout
- diagram
- nested headings

Verify mobile navigation.

Verify the hero does not dominate the actual documentation.

Verify decorative elements remain secondary to the technical content.

If the site looks beautiful but is harder to use than the existing documentation, the redesign is not finished.

---

# 50. Guiding Principle

Use this sentence as the design rule for every decision:

> **Draw the machine like Leonardo. Document it like an engineer.**
