# Tasks: Modernização da Hero Section com Fundo Integrado e Logo Flutuante

**Input**: Design documents from `specs/006-modern-hero-section/` (`spec.md`, `plan.md`, `data-model.md`, `research.md`, `contracts/hero-layout-contract.md`, `quickstart.md`)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare modern design tokens, gradients, and asset verification

- [X] T001 Configure modern Hero design tokens (colors, gradients, pill radii, and filter variables) in `assets/css/style.css`
- [X] T002 [P] Verify image assets `assets/img/capa.jpg` and `assets/img/logo.png` exist and have valid paths in `index.html`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Base structural layout separating background media layer from foreground content

**⚠️ CRITICAL**: Hero DOM container and base styling must be restructured before individual story components are added

- [X] T003 Restructure the Hero Section container markup in `index.html` to support an absolute background media layer and a foreground content container
- [X] T004 [P] Setup base positioning (`position: relative; overflow: hidden; min-height: 85vh;`) and z-index layers for `.hero-section` in `assets/css/style.css`

**Checkpoint**: Foundation ready — modern background, logo, and CTA components can now be implemented

---

## Phase 3: User Story 1 - Fundo Integrado em Degradê com a Foto da Médica (Priority: P1) 🎯 MVP

**Goal**: Remove the rigid square photo box and integrate `capa.jpg` as a soft background layer with horizontal and vertical gradients fading into `#305359`.

**Independent Test**: Load the landing page on desktop (1440px+); verify there is no rectangular photo box. The doctor's photo appears integrated into the background with smooth edge gradients fading into `#305359`.

### Implementation for User Story 1

- [X] T005 [US1] Remove obsolete isolated `.hero-photo-wrapper` container from `index.html`
- [X] T006 [US1] Implement `.hero-bg-layer`, `.hero-bg-image`, and `.hero-bg-overlay` markup inside `#hero` in `index.html`
- [X] T007 [US1] Style integrated background image with `assets/img/capa.jpg` and multi-stop gradients fading into `#305359` at all extremities in `assets/css/style.css`
- [X] T008 [US1] Implement left-side contrast overlay gradient in `assets/css/style.css` ensuring WCAG contrast for headline and bio text

**Checkpoint**: User Story 1 complete — background is integrated and smooth without boxy edges

---

## Phase 4: User Story 2 - Logotipo Flutuante sem Fundo Branco Acima do Nome (Priority: P1)

**Goal**: Remove the white rectangular card from the logo and position the logo directly above the doctor's name with crisp white rendering via CSS filter.

**Independent Test**: Inspect the area above "Dra. Mylana Gama"; verify the logo sits directly above the headline without a white background, appearing luminous and razor-sharp against `#305359`.

### Implementation for User Story 2

- [X] T009 [US2] Remove obsolete `.hero-logo-wrapper` and `.hero-logo-card` white box markup from `index.html`
- [X] T010 [US2] Insert `.hero-brand` container with `.hero-logo-floating` directly above `h1.hero-name` in `index.html`
- [X] T011 [US2] Style `.hero-logo-floating` with CSS filter (`brightness(0) invert(1) drop-shadow(...)`) for high-contrast white rendering in `assets/css/style.css`

**Checkpoint**: User Story 2 complete — logo is floating, high-end, and perfectly integrated

---

## Phase 5: User Story 3 - Botão de Ação Direta "Agendar Consulta" na Hero (Priority: P1)

**Goal**: Add a prominent pill-shaped CTA button linking to `#agendamento` and credential badges to modernise presentation.

**Independent Test**: Click the "Agendar Consulta" button in the Hero; verify smooth scroll to `#agendamento`. Check that specialty and CRM/RQE appear as stylish pill badges.

### Implementation for User Story 3

- [X] T012 [US3] Add `.hero-actions` with modern pill-style anchor link `.btn-hero-cta` pointing to `#agendamento` in `index.html`
- [X] T013 [US3] Style `.btn-hero-cta` with pill shape (`border-radius: 50px`), elevation, and interactive hover transitions in `assets/css/style.css`
- [X] T014 [US3] Add specialty and credential pill badges (`.hero-badges` with `.badge-pill`) in `index.html` and style them with translucent backdrop in `assets/css/style.css`

**Checkpoint**: User Story 3 complete — first fold features direct conversion action and modern badges

---

## Phase 6: User Story 4 - Adaptação Responsiva e Legibilidade em Telas Menores (Priority: P2)

**Goal**: Ensure optimal presentation, contrast, and touch accessibility on mobile and tablet viewports.

**Independent Test**: Test on viewport widths of 390px, 412px, and 768px; verify centered alignment, optimal logo sizing, comfortable bio reading, and 48px touch target for the CTA button.

### Implementation for User Story 4

- [X] T015 [US4] Implement tablet breakpoint rules (max-width: 992px) for balanced content width and background position in `assets/css/responsive.css`
- [X] T016 [US4] Implement mobile breakpoint rules (max-width: 768px) with centered layout, dark gradient overlay for text readability, and fluid logo size in `assets/css/responsive.css`
- [X] T017 [US4] Implement small phone rules (max-width: 420px) ensuring fluid typography and 48px minimum touch target for CTA in `assets/css/responsive.css`

**Checkpoint**: User Story 4 complete — flawless experience across all screen sizes

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility audit, dead code elimination, and quickstart verification

- [X] T018 [P] Validate WCAG AAA contrast ratio (>7:1) between typography/logo and background in `index.html`
- [X] T019 [P] Execute quickstart validation scenarios across desktop and mobile viewports per `specs/006-modern-hero-section/quickstart.md`
- [X] T020 Clean up obsolete CSS rules for old hero photo box and old logo card in `assets/css/style.css` and `assets/css/responsive.css`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup (T001-T002) — BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational (T003-T004)
- **User Story 2 (Phase 4)**: Depends on Foundational (T003-T004)
- **User Story 3 (Phase 5)**: Depends on Foundational (T003-T004)
- **User Story 4 (Phase 6)**: Depends on completion of US1, US2, and US3 markup & desktop styles
- **Polish (Phase 7)**: Depends on all user stories completed

### Parallel Opportunities

- T001 and T002 can run in parallel.
- T003 and T004 can run in parallel.
- T018 and T019 can run in parallel during final review.

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1 (Setup) and Phase 2 (Foundational).
2. Complete Phase 3 (US1: Fundo Integrado com Degradê).
3. **Validate MVP**: Confirm background image integrates smoothly with `#305359` without rigid photo box.

### Incremental Delivery
1. Add User Story 2: Floating Logo without white card (T009-T011).
2. Add User Story 3: CTA Button & Modern Credential Badges (T012-T014).
3. Add User Story 4: Responsive mobile/tablet polish (T015-T017).
4. Complete Polish & Validation (T018-T020).
