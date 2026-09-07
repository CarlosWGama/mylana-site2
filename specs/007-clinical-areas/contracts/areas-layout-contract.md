# Layout Contract: Seção Áreas de Atuação Neurológica

**Branch**: `007-clinical-areas` | **Date**: 2026-09-07

## 1. Estrutura HTML Semântica (DOM)

A seção `#areas-atuacao` deve ser posicionada imediatamente após a seção `#hero` e antes da seção `#atendimento` em `index.html`:

```html
<section id="areas-atuacao" class="areas-section">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-badge">Especialidades Clínicas</span>
      <h2 class="section-title">Áreas de Atuação</h2>
      <p class="section-subtitle">
        Conheça os principais campos da neurologia clínica abordados em nossas consultas e tratamentos.
      </p>
    </div>

    <!-- Contêiner Flexbox com Wrap e máx. 4 cards por linha -->
    <div class="areas-grid">
      <!-- Exemplo de Card -->
      <article class="area-card">
        <div class="area-icon-wrapper" aria-hidden="true">
          <!-- SVG Ícone com traço refinado -->
        </div>
        <h3 class="area-title">Dor</h3>
        <p class="area-description">
          Diagnóstico e tratamento de enxaquecas, cefaleias e dores crônicas ou neuropáticas.
        </p>
      </article>
      <!-- ... Total de 10 cards ... -->
    </div>
  </div>
</section>
```

---

## 2. Contrato de Estilização CSS

### 2.1 Grade Flexbox com Wrap
```css
.areas-section {
  padding: 5rem 0;
  background-color: var(--color-white);
}

.areas-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.area-card {
  flex: 0 1 calc(25% - 1.15rem);
  min-width: 240px;
  background-color: #eef7f9;
  border-radius: var(--border-radius-md);
  padding: 1.75rem 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(48, 83, 89, 0.08);
  box-shadow: 0 4px 15px rgba(48, 83, 89, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.area-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(48, 83, 89, 0.12);
  border-color: rgba(48, 83, 89, 0.25);
}

.area-icon-wrapper {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background-color: #ffffff;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.1rem;
  box-shadow: 0 2px 8px rgba(48, 83, 89, 0.08);
}

.area-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #305359;
  margin-bottom: 0.6rem;
  line-height: 1.3;
}

.area-description {
  font-size: 0.95rem;
  color: #415e64;
  line-height: 1.55;
}
```

---

## 3. Contrato Responsivo

| Viewport | Cards por Linha | Cálculo Flexbox | Alinhamento |
|---|---|---|---|
| **Desktop (>992px)** | No máximo 4 cards por linha | `flex: 0 1 calc(25% - 1.15rem);` | Justificado/Centro |
| **Tablet (601px–992px)** | 2 cards por linha | `flex: 0 1 calc(50% - 0.75rem);` | 2 colunas equilibradas |
| **Mobile (<=600px)** | 1 card por linha | `flex: 1 1 100%;` | 1 coluna fluida |
