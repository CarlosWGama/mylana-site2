<!--
Sync Impact Report:
- Version change: Unfilled Template -> 1.0.0
- Modified principles: N/A (Initial ratification)
- Added sections: 
  - Core Principles:
    - I. Patient-Centric Simplicity & Accessibility
    - II. Pure Vanilla Architecture
    - III. Strict Single-Page Directory & Asset Structure
    - IV. Brand Color Palette & Responsive Visual Consistency
    - V. Performance First & Non-Blocking Execution
    - VI. SEO & Discoverability Excellence
  - Technical & Design Constraints
  - Quality & Performance Standards
  - Governance
- Removed sections: Template placeholder text
- Follow-up TODOs: None
-->

# Mylana Gama Neurologia Constitution

## Core Principles

### I. Patient-Centric Simplicity & Accessibility
The landing page MUST prioritize a clear, welcoming, and intuitive experience tailored for patients seeking neurological care. Medical concepts and information MUST be presented in simple, accessible Portuguese, avoiding complex clinical jargon while maintaining professional authority. The site MUST provide clear user paths for learning about Dr. Mylana Gama, understanding services, and scheduling consultations.

### II. Pure Vanilla Architecture
The website MUST be constructed strictly using native web standards: HTML5, CSS3, and ES6+ Vanilla JavaScript. External frameworks, heavy UI libraries, or build-step dependencies MUST NOT be used unless explicitly approved through a constitutional amendment.

### III. Strict Single-Page Directory & Asset Structure
The project MUST follow a single-page landing layout centered on `index.html` at the root directory. All project assets MUST be organized strictly into the standard subdirectory structure:
```text
index.html
/assets
  /css/
  /js/
  /img/
```

### IV. Brand Color Palette & Responsive Visual Consistency
The visual design MUST adhere strictly to the established brand color palette, using `#ffffff` (pure white) as the primary base/background and `#305359` (deep teal / medical cyan) as the primary accent and brand tone. The design MUST be responsive-first, guaranteeing optimal presentation on desktop screens while maintaining complete usability and elegance on mobile and tablet viewports.

### V. Performance First & Non-Blocking Execution
Page load speed MUST be treated as a primary performance metric. All script executions MUST be placed at the end of the HTML body (`</body>`) or defer-loaded to prevent render-blocking. Images and visual assets MUST be compressed and formatted for minimal payload.

### VI. SEO & Discoverability Excellence
The site MUST be structured with search engine optimization (SEO) best practices to ensure high search visibility on Google for neurology and medical scheduling queries. Markup MUST employ semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), descriptive meta tags, Open Graph tags, and structured accessibility attributes (`alt`, ARIA labels).

## Technical & Design Constraints

1. **Tech Stack**: Vanilla HTML5, Vanilla CSS3, Vanilla JavaScript (ES6+).
2. **File Organization**:
   - `index.html` (Single-page document)
   - `assets/css/` (Modular or main stylesheet)
   - `assets/js/` (Deferred/end-of-body scripts)
   - `assets/img/` (Optimized images and graphical assets)
3. **Color Palette**:
   - `#ffffff` (White - Backgrounds & clean contrast)
   - `#305359` (Teal - Primary brand color, headers, CTAs, accents)
4. **Target Viewports**: Responsive layout supporting desktop, tablet, and mobile browsers.

## Quality & Performance Standards

1. **Accessibility & Usability**: Clean typography, high color contrast ratios, clear call-to-action (CTA) buttons for booking consultations.
2. **Performance**: Fast Time-To-Interactive (TTI) and low Largest Contentful Paint (LCP) by strictly deferring non-critical scripts and optimizing visual assets.
3. **SEO Readiness**: Semantic structure, structured data metadata, complete meta descriptions, and localized keywords for medical search intent.

## Governance

- This constitution is the governing authority for the Dra. Mylana Gama landing page project.
- Any architectural, tech stack, or structural changes MUST be reflected through an explicit versioned amendment to this constitution.
- All code reviews and implementation tasks MUST verify compliance with these core principles.

**Version**: 1.0.0 | **Ratified**: 2026-09-07 | **Last Amended**: 2026-09-07
