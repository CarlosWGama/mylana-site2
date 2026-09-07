# Implementation Plan: Informational Appointment Scheduling Section

**Branch**: `004-appointment-scheduling` | **Date**: 2026-09-07 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/004-appointment-scheduling/spec.md` and user layout directives.

## Summary

Implement the informative appointment scheduling section placed directly after the clinic address section (`#endereco`). The section guides the patient on how to schedule consultations:
1. **Nubi Clinic (Priority Channel)**: Phone `(82) 9 9399-9600`, WhatsApp link `https://wa.me/558293999600`, assisting with in-clinic, home, and online consultations.
2. **Doctoralia**: Direct online booking link `https://www.doctoralia.com.br/mylana-dandara-pereira-gama/neurologista/maceio`, noting that it is available when weekly slots are open.
Strictly informative (no backend/booking engines), built with Vanilla HTML5 and CSS3 Flexbox.

## Technical Context

**Language/Version**: HTML5, CSS3.

**Primary Dependencies**: None.

**Storage**: Static markup in `index.html`, styles in `assets/css/style.css` and `assets/css/responsive.css`.

**Testing**: Manual cross-browser testing (Chrome, Edge, Firefox, Safari), responsive viewport checks, link verification for WhatsApp (`wa.me`) and Doctoralia external URLs.

**Target Platform**: Evergreen mobile and desktop browsers.

**Project Type**: Single-page landing component.

**Performance Goals**: Instantaneous rendering, zero external script overhead.

**Constraints**:
- Strictly informative (no calendar backend or complex form).
- Nubi Clinic (Priority): Phone `(82) 9 9399-9600`, WhatsApp `https://wa.me/558293999600`.
- Doctoralia: Link `https://www.doctoralia.com.br/mylana-dandara-pereira-gama/neurologista/maceio`, conditional note on weekly availability.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Principle I: Patient-Centric Simplicity & Accessibility**: Clear, transparent, and uncomplicated guidance for patients.
- [x] **Principle II: Pure Vanilla Architecture**: 100% native HTML/CSS.
- [x] **Principle III: Strict Single-Page Directory & Asset Structure**: Resides in `index.html` and `assets/css/`.
- [x] **Principle IV: Brand Color Palette & Responsive Visual Consistency**: Brand colors `#305359` and `#ffffff`, Flexbox layout.
- [x] **Principle V: Performance First & Non-Blocking Execution**: Lightweight HTML/CSS, zero render-blocking code.
- [x] **Principle VI: SEO & Discoverability Excellence**: Semantic markup (`<section>`, `<article>`, `<h2>`, `<h3>`), accessible anchor tags with `rel="noopener noreferrer"`.

## Project Structure

### Documentation (this feature)

```text
specs/004-appointment-scheduling/
├── plan.md              # This plan document
├── research.md          # Technical decisions & channel analysis
├── data-model.md        # Channel schema, tokens, and endpoints
├── quickstart.md        # Verification guide
├── contracts/
│   └── scheduling-channels-contract.md # HTML structure & Flexbox rules
└── checklists/
    └── requirements.md  # Quality checklist
```

### Source Code (repository root)

```text
index.html               # Add <section id="agendamento"> after #endereco
assets/
├── css/
│   ├── style.css        # Scheduling cards, badges, button styles
│   └── responsive.css   # 2-column desktop row / 1-column mobile stack
└── js/
    └── main.js          # Smooth scroll navigation
```

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|---|---|---|
| None | N/A | Fully aligned with constitution principles and user requirements |
