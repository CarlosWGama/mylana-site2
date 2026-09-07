# Implementation Plan: Nubi Clinic Address & Google Maps Section

**Branch**: `003-clinic-location` | **Date**: 2026-09-07 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/003-clinic-location/spec.md` and user layout directives.

## Summary

Implement the Nubi Clinic address and map section directly after the attendance section. The layout highlights the prominent section title (h1) "Endereço da clinica", secondary subtitle (h2) "Nubi Clinic", postal address paragraph (p) "Rua Prefeito Abdon Arroxelas, 917 - Ponta Verde, Maceió - AL, 57035-380", and an embedded Google Maps iframe centered on coordinates (lat: `-9.6560216`, lon: `-35.7097091`) with `loading="lazy"` performance optimization. Built with Vanilla HTML5 and responsive CSS Flexbox (side-by-side on desktop, stacked on mobile).

## Technical Context

**Language/Version**: HTML5, CSS3.

**Primary Dependencies**: None (Google Maps embed iframe with native lazy loading).

**Storage**: Static markup in `index.html`, styles in `assets/css/style.css` and `assets/css/responsive.css`.

**Testing**: Manual cross-browser testing (Chrome, Edge, Firefox, Safari), responsive viewport checks (desktop and mobile), iframe lazy loading verification.

**Target Platform**: Evergreen mobile and desktop browsers.

**Project Type**: Single-page landing component.

**Performance Goals**: Zero render-blocking assets, iframe deferred via `loading="lazy"`.

**Constraints**:
- Title: h1 "Endereço da clinica" in destaque.
- Subtitle: h2 "Nubi Clinic" with less destaque.
- Description: p "Rua Prefeito Abdon Arroxelas, 917 - Ponta Verde, Maceió - AL, 57035-380".
- Coordinates: latitude `-9.6560216`, longitude `-35.7097091`.
- Maps format: iframe.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Principle I: Patient-Centric Simplicity & Accessibility**: Clear location guide and direct route link for patients.
- [x] **Principle II: Pure Vanilla Architecture**: Vanilla HTML/CSS with standard Google Maps embed iframe.
- [x] **Principle III: Strict Single-Page Directory & Asset Structure**: Located in `index.html` and `assets/css/`.
- [x] **Principle IV: Brand Color Palette & Responsive Visual Consistency**: Brand colors `#305359` and `#ffffff`, Flexbox layout.
- [x] **Principle V: Performance First & Non-Blocking Execution**: `loading="lazy"` on iframe prevents performance impact.
- [x] **Principle VI: SEO & Discoverability Excellence**: Semantic markup, localized NAP (Name, Address, Phone) data for Ponta Verde / Maceió.

## Project Structure

### Documentation (this feature)

```text
specs/003-clinic-location/
├── plan.md              # This plan document
├── research.md          # Technical decisions & iframe performance
├── data-model.md        # Address schema, tokens, and coordinates
├── quickstart.md        # Verification guide
├── contracts/
│   └── clinic-location-contract.md # HTML structure & Flexbox rules
└── checklists/
    └── requirements.md  # Quality checklist
```

### Source Code (repository root)

```text
index.html               # Add <section id="endereco"> after #atendimento
assets/
├── css/
│   ├── style.css        # Address typography, pin icon, iframe styling
│   └── responsive.css   # 2-column desktop row / 1-column mobile stack
└── js/
    └── main.js          # Smooth scroll navigation
```

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|---|---|---|
| None | N/A | Fully aligned with constitution principles and user requirements |
