# Contract: Scheduling Section HTML/CSS Contract

**Feature**: `004-appointment-scheduling`  
**Date**: 2026-09-07  
**Status**: Active Contract

## 1. DOM Hierarchy Contract

The section MUST be positioned immediately following `#endereco` in `index.html`:

```html
<!-- Informational Scheduling Section -->
<section id="agendamento" class="booking-section">
  <div class="container booking-container">
    
    <!-- Section Header -->
    <div class="section-header text-center">
      <span class="section-badge">Agendamento de Consultas</span>
      <h2 class="section-title">Como Agendar Sua Consulta</h2>
      <p class="section-subtitle">
        Escolha o canal de sua preferência para falar com a equipe ou solicitar seu horário:
      </p>
    </div>

    <!-- Dual Channel Cards Grid -->
    <div class="booking-cards-grid">

      <!-- Channel 1: Nubi Clinic (Priority) -->
      <article class="booking-card card-priority">
        <div class="card-header-top">
          <span class="badge-priority">Canal Prioritário</span>
        </div>
        <div class="card-icon-circle whatsapp-icon-bg">
          <svg class="icon-svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <!-- WhatsApp / Chat Icon -->
          </svg>
        </div>
        <h3 class="channel-title">WhatsApp da Nubi Clinic</h3>
        <p class="channel-description">
          Caso deseje optar por ter um atendimento na clínica, domiciliar ou online, entre em contato diretamente pelo WhatsApp da clínica. Nossa equipe estará pronta para auxiliar você na escolha do melhor dia e horário.
        </p>
        <div class="channel-contact-info">
          <span class="phone-label">Telefone / WhatsApp:</span>
          <a href="tel:+5582993999600" class="phone-number-link">(82) 9 9399-9600</a>
        </div>
        <div class="channel-action">
          <a href="https://wa.me/558293999600?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento%20de%20consulta%20com%20a%20Dra.%20Mylana%20Gama." 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn btn-whatsapp">
            Agendar pelo WhatsApp
          </a>
        </div>
      </article>

      <!-- Channel 2: Doctoralia -->
      <article class="booking-card card-doctoralia">
        <div class="card-header-top">
          <span class="badge-secondary">Agendamento Online</span>
        </div>
        <div class="card-icon-circle doctoralia-icon-bg">
          <svg class="icon-svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <!-- Calendar / External link icon -->
          </svg>
        </div>
        <h3 class="channel-title">Doctoralia</h3>
        <p class="channel-description">
          Você também pode solicitar um agendamento na clínica diretamente pelo site da Doctoralia.
        </p>
        <div class="channel-notice-box">
          <p class="notice-text">
            ⚠️ <em>A opção pelo Doctoralia é exibida conforme houver disponibilidade de vagas na agenda da semana.</em>
          </p>
        </div>
        <div class="channel-action">
          <a href="https://www.doctoralia.com.br/mylana-dandara-pereira-gama/neurologista/maceio" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn btn-doctoralia">
            Acessar Perfil no Doctoralia
          </a>
        </div>
      </article>

    </div>
  </div>
</section>
```

## 2. Responsive Flexbox Layout Contract

### Desktop (`min-width: 769px`)
- `.booking-cards-grid`:
  ```css
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  ```
- `.booking-card`: `flex: 1 1 0; max-width: 520px;`

### Mobile (`max-width: 768px`)
- `.booking-cards-grid`:
  ```css
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  ```
- `.card-priority` appears first at the top.
- `.card-doctoralia` appears immediately below.
- Touch target for both CTA buttons >= 44x44px.
