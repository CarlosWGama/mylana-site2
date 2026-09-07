# Tasks: Nubi Clinic Address & Google Maps Section

**Input**: Design documents from `specs/003-clinic-location/` (`spec.md`, `plan.md`, `data-model.md`, `research.md`, `contracts/clinic-location-contract.md`, `quickstart.md`)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare section anchor and CSS tokens

- [ ] T001 Verify and prepare section anchor `#endereco` immediately following `#atendimento` in `index.html`
- [ ] T002 [P] Define map and address design tokens (iframe radius, shadow, pin accent) in `assets/css/style.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Base structural markup and container styles

**⚠️ CRITICAL**: Base section container must be established before content and iframe are styled

- [ ] T003 Create base section container (`<section id="endereco" class="clinic-address-section">`) in `index.html`
- [ ] T004 [P] Implement base address section layout container rules in `assets/css/style.css`

**Checkpoint**: Foundation ready — address content and map can now be added

---

## Phase 3: User Story 1 - Clinic Address & Heading Hierarchy (Priority: P1) 🎯 MVP

**Goal**: Render prominent h1 "Endereço da clinica", h2 "Nubi Clinic", and address paragraph.

**Independent Test**: Open `index.html`; scroll to `#endereco`; verify h1 "Endereço da clinica", h2 "Nubi Clinic", and address "Rua Prefeito Abdon Arroxelas, 917 - Ponta Verde, Maceió - AL, 57035-380" are present and readable.

### Implementation for User Story 1

- [ ] T005 [US1] Implement h1 "Endereço da clinica", h2 "Nubi Clinic", and address paragraph in `index.html`
- [ ] T006 [US1] Style address typography, pin icon, and contrast styling in `assets/css/style.css`

**Checkpoint**: Address text and headings are fully functional and testable independently

---

## Phase 4: User Story 2 - Google Maps Iframe Integration (Priority: P1)

**Goal**: Embed Google Maps iframe centered on coordinates (lat: `-9.6560216`, lon: `-35.7097091`) with `loading="lazy"` and direct route CTA.

**Independent Test**: View section in browser; verify Google Maps iframe renders centered on the coordinates in Ponta Verde with rounded corners, and "Traçar Rota no Google Maps" button opens navigation.

### Implementation for User Story 2

- [ ] T007 [US2] Add Google Maps iframe element with coordinates (`-9.6560216`, `-35.7097091`) and `loading="lazy"` in `index.html`
- [ ] T008 [US2] Add "Traçar Rota no Google Maps" direct GPS link button in `index.html`
- [ ] T009 [US2] Style map wrapper, iframe border-radius, elevation shadow, and route CTA button in `assets/css/style.css`

**Checkpoint**: Address and interactive map are working together

---

## Phase 5: User Story 3 - Responsive Flexbox & Mobile Stacking (Priority: P2)

**Goal**: Deliver 2 columns side-by-side on desktop, 1 column stacked on mobile (address top, map bottom).

**Independent Test**: Resize browser across desktop (>768px) and mobile (<=768px); verify side-by-side alignment on desktop, clean vertical stack on mobile, and no horizontal scroll.

### Implementation for User Story 3

- [ ] T010 [US3] Implement desktop Flexbox rules (`display: flex; flex-direction: row; gap: 3rem; align-items: center;`) in `assets/css/style.css`
- [ ] T011 [US3] Implement mobile media query rules (`flex-direction: column; width: 100%; gap: 2rem;`) in `assets/css/responsive.css`

**Checkpoint**: Fully responsive layout across all device viewports

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: SEO validation, accessibility, and performance checks

- [ ] T012 [P] Validate SEO NAP (Name, Address, Phone) data, local schema indicators, and accessibility `title` on iframe in `index.html`
- [ ] T013 Execute quickstart validation scenarios per `specs/003-clinic-location/quickstart.md` across mobile and desktop
- [ ] T014 Audit performance to confirm iframe lazy loading does not impact initial page paint

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion (T001-T002) — BLOCKS user story implementation
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
  - US1 (Headings & Address) → US2 (Google Maps Iframe) → US3 (Responsive Flexbox)
- **Polish (Final Phase)**: Depends on all user stories being complete

### Parallel Opportunities

- T002 can run in parallel with T001.
- T004 can run in parallel with T003.
- T012 can run in parallel during final polish.

---

## Implementation Strategy

### MVP First (Phases 1 to 3)
1. Complete Setup and Foundational (T001 - T004).
2. Complete Address & Headings (T005 - T006).
3. **Validate MVP**: Confirm address information displays cleanly.

### Incremental Delivery
1. Add Google Maps iframe and route button (T007 - T009).
2. Implement responsive Flexbox rules (T010 - T011).
3. Final Polish and Verification (T012 - T014).
