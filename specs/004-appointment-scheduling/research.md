# Research & Technical Decisions: Informative Scheduling Section

**Feature**: `004-appointment-scheduling`  
**Date**: 2026-09-07  
**Status**: Completed

## 1. Channel 1: Nubi Clinic (Priority Booking)

- **Decision**: Elevate Nubi Clinic as the primary, recommended channel:
  - **Badge**: "Canal Prioritário / Atendimento Personalizado"
  - **Phone Display**: `(82) 9 9399-9600` (formatted with `tel:+5582993999600` for click-to-call)
  - **WhatsApp Link**: `https://wa.me/558293999600?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mylana%20Gama.`
  - **Scope**: Explicitly state that the team assists in scheduling:
    - Atendimento presencial na clínica (Nubi Clinic)
    - Atendimento domiciliar em Maceió
    - Atendimento online (Telemedicina)
- **Rationale**: Immediate WhatsApp conversation provides the most patient-friendly assistance, especially for patients with specific scheduling needs or elderly family members.

## 2. Channel 2: Doctoralia (Self-Service Profile)

- **Decision**: Provide direct access to Dr. Mylana Gama's verified Doctoralia profile:
  - **URL**: `https://www.doctoralia.com.br/mylana-dandara-pereira-gama/neurologista/maceio`
  - **Availability Note**: Inform patients that online booking via Doctoralia applies to clinic appointments and depends on weekly slot availability.
  - **Fallback Advisory**: If slots are unavailable on Doctoralia for the current week, guide the patient to tap the WhatsApp channel.
- **Rationale**: Empowers patients already familiar with Doctoralia while setting clear expectations regarding weekly slot availability.

## 3. Visual Layout Architecture with Flexbox

- **Decision**:
  - **Desktop (`min-width: 769px`)**: Two cards displayed side-by-side (`display: flex; flex-direction: row; gap: 2rem; justify-content: center; align-items: stretch;`). The Nubi Clinic card is given visual priority with a "Recomendado" badge and `#305359` accent styling.
  - **Mobile (`max-width: 768px`)**: Stacked vertically (`flex-direction: column; gap: 1.5rem;`), placing the Priority Nubi Clinic WhatsApp card on top, followed by the Doctoralia card.
- **Rationale**: Directs the majority of mobile users immediately to the fastest, most supportive channel (WhatsApp) while keeping Doctoralia easily accessible.
