# Tasks: Informative Appointment Scheduling Section

**Input**: Design documents from `specs/004-appointment-scheduling/` (`spec.md`, `plan.md`, `data-model.md`, `research.md`, `contracts/scheduling-channels-contract.md`, `quickstart.md`)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare section anchor and CSS tokens

- [X] T001 Verify and prepare section anchor `#agendamento` immediately following `#endereco` in `index.html`
- [X] T002 [P] Define scheduling design tokens (priority badge, WhatsApp brand colors, card border) in `assets/css/style.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Base structural markup and container styles

**⚠️ CRITICAL**: Base section container must be established before channels are styled

- [X] T003 Create base section container (`<section id="agendamento" class="booking-section">`) with header badge and title in `index.html`
- [X] T004 [P] Implement base card styling rules for `.booking-card` and `.booking-cards-grid` in `assets/css/style.css`

**Checkpoint**: Foundation ready — booking channel cards can now be added

---

## Phase 3: User Story 1 - Nubi Clinic WhatsApp Priority Channel (Priority: P1) 🎯 MVP

**Goal**: Render Channel 1 featuring the priority badge, phone `(82) 9 9399-9600`, consultation scope (in-clinic, home, online), and direct WhatsApp link `https://wa.me/558293999600`.

**Independent Test**: Open `index.html`; scroll to `#agendamento`; verify Channel 1 highlights "WhatsApp da Nubi Clinic", shows phone "(82) 9 9399-9600", and "Agendar pelo WhatsApp" button targets `https://wa.me/558293999600`.

### Implementation for User Story 1

- [X] T005 [US1] Implement Channel 1 markup in `index.html` with "Canal Prioritário" badge, phone `(82) 9 9399-9600`, consultation scope text, and WhatsApp CTA link `https://wa.me/558293999600`
- [X] T006 [US1] Style Channel 1 priority card, badge, WhatsApp button, and contact info in `assets/css/style.css`

**Checkpoint**: Nubi Clinic WhatsApp priority channel is fully functional and testable independently

---

## Phase 4: User Story 2 - Doctoralia Channel & Availability Notice (Priority: P1)

**Goal**: Render Channel 2 featuring Doctoralia direct booking link `https://www.doctoralia.com.br/mylana-dandara-pereira-gama/neurologista/maceio` and weekly availability notice.

**Independent Test**: View Doctoralia card; verify it clearly explains that clinic booking through Doctoralia is subject to weekly slot availability, and CTA button links to Doctoralia.

### Implementation for User Story 2

- [X] T007 [US2] Implement Channel 2 markup in `index.html` with Doctoralia title, description, weekly slot availability advisory, and profile CTA link `https://www.doctoralia.com.br/mylana-dandara-pereira-gama/neurologista/maceio`
- [X] T008 [US2] Style Doctoralia card, availability notice box, and button in `assets/css/style.css`

**Checkpoint**: Both channels are complete and clearly differentiated

---

## Phase 5: User Story 3 - Responsive Flexbox & Mobile Stacking (Priority: P2)

**Goal**: Deliver 2 columns side-by-side on desktop, 1 column stacked on mobile (WhatsApp card top, Doctoralia bottom).

**Independent Test**: Resize browser across desktop (>768px) and mobile (<=768px); verify side-by-side alignment on desktop, clean vertical stack on mobile, and touch targets >= 44x44px.

### Implementation for User Story 3

- [X] T009 [US3] Implement desktop Flexbox rules (`display: flex; flex-direction: row; gap: 2rem; align-items: stretch;`) in `assets/css/style.css`
- [X] T010 [US3] Implement mobile media query rules (`flex-direction: column; width: 100%; gap: 1.5rem;`) in `assets/css/responsive.css`
- [X] T011 [US3] Ensure smooth-scroll navigation from hero and header CTA buttons to `#agendamento` in `assets/js/main.js`

**Checkpoint**: Responsive dual-channel layout functional on all screen sizes

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Security, accessibility, and navigation consistency

- [X] T012 [P] Validate security attributes (`target="_blank" rel="noopener noreferrer"`) on external WhatsApp and Doctoralia links in `index.html`
- [X] T013 Execute quickstart validation scenarios per `specs/004-appointment-scheduling/quickstart.md`
- [X] T014 Audit WCAG contrast on all buttons, badges, and text elements

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion (T001-T002) — BLOCKS user story implementation
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
  - US1 (WhatsApp Priority) → US2 (Doctoralia) → US3 (Responsive Flexbox & Smooth Scroll)
- **Polish (Final Phase)**: Depends on completion of user stories

### Parallel Opportunities

- T002 can run in parallel with T001.
- T004 can run in parallel with T003.
- T012 can run in parallel during final polish.

---

## Implementation Strategy

### MVP First (Phases 1 to 3)
1. Complete Setup and Foundational (T001 - T004).
2. Complete Nubi Clinic WhatsApp Channel (T005 - T006).
3. **Validate MVP**: Confirm WhatsApp channel renders with direct messaging link.

### Incremental Delivery
1. Add Doctoralia Channel (T007 - T008).
2. Implement Responsive Flexbox & Smooth Scroll (T009 - T011).
3. Final Polish and Verification (T012 - T014).
