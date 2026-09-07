# Research & Technical Decisions: Nubi Clinic Address & Map Section

**Feature**: `003-clinic-location`  
**Date**: 2026-09-07  
**Status**: Completed

## 1. Heading Hierarchy & Text Layout

- **Decision**: Structure the section header with the exact requested elements:
  - **Section Title (h1)**: "Endereço da clinica" (styled with prominence, deep teal `#305359`, bold font weight).
  - **Subtitle (h2)**: "Nubi Clinic" (rendered with lower visual weight, subtle badge/secondary tone).
  - **Address Paragraph (p)**: "Rua Prefeito Abdon Arroxelas, 917 - Ponta Verde, Maceió - AL, 57035-380" (large, legible typography with a location icon pin).
- **Rationale**: Respects the user's explicit typography choices while maintaining clean visual contrast and accessibility.

## 2. Google Maps Iframe Integration & Performance

- **Decision**: Integrate Google Maps via standard embed iframe using the exact geographic coordinates (lat: `-9.6560216`, lon: `-35.7097091`):
  ```html
  <iframe
    src="https://maps.google.com/maps?q=-9.6560216,-35.7097091&hl=pt-BR&z=17&output=embed"
    width="100%"
    height="380"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    title="Localização da Nubi Clinic no Google Maps">
  </iframe>
  ```
- **Rationale**:
  - `output=embed` provides a clean embed without requiring an API key.
  - `loading="lazy"` prevents the iframe from downloading during initial page load, strictly adhering to Constitution Principle V (performance-first, non-blocking page load).
  - `title` attribute satisfies WCAG accessibility standards.
- **Alternatives Considered**:
  - *Google Maps JavaScript API*: Rejected due to unnecessary API key dependencies, cost, and heavy client-side script overhead.
  - *Static image map*: Rejected because the user specifically requested an iframe with coordinates.

## 3. Responsive Flexbox Layout

- **Decision**:
  - **Desktop (`min-width: 769px`)**: Side-by-side flex container (`display: flex; flex-direction: row; gap: 2.5rem; align-items: center;`). The address content occupies 45% width, and the map container occupies 55% width.
  - **Mobile (`max-width: 768px`)**: Single-column vertical layout (`flex-direction: column; gap: 1.5rem;`). Address content appears first, followed immediately by the full-width responsive map.
- **Rationale**: Provides immediate address legibility on mobile, followed by the map for visual driving/walking reference.
