# Contract: Clinic Address & Map HTML/CSS Contract

**Feature**: `003-clinic-location`  
**Date**: 2026-09-07  
**Status**: Active Contract

## 1. DOM Hierarchy Contract

The section MUST be positioned immediately after `#atendimento` in `index.html`:

```html
<!-- Clinic Address & Location Section -->
<section id="endereco" class="clinic-address-section">
  <div class="container address-container">
    
    <!-- Address Content Column -->
    <div class="address-info-col">
      <h1 class="address-main-title">Endereço da clinica</h1>
      <h2 class="address-subtitle">Nubi Clinic</h2>
      
      <p class="address-text">
        <svg class="icon-pin" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        Rua Prefeito Abdon Arroxelas, 917 - Ponta Verde, Maceió - AL, 57035-380
      </p>

      <div class="address-notes">
        <p class="schedule-pill">
          🩺 Atendimento com a Dra. Mylana Gama: <strong>Terças-feiras (08h às 12h)</strong>
        </p>
      </div>

      <div class="address-actions">
        <a href="https://www.google.com/maps/dir/?api=1&destination=-9.6560216,-35.7097091" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="btn btn-primary btn-route">
          Traçar Rota no Google Maps
        </a>
      </div>
    </div>

    <!-- Map Iframe Column -->
    <div class="address-map-col">
      <div class="map-wrapper">
        <iframe
          src="https://maps.google.com/maps?q=-9.6560216,-35.7097091&hl=pt-BR&z=17&output=embed"
          class="map-iframe"
          width="100%"
          height="380"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Localização da Nubi Clinic no Google Maps">
        </iframe>
      </div>
    </div>

  </div>
</section>
```

## 2. Responsive Flexbox Layout Contract

### Desktop (`min-width: 769px`)
- `.address-container`:
  ```css
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  ```
- `.address-info-col`: `flex: 1 1 45%; max-width: 500px;`
- `.address-map-col`: `flex: 1 1 55%;`

### Mobile (`max-width: 768px`)
- `.address-container`:
  ```css
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  ```
- `.address-info-col`: `order: 1; text-align: center;`
- `.address-map-col`: `order: 2; width: 100%;`
- `.map-iframe`: `height: 280px; width: 100%;`
- CTA button stretches comfortably with touch target >= 44x44px.
