# EvoMesh documentation

This repository contains the static source for [evomesh.devart.solutions](https://evomesh.devart.solutions),
the documentation site for [EvoMesh](https://github.com/Dev-Art-Solutions/EvoMesh).

There is no build step. The whole site is one document: `src/index.html`. Styles, scripts,
illustrations, fonts, and vendored libraries live under `src/assets/`.

## The theme

The design is a Renaissance engineering notebook rendered as developer documentation — roughly
70% modern developer documentation, 30% engineering notebook. The rule behind every decision in the stylesheet:

> Draw the machine like Leonardo. Document it like an engineer.

Decoration is allowed to be beautiful; it is never allowed to be the thing a reader has to get
past to reach the technical content. If a change makes the site prettier and harder to use, it is
not an improvement.

## Local preview

```bash
python -m http.server 8080 --directory src
```

Then open `http://localhost:8080`. Any static file server works.

## Structure

```text
src/
├── index.html                     the whole site, one document, anchored per section
└── assets/
    ├── css/
    │   ├── evomesh-notebook.css   design tokens and every component
    │   └── fonts.css              @font-face for the vendored typefaces
    ├── fonts/                     Cormorant Garamond, Source Serif 4, JetBrains Mono (woff2)
    ├── images/                    engraved plates, each as .webp with a .png fallback
    ├── js/
    │   └── notebook.js            TOC, index sync, copy buttons, search, theme
    └── vendor/
        ├── bootstrap5/            Bootstrap 5.3.3 (grid, offcanvas, utilities)
        └── highlight.js/          Highlight.js 11.9.0
```

## Maintaining the theme

**Design tokens.** Everything visual is a CSS custom property in the `:root` block of
`evomesh-notebook.css`: paper, ink, sepia, rust, olive, borders, shadows, the three type families,
and the shell measurements. Dark mode redefines the same tokens under `:root[data-theme="dark"]` as a
charcoal drafting desk. Do not hard-code a colour anywhere else.

**Components.** The stylesheet is organised in numbered sections — navbar, hero, shell, article,
code, callouts, figures and plates, tables, marginalia, footer, responsive, motion. Reuse those
classes rather than writing page-specific CSS.

- `.ev-code` wraps a code block; give it an `.ev-code-head` with a label and a `[data-copy]` button
  and the copy behaviour attaches itself.
- `.ev-callout` with `ev-callout-cautio`, `ev-callout-experimentum` or `ev-callout-principium`
  renders a Nota / Cautio / Experimentum / Principium panel.
- `.ev-figure` with a `figcaption` carrying an `.ev-label` renders a numbered plate (`Fig. X·I`).
- `.ev-margin` is a decorative marginal annotation. It is hidden below 1500px, so nothing a reader
  needs may live there alone.

**Adding a section.** Add a `<section class="ev-section" id="…" data-section>` with an
`.ev-section-head` (numeral, `<h2>`, summary), then add the same id to both the desktop index and
the offcanvas index in `index.html`. The right-hand table of contents, the search index, the active
index highlight, and the heading anchors are all generated from `[data-section]` and `h3[id]`, so
there is nothing else to register.

**Illustrations.** The source plates live in `new design/assets/`. They are regenerated into
web-sized `.webp` plus `.png` fallbacks; keep new plates under roughly 1400px wide, and always give
them real `alt` text describing what the diagram shows, not what it is called.

**Fonts.** Vendored deliberately: EvoMesh is a local-first project, so its documentation should not
make a runtime call to a font CDN either. Latin and latin-ext subsets only.

## Editing rules

- Keep examples synchronized with the real EvoMesh CLI, configuration, and terminology. Check the
  repository before changing a technical claim.
- Do not describe planned or experimental behaviour as complete.
- Preserve existing section ids; they are public URLs.
- Every image needs `alt` text, every heading needs to stay in hierarchy, and every interactive
  control needs a visible focus state.

## Deployment

Publish the contents of `src/` as the site root. There is no generated output directory.

## Related

- [EvoMesh](https://github.com/Dev-Art-Solutions/EvoMesh)
- [InferHub](https://github.com/Dev-Art-Solutions/InferHub), an optional local model provider
- [InferHub documentation](https://inferhub.devart.solutions)

## License

MIT. See [LICENSE](LICENSE).
