# Implementation Plan: Modernização da Hero Section com Fundo Integrado e Logo Flutuante

**Branch**: `006-modern-hero-section` | **Date**: 2026-09-07 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/006-modern-hero-section/spec.md` and user directives based on the visual reference `modelos/thaisa.jpg`.

## Summary

Modernizar a Hero Section do site da Dra. Mylana Gama eliminando a estrutura retangular rígida ("quadrada"):
1. **Fundo Integrado com Degradê**: Remover o contêiner isolado da foto e integrar a imagem da médica (`assets/img/capa.jpg`) como plano de fundo ocupando posição de destaque, com degradês laterais e inferiores que esmaecem suavemente para a cor primária institucional (`#305359`).
2. **Logotipo Flutuante sem Fundo Branco**: Reposicionar o logotipo oficial diretamente acima do nome "Dra. Mylana Gama", eliminando o cartão branco e aplicando filtro de conversão para branco luminoso com sombra difusa, garantindo alto contraste e sofisticação de marca.
3. **Botão de Agendamento Rápido**: Adicionar botão no estilo pílula arredondada ("Agendar Consulta") com link para `#agendamento`.
4. **Badges de Credenciais Modernos**: Estilizar especialidade e registros médicos (CRM-AL 7100 | RQE 4871) em badges elegantes translúcidos.

## Technical Context

**Language/Version**: HTML5, CSS3 (Vanilla).

**Primary Dependencies**: None (Native browser standards only).

**Storage**: Static assets on local filesystem (`index.html`, `assets/css/style.css`, `assets/css/responsive.css`, `assets/img/capa.jpg`, `assets/img/logo.png`).

**Testing**: Manual cross-browser testing (Chrome, Edge, Firefox, Safari), responsive mobile emulation (375px, 390px, 412px, 768px, 1440px), WCAG color contrast validation (>7:1).

**Target Platform**: Evergreen desktop and mobile web browsers.

**Project Type**: Single-page static web landing component.

**Performance Goals**: First Contentful Paint (FCP) < 1.0s, zero render-blocking libraries, pure CSS layer compositing.

**Constraints**:
- Adherence to brand primary color `#305359`.
- Doctor photo integrated as a transparent/gradient background with smooth fade to `#305359` at all extremities.
- Logo placed above the name without a white background, treated via CSS filter for high visibility.
- Pill CTA button pointing to `#agendamento`.
- Preservation of complete narrative medical biography (no bullet points).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Principle I: Patient-Centric Simplicity & Accessibility**: Welcoming visual presentation, high-contrast readable typography, accessible 48px touch target for CTA.
- [x] **Principle II: Pure Vanilla Architecture**: 100% native HTML5 and CSS3, zero external CSS/JS frameworks.
- [x] **Principle III: Strict Single-Page Directory & Asset Structure**: Resides cleanly in root `index.html` and standard `assets/` subdirectories.
- [x] **Principle IV: Brand Color Palette & Responsive Visual Consistency**: Brand color `#305359` preserved as base canvas; responsive layout adapting effortlessly from mobile to ultrawide.
- [x] **Principle V: Performance First & Non-Blocking Execution**: High performance through CSS gradient compositing and GPU-accelerated transforms.
- [x] **Principle VI: SEO & Discoverability Excellence**: Semantic markup hierarchy (`<section>`, `<h1>`, `<a>`, descriptive `alt` tags).

## Project Structure

### Documentation (this feature)

```text
specs/006-modern-hero-section/
├── plan.md              # This plan document
├── research.md          # Technical decisions & reference analysis (thaisa.jpg)
├── data-model.md        # Hero entities, tokens, and visual configurations
├── quickstart.md        # Validation scenarios and testing steps
├── contracts/
│   └── hero-layout-contract.md # HTML DOM structure & CSS layout contracts
└── checklists/
    └── requirements.md  # Quality checklist
```

### Source Code (repository root)

```text
index.html               # Update Hero section DOM (bg layer, floating logo, CTA button)
assets/
├── css/
│   ├── style.css        # Hero background gradient layer, floating logo filter, CTA button
│   └── responsive.css   # Mobile adjustments for integrated background & centered flow
└── img/
    ├── capa.jpg         # Background doctor photo
    └── logo.png         # Official floating logo
```

**Structure Decision**: Conforms strictly to the single-page static architecture specified in the constitution.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|---|---|---|
| None | N/A | Fully aligned with constitution principles and user design requirements |
