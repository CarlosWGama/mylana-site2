# Feature Specification: Attendance Locations, Days & Hours Section

**Feature Branch**: `002-schedule-locations`  
**Created**: 2026-09-07  
**Status**: Draft  
**Input**: User description: "Após o hero section crie uma section voltada para o atendimento. Nessa seção deve ser apresentando o dia, locais e horários de atendimento."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover Attendance Locations, Days & Hours (Priority: P1)

As a patient or family member seeking neurological care, I want to clearly see the days of the week, locations, and time slots where Dr. Mylana Gama provides consultations, so that I can select the facility that best fits my schedule and geographic convenience in Maceió and surrounding regions.

**Why this priority**: Discovering where and when a doctor sees patients is the central decision-making step for converting a website visitor into an actual booked appointment.

**Independent Test**: Can be tested by loading the page, scrolling past the Hero section, and verifying that each attendance location is clearly presented with its name, address/area, weekly days, and consultation hours.

**Acceptance Scenarios**:

1. **Given** a patient navigates past the Hero section, **When** viewing the "Locais e Horários de Atendimento" section, **Then** distinct facilities (including Santa Casa de Misericórdia de Maceió and Hospital Metropolitano de Alagoas) are displayed with days of the week, shifts/hours, and location guidance.
2. **Given** a patient reviews the schedules, **When** checking consultation times, **Then** the time ranges and days are written in plain, patient-friendly language (e.g., "Segunda-feira e Quarta-feira", "Tarde: 14h às 18h") without medical abbreviations or ambiguity.

---

### User Story 2 - Direct Booking Action per Location (Priority: P1)

As a prospective patient who found a suitable attendance location and time, I want a direct scheduling button or phone/WhatsApp link on that location's card, so that I can quickly schedule my appointment without getting lost or searching elsewhere.

**Why this priority**: Immediate call-to-action on each location card drastically reduces patient drop-off and friction during appointment booking.

**Independent Test**: Can be tested by verifying each card features a clear, clickable CTA button (e.g., "Agendar Consulta", WhatsApp/Telefone link) pointing to the booking contact or modal.

**Acceptance Scenarios**:

1. **Given** a patient chooses an attendance location card, **When** clicking the scheduling button, **Then** the action immediately initiates direct contact via WhatsApp/phone or navigates to the dedicated booking channel with location context.

---

### User Story 3 - Responsive Touch-Friendly Layout & Accessible Visual Design (Priority: P2)

As a mobile visitor, I want to browse the attendance cards stacked cleanly in a single column with large, readable fonts and comfortable touch targets, so that I can easily read addresses and tap scheduling buttons with one hand.

**Why this priority**: Most patient searches occur on mobile phones while on the go. Readable cards and accessible touch targets ensure effortless booking for all age groups.

**Independent Test**: Can be tested across mobile viewports (360px - 768px) and desktop viewports (1024px+), verifying responsive reflow from multi-column grid to vertical card stack with tap targets >= 44x44px.

**Acceptance Scenarios**:

1. **Given** a patient opens the site on a mobile device, **When** viewing the attendance section, **Then** the cards stack vertically without horizontal overflow or clipped text.
2. **Given** a patient views the section on desktop, **When** scanning the options, **Then** cards are aligned side-by-side in an aesthetic flex/grid row layout.
3. **Given** any screen resolution, **When** viewing text and buttons, **Then** high contrast between white cards and `#305359` accents meets accessibility standards.

---

### Edge Cases

- What happens if a patient wants an appointment on a day not listed? The section must provide a general contact note (e.g., "Para outros dias ou atendimentos domiciliares/especiais, entre em contato via WhatsApp").
- What happens if specific clinic room or floor numbers are needed? The address line on each card should include clear reference info (e.g., Centro Médico / Bloco / Bairro).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The Attendance Section MUST be positioned immediately after the Hero section in the page DOM hierarchy.
- **FR-002**: The section MUST feature a clear, empathetic section title and subtitle (e.g., "Atendimento e Consultas", "Encontre o local e horário mais conveniente para o seu cuidado neurológico").
- **FR-003**: The section MUST present structured information for Dr. Mylana Gama's consultation locations, specifically detailing:
  - Facility Name (e.g., Santa Casa de Misericórdia de Maceió, Hospital Metropolitano de Alagoas, Consultório Particular).
  - Address / Neighborhood reference in Maceió, AL.
  - Days of the week for consultations (e.g., Segundas, Quartas, Sextas).
  - Hours / Shifts (e.g., Manhã 08h às 12h, Tarde 14h às 18h).
- **FR-004**: Each location card MUST contain a dedicated Call-to-Action (CTA) link or button (e.g., "Agendar Consulta via WhatsApp" / Telefone).
- **FR-005**: The visual styling MUST follow the constitution's color palette:
  - Section background in clean light tones (`#ffffff` or soft neutral `#f4f6f8` / `#b3b3b3` tints).
  - Cards formatted with white backgrounds, subtle borders/shadows, and `#305359` for titles, icons, and buttons.
- **FR-006**: The layout MUST be built with CSS Flexbox / responsive grid, presenting cards side-by-side on desktop and in a neat vertical stack on mobile viewports.
- **FR-007**: All phone and WhatsApp links MUST be pre-formatted for direct click-to-chat (`https://wa.me/...`) and click-to-call (`tel:...`).

### Key Entities

- **AttendanceLocation**:
  - `facilityName`: Official name of the clinic or hospital.
  - `facilityType`: Type of care (e.g., Hospital, Ambulatório de Especialidades, Consultório Privado).
  - `address`: Street address, building name, and neighborhood.
  - `days`: Days of attendance (e.g., "Segundas e Quartas").
  - `hours`: Specific hours or shift (e.g., "14:00 - 18:00").
  - `bookingContact`: Direct phone number or WhatsApp URL with pre-filled message.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of listed locations include complete days, hours, address, and booking button.
- **SC-002**: Patients can locate attendance days and hours within 5 seconds of scrolling into the section.
- **SC-003**: 0 horizontal overflow or layout breakages on mobile screens down to 360px.
- **SC-004**: 100% of interactive booking buttons comply with WCAG touch target guidelines (minimum 44x44px).

## Assumptions

- Operating days and hours follow the hospital affiliations established in the hero section (Hospital Metropolitano de Alagoas and Santa Casa de Misericórdia de Maceió), plus private clinic care.
- WhatsApp scheduling will use standard international formatting (`+55 82 ...`) ready for the clinic's reception number.
- Light card background on soft neutral section background ensures high contrast and clarity.
