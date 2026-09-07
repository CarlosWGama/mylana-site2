# Tasks: Site Footer, Social Contacts & Creator Credits

**Input**: Design documents from `specs/005-footer-contacts/` (`spec.md`, `plan.md`, `data-model.md`, `research.md`, `contracts/footer-layout-contract.md`, `quickstart.md`)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare image asset and footer CSS tokens

- [ ] T001 Copy doctor photo `modelos/contato.jpg` to `assets/img/contato.jpg`
- [ ] T002 [P] Define footer tokens (`--footer-bg: #305359`, `--footer-text: #ffffff`, divider color) in `assets/css/style.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Base structural markup and 12-column grid setup

**⚠️ CRITICAL**: Base footer container and grid rules must be in place before columns are rendered

- [ ] T003 Create base footer container (`<footer class="site-footer">`) closing the main layout in `index.html`
- [ ] T004 [P] Implement base 12-column grid layout rules (`display: grid; grid-template-columns: repeat(12, 1fr);`) in `assets/css/style.css`

**Checkpoint**: Foundation ready — footer columns can now be added

---

## Phase 3: User Story 1 - Grid Part 1 (4/12 Photo) & Mobile Display None (Priority: P1) 🎯 MVP

**Goal**: Implement Part 1 (4/12) displaying `assets/img/contato.jpg`, and enforce `display: none` on mobile screens.

**Independent Test**: View desktop (>768px); verify doctor photo renders in Part 1 (4/12 width). Toggle mobile view (<=768px); verify photo is completely hidden (`display: none`).

### Implementation for User Story 1

- [ ] T005 [US1] Implement Part 1 markup in `index.html` with `assets/img/contato.jpg` inside `.footer-col-photo`
- [ ] T006 [US1] Style Part 1 (4/12 column span, rounded corners, image fit) in `assets/css/style.css`
- [ ] T007 [US1] Add mobile media query rule in `assets/css/responsive.css` to hide photo column (`.footer-col-photo { display: none; }`)

**Checkpoint**: Part 1 renders on desktop and hides on mobile screens

---

## Phase 4: User Story 2 - Grid Part 2 (8/12 Contacts & Instagram/Email) (Priority: P1)

**Goal**: Implement Part 2 (8/12) with Instagram link (`@mylanagama.neuro`), email link (`mylanagama.neurologia@gmail.com`), and doctor credentials.

**Independent Test**: View Part 2; verify Instagram link targets `https://www.instagram.com/mylanagama.neuro/` in a new tab, and email link targets `mailto:mylanagama.neurologia@gmail.com`.

### Implementation for User Story 2

- [ ] T008 [US2] Implement Part 2 markup in `index.html` with Instagram link (`https://www.instagram.com/mylanagama.neuro/`), email link (`mailto:mylanagama.neurologia@gmail.com`), and CRM-AL 7100 | RQE 4871
- [ ] T009 [US2] Style contact items, social icons, and text typography in `assets/css/style.css`

**Checkpoint**: Both Part 1 and Part 2 are complete and visually balanced

---

## Phase 5: User Story 3 - Centered Developer Attribution (Priority: P2)

**Goal**: Render centered credit text "Desenvolvido por CarlosWGama" below the grid.

**Independent Test**: Scroll to the bottom of the footer; verify centered text "Desenvolvido por CarlosWGama" with top divider line.

### Implementation for User Story 3

- [ ] T010 [US3] Implement bottom bar markup in `index.html` containing "Desenvolvido por CarlosWGama" below the 12-column grid
- [ ] T011 [US3] Style footer bottom bar with divider line and centered typography in `assets/css/style.css`

**Checkpoint**: Full footer layout complete with contacts and developer credits

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Security, accessibility, and visual quality

- [ ] T012 [P] Validate security attributes (`target="_blank" rel="noopener noreferrer"`) on Instagram link in `index.html`
- [ ] T013 Execute quickstart validation scenarios per `specs/005-footer-contacts/quickstart.md` across mobile and desktop
- [ ] T014 Audit WCAG contrast ratio on footer text and links (> 7:1)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion (T001-T002) — BLOCKS column implementation
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
  - US1 (Part 1 Photo) → US2 (Part 2 Contacts) → US3 (Bottom Credits)
- **Polish (Final Phase)**: Depends on completion of user stories

### Parallel Opportunities

- T002 can run in parallel with T001.
- T004 can run in parallel with T003.
- T012 can run in parallel during final review.

---

## Implementation Strategy

### MVP First (Phases 1 to 3)
1. Complete Setup and Foundational (T001 - T004).
2. Complete Part 1: Doctor Photo & Mobile Hide Rule (T005 - T007).
3. **Validate MVP**: Confirm photo displays on desktop and hides on mobile.

### Incremental Delivery
1. Add Part 2: Instagram, Email & Credentials (T008 - T009).
2. Add Centered Developer Attribution (T010 - T011).
3. Final Polish and Verification (T012 - T014).
