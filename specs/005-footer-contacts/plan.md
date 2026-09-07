# Implementation Plan: Site Footer, Social Contacts & Creator Credits

**Branch**: `005-footer-contacts` | **Date**: 2026-09-07 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/005-footer-contacts/spec.md` and user layout directives.

## Summary

Implement the site footer with `#305359` background color and a 12-column grid layout:
- **Part 1 (4/12 width)**: Doctor's photo (`modelos/contato.jpg` copied to `assets/img/contato.jpg`), hidden on mobile resolution (`display: none;`).
- **Part 2 (8/12 width)**: Contact links for Instagram (`https://www.instagram.com/mylanagama.neuro/`) and email (`mylanagama.neurologia@gmail.com`), alongside doctor credentials.
- **Below the grid**: Centered text "Desenvolvido por CarlosWGama".

## Technical Context

**Language/Version**: HTML5, CSS3.

**Primary Dependencies**: None.

**Storage**: Static markup in `index.html`, image in `assets/img/contato.jpg`, styles in `assets/css/style.css` and `assets/css/responsive.css`.

**Testing**: Manual cross-browser testing (Chrome, Edge, Firefox, Safari), responsive viewport verification (verifying photo visible on desktop, hidden on mobile).

**Target Platform**: Evergreen mobile and desktop web browsers.

**Project Type**: Single-page landing footer component.

**Performance Goals**: Instantaneous rendering, zero blocking scripts, optimized image asset.

**Constraints**:
- Footer background: `#305359`.
- Grid: Part 1 (4/12) with `contato.jpg`, hidden on mobile; Part 2 (8/12) with Instagram and email.
- Below grid: Centered text "Desenvolvido por CarlosWGama".

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Principle I: Patient-Centric Simplicity & Accessibility**: Clear social links, visible email, high contrast.
- [x] **Principle II: Pure Vanilla Architecture**: 100% native HTML5 and CSS3.
- [x] **Principle III: Strict Single-Page Directory & Asset Structure**: Resides in `index.html`, `assets/css/`, and `assets/img/contato.jpg`.
- [x] **Principle IV: Brand Color Palette & Responsive Visual Consistency**: Brand color `#305359` background, `#ffffff` text, responsive grid.
- [x] **Principle V: Performance First & Non-Blocking Execution**: Lightweight assets, deferred script execution.
- [x] **Principle VI: SEO & Discoverability Excellence**: Semantic `<footer>` tag, accessible external links with `rel="noopener noreferrer"`.

## Project Structure

### Documentation (this feature)

```text
specs/005-footer-contacts/
├── plan.md              # This plan document
├── research.md          # Technical decisions & layout analysis
├── data-model.md        # Footer schema, tokens, and endpoints
├── quickstart.md        # Verification guide
├── contracts/
│   └── footer-layout-contract.md # HTML structure & Grid rules
└── checklists/
    └── requirements.md  # Quality checklist
```

### Source Code (repository root)

```text
index.html               # Add <footer class="site-footer"> at bottom
assets/
├── img/
│   └── contato.jpg      # Doctor photo for footer (copied from modelos/contato.jpg)
├── css/
│   ├── style.css        # Footer grid, background #305359, contact links
│   └── responsive.css   # Mobile rules hiding photo (display: none)
└── js/
    └── main.js          # Non-blocking script
```

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|---|---|---|
| None | N/A | Fully aligned with constitution principles and user requirements |
