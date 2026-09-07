# Feature Specification: Site Footer, Social Contacts & Creator Credits

**Feature Branch**: `005-footer-contacts`  
**Created**: 2026-09-07  
**Status**: Draft  
**Input**: User description: "Crie um rodapé (footer) contendo outros contatos onde o usuário poderá acompanhar e falar com a doutora adicionando: instagram (https://www.instagram.com/mylanagama.neuro/), email (mylanagama.neurologia@gmail.com). Adicione também a informação que o site foi construído por CarlosWGama."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Follow on Instagram & Direct Email Contact (Priority: P1)

As a patient or interested visitor, I want to access Dr. Mylana Gama's official Instagram profile and professional email in the footer, so that I can follow her neurology educational content, learn more about brain health, or send direct inquiries.

**Why this priority**: Social media and email provide ongoing touchpoints for patient engagement, education, and professional communication beyond appointment booking.

**Independent Test**: Can be tested by scrolling to the page bottom, verifying that the Instagram link opens `@mylanagama.neuro` in a new tab, and verifying that clicking the email link triggers the default mail client for `mylanagama.neurologia@gmail.com`.

**Acceptance Scenarios**:

1. **Given** a visitor reaches the bottom of the page, **When** clicking the Instagram link, **Then** it navigates to `https://www.instagram.com/mylanagama.neuro/` in a secure new tab (`target="_blank" rel="noopener noreferrer"`).
2. **Given** a visitor clicks the email address, **When** activated, **Then** it opens a `mailto:mylanagama.neurologia@gmail.com` prompt.

---

### User Story 2 - Regulatory Identification & Developer Credit (Priority: P1)

As a website visitor, I want to see the doctor's verified medical registration numbers and developer attribution in the footer, so that the website demonstrates regulatory compliance and clear authorship.

**Why this priority**: Medical websites in Brazil must clearly state the doctor's CRM and RQE on every page to comply with CFM regulations, while developer attribution recognizes the technical author.

**Independent Test**: Can be tested by inspecting the footer text to confirm the presence of "CRM-AL 7100 | RQE 4871" and "Construído por CarlosWGama".

**Acceptance Scenarios**:

1. **Given** a visitor reads the footer credentials, **When** reviewing the text, **Then** "Dra. Mylana Gama - Médica Neurologista | CRM-AL 7100 | RQE 4871" is clearly legible.
2. **Given** a visitor checks website authorship, **When** reviewing the bottom credits bar, **Then** "Construído por CarlosWGama" is prominently and respectfully displayed.

---

### User Story 3 - Responsive Grounding Layout & Accessible Contrast (Priority: P2)

As a mobile or desktop user, I want the footer to provide a polished closing visual container with rich contrast and comfortable touch targets, so that links are easily tapped and readable on screens of all sizes.

**Why this priority**: A cohesive footer grounds the single-page layout, establishing an elegant visual end for the user journey.

**Independent Test**: Can be tested by resizing between desktop (1200px+) and mobile (375px), verifying balanced column reflow and zero layout shifts.

**Acceptance Scenarios**:

1. **Given** a user browses on a desktop, **When** reaching the footer, **Then** information is structured across balanced horizontal columns.
2. **Given** a user browses on a smartphone, **When** reaching the footer, **Then** contents stack vertically with touch targets >= 44x44px and text centered.

---

### Edge Cases

- What happens if the user's browser blocks popups? Instagram link utilizes standard `target="_blank"` with `rel="noopener noreferrer"` for universal browser compatibility.
- What happens if the device has no configured email client? The email text (`mylanagama.neurologia@gmail.com`) remains visible and easily selectable for copying.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The footer MUST be implemented using the semantic HTML5 `<footer>` element at the end of `index.html`.
- **FR-002**: The footer MUST provide an Instagram link with icon and label pointing to `https://www.instagram.com/mylanagama.neuro/` (`@mylanagama.neuro`).
- **FR-003**: The footer MUST provide a direct email link pointing to `mailto:mylanagama.neurologia@gmail.com` displaying `mylanagama.neurologia@gmail.com`.
- **FR-004**: The footer MUST include the developer attribution text: "Construído por CarlosWGama".
- **FR-005**: The footer MUST display Dr. Mylana Gama's medical identity and registration: "Dra. Mylana Gama - Médica Neurologista | CRM-AL 7100 | RQE 4871".
- **FR-006**: The footer visual styling MUST use `#305359` as the primary background color with `#ffffff` and soft light accents for high text contrast.
- **FR-007**: The layout MUST use CSS Flexbox, presenting multi-column alignment on desktop and a clean vertical stack on mobile.

### Key Entities

- **FooterContacts**:
  - `doctorName`: "Dra. Mylana Gama"
  - `specialty`: "Médica Neurologista"
  - `crmRqe`: "CRM-AL 7100 | RQE 4871"
  - `instagramUrl`: "https://www.instagram.com/mylanagama.neuro/"
  - `instagramHandle`: "@mylanagama.neuro"
  - `email`: "mylanagama.neurologia@gmail.com"
  - `developerAttribution`: "Construído por CarlosWGama"
  - `currentYear`: Current calendar year

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of required contact endpoints (Instagram, Email) and credits ("Construído por CarlosWGama") are verified and functional.
- **SC-002**: All footer links open without console errors or broken navigation.
- **SC-003**: 0 horizontal layout overflow across all mobile viewports down to 360px.
- **SC-004**: Contrast ratio between `#305359` background and `#ffffff` text exceeds WCAG AAA standard (>= 7:1).

## Assumptions

- CarlosWGama credit can optionally link to his professional profile or GitHub/portfolio if desired.
- The footer closes the single-page document directly above the closing `</body>` tag and deferred `<script>` references.
