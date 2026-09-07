# Tasks: Attendance Locations, Days & Hours Section

**Input**: Design documents from `specs/002-schedule-locations/` (`spec.md`, `plan.md`, `data-model.md`, `research.md`, `contracts/attendance-cards-contract.md`, `quickstart.md`)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare the integration point and styling variables

- [ ] T001 Verify and prepare attendance section integration point immediately following the `#hero` section in `index.html`
- [ ] T002 [P] Define attendance design tokens (card background `#ffffff`, border, soft background `#f4f6f8`, shadow) in `assets/css/style.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core section structure and card component foundations

**⚠️ CRITICAL**: Base section and card styles must be in place before card contents are added

- [ ] T003 Create base attendance section markup (`<section id="atendimento" class="attendance-section">`) with container, badge, and title in `index.html`
- [ ] T004 [P] Implement base card styling (`.attendance-card`, `.attendance-cards-grid`, `.card-icon-badge`) in `assets/css/style.css`

**Checkpoint**: Foundation ready — card implementation can now proceed

---

## Phase 3: User Story 1 - Card 1: Nubi Clinic Schedule & Presentation (Priority: P1) 🎯 MVP

**Goal**: Implement Card 1 featuring the title "Atendimento na Clínica <br/>Nubi Clinic" and Tuesday 08h-12h appointment schedule.

**Independent Test**: Open page; scroll to attendance section; verify Card 1 displays the title with line break, specifies Tuesday 08h-12h by appointment, and renders with clean contrast.

### Implementation for User Story 1

- [ ] T005 [US1] Implement Card 1 markup in `index.html` with title `Atendimento na Clínica <br/>Nubi Clinic` and schedule block (Terças-feiras, 08h às 12h, via agendamento)
- [ ] T006 [US1] Style Card 1 typography, schedule highlight container, and badge in `assets/css/style.css`

**Checkpoint**: Card 1 is fully functional and testable independently

---

## Phase 4: User Story 2 - Card 2: Other Attendance Locations & Network (Priority: P1)

**Goal**: Implement Card 2 featuring the title "Outros locais de atendimento" and list of hospital/home attendance modalities.

**Independent Test**: Open page; verify Card 2 displays "Outros locais de atendimento" with items: Online/Domiciliar (Agendamento), Hospital Metropolitano (Maceió), and Santa Casa de Misericórdia de Maceió.

### Implementation for User Story 2

- [ ] T007 [US2] Implement Card 2 markup in `index.html` with title `Outros locais de atendimento` and list for Online/Domiciliar, Metropolitano (Maceió), and Santa Casa de Misericórdia de Maceió
- [ ] T008 [US2] Style location list items, custom bullet points, and hospital tags in `assets/css/style.css`

**Checkpoint**: Both Card 1 and Card 2 are complete and visually balanced

---

## Phase 5: User Story 3 - Responsive Flexbox & Mobile Stacking (Priority: P2)

**Goal**: Implement Flexbox layout rules ensuring side-by-side cards on desktop and clean vertical stacking on mobile.

**Independent Test**: On desktop (>768px), verify both cards sit side-by-side with equal height. On mobile (<=768px), verify Card 1 appears on top and Card 2 appears below, with touch-friendly CTA buttons (>= 44x44px).

### Implementation for User Story 3

- [ ] T009 [US3] Implement desktop Flexbox rules (`display: flex; flex-direction: row; gap: 2rem; align-items: stretch;`) in `assets/css/style.css`
- [ ] T010 [US3] Implement mobile media query rules (`flex-direction: column; gap: 1.5rem;`) in `assets/css/responsive.css`
- [ ] T011 [US3] Add direct booking action buttons on both cards with accessible touch targets and WhatsApp/phone anchors in `index.html`

**Checkpoint**: Layout smoothly adapts across all screen widths

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility, SEO, and layout validation

- [ ] T012 [P] Validate semantic headings and SEO keyword integration (Maceió, Neurologia, Santa Casa, Metropolitano) in `index.html`
- [ ] T013 Execute quickstart validation scenarios per `specs/002-schedule-locations/quickstart.md` across mobile and desktop viewports
- [ ] T014 Audit WCAG color contrast and absence of horizontal overflow on mobile viewports

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion (T001-T002) — BLOCKS user story cards
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
  - US1 (Card 1) → US2 (Card 2) → US3 (Flexbox & Responsive Stacking)
- **Polish (Final Phase)**: Depends on completion of user stories

### Parallel Opportunities

- T002 can run in parallel with T001.
- T004 can run in parallel with T003.
- T012 can run in parallel during final review.

---

## Implementation Strategy

### MVP First (Phases 1 to 3)
1. Complete Setup and Foundational (T001 - T004).
2. Complete Card 1: Nubi Clinic (T005 - T006).
3. **Validate MVP**: Confirm Card 1 displays properly below the hero section.

### Incremental Delivery
1. Add Card 2: Outros locais (T007 - T008).
2. Add Responsive Flexbox & Mobile Stacking (T009 - T011).
3. Final Polish and Verification (T012 - T014).
