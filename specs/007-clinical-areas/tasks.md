# Tasks: Seção de Áreas de Atuação Neurológica

**Input**: Design documents from `specs/007-clinical-areas/` (`spec.md`, `plan.md`, `data-model.md`, `research.md`, `contracts/areas-layout-contract.md`, `quickstart.md`)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Design tokens and initial navigation setup

- [X] T001 Configure new color tokens (`--color-area-card-bg: #eef7f9`, `--color-area-card-title: #305359`, and shadow tokens) in `assets/css/style.css`
- [X] T002 [P] Verify anchor link `#areas-atuacao` target availability and header positioning in `index.html`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Base structural markup and Flexbox grid container

**⚠️ CRITICAL**: Section container and base Flexbox rules must be in place before individual cards are added

- [X] T003 Insert the `<section id="areas-atuacao" class="areas-section">` shell markup immediately after `#hero` and before `#atendimento` in `index.html`
- [X] T004 [P] Implement base section styling (`.areas-section`) and `.areas-grid` flexbox container with `display: flex; flex-wrap: wrap; gap: 1.5rem;` in `assets/css/style.css`

**Checkpoint**: Foundation ready — practice area cards can now be rendered

---

## Phase 3: User Story 1 & 2 - Renderização dos 10 Cards com Fundo #eef7f9, Títulos em Negrito #305359 e Descrições <= 100 Caracteres (Priority: P1) 🎯 MVP

**Goal**: Render all 10 clinical cards (Dor, Distúrbios do Movimento, Cognição e demências, Epilepsia, Vascular, Distúrbios do Sono, Neuroinfectologia, Neuroimunologia, Doenças Neuromusculares, Vertigem) with background `#eef7f9`, bold `#305359` titles, vector icons, descriptions <= 100 characters, and max 4 cards per row.

**Independent Test**: Load the landing page; scroll past Hero; verify 10 cards displayed with background `#eef7f9`, bold `#305359` titles, and concise descriptions <= 100 characters, arranged in rows of at most 4 cards.

### Implementation for User Story 1 & 2

- [X] T005 [US1] Implement markup for Cards 1 to 5 (Dor, Distúrbios do Movimento, Cognição e demências, Epilepsia, Vascular) with inline SVG icons, bold titles, and <= 100-character descriptions in `index.html`
- [X] T006 [US1] Implement markup for Cards 6 to 10 (Distúrbios do Sono, Neuroinfectologia, Neuroimunologia, Doenças Neuromusculares, Vertigem) with inline SVG icons, bold titles, and <= 100-character descriptions in `index.html`
- [X] T007 [US1] Style card contêiner (`.area-card`) with background `#eef7f9`, rounded borders, padding, hover transitions, and max 4 cards per row (`flex: 0 1 calc(25% - 1.15rem)`) in `assets/css/style.css`
- [X] T008 [US1] Style card typography (`.area-title` in bold `#305359` and `.area-description`) and `.area-icon-wrapper` in `assets/css/style.css`
- [X] T009 [US2] Audit and enforce character limits on all 10 clinical area descriptions ensuring strict adherence to <= 100 characters in `index.html`

**Checkpoint**: User Stories 1 and 2 complete — all 10 cards rendered with exact user layout rules

---

## Phase 4: User Story 3 - Navegação no Cabeçalho Superior (Priority: P2)

**Goal**: Integrate the "Áreas de Atuação" anchor link into the fixed header navigation menu for instant access.

**Independent Test**: Click "Áreas de Atuação" in the header navigation; verify smooth scroll to `#areas-atuacao`.

### Implementation for User Story 3

- [X] T010 [US3] Add navigation link `<a href="#areas-atuacao" class="nav-link">Áreas de Atuação</a>` to both desktop and mobile menus in `index.html`
- [X] T011 [US3] Verify smooth scroll and active scrollspy highlighting for `#areas-atuacao` in `assets/js/main.js`

**Checkpoint**: User Story 3 complete — header navigation seamlessly connected to the new section

---

## Phase 5: User Story 4 - Responsividade e Quebra em Linhas (Priority: P2)

**Goal**: Ensure cards adapt gracefully across viewport widths with Flexbox wrap (max 4 on desktop, 2 on tablet, 1 on mobile).

**Independent Test**: Resize viewport to 992px, 768px, and 390px; verify clean wrapping into 2 columns on tablets and 1 column on mobile without layout overflow.

### Implementation for User Story 4

- [X] T012 [US4] Implement tablet responsive rules (max-width: 992px) with 2 cards per row (`flex: 0 1 calc(50% - 0.75rem)`) in `assets/css/responsive.css`
- [X] T013 [US4] Implement mobile responsive rules (max-width: 600px) with 1 card per row (`flex: 1 1 100%`) in `assets/css/responsive.css`
- [X] T014 [US4] Implement small phone adjustments (max-width: 420px) with fluid padding and typography in `assets/css/responsive.css`

**Checkpoint**: User Story 4 complete — fluid responsive adaptation across all devices

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility audit, validation scenarios, and semantic code review

- [X] T015 [P] Validate WCAG contrast ratio (>4.5:1) for card titles and descriptions against `#eef7f9` in `assets/css/style.css`
- [X] T016 [P] Execute quickstart validation scenarios per `specs/007-clinical-areas/quickstart.md` across desktop, tablet, and mobile
- [X] T017 Code review and semantic validation for HTML, CSS, and navigation anchors in `index.html`

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
- T015 and T016 can run in parallel during final review.

---

## Implementation Strategy

### MVP First (User Story 1 & 2 Only)
1. Complete Phase 1 (Setup) and Phase 2 (Foundational).
2. Complete Phase 3 (Render all 10 cards with background `#eef7f9`, bold `#305359` titles, icons, and descriptions <= 100 chars).
3. **Validate MVP**: Confirm 10 cards render properly in max 4 cards per row.

### Incremental Delivery
1. Add User Story 3: Header navigation link and scrollspy update (T010-T011).
2. Add User Story 4: Tablet & mobile responsive flex rules (T012-T014).
3. Complete Polish & Validation (T015-T017).
