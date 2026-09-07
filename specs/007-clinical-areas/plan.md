# Implementation Plan: Seção de Áreas de Atuação Neurológica

**Branch**: `007-clinical-areas` | **Date**: 2026-09-07 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/007-clinical-areas/spec.md` and user directives for card layout, background `#eef7f9`, bold `#305359` titles, icons, descriptions <= 100 characters, and Flexbox wrap with max 4 cards per row.

## Summary

Implementar a nova seção "Áreas de Atuação" (`#areas-atuacao`) posicionada imediatamente após a Hero Section e antes da seção de Atendimento:
1. **10 Especialidades Clínicas**: Dor, Distúrbios do Movimento, Cognição e demências, Epilepsia, Vascular, Distúrbios do Sono, Neuroinfectologia, Neuroimunologia, Doenças Neuromusculares e Vertigem.
2. **Estrutura dos Cards**: Cada card estilizado com background `#eef7f9`, ícone vetorial temático, título em negrito `#305359` e breve descrição rigorosamente limitada a até 100 caracteres.
3. **Layout Flexbox com Wrap**: Distribuição flexível com `flex-wrap: wrap` e dimensionamento matemático que limita a no máximo 4 cards por linha em desktop (4 + 4 + 2 cards), adaptando-se para 2 cards em tablets e 1 card em celulares.
4. **Navegação Integrada**: Inclusão do link correspondente no cabeçalho fixo (*Início → Áreas de Atuação → Atendimento → ...*).

## Technical Context

**Language/Version**: HTML5, CSS3 (Vanilla).

**Primary Dependencies**: None (Native browser standards only).

**Storage**: Static assets in `index.html`, `assets/css/style.css`, and `assets/css/responsive.css`.

**Testing**: Manual cross-browser testing (Chrome, Edge, Firefox, Safari), responsive viewport emulation (375px, 600px, 768px, 992px, 1200px+), character count validation (<= 100 chars per card).

**Target Platform**: Evergreen desktop and mobile web browsers.

**Project Type**: Single-page static web landing component.

**Performance Goals**: Instantaneous rendering, zero external render-blocking scripts, FCP < 1.0s.

**Constraints**:
- Placement: After Hero and before Atendimento.
- Background of each card: `#eef7f9`.
- Title: Bold, color `#305359`.
- Description length: Strictly <= 100 characters per card.
- Layout: Flexbox wrap with max 4 cards per row on desktop.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Principle I: Patient-Centric Simplicity & Accessibility**: Clear, accessible descriptions communicating real medical solutions to patients without excessive medical jargon.
- [x] **Principle II: Pure Vanilla Architecture**: 100% native HTML5 and CSS3, zero external CSS/JS dependencies.
- [x] **Principle III: Strict Single-Page Directory & Asset Structure**: Resides in `index.html`, `assets/css/style.css`, and `assets/css/responsive.css`.
- [x] **Principle IV: Brand Color Palette & Responsive Visual Consistency**: Employs `#eef7f9` for cards, `#305359` for titles/accents, and `#ffffff` for canvas; fully responsive Flexbox layout.
- [x] **Principle V: Performance First & Non-Blocking Execution**: Lightweight vector icons and CSS styling with zero impact on page load speed.
- [x] **Principle VI: SEO & Discoverability Excellence**: Semantic HTML5 markup (`<section>`, `<article>`, `<h3>`, `<p>`), rich keywords (Parkinson, Alzheimer, AVC, Enxaqueca, Vertigem, etc.).

## Project Structure

### Documentation (this feature)

```text
specs/007-clinical-areas/
├── plan.md              # This plan document
├── research.md          # Technical decisions & character count analysis
├── data-model.md        # Practice area entities and design tokens
├── quickstart.md        # Validation scenarios and testing steps
├── contracts/
│   └── areas-layout-contract.md # HTML DOM structure & CSS Flexbox rules
└── checklists/
    └── requirements.md  # Quality checklist
```

### Source Code (repository root)

```text
index.html               # Add section #areas-atuacao after #hero and update header nav
assets/
├── css/
│   ├── style.css        # Card styles, #eef7f9 background, icon badges, #305359 titles
│   └── responsive.css   # Responsive flexbox rules (4 desktop, 2 tablet, 1 mobile)
```

**Structure Decision**: Conforms strictly to the single-page static architecture specified in the constitution.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|---|---|---|
| None | N/A | Fully aligned with constitution principles and user design requirements |
