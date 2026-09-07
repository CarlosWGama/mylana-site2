# Quickstart & Verification Guide: Attendance Cards Section

**Feature**: `002-schedule-locations`  
**Date**: 2026-09-07  
**Status**: Ready for Validation

## 1. Prerequisites
- Modern browser (Chrome, Edge, Firefox, Safari).
- Web page loaded via `index.html`.

## 2. Verification Scenarios

### Scenario 1: Desktop Dual-Card Side-by-Side Verification
1. Open `index.html` in a desktop window (>1024px width).
2. Scroll to the section immediately following the `#hero` section.
3. **Verify Card 1 (Left)**:
   - Heading text displays: "Atendimento na Clínica <br/>Nubi Clinic".
   - Details clearly show: "via agendamento", "Terça-feira", "08h às 12h".
4. **Verify Card 2 (Right)**:
   - Heading text displays: "Outros locais de atendimento".
   - List includes:
     - Atendimento Online/Domiciliar (Agendamento)
     - Metropolitano (Maceió)
     - Santa Casa de Misericórdia de Maceió
5. **Verify Alignment**: Both cards have equal height and sit side-by-side with a clean gap.

### Scenario 2: Mobile Stacking Verification
1. Open Developer Tools (`F12`) and toggle mobile view (375px / 390px).
2. Scroll to the attendance section.
3. **Verify Stacking**:
   - Card 1 (Nubi Clinic) appears first.
   - Card 2 (Outros locais) appears directly below Card 1.
   - No horizontal scroll occurs.
   - Action buttons are easily tappable (touch target >= 44px).
