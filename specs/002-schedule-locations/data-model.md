# Data Model: Attendance Cards Section

**Feature**: `002-schedule-locations`  
**Date**: 2026-09-07  
**Status**: Completed

## 1. Entities Overview

### Entity: AttendanceCard
Represents an individual attendance modality or location card displayed in the section.

| Field | Type | Required | Description | Example (Card 1) | Example (Card 2) |
|---|---|---|---|---|---|
| `id` | string | Yes | Unique card identifier | "card-nubi-clinic" | "card-outros-locais" |
| `title` | string | Yes | Main card heading with HTML support | "Atendimento na Clínica <br/>Nubi Clinic" | "Outros locais de atendimento" |
| `subtitle` | string | Optional | Contextual tag or category | "Consultório Particular" | "Rede Hospitalar & Domiciliar" |
| `scheduleText` | string | Optional | Specific day and hours | "Terças-feiras, das 08h às 12h" | "Conforme escala e agendamento prévio" |
| `bookingMode` | string | Yes | How appointments are scheduled | "Mediante agendamento prévio" | "Mediante agendamento" |
| `locationsList`| array[object]| Optional| Sub-locations if grouped | `[]` | `[{ name: "Atendimento Online/Domiciliar", note: "(Agendamento)" }, { name: "Metropolitano (Maceió)" }, { name: "Santa Casa de Misericórdia de Maceió" }]` |
| `ctaButton` | object | Yes | Action link for patient contact | `{ text: "Agendar na Nubi Clinic", href: "https://wa.me/..." }` | `{ text: "Consultar Agendamento", href: "https://wa.me/..." }` |

### Entity: SectionLayoutToken
Layout and styling tokens for the attendance section:

| Token | Value | Purpose |
|---|---|---|
| `--attendance-bg` | `#f4f6f8` | Soft light background distinguishing section from hero |
| `--card-bg` | `#ffffff` | Crisp white card surface |
| `--card-border` | `#e2e8f0` | Light subtle border |
| `--card-radius` | `16px` | Smooth modern corner rounding |
| `--card-shadow` | `0 10px 25px -5px rgba(48, 83, 89, 0.08)` | Elegant elevation |
| `--primary-accent`| `#305359` | Titles, buttons, icons |
