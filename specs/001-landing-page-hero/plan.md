# Implementation Plan: Landing Page Hero Section & Layout Organization

**Branch**: `001-landing-page-hero` | **Date**: 2026-09-07 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/001-landing-page-hero/spec.md` and user layout directives.

## Summary

Implement the welcoming Hero Section for the single-page landing of Dr. Mylana Gama (Neurologist). The layout uses a clean light canvas base with a prominent `#305359` (deep teal) hero background. The section features Dr. Mylana's portrait (`capa.jpg`) prominently, a reduced-size and contrast-protected logo (`logo.png`), and a continuous narrative introduction (no bullet points) integrating all academic, residency, hospital, and medical credentials (CRM-AL 7100 | RQE 4871). Flexbox is used for layout composition, enforcing desktop side-by-side arrangement and a strict mobile vertical order: (1) Doctor photo, (2) Narrative text, (3) Logo. Fonts are self-hosted in `/assets/src/fonts/`.

## Technical Context

**Language/Version**: HTML5, CSS3, ES6+ JavaScript (Vanilla - no external frameworks).

**Primary Dependencies**: None (Native browser standards only).

**Storage**: Static assets on local filesystem (`index.html`, `/assets/css/`, `/assets/js/`, `/assets/img/`, `/assets/src/fonts/`).

**Testing**: Manual cross-browser responsive testing (Chrome, Edge, Firefox), viewport emulation (Desktop 1440px/1024px, Mobile 375px/390px/412px), WCAG color contrast validation.

**Target Platform**: Evergreen desktop and mobile web browsers (Windows, macOS, iOS, Android).

**Project Type**: Single-page static web application.

**Performance Goals**: First Contentful Paint (FCP) < 1.0s, Time to Interactive (TTI) < 1.5s, 0 external blocking fonts or script CDNs.

**Constraints**:
- Strict color usage: `#305359` for hero highlight, `#ffffff` / `#b3b3b3` for light base.
- Logo color `#32555b` must not clash with `#305359` hero background (enclosed in a light/white container or placed on light header).
- Mobile layout order must be strictly: Photo -> Description -> Logo.
- Typography self-hosted in `/assets/src/fonts/`.
- No bullet points in doctor presentation.

**Scale/Scope**: Single page with Hero section, header navigation, and asset folders.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Principle I: Patient-Centric Simplicity & Accessibility**: Language in the narrative bio is warm, accessible Portuguese without complex medical jargon.
- [x] **Principle II: Pure Vanilla Architecture**: Exclusively HTML5, CSS3, and ES6+ Vanilla JS without frameworks.
- [x] **Principle III: Strict Single-Page Directory & Asset Structure**: Adheres to root `index.html`, `assets/css/`, `assets/js/`, `assets/img/`, `assets/src/fonts/`.
- [x] **Principle IV: Brand Color Palette & Responsive Visual Consistency**: Brand colors `#ffffff` and `#305359` enforced; Flexbox layout with responsive mobile and desktop support.
- [x] **Principle V: Performance First & Non-Blocking Execution**: Self-hosted fonts, deferred/bottom scripts, compressed local images.
- [x] **Principle VI: SEO & Discoverability Excellence**: Semantic HTML5 markup (`<header>`, `<section>`, `<nav>`, `<h1>`, `<p>`), rich meta tags, and structured heading hierarchy.

## Project Structure

### Documentation (this feature)

```text
specs/001-landing-page-hero/
├── plan.md              # This plan document
├── research.md          # Technical decisions & design rationale
├── data-model.md        # Entities, content structure, and design tokens
├── quickstart.md        # Validation scenarios and testing steps
├── contracts/
│   └── hero-layout-contract.md # HTML/CSS layout and ordering contracts
└── checklists/
    └── requirements.md  # Quality checklist
```

### Source Code (repository root)

```text
index.html               # Single-page entry point
assets/
├── css/
│   ├── style.css        # Main stylesheet (reset, tokens, layout, typography)
│   └── responsive.css   # Media queries, flexbox rules, mobile reordering
├── js/
│   └── main.js          # Non-blocking vanilla interactions (deferred at body bottom)
├── img/
│   ├── capa.jpg         # Doctor portrait
│   └── logo.png         # Official logo
└── src/
    └── fonts/           # Self-hosted web fonts (Montserrat / Inter)
```

**Structure Decision**: Fully compliant with the single-page static architecture specified in the constitution, with the self-hosted font directory at `assets/src/fonts/` as requested.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|---|---|---|
| None | N/A | Fully aligned with constitution principles and user requirements |
