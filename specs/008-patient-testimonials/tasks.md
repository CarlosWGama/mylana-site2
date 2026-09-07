# Tasks: Seção de Comentários sobre Atendimento (Carrossel de Depoimentos)

**Input**: Design documents from `specs/008-patient-testimonials/` (`spec.md`, `plan.md`, `data-model.md`, `research.md`, `contracts/testimonials-layout-contract.md`, `quickstart.md`)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Design tokens and initial navigation setup

- [X] T001 Configure testimonial CSS custom properties (`--color-testimonial-bg`, `--testimonial-card-radius`, `--testimonial-shadow`) in `assets/css/style.css`
- [X] T002 [P] Verify navigation anchors and target positioning for `#comentarios` in `index.html`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Base structural markup and single-card carousel viewport container

**⚠️ CRITICAL**: Section container and base carousel track must be in place before individual cards and interaction scripts are added

- [X] T003 Insert `<section id="comentarios" class="testimonials-section">` shell markup immediately after `#agendamento` and before `#contatos` in `index.html`
- [X] T004 [P] Implement base container styling (`.testimonials-section`, `.testimonial-carousel-container`, `.testimonial-carousel-track`, `.testimonial-slide`) with single-item viewport in `assets/css/style.css`

**Checkpoint**: Foundation ready — testimonial slides and interaction logic can now be implemented

---

## Phase 3: User Story 1 & 2 - Carrossel de 1 Card com Autoplay de 5s e Estrutura Padronizada (Priority: P1) 🎯 MVP

**Goal**: Render the 6 patient testimonials (Raquel, Milene Vieira, Antônio Carlos Malafaia Ferreira, Camila Balbina, Rafael Nascimento, Eliane Santos) in a single-card carousel displaying only 1 comment at a time, with a strict 3-tier card structure (Topo: Nome em negrito; Centro: Comentário com aspas; Rodapé: Fonte) and 5-second automatic rotation.

**Independent Test**: Load the landing page; scroll to `#comentarios`; verify that only 1 card is displayed at a time with the exact requested layout (bold name top, quote in center, source footer); verify that after 5 seconds the slide automatically advances to the next testimonial.

### Implementation for User Story 1 & 2

- [X] T005 [US1] Implement markup for Slides 1 to 3 (Raquel, Milene Vieira, Antônio Carlos Malafaia Ferreira) with bold author name, 5 stars, quoted comment text, and source badge in `index.html`
- [X] T006 [US1] Implement markup for Slides 4 to 6 (Camila Balbina, Rafael Nascimento, Eliane Santos) with bold author name, 5 stars, quoted comment text, and source badge in `index.html`
- [X] T007 [US1] Style card contêiner and header (`.testimonial-card`, `.testimonial-card-header`, `.testimonial-author-name`, `.testimonial-stars`) in `assets/css/style.css`
- [X] T008 [US1] Style card center quote typography (`.testimonial-card-body`, `.testimonial-text`, `.quote-mark`) and footer source badges (`.testimonial-card-footer`, `.testimonial-source-badge`) in `assets/css/style.css`
- [X] T009 [US1] Implement Vanilla JS carousel engine with 5-second autoplay interval (`setInterval`), circular indexing, and slide transition logic in `assets/js/main.js`

**Checkpoint**: User Stories 1 and 2 complete — MVP functional with 1 card displayed at a time and 5-second autoplay

---

## Phase 4: User Story 3 - Controles Interativos, Pausa no Hover e Responsividade (Priority: P2)

**Goal**: Add manual navigation controls (prev/next buttons and pagination dots), pause-on-hover/touch functionality, and mobile fluid responsiveness.

**Independent Test**: Hover over the card to confirm rotation pauses; click arrows and dots to verify manual navigation and timer reset; resize viewport to 768px and 390px to confirm full-width fluid presentation without layout breaking.

### Implementation for User Story 3

- [X] T010 [US3] Add navigation controls markup (previous button, next button, and pagination dots container) to `#comentarios` in `index.html`
- [X] T011 [US3] Style carousel controls and pagination dots (`.testimonial-carousel-controls`, `.carousel-btn`, `.carousel-dots`, `.carousel-dot.active`) with hover/focus states in `assets/css/style.css`
- [X] T012 [US3] Implement interaction event handlers (pause on `mouseenter`/`focusin`, resume on `mouseleave`/`focusout`, click handlers for prev/next and dots with timer restart) in `assets/js/main.js`
- [X] T013 [US3] Implement responsive styles for tablets and mobile devices (fluid 100% card width, scalable typography, touch button sizing) in `assets/css/responsive.css`

**Checkpoint**: User Story 3 complete — full interactive control, accessible pause, and fluid responsiveness

---

## Phase 5: User Story 4 - Integração no Menu Superior (Priority: P3)

**Goal**: Integrate the "Avaliações" link into the fixed header navigation menu for instant access.

**Independent Test**: Click "Avaliações" in the top navbar on desktop and mobile; verify smooth scrolling to `#comentarios`.

### Implementation for User Story 4

- [X] T014 [US4] Add navigation link `<a href="#comentarios" class="nav-link">Avaliações</a>` to both desktop and mobile menus in `index.html`

**Checkpoint**: User Story 4 complete — header navigation directly connected to the testimonials section

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility audit, validation scenarios, and semantic code review

- [X] T015 [P] Audit accessibility (ARIA roles `carousel`, `slide`, `tablist`, `tab`, labels and focus outlines) in `index.html` and `assets/css/style.css`
- [X] T016 [P] Execute quickstart validation scenarios per `specs/008-patient-testimonials/quickstart.md` across desktop, tablet, and mobile
- [X] T017 Final code review and validation of HTML semantics, CSS rules, and JavaScript interval safety in `index.html`, `assets/css/style.css`, and `assets/js/main.js`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup (T001-T002) — BLOCKS all user stories
- **User Story 1 & 2 (Phase 3)**: Depends on Foundational (T003-T004)
- **User Story 3 (Phase 4)**: Depends on Phase 3 completion
- **User Story 4 (Phase 5)**: Depends on Phase 3 completion
- **Polish (Phase 6)**: Depends on all user stories completed

### Parallel Opportunities

- T001 and T002 can run in parallel.
- T003 and T004 can run in parallel.
- T005 and T006 can run in parallel during slide markup creation.
- T007 and T008 can run in parallel during styling.
- T015 and T016 can run in parallel during final verification.

---

## Implementation Strategy

### MVP First (User Story 1 & 2 Only)
1. Complete Phase 1 (Setup) and Phase 2 (Foundational).
2. Complete Phase 3 (Render all 6 testimonial slides with exact card anatomy + 5s autoplay engine in Vanilla JS).
3. **Validate MVP**: Confirm 1 card displayed at a time, switching automatically every 5 seconds.

### Incremental Delivery
1. Add User Story 3: Prev/Next buttons, pagination dots, pause on hover/focus, and mobile responsiveness.
2. Add User Story 4: Top navbar link integration.
3. Complete Polish & Validation (T015-T017).
