# Implementation Plan: Seção de Comentários sobre Atendimento (Carrossel de Depoimentos)

**Branch**: `008-patient-testimonials` | **Date**: 2026-09-07T19:03:31-03:00 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/008-patient-testimonials/spec.md` with layout requirements:
- Formato de cards e carrossel, exibindo um único comentário por vez.
- Troca automática a cada 5 segundos.
- Estrutura estrita do card:
  - Topo: Nome da pessoa em negrito
  - Centro: Comentário da pessoa com aspas
  - Rodapé: Fonte do site onde a pessoa comentou a respeito

## Summary

Implementar a seção "Comentários sobre atendimento" após o Agendamento e antes dos Contatos/Rodapé, apresentando 6 depoimentos reais de pacientes (Doctoralia e Google Avaliações) em um carrossel Vanilla JavaScript nativo (sem dependências externas), com visualização de 1 card por vez, rotação automática a cada 5 segundos, pausa ao passar o mouse e controles interativos (setas e dots).

## Technical Context

**Language/Version**: HTML5, CSS3, ES6+ Vanilla JavaScript.

**Primary Dependencies**: Nenhuma (Arquitetura 100% Vanilla em conformidade com a Constituição do Projeto).

**Storage**: Estático / Embutido no markup semântico de `index.html`.

**Testing**: Validação visual manual e cenários de teste documentados em `quickstart.md`.

**Target Platform**: Navegadores modernos desktop, tablet e mobile (Chrome, Edge, Safari, Firefox).

**Project Type**: Single-Page Landing Page médica estática.

**Performance Goals**: Tempo de renderização imediato (<100ms), 60fps nas animações CSS transform/opacity, script não-bloqueante deferido ao final do body em `main.js`.

**Constraints**:
- Conformidade estrita com o Princípio II (Pure Vanilla Architecture).
- Autoplay de 5 segundos (`setInterval`).
- Exibição estrita de 1 comentário por vez.
- Estrutura exata do card: Topo (Nome em negrito), Centro (Comentário com aspas), Rodapé (Fonte).

**Scale/Scope**: 6 depoimentos reais, 1 componente de carrossel, atualização de 3 arquivos existentes (`index.html`, `assets/css/style.css`, `assets/js/main.js` e `assets/css/responsive.css`).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Princípio Constitucional | Status | Justificativa / Avaliação |
|---|---|---|
| **I. Patient-Centric Simplicity & Accessibility** | PASS | Linguagem acolhedora, relatos autênticos de pacientes, tipografia legível e pausa de leitura no hover. |
| **II. Pure Vanilla Architecture** | PASS | 100% Vanilla HTML5, CSS3 e JS (sem Swiper, jQuery ou bibliotecas externas). |
| **III. Strict Single-Page Directory & Asset Structure** | PASS | Modificações restritas a `index.html`, `assets/css/` e `assets/js/`. |
| **IV. Brand Color Palette & Visual Consistency** | PASS | Cores consistentes com o design system (`#305359`, `#ffffff`, `#eef7f9`, `#415e64`). |
| **V. Performance First & Non-Blocking Execution** | PASS | Código JS enxuto adicionado ao `main.js` no final do body sem travar a renderização inicial. |
| **VI. SEO & Discoverability Excellence** | PASS | Tags semânticas (`<section>`, `<article>`, `<blockquote>`, `<cite>`), atributos ARIA de carrossel acessível. |

## Project Structure

### Documentation (this feature)

```text
specs/008-patient-testimonials/
├── spec.md              # Especificação refinada com carrossel de 1 item e autoplay de 5s
├── plan.md              # Este plano de implementação
├── research.md          # Pesquisa técnica do carrossel Vanilla JS e anatomia do card
├── data-model.md        # Modelo da entidade Testimonial e CarouselState
├── quickstart.md        # Guia passo a passo de teste e validação dos cenários
└── contracts/
    └── testimonials-layout-contract.md # Contrato semântico HTML, CSS e eventos JS
```

### Source Code (repository root)

```text
C:/xampp/htdocs/mylana/
├── index.html                  # Seção #comentarios após #agendamento com os 6 slides
├── assets/
│   ├── css/
│   │   ├── style.css           # Estilos do carrossel, cards, aspas e controles
│   │   └── responsive.css      # Ajustes mobile e fluidez em telas pequenas
│   └── js/
│       └── main.js             # Módulo Vanilla JS para rotação de 5s, pausa e dots
```

**Structure Decision**: A landing page mantém sua arquitetura Vanilla consolidada sem criação de novos arquivos em produção, reutilizando `index.html`, `style.css`, `responsive.css` e `main.js`.

## Complexity Tracking

> Nenhuma violação constitucional detectada. O projeto dispensa complexidade desnecessária.
