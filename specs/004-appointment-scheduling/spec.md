# Feature Specification: Informational Appointment Scheduling Section

**Feature Branch**: `004-appointment-scheduling`  
**Created**: 2026-09-07  
**Status**: Draft  
**Input**: User description: "Após a seção de endereço crie uma seção de agendamento. A seção apenas irá informar o usuário a forma como ele pode agendar a consulta, não existe nada de implementação de agendamento! Para agendar uma consulta o cliente pode optar por: WhatsApp da Nubi Clinic (atendimento na clínica, domiciliar ou online com auxílio da equipe) ou Doctoralia (solicitar agendamento na clínica quando houver disponibilidade na semana)."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Schedule Consultation via Nubi Clinic WhatsApp (Priority: P1)

As a patient or family member seeking an in-person clinic visit, home consultation, or online appointment, I want to clearly understand how to contact the Nubi Clinic WhatsApp team and tap a direct button to start a conversation, so that the reception staff can promptly assist me in choosing the date and modality.

**Why this priority**: WhatsApp is the primary communication and booking channel in Brazil, offering humanized, immediate assistance for elderly patients and families.

**Independent Test**: Can be tested by navigating to the scheduling section, verifying that the WhatsApp option explains in-clinic, home, and online consultation support, and clicking the button to verify it launches WhatsApp with a pre-formatted greeting message.

**Acceptance Scenarios**:

1. **Given** a patient views the scheduling section, **When** reading the WhatsApp option, **Then** the text clearly explains that the Nubi Clinic team assists with in-clinic, home, and online appointments.
2. **Given** a patient clicks the WhatsApp button, **When** the link opens, **Then** it targets WhatsApp (`https://wa.me/...`) with a friendly pre-filled text (e.g., "Olá! Gostaria de informações sobre agendamento de consulta com a Dra. Mylana Gama.").

---

### User Story 2 - Schedule Consultation via Doctoralia (Priority: P1)

As a patient who prefers booking directly online through Doctoralia, I want to see the Doctoralia option with a clear notice of weekly availability, so that I can view available slots and request my clinic appointment when the agenda is open.

**Why this priority**: Doctoralia provides self-service appointment requests and social proof for patients accustomed to healthcare portals.

**Independent Test**: Can be tested by checking the Doctoralia card in the scheduling section, verifying that it indicates clinic availability, and confirming the CTA button links to Doctoralia.

**Acceptance Scenarios**:

1. **Given** a patient reviews booking options, **When** inspecting the Doctoralia card, **Then** it clearly states that Doctoralia is an option for in-clinic scheduling subject to weekly agenda availability.
2. **Given** a patient clicks the Doctoralia button, **When** following the link, **Then** it opens the external Doctoralia profile in a new browser tab with security attributes (`target="_blank" rel="noopener noreferrer"`).

---

### User Story 3 - Responsive Dual-Channel Informational Layout (Priority: P2)

As a mobile or desktop visitor, I want both scheduling channels presented side-by-side on desktop and stacked on mobile with clear visual distinction, so that I can compare channels and pick the best option effortlessly.

**Why this priority**: Responsive visual clarity ensures patients never feel overwhelmed or confused when trying to book healthcare care.

**Independent Test**: Can be tested across viewport widths (360px to 1200px+), verifying clean card symmetry on desktop and touch-friendly vertical stacking on mobile.

**Acceptance Scenarios**:

1. **Given** a patient browses on a desktop device, **When** scrolling into the scheduling section, **Then** the WhatsApp and Doctoralia channel cards align side-by-side with equal visual weight.
2. **Given** a patient browses on a mobile smartphone, **When** scrolling into the section, **Then** cards stack vertically with minimum 44x44px touch targets.

---

### Edge Cases

- What happens if the patient thinks this is an automated booking engine? The section header must explicitly guide: "Escolha o canal de sua preferência para falar com a equipe ou solicitar seu horário".
- What happens if Doctoralia has no open slots this week? The text on the Doctoralia card advises patients to contact WhatsApp directly for waiting list or urgent inquiries.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The Scheduling Guidance section MUST be positioned immediately after the Clinic Address section (`#endereco`) in `index.html`.
- **FR-002**: The section MUST be strictly informative, containing no complex booking calendar engines, authentication portals, or database forms.
- **FR-003**: The section MUST feature Channel 1: "WhatsApp da Nubi Clinic", explicitly stating that the clinic reception team provides complete guidance and scheduling for:
  - Atendimento presencial na clínica (Nubi Clinic).
  - Atendimento domiciliar em Maceió.
  - Atendimento online (Telemedicina).
- **FR-004**: Channel 1 MUST provide a direct click-to-chat WhatsApp CTA button with a friendly pre-formatted URL.
- **FR-005**: The section MUST feature Channel 2: "Doctoralia", stating that direct requests for clinic consultations can be made on Doctoralia, with a note that this option depends on weekly slot availability.
- **FR-006**: Channel 2 MUST provide a direct external link button to Doctoralia with `rel="noopener noreferrer"`.
- **FR-007**: The section MUST adhere to the brand color palette (`#ffffff` and `#305359`), using elevated cards, clean typography, and accessible contrast.
- **FR-008**: The layout MUST be built with CSS Flexbox, presenting side-by-side cards on desktop and stacked cards on mobile.

### Key Entities

- **SchedulingChannel**:
  - `channelId`: "whatsapp-nubi" | "doctoralia-online"
  - `title`: Channel name
  - `description`: Scope of service (in-clinic, home, online)
  - `availabilityNotice`: Weekly availability note
  - `actionUrl`: Direct external URL (`https://wa.me/...` or Doctoralia profile link)
  - `buttonText`: Action label

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% informational architecture (0 complex booking forms or backend logic).
- **SC-002**: Both channels (WhatsApp Nubi Clinic and Doctoralia) are clearly visible and distinct.
- **SC-003**: 100% of links open the correct channel with security attributes in under 1 second.
- **SC-004**: All touch targets on mobile devices comply with WCAG minimum (44x44px).

## Assumptions

- WhatsApp number placeholder uses standard international format (`+55 82 9...`) ready to be configured with the clinic's reception WhatsApp.
- Doctoralia link directs to Dr. Mylana Gama's professional profile.
