# Quickstart & Verification Guide: Nubi Clinic Address & Map

**Feature**: `003-clinic-location`  
**Date**: 2026-09-07  
**Status**: Ready for Validation

## 1. Verification Scenarios

### Scenario 1: Desktop Viewport Layout & Headings
1. Open `index.html` in a desktop browser.
2. Scroll to `#endereco` (directly following `#atendimento`).
3. **Verify Headings & Text**:
   - Prominent Title (h1): "Endereço da clinica".
   - Subtitle (h2): "Nubi Clinic" with less visual prominence.
   - Address description (p): "Rua Prefeito Abdon Arroxelas, 917 - Ponta Verde, Maceió - AL, 57035-380".
4. **Verify Google Maps Iframe**:
   - Iframe loads smoothly centered on coordinates `latitude: -9.6560216, longitude: -35.7097091`.
   - Layout is side-by-side with the address info on the left and map on the right.

### Scenario 2: Mobile Stacking & Touch Interaction
1. Toggle mobile view (`Ctrl + Shift + M` / 375px or 390px).
2. Scroll to the address section.
3. **Verify Stacking**:
   - Headings and address text appear at the top.
   - Google Maps iframe renders cleanly below with no horizontal scroll.
   - "Traçar Rota no Google Maps" button is comfortable to tap (minimum 44px height).

### Scenario 3: Performance & Lazy Loading
1. In Developer Tools Network tab, reload page.
2. Confirm that `loading="lazy"` is present on the iframe.
