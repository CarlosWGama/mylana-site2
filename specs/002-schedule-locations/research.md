# Research & Technical Decisions: Attendance Cards Section

**Feature**: `002-schedule-locations`  
**Date**: 2026-09-07  
**Status**: Completed

## 1. Two-Card Layout Architecture with Flexbox

- **Decision**: Implement a two-card Flexbox container placed directly inside the attendance section container:
  - **Desktop (`min-width: 769px`)**: `display: flex; flex-direction: row; gap: 2rem; align-items: stretch; justify-content: center;`. Both cards take equal width (`flex: 1; max-width: 540px;`).
  - **Mobile (`max-width: 768px`)**: `flex-direction: column; gap: 1.5rem; width: 100%;`. Cards stack vertically in order: Card 1 (Nubi Clinic) followed by Card 2 (Outros locais).
- **Rationale**: Flexbox is lightweight, responsive, requires zero external frameworks, and guarantees equal height cards on desktop (`align-items: stretch`).
- **Alternatives Considered**:
  - *CSS Grid 2-column*: Viable, but Flexbox offers simpler vertical stretching and straightforward mobile fallback with identical CSS tokens.

## 2. Card 1 Specification: Nubi Clinic

- **Decision**: Card 1 represents the primary outpatient clinic:
  - **Title**: `Atendimento na Clínica <br/>Nubi Clinic` (formatted with a line break as requested, styled with `#305359` and bold clinical typography).
  - **Operating Schedule**: Clear highlighted badge and paragraph: "Atendimento realizado mediante agendamento prévio todas as **Terças-feiras, das 08h às 12h**."
  - **Direct CTA**: "Agendar na Nubi Clinic" pointing to WhatsApp/Phone with pre-filled message.
- **Rationale**: Elevates the private clinic day and hours as a primary consultation channel for patients wanting scheduled outpatient visits.

## 3. Card 2 Specification: Outros Locais de Atendimento

- **Decision**: Card 2 groups complementary practice locations:
  - **Title**: `Outros locais de atendimento`.
  - **Locations List**:
    1. **Atendimento Online / Domiciliar** (Mediante Agendamento) — Telemedicina e consultas domiciliares em Maceió.
    2. **Hospital Metropolitano de Alagoas** (Maceió) — Atendimento ambulatorial e hospitalar especializado.
    3. **Santa Casa de Misericórdia de Maceió** — Corpo clínico neurológico e assistência de referência.
  - **Direct CTA**: "Consultar Disponibilidade" / "Mais Informações".
- **Rationale**: Clear grouping prevents cognitive clutter while reassuring patients about the doctor's comprehensive hospital and home-visit coverage.

## 4. Visual Styling & Color Tokens

- **Decision**: 
  - Section Canvas: Light background `#f4f6f8` / `#ffffff` providing clean visual contrast with the preceding dark `#305359` hero section.
  - Cards: Pure white `#ffffff` surface, subtle 1px border (`#e2e8f0`), soft box-shadow (`0 10px 25px -5px rgba(48, 83, 89, 0.08)`), rounded corners (`border-radius: 16px`), and `#305359` accents for titles, bullet markers, and primary buttons.
- **Rationale**: Preserves the project constitution's color palette (`#ffffff` and `#305359`), provides high contrast, and ensures a clean, welcoming healthcare feel.
