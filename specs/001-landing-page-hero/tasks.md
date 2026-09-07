# Tasks: Landing Page Hero Section & Layout Organization

**Input**: Design documents from `specs/001-landing-page-hero/` (`spec.md`, `plan.md`, `data-model.md`, `research.md`, `contracts/hero-layout-contract.md`, `quickstart.md`)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and directory/asset setup

- [X] T001 Create project directory structure (`assets/css/`, `assets/js/`, `assets/img/`, `assets/src/fonts/`)
- [X] T002 [P] Copy image assets `modelos/capa.jpg` and `modelos/logo.png` to `assets/img/`
- [X] T003 [P] Setup self-hosted web font files (Montserrat / Inter) in `assets/src/fonts/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core CSS reset, design tokens, font definitions, and script entry point

**⚠️ CRITICAL**: Foundational styling and assets MUST be ready before user story implementation begins

- [X] T004 Create base stylesheet `assets/css/style.css` with CSS custom properties (`--color-primary: #305359`, `--color-background: #ffffff`, `--color-background-soft: #f4f6f8`), `@font-face` definitions pointing to `assets/src/fonts/`, CSS reset, and typography rules
- [X] T005 [P] Create responsive stylesheet `assets/css/responsive.css` with media query skeleton and breakpoint tokens
- [X] T006 [P] Create initial JavaScript file `assets/js/main.js` with DOMContentLoaded event listener and performance-optimized execution

**Checkpoint**: Foundation ready — user story implementation can now begin

---

## Phase 3: User Story 1 - Visual Hero Welcome & Brand Identity (Priority: P1) 🎯 MVP

**Goal**: Establish the primary visual landing experience featuring the header bar, Dr. Mylana's portrait, and the prominent `#305359` hero background.

**Independent Test**: Open `index.html` in browser; verify that the header displays the brand logo on a clean white background, the hero section renders with `#305359` background, and Dr. Mylana's portrait photo (`assets/img/capa.jpg`) is prominently displayed with high resolution and correct aspect ratio.

### Implementation for User Story 1

- [X] T007 [US1] Create `index.html` root document with semantic HTML5 skeleton, meta viewport, and top header containing `assets/img/logo.png` inside a high-contrast container
- [X] T008 [US1] Implement hero section container (`<section id="hero" class="hero-section">`) and portrait wrapper with `assets/img/capa.jpg` in `index.html`
- [X] T009 [US1] Style header navigation, logo container, and hero visual framing in `assets/css/style.css`

**Checkpoint**: User Story 1 is visually functional and testable independently

---

## Phase 4: User Story 2 - Continuous Narrative Professional Introduction (Priority: P1)

**Goal**: Implement the continuous text introduction presenting Dr. Mylana's qualifications without bullet points, including hospital affiliations, SAN membership, residency, and CRM/RQE credentials.

**Independent Test**: View the text block in the hero section; verify that it reads as continuous flowing prose (0 `<ul>` or `<li>` elements), contains all credentials (UNCISAL, UPE/HUOC Recife, SAN, Hospital Metropolitano, Santa Casa de Maceió), and displays CRM-AL 7100 | RQE 4871 clearly.

### Implementation for User Story 2

- [X] T010 [US2] Add continuous narrative presentation paragraphs and credential tag (`CRM-AL 7100 | RQE 4871`) to the hero content block in `index.html`
- [X] T011 [US2] Add primary call-to-action button (`Agendar Consulta`) pointing to `#agendamento` in `index.html`
- [X] T012 [US2] Style hero narrative typography, high-contrast light text, credential tag, and CTA button in `assets/css/style.css`

**Checkpoint**: User Stories 1 AND 2 are complete, delivering a comprehensive hero presentation

---

## Phase 5: User Story 3 - Mobile-First Responsive Layout & Ordering (Priority: P2)

**Goal**: Implement Flexbox responsive rules, enforcing desktop side-by-side layout and strict mobile vertical ordering: (1) Photo, (2) Description, (3) Logo.

**Independent Test**: In browser devtools, toggle mobile viewport (375px/390px); verify elements are stacked vertically in exact sequence: (1) photo, (2) description text, (3) logo. Resize to desktop (>768px); verify side-by-side flex layout without visual collision.

### Implementation for User Story 3

- [X] T013 [US3] Add Flexbox wrapper classes and secondary inline logo block for mobile sequence in `index.html`
- [X] T014 [US3] Implement Flexbox desktop layout (`flex-direction: row`, spacing, alignment) in `assets/css/style.css`
- [X] T015 [US3] Implement mobile media query rules (`flex-direction: column`, `order: 1` photo, `order: 2` description, `order: 3` logo) in `assets/css/responsive.css`
- [X] T016 [US3] Include `assets/js/main.js` at the bottom of `index.html` (before `</body>`) with deferred non-blocking execution for smooth interactions

**Checkpoint**: All user stories functional across desktop and mobile screens

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Performance validation, SEO metadata, and cross-browser consistency

- [X] T017 [P] Add Open Graph meta tags, SEO description, title, canonical link, and language attributes in `index.html`
- [X] T018 Execute quickstart verification scenarios per `specs/001-landing-page-hero/quickstart.md` across mobile and desktop viewports
- [X] T019 Audit WCAG color contrast, font loading performance, and console error log in browser devtools

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion (T001-T003) — BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - US1 (Visual Hero) → US2 (Narrative Bio) → US3 (Responsive Flexbox Ordering)
- **Polish (Final Phase)**: Depends on all user stories being complete

### Parallel Opportunities

- T002 and T003 can execute in parallel once T001 is complete.
- T005 and T006 can execute in parallel with T004.
- T017 can run in parallel during final polish.

---

## Implementation Strategy

### MVP First (Phase 1 to Phase 3)
1. Complete Setup (T001 - T003).
2. Complete Foundational (T004 - T006).
3. Complete User Story 1 (T007 - T009).
4. **Validate MVP**: Ensure header, logo, photo, and `#305359` hero background render crisply.

### Incremental Delivery
1. Add User Story 2 (T010 - T012): Integrate continuous narrative prose bio without bullets.
2. Add User Story 3 (T013 - T016): Add Flexbox responsive mobile ordering (Photo → Description → Logo).
3. Final Polish (T017 - T019): SEO tags, WCAG contrast audit, and quickstart scenarios.
