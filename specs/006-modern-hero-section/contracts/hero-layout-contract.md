# Layout & Visual Contract: Hero Section Modernizada

**Branch**: `006-modern-hero-section` | **Date**: 2026-09-07

## 1. Contrato Estrutural HTML (DOM)

A seção `#hero` em `index.html` deve seguir a seguinte estrutura semântica:

```html
<section id="hero" class="hero-section">
  <!-- Camada de Fundo Integrado com Foto e Degradê -->
  <div class="hero-bg-layer" aria-hidden="true">
    <div class="hero-bg-image"></div>
    <div class="hero-bg-overlay"></div>
  </div>

  <!-- Contêiner de Conteúdo e Ações -->
  <div class="hero-container">
    <div class="hero-content">
      <!-- Logo Flutuante (sem caixa branca, acima do nome) -->
      <div class="hero-brand">
        <img 
          src="assets/img/logo.png" 
          alt="Logo Dra. Mylana Gama" 
          class="hero-logo-floating" 
        />
      </div>

      <!-- Título Principal -->
      <h1 class="hero-name">Dra. Mylana Gama</h1>

      <!-- Badge de Especialidade e Credenciais -->
      <div class="hero-badges">
        <span class="badge-pill">Neurologista</span>
        <span class="badge-pill">CRM-AL 7100</span>
        <span class="badge-pill">RQE 4871</span>
      </div>

      <!-- Biografia Narrativa Humanizada (sem tópicos) -->
      <p class="hero-bio">
        Médica neurologista graduada pela Universidade Estadual de Ciências da Saúde de Alagoas (UNCISAL),
        com residência médica em Neurologia pela Universidade de Pernambuco (UPE/HUOC – Recife).
        Possui formação complementar pela Sociedade Alagoana de Neurologia (SAN) e atuação clínica no
        Hospital Metropolitano de Alagoas e na Santa Casa de Misericórdia de Maceió.
        Comprometida com um atendimento humanizado, baseado em evidências científicas, oferecendo
        acompanhamento presencial, domiciliar e online para pacientes em Maceió e região.
      </p>

      <!-- Botão de Ação Direta -->
      <div class="hero-actions">
        <a href="#agendamento" class="btn-hero-cta">
          <span class="cta-icon" aria-hidden="true">📅</span>
          <span>Agendar Consulta</span>
        </a>
      </div>
    </div>
  </div>
</section>
```

---

## 2. Contrato de Estilização CSS

### 2.1 Fundo Integrado e Degradê para #305359
1. `.hero-section`:
   - `position: relative; overflow: hidden; background-color: #305359;`
2. `.hero-bg-layer`:
   - `position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;`
3. `.hero-bg-image`:
   - `background-image: url('../img/capa.jpg');`
   - `background-repeat: no-repeat;`
   - `background-size: cover;`
   - `background-position: right 10% center;` (ou `center right`)
4. `.hero-bg-overlay`:
   - Aplica os degradês sobrepostos:
     ```css
     background: 
       linear-gradient(to right, #305359 0%, rgba(48, 83, 89, 0.88) 45%, rgba(48, 83, 89, 0.45) 75%, #305359 100%),
       linear-gradient(to bottom, transparent 65%, #305359 100%);
     ```
   - Em telas largas, garante fusão total nas bordas horizontais e verticais.

### 2.2 Logotipo Flutuante sem Fundo Branco
1. `.hero-logo-floating`:
   - `filter: brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));`
   - `max-width: 200px; height: auto; display: block;`
   - Sem caixa, moldura ou plano de fundo branco.

### 2.3 Botão "Agendar Consulta"
1. `.btn-hero-cta`:
   - `display: inline-flex; align-items: center; gap: 0.75rem;`
   - `border-radius: 50px;` (pílula moderna)
   - `background-color: #ffffff; color: #305359; font-weight: 700;`
   - `box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);`
   - `transition: transform 0.25s ease, background-color 0.25s ease, color 0.25s ease;`
   - Hover: `background-color: #25d366; color: #ffffff; transform: translateY(-2px);`

---

## 3. Contrato Responsivo

| Viewport | Disposição | Posição da Foto | Logo | Botão CTA |
|---|---|---|---|---|
| **Desktop (>992px)** | Coluna de texto à esquerda (max 650px), foto visível à direita | `background-position: right 15% center;` | Alinhado à esquerda, acima do nome | Alinhado à esquerda |
| **Tablet (769px-992px)** | Coluna central/expandida (max 700px) | `background-position: center;` com opacidade balanceada | Alinhado à esquerda ou centro | Alinhado |
| **Mobile (<=768px)** | Coluna única centralizada | Fundo com maior opacidade do gradiente `#305359` para legibilidade | Centralizado acima do nome | Largura total ou centralizado com min 48px de altura |
