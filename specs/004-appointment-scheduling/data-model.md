# Data Model: Informative Scheduling Channels

**Feature**: `004-appointment-scheduling`  
**Date**: 2026-09-07  
**Status**: Completed

## 1. Entities Overview

### Entity: ContactBookingChannel

| Field | Type | Channel 1 (Nubi Clinic) | Channel 2 (Doctoralia) |
|---|---|---|---|
| `channelKey` | string | "nubi-whatsapp" | "doctoralia" |
| `priority` | boolean | `true` (Prioritário) | `false` |
| `title` | string | "WhatsApp da Nubi Clinic" | "Doctoralia" |
| `subtitle` | string | "Presencial, Domiciliar e Online" | "Agendamento Direto na Clínica" |
| `description` | string | "Fale diretamente com nossa equipe de atendimento para escolher o melhor horário para consulta na clínica, em domicílio ou por telemedicina." | "Solicite seu agendamento no perfil profissional da Dra. Mylana Gama no portal Doctoralia." |
| `phoneDisplay` | string | "(82) 9 9399-9600" | N/A |
| `phoneTelUrl` | string | "tel:+5582993999600" | N/A |
| `primaryActionUrl` | string | "https://wa.me/558293999600" | "https://www.doctoralia.com.br/mylana-dandara-pereira-gama/neurologista/maceio" |
| `primaryActionLabel` | string | "Conversar pelo WhatsApp" | "Agendar no Doctoralia" |
| `notice` | string | "Atendimento ágil em horário comercial" | "Disponível conforme vagas abertas na semana" |

### Entity: SectionStyleTokens

| Token | Value | Purpose |
|---|---|---|
| `--booking-bg` | `#f4f6f8` / `#ffffff` | Background canvas |
| `--card-border-priority` | `2px solid #305359` | Highlight for primary WhatsApp card |
| `--btn-whatsapp` | `#25d366` / `#305359` | High-contrast WhatsApp button |
| `--badge-priority-bg` | `#305359` | "Canal Prioritário" badge |
| `--badge-priority-text` | `#ffffff` | Contrast badge text |
