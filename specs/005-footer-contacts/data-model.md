# Data Model: Footer Grid, Contacts & Credits

**Feature**: `005-footer-contacts`  
**Date**: 2026-09-07  
**Status**: Completed

## 1. Entities Overview

### Entity: FooterLayoutGrid

| Field | Type | Required | Value / Specification |
|---|---|---|---|
| `backgroundColor` | string | Yes | `#305359` |
| `part1ColSpan` | string | Yes | `4/12` (grid-column: span 4 / flex: 0 0 33.333%) |
| `part1Image` | string | Yes | `assets/img/contato.jpg` |
| `part1MobileDisplay`| string | Yes | `none` (hidden on mobile <= 768px) |
| `part2ColSpan` | string | Yes | `8/12` (grid-column: span 8 / flex: 0 0 66.666%) |
| `part2Instagram` | string | Yes | `https://www.instagram.com/mylanagama.neuro/` |
| `part2Email` | string | Yes | `mylanagama.neurologia@gmail.com` |
| `part2DoctorName` | string | Yes | "Dra. Mylana Gama - Médica Neurologista" |
| `part2CrmRqe` | string | Yes | "CRM-AL 7100 \| RQE 4871" |
| `developerCredit` | string | Yes | "Desenvolvido por CarlosWGama" |

### Entity: FooterStyleTokens

| Token | Value | Purpose |
|---|---|---|
| `--footer-bg` | `#305359` | Rich dark teal background |
| `--footer-text` | `#ffffff` | Primary contrast text |
| `--footer-muted` | `#d4e3e6` | Secondary labels and descriptions |
| `--footer-border`| `rgba(255, 255, 255, 0.15)` | Subtle divider line |
