# Data Model: Nubi Clinic Address & Map Section

**Feature**: `003-clinic-location`  
**Date**: 2026-09-07  
**Status**: Completed

## 1. Entities Overview

### Entity: ClinicAddressDetails
Represents the physical location, coordinates, and navigation endpoints of Nubi Clinic.

| Field | Type | Value / Description |
|---|---|---|
| `sectionTitle` | string | "Endereço da clinica" (h1) |
| `sectionSubtitle` | string | "Nubi Clinic" (h2) |
| `street` | string | "Rua Prefeito Abdon Arroxelas, 917" |
| `neighborhood` | string | "Ponta Verde" |
| `city` | string | "Maceió" |
| `state` | string | "AL" |
| `cep` | string | "57035-380" |
| `latitude` | number | `-9.6560216` |
| `longitude` | number | `-35.7097091` |
| `iframeSrc` | string | `"https://maps.google.com/maps?q=-9.6560216,-35.7097091&hl=pt-BR&z=17&output=embed"` |
| `directRouteUrl` | string | `"https://www.google.com/maps/dir/?api=1&destination=-9.6560216,-35.7097091"` |

### Entity: AddressDesignTokens
Defines layout and card appearance tokens:

| Token | Value | Purpose |
|---|---|---|
| `--address-bg` | `#ffffff` / `#f9fafb` | Section background |
| `--map-radius` | `16px` | Iframe corner rounding |
| `--map-shadow` | `0 12px 30px -8px rgba(48, 83, 89, 0.12)` | Map elevation |
| `--pin-color` | `#305359` | Location pin and heading color |
