# Contract: Hero Section HTML/CSS Layout Contract

**Feature**: `001-landing-page-hero`  
**Date**: 2026-09-07  
**Status**: Active Contract

## 1. DOM Hierarchy & Structural Contract

The Hero section MUST adhere to the following semantic structure in `index.html`:

```html
<!-- Top navigation / Brand Header -->
<header class="site-header">
  <div class="container header-container">
    <div class="logo-wrapper">
      <img src="assets/img/logo.png" alt="Dra. Mylana Gama - Neurologista" class="brand-logo" width="160" height="auto">
    </div>
    <nav class="nav-menu">
      <a href="#sobre" class="nav-link">Sobre</a>
      <a href="#agendamento" class="btn btn-header-cta">Agendar Consulta</a>
    </nav>
  </div>
</header>

<!-- Main Hero Section -->
<section id="hero" class="hero-section">
  <div class="container hero-container">
    
    <!-- Doctor Portrait Photo (order: 1 on mobile) -->
    <div class="hero-photo-wrapper">
      <img src="assets/img/capa.jpg" alt="Dra. Mylana Gama - Médica Neurologista" class="hero-photo" loading="eager">
    </div>

    <!-- Narrative Presentation Description (order: 2 on mobile) -->
    <div class="hero-content-wrapper">
      <span class="hero-badge">Médica Neurologista</span>
      <h1 class="hero-title">Dra. Mylana Gama</h1>
      <p class="hero-credentials-tag">CRM-AL 7100 | RQE 4871</p>
      
      <div class="hero-narrative">
        <p class="hero-text">
          Com formação em Medicina pela Universidade Estadual de Ciências da Saúde de Alagoas (UNCISAL), dedico minha trajetória ao cuidado atento e individualizado da saúde neurológica. Realizei minha residência médica em Neurologia na cidade do Recife, pelo conceituado programa da Universidade de Pernambuco no Hospital Universitário Oswaldo Cruz (UPE / HUOC), aliando sólida formação científica à escuta acolhedora de cada paciente.
        </p>
        <p class="hero-text">
          Atualmente, atuo como médica neurologista no Hospital Metropolitano de Alagoas e na Santa Casa de Misericórdia de Maceió, além de ser membro efetivo da Sociedade Alagoana de Neurologia (SAN). Meu compromisso diário é proporcionar diagnósticos precisos, tratamentos baseados em evidências e orientações claras, para que você e sua família se sintam acolhidos em todas as etapas do acompanhamento.
        </p>
      </div>

      <div class="hero-actions">
        <a href="#agendamento" class="btn btn-primary">Agendar Consulta</a>
      </div>
    </div>

    <!-- Secondary Doctor Logo Block for mobile sequence or hero accent (order: 3 on mobile) -->
    <div class="hero-logo-wrapper">
      <div class="logo-card">
        <img src="assets/img/logo.png" alt="Logo Dra. Mylana Gama" class="hero-inline-logo">
      </div>
    </div>

  </div>
</section>
```

## 2. Flexbox Stacking & Responsive Contract

### Mobile Rules (`max-width: 768px`)
- The container MUST be `display: flex; flex-direction: column; align-items: center; text-align: center;`.
- Visual sequence MUST be strictly:
  1. `.hero-photo-wrapper`: `order: 1;`
  2. `.hero-content-wrapper`: `order: 2;`
  3. `.hero-logo-wrapper`: `order: 3;`
- Spacing: Each element must maintain a minimum of `20px` vertical gap.
- Photo styling: Responsive fluid width (`max-width: 320px`, `width: 90%`), centered, border-radius for aesthetic polish.

### Desktop Rules (`min-width: 769px`)
- The container MUST be `display: flex; flex-direction: row; justify-content: space-between; align-items: center;`.
- Photo on one side (`flex: 1; max-width: 450px;`), content on the other (`flex: 1.2; padding-right: 2rem;`).
- `.hero-logo-wrapper` can either merge with header or display with appropriate card contrast.

## 3. Style & Color Rules
- Hero Section Background: `background-color: var(--color-primary);` (`#305359`).
- Hero Text: Light contrast `#ffffff` and `#e6f0f2` for optimal legibility.
- Logo Container: Background MUST be white or placed in the light header (`background: #ffffff;`) to avoid contrast degradation with `#32555b` logo artwork.
