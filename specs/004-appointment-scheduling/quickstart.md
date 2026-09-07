# Quickstart & Verification Guide: Informative Scheduling Channels

**Feature**: `004-appointment-scheduling`  
**Date**: 2026-09-07  
**Status**: Ready for Validation

## 1. Verification Scenarios

### Scenario 1: Desktop Viewport Layout & Channel Verification
1. Open `index.html` in a desktop browser.
2. Scroll to `#agendamento` (directly following `#endereco`).
3. **Verify Channel 1 (Nubi Clinic)**:
   - "Canal Prioritário" badge is visible.
   - Title displays: "WhatsApp da Nubi Clinic".
   - Explains support for in-clinic, home, or online consultations.
   - Phone displayed: "(82) 9 9399-9600" (clickable `tel:`).
   - "Agendar pelo WhatsApp" button targets `https://wa.me/558293999600`.
4. **Verify Channel 2 (Doctoralia)**:
   - Title displays: "Doctoralia".
   - Notice displayed: "A opção pelo Doctoralia é exibida conforme houver disponibilidade de vagas na agenda da semana."
   - "Acessar Perfil no Doctoralia" button targets `https://www.doctoralia.com.br/mylana-dandara-pereira-gama/neurologista/maceio`.

### Scenario 2: Mobile Stacking & Touch Interaction
1. Toggle mobile view (`375px` or `390px`).
2. Verify Channel 1 (Nubi Clinic WhatsApp) appears at the top.
3. Verify Channel 2 (Doctoralia) appears below.
4. Verify both CTA buttons have comfortable height (>= 44px).
