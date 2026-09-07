# Quickstart & Verification Guide: Footer Grid, Contacts & Credits

**Feature**: `005-footer-contacts`  
**Date**: 2026-09-07  
**Status**: Ready for Validation

## 1. Verification Scenarios

### Scenario 1: Desktop Viewport Layout (12-Column Grid)
1. Open `index.html` in a desktop browser (>1024px width).
2. Scroll to the footer at the very bottom of the page.
3. **Verify Background**:
   - The footer background color is `#305359`.
4. **Verify Grid Layout**:
   - **Part 1 (4/12 width)**: Doctor's photo (`contato.jpg`) renders on the left with rounded corners and high quality.
   - **Part 2 (8/12 width)**: Contacts block renders on the right containing Instagram link (`https://www.instagram.com/mylanagama.neuro/`) and email link (`mylanagama.neurologia@gmail.com`).
5. **Verify Credits**:
   - Below the grid, centered text displays: "Desenvolvido por CarlosWGama".

### Scenario 2: Mobile Viewport Layout (Photo Hidden)
1. Toggle mobile view (`375px` or `390px`).
2. Scroll to the footer.
3. **Verify Photo Hidden**:
   - The doctor's photo (`contato.jpg`) is completely hidden (`display: none`).
4. **Verify Contacts & Centered Text**:
   - Contacts and Instagram links expand to full width and display centered.
   - "Desenvolvido por CarlosWGama" displays centered at the bottom.
