# Research & Technical Decisions: Footer Grid, Contacts & Credits

**Feature**: `005-footer-contacts`  
**Date**: 2026-09-07  
**Status**: Completed

## 1. Footer Background & Contrast Styling

- **Decision**: Apply `background-color: #305359;` to the entire footer container, pairing it with pure white `#ffffff` and light teal `#e0edf0` typography.
- **Rationale**: Grounding the page with the brand's primary deep teal `#305359` provides visual closure and elegance, while maintaining a contrast ratio > 8.5:1 (WCAG AAA compliant).

## 2. 12-Column Grid Architecture & Responsive Behavior

- **Decision**: Implement a 12-column CSS Grid (or equivalent Flexbox ratio):
  - **Part 1 (4/12 or 33.33%)**: Doctor's portrait photo (`modelos/contato.jpg` copied to `assets/img/contato.jpg`).
    - Styled with rounded corners (`border-radius: 12px`), responsive sizing, and high-quality rendering.
    - **Mobile Rule**: In mobile viewports (`max-width: 768px`), this photo column MUST have `display: none;`, completely hiding the image as explicitly requested.
  - **Part 2 (8/12 or 66.67%)**: Contact and social media content:
    - Instagram profile link: `https://www.instagram.com/mylanagama.neuro/`
    - Email address: `mailto:mylanagama.neurologia@gmail.com`
    - Doctor's medical identification: "Dra. Mylana Gama - Médica Neurologista | CRM-AL 7100 | RQE 4871"
    - On mobile: Expands to full width (`100%`) with centered text and comfortable touch targets.
- **Rationale**: Clean visual hierarchy that keeps desktop rich and visually engaging, while keeping mobile lightweight and focused strictly on the contact links.

## 3. Centered Attribution & Credits

- **Decision**: Add a dedicated bottom bar below the grid with:
  ```html
  <div class="footer-bottom">
    <p class="footer-developer-credit">Desenvolvido por CarlosWGama</p>
  </div>
  ```
  Styled with centered text, subtle separator line (`border-top: 1px solid rgba(255, 255, 255, 0.15)`), and clean typography.
- **Rationale**: Exactly fulfills the user requirement for "Desenvolvido por CarlosWGama" below the grid.
