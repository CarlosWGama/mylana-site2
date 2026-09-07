# Quickstart & Verification Guide: Landing Page Hero Section

**Feature**: `001-landing-page-hero`  
**Date**: 2026-09-07  
**Status**: Ready for Validation

## 1. Prerequisites
- Standard web browser (Google Chrome, Firefox, Safari, or Microsoft Edge).
- Web server environment (Apache / XAMPP on `http://localhost/mylana` or direct file access `file:///C:/xampp/htdocs/mylana/index.html`).

## 2. Verification Scenarios

### Scenario 1: Desktop Layout & Visual Hierarchy
1. Open the website in a desktop browser at full screen (1280px+ width).
2. **Verify Hero Section**:
   - The hero section has the rich `#305359` background color.
   - Dr. Mylana's photo (`assets/img/capa.jpg`) is prominently displayed on one side.
   - Dr. Mylana's logo (`assets/img/logo.png`) is crisp and clearly visible on a white/light surface without visual clash.
3. **Verify Narrative Text**:
   - The bio is structured as continuous flowing paragraphs.
   - Confirm zero bullet points (`<ul>`, `<li>`) are used.
   - Confirm all credentials: UNCISAL, UPE/HUOC Recife, SAN, Hospital Metropolitano, Santa Casa de Maceió, CRM-AL 7100, RQE 4871.

### Scenario 2: Mobile Responsive Stacking & Order
1. Open Developer Tools (`F12` in Chrome/Edge).
2. Toggle Device Emulation to Mobile View (e.g. iPhone 12/14/15 or 375px/390px/412px width).
3. Scroll through the Hero section and check the vertical sequence:
   - **Position 1 (Top)**: Doctor's portrait photo (`capa.jpg`).
   - **Position 2 (Middle)**: Narrative description with title, credentials, and continuous bio text.
   - **Position 3 (Bottom)**: Logo (`logo.png`).
4. **Verify**: No horizontal scrollbar exists on the page.

### Scenario 3: Performance & Typography Self-Hosting
1. In Developer Tools, switch to the **Network** tab.
2. Hard reload the page (`Ctrl + Shift + R`).
3. Check the requests:
   - Fonts are loaded from `/assets/src/fonts/` locally (0 requests to external CDN domains).
   - Scripts are loaded without render blocking (bottom of body or defer).
   - All HTTP responses return `200 OK`.
