# Research & Technical Decisions: Landing Page Hero Section

**Feature**: `001-landing-page-hero`  
**Date**: 2026-09-07  
**Status**: Completed

## 1. Background Colors & Hero Highlighting

- **Decision**: Use a light page base (`#ffffff` and soft neutral `#f4f6f8` / `#b3b3b3` accents) for the general canvas, and apply `#305359` (deep teal) as the prominent background for the main Hero section.
- **Rationale**: The deep teal `#305359` provides an authoritative, calming, and distinguished visual presence that immediately engages prospective patients. White and light neutrals for the body and cards create clean breathing room and ensure high readability.
- **Alternatives Considered**:
  - *Full page dark theme*: Rejected because medical and neurological clinic sites require bright, clean, welcoming, and high-trust environments for patients.
  - *Monochrome white-only*: Rejected because it lacks the visual prominence requested for the Hero section.

## 2. Logo Contrast & Placement

- **Decision**: Integrate the logo (`modelos/logo.png`, which is `#32555b` with a transparent background) within a light-background header/badge or high-contrast card (`#ffffff`), avoiding direct overlay on the `#305359` hero background where it would suffer from tone-on-tone illegibility.
- **Rationale**: `#32555b` and `#305359` are very close in hue and luminosity. Placing a `#32555b` logo directly over `#305359` causes contrast ratio failure (< 1.2:1). Placing it in a dedicated white topbar, header container, or subtle pill/card component guarantees crisp legibility and WCAG compliance while honoring the user's requirement for reduced size and subtle presence.
- **Alternatives Considered**:
  - *Inverting logo colors with CSS filters*: Rejected because modifying the doctor's original brand identity colors can distort brand fidelity.
  - *Placing logo directly on `#305359` background*: Rejected due to severe contrast conflict.

## 3. Typography & Self-Hosted Fonts

- **Decision**: Adopt a modern, humanist sans-serif font family (**Montserrat** / **Inter**) self-hosted in `/assets/src/fonts/` with system fallbacks (`system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`).
- **Rationale**: Self-hosting fonts in `/assets/src/fonts/` eliminates third-party DNS lookups, avoids external render-blocking round trips (e.g. Google Fonts CDN latency), improves privacy, and ensures offline availability in local environments. System fallbacks ensure immediate first-paint rendering (`font-display: swap`).
- **Alternatives Considered**:
  - *External CDN (Google Fonts)*: Rejected to adhere to self-hosting requirement and speed maximization.
  - *Standard non-custom generic fonts*: Considered as fallbacks, but a clean modern sans-serif provides superior clinical credibility.

## 4. Layout Architecture with Flexbox & Mobile Reordering

- **Decision**: Build the Hero section using CSS Flexbox.
  - On **Desktop** (`min-width: 769px`): Use a two-column or multi-column flex container (`display: flex; flex-direction: row; align-items: center; justify-content: space-between;`) with the doctor's portrait highlighted, balanced by the narrative presentation.
  - On **Mobile** (`max-width: 768px`): Set `flex-direction: column` and apply CSS `order` or structural DOM order to enforce the exact requested sequence:
    1. **Doctor Portrait Photo** (`order: 1`)
    2. **Continuous Narrative Bio Description** (`order: 2`)
    3. **Doctor Logo** (`order: 3`)
- **Rationale**: Flexbox provides robust, lightweight, framework-free responsive alignment with zero JavaScript overhead. CSS `order` cleanly satisfies the mobile stacking requirement without duplicating HTML markup.
- **Alternatives Considered**:
  - *CSS Grid*: Flexbox is simpler, lighter, and more naturally suited for single-axis responsive stacking and ordering.
  - *JavaScript-based DOM repositioning*: Strictly rejected per Constitution Principle V (non-blocking, vanilla, performance-first).

## 5. Narrative Presentation Construction

- **Decision**: Structure the doctor's introduction as smooth, humanized continuous prose:
  - *Paragraph 1*: Welcome and clinical mission, emphasizing graduation from Universidade Estadual de Ciências da Saúde de Alagoas (UNCISAL) and specialization in Neurology through the medical residency at Universidade de Pernambuco / Hospital Universitário Oswaldo Cruz (UPE / HUOC) in Recife.
  - *Paragraph 2*: Active medical practice, highlighting her role as Neurologist at Hospital Metropolitano de Alagoas and Santa Casa de Misericórdia de Maceió, as well as her effective membership in Sociedade Alagoana de Neurologia (SAN), concluding with formal credentials (CRM-AL 7100 | RQE 4871).
- **Rationale**: Fulfills 100% of user data points in an empathetic, patient-friendly narrative without bullet points.
