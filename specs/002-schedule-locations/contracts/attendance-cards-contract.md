# Contract: Attendance Cards HTML/CSS Contract

**Feature**: `002-schedule-locations`  
**Date**: 2026-09-07  
**Status**: Active Contract

## 1. DOM Hierarchy Contract

The attendance section MUST be added directly following the `#hero` section in `index.html`:

```html
<!-- Attendance Section (Locais e Horários) -->
<section id="atendimento" class="attendance-section">
  <div class="container attendance-container">
    
    <!-- Section Header -->
    <div class="section-header text-center">
      <span class="section-badge">Locais e Horários</span>
      <h2 class="section-title">Onde Agendar Sua Consulta</h2>
      <p class="section-subtitle">
        Escolha o ponto de atendimento ou modalidade mais conveniente para você e sua família.
      </p>
    </div>

    <!-- Dual Cards Flex Container -->
    <div class="attendance-cards-grid">

      <!-- Card 1: Nubi Clinic -->
      <article class="attendance-card card-nubi">
        <div class="card-icon-badge">
          <svg class="card-icon" viewBox="0 0 24 24" fill="currentColor">
            <!-- Medical clinic icon / calendar icon -->
          </svg>
        </div>
        <h3 class="card-title">Atendimento na Clínica <br/>Nubi Clinic</h3>
        <p class="card-description">
          Consultas neurológicas ambulatoriais com foco em diagnóstico detalhado e plano terapêutico personalizado.
        </p>
        <div class="schedule-highlight">
          <span class="schedule-day">📅 Dia: <strong>Terça-feira</strong></span>
          <span class="schedule-hours">⏰ Horário: <strong>08h às 12h</strong></span>
          <span class="schedule-mode">📌 Modalidade: <strong>Via agendamento prévio</strong></span>
        </div>
        <div class="card-action">
          <a href="#agendamento" class="btn btn-card-primary">Agendar na Nubi Clinic</a>
        </div>
      </article>

      <!-- Card 2: Outros locais de atendimento -->
      <article class="attendance-card card-outros">
        <div class="card-icon-badge">
          <svg class="card-icon" viewBox="0 0 24 24" fill="currentColor">
            <!-- Hospital / network icon -->
          </svg>
        </div>
        <h3 class="card-title">Outros locais de atendimento</h3>
        <p class="card-description">
          Assistência médica especializada abrangendo consultas domiciliares e os principais polos hospitalares de Maceió:
        </p>
        <ul class="locations-list">
          <li class="location-item">
            <span class="location-bullet"></span>
            <div>
              <strong>Atendimento Online / Domiciliar</strong>
              <span class="location-note">(Agendamento)</span>
            </div>
          </li>
          <li class="location-item">
            <span class="location-bullet"></span>
            <div>
              <strong>Hospital Metropolitano</strong>
              <span class="location-note">(Maceió)</span>
            </div>
          </li>
          <li class="location-item">
            <span class="location-bullet"></span>
            <div>
              <strong>Santa Casa de Misericórdia de Maceió</strong>
            </div>
          </li>
        </ul>
        <div class="card-action">
          <a href="#contato" class="btn btn-card-secondary">Consultar Disponibilidade</a>
        </div>
      </article>

    </div>
  </div>
</section>
```

## 2. Responsive Flexbox Contract

### Desktop (`min-width: 769px`)
- `.attendance-cards-grid`:
  ```css
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  ```
- Each `.attendance-card` takes equal width: `flex: 1 1 0; max-width: 520px;`.

### Mobile (`max-width: 768px`)
- `.attendance-cards-grid`:
  ```css
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  ```
- Cards stack one below the other: Card 1 (`card-nubi`) appears first, followed by Card 2 (`card-outros`).
- Margin/padding adjusted for mobile screens to maximize readability and comfort.
