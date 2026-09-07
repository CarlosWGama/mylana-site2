# Implementation Plan: Attendance Locations, Days & Hours Section

**Branch**: `002-schedule-locations` | **Date**: 2026-09-07 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/002-schedule-locations/spec.md` and user layout directives.

## Summary

Implement the "Atendimento" section immediately following the Hero section. The section introduces two responsive cards side-by-side on desktop and stacked vertically on mobile:
1. **Card 1**: Titled "Atendimento na Clínica <br/>Nubi Clinic", specifying appointment-based consultations on Tuesdays from 08h to 12h.
2. **Card 2**: Titled "Outros locais de atendimento", specifying Online/Domiciliary care (appointment), Hospital Metropolitano (Maceió), and Santa Casa de Misericórdia de Maceió.
Built using Vanilla HTML5, CSS3 Flexbox, adhering to the project's color palette (`#ffffff` and `#305359`).

## Technical Context

**Language/Version**: HTML5, CSS3 (Vanilla).

**Primary Dependencies**: None (native web standards).

**Storage**: Static content in `index.html`, styles in `assets/css/style.css` and `assets/css/responsive.css`.

**Testing**: Manual cross-browser testing (Chrome, Edge, Firefox), device emulation for responsive flexbox behavior, touch-target size audit.

**Target Platform**: Evergreen mobile and desktop web browsers.

**Project Type**: Single-page landing component.

**Performance Goals**: Zero external render blocking, instantaneous section rendering, zero cumulative layout shift (CLS).

**Constraints**:
- Layout: 2 cards side-by-side on desktop, 1 column stacked on mobile.
- Card 1 title: "Atendimento na Clínica <br/>Nubi Clinic" with Tuesday 08h-12h schedule.
- Card 2 title: "Outros locais de atendimento" with Online/Home care, Hospital Metropolitano, Santa Casa de Maceió.
- Colors: Soft light background for contrast with hero section, `#305359` accents for headings and buttons.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Principle I: Patient-Centric Simplicity & Accessibility**: Clear, friendly presentation of locations, days, and times.
- [x] **Principle II: Pure Vanilla Architecture**: 100% native HTML/CSS without dependencies.
- [x] **Principle III: Strict Single-Page Directory & Asset Structure**: Resides in `index.html` and `assets/css/`.
- [x] **Principle IV: Brand Color Palette & Responsive Visual Consistency**: White cards, `#305359` accents, Flexbox layout.
- [x] **Principle V: Performance First & Non-Blocking Execution**: Lightweight CSS, zero heavy libraries.
- [x] **Principle VI: SEO & Discoverability Excellence**: Semantic markup (`<section>`, `<article>`, `<h2>`, `<h3>`), clear localized keywords (Maceió, Neurologia, Santa Casa, Metropolitano).

## Project Structure

### Documentation (this feature)

```text
specs/002-schedule-locations/
├── plan.md              # This plan document
├── research.md          # Technical decisions & layout analysis
├── data-model.md        # Card schema, tokens, and entities
├── quickstart.md        # Verification guide
├── contracts/
│   └── attendance-cards-contract.md # HTML structure & Flexbox rules
└── checklists/
    └── requirements.md  # Quality checklist
```

### Source Code (repository root)

```text
index.html               # Add <section id="atendimento"> after #hero
assets/
├── css/
│   ├── style.css        # Card styling, shadow, typography, colors
│   └── responsive.css   # 2-column desktop row / 1-column mobile stack
└── js/
    └── main.js          # Smooth scroll navigation
```

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|---|---|---|
| None | N/A | Fully aligned with constitution principles and user requirements |
