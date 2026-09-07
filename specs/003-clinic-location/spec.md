# Feature Specification: Nubi Clinic Address & Location Section

**Feature Branch**: `003-clinic-location`  
**Created**: 2026-09-07  
**Status**: Draft  
**Input**: User description: "Após a seção de atendimentos, crie uma seção com o endereço da Nubi Clinic, que fica em Rua Prefeito Abdon Arroxelas, 917 - Ponta Verde, Maceió - AL, 57035-380"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Find Clinic Address & Location Details (Priority: P1)

As a patient or accompanying family member with a scheduled appointment, I want to see the full, verified physical address of Nubi Clinic in Ponta Verde, so that I can easily locate the building and know exactly where my consultation will take place.

**Why this priority**: Knowing the physical location is essential for patients to arrive on time and avoid stress before their medical appointment.

**Independent Test**: Can be tested by navigating to the section immediately following the Attendance section and verifying that the complete address ("Rua Prefeito Abdon Arroxelas, 917 - Ponta Verde, Maceió - AL, CEP 57035-380") is legibly displayed.

**Acceptance Scenarios**:

1. **Given** a patient scrolls past the Attendance section, **When** the clinic address section comes into view, **Then** the street name, building number, neighborhood (Ponta Verde), city (Maceió - AL), and CEP (57035-380) are clearly presented.
2. **Given** a patient reviews the address, **When** checking for reference points, **Then** the section highlights the prime location in Ponta Verde with clean typography.

---

### User Story 2 - One-Click GPS Navigation ("Como Chegar") (Priority: P1)

As a mobile or desktop user, I want a direct "Como Chegar" button that opens Google Maps or Waze directly to the clinic address, so that I can start GPS navigation in one tap without copying and pasting text.

**Why this priority**: One-click navigation minimizes friction on mobile devices and prevents patients from typing incorrect addresses into their navigation apps.

**Independent Test**: Can be tested by clicking the "Abrir no Google Maps" / "Como Chegar" button and verifying that it launches Google Maps with the exact address pre-filled as the destination.

**Acceptance Scenarios**:

1. **Given** a patient taps the "Como Chegar" button, **When** the link is clicked, **Then** it opens the Google Maps destination URL for `Rua Prefeito Abdon Arroxelas, 917, Ponta Verde, Maceió - AL` in a new browser tab or mobile maps application.

---

### User Story 3 - Visual Map Integration & Responsive Orientation (Priority: P2)

As a visitor scanning the page, I want to see an interactive or responsive map frame alongside key facility convenience details (accessibility, local parking guidance), so that I can visualize the route and surrounding area.

**Why this priority**: Visual maps dramatically improve spatial comprehension for patients coming from different neighborhoods or other cities in Alagoas.

**Independent Test**: Can be tested across desktop and mobile viewports, verifying that the map and address details render side-by-side on desktop and stack cleanly on mobile with no layout overflow.

**Acceptance Scenarios**:

1. **Given** a patient is on a desktop computer, **When** viewing the section, **Then** address details and the map appear in a balanced two-column layout.
2. **Given** a patient is on a mobile smartphone, **When** viewing the section, **Then** the address block and map stack vertically, ensuring touch-friendly buttons and comfortable reading.

---

### Edge Cases

- What happens if the embedded map takes longer to load on a slow connection? The textual address and direct GPS button must render immediately so the patient is never blocked.
- What happens if the patient prefers Waze or Apple Maps? The Google Maps link serves as the standard web destination, and the textual address can be copied with one tap.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The Address section MUST be positioned immediately after the Attendance section (`#atendimento`) in `index.html`.
- **FR-002**: The section MUST display the complete official address of Nubi Clinic:
  - Street & Number: `Rua Prefeito Abdon Arroxelas, 917`
  - Neighborhood: `Ponta Verde`
  - City / State: `Maceió - AL`
  - Postal Code (CEP): `57035-380`
- **FR-003**: The section MUST feature a prominent Call-to-Action button titled "Como Chegar" or "Abrir no Google Maps" linking to Google Maps navigation (`https://maps.google.com/?q=...`).
- **FR-004**: The section MUST include a responsive map display (embedded map or interactive route card) centered on the clinic location in Ponta Verde.
- **FR-005**: Visual styling MUST follow the constitution's color palette:
  - Soft light background (`#ffffff` / `#f4f6f8`) maintaining section contrast.
  - `#305359` for headings, location pins, icon accents, and primary action buttons.
- **FR-006**: The layout MUST use CSS Flexbox to provide a two-column desktop arrangement and a single-column stacked mobile layout.

### Key Entities

- **ClinicLocation**:
  - `clinicName`: "Nubi Clinic"
  - `street`: "Rua Prefeito Abdon Arroxelas"
  - `number`: "917"
  - `neighborhood`: "Ponta Verde"
  - `city`: "Maceió"
  - `state`: "AL"
  - `cep`: "57035-380"
  - `mapsUrl`: Pre-encoded Google Maps navigation link
  - `consultationNotice`: "Atendimento às Terças-feiras (08h às 12h) mediante agendamento prévio"

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of address elements (Street, Number, Neighborhood, City, State, CEP) are present and verified in the section.
- **SC-002**: Tapping the "Como Chegar" button initiates navigation in under 1 second.
- **SC-003**: 0 horizontal scrolling on mobile viewports down to 360px width.
- **SC-004**: Text address and navigation button are fully readable even if third-party map iframe loading is slow.

## Assumptions

- Google Maps embed iframe or standard navigation URL will be used with lazy-loading (`loading="lazy"`) to preserve page speed and avoid blocking initial render.
- The address is in Ponta Verde, a well-known neighborhood in Maceió with easy landmark orientation.
