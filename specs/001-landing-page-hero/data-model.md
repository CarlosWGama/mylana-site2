# Data Model: Landing Page Hero Section

**Feature**: `001-landing-page-hero`  
**Date**: 2026-09-07  
**Status**: Completed

## 1. Entities Overview

Although the project is built with static Vanilla HTML/CSS, the presentation content and visual hierarchy represent formal content entities mapped below to guarantee consistency, testability, and future extensibility.

### Entity: DoctorProfile
Represents the professional and clinical identity of Dr. Mylana Gama.

| Field | Type | Required | Description | Example |
|---|---|---|---|---|
| `fullName` | string | Yes | Complete professional name | "Dra. Mylana Gama" |
| `specialty` | string | Yes | Medical specialty in accessible terms | "Médica Neurologista" |
| `crm` | string | Yes | Regional Medical Council registration | "CRM-AL 7100" |
| `rqe` | string | Yes | Specialist Qualification Register | "RQE 4871" |
| `graduation` | string | Yes | Undergraduate medical education | "Graduação em Medicina pela Universidade Estadual de Ciências da Saúde de Alagoas (UNCISAL)" |
| `residency` | string | Yes | Medical residency program and hospital | "Residência Médica em Neurologia pela Universidade de Pernambuco / Hospital Universitário Oswaldo Cruz (UPE / HUOC)" |
| `societyMemberships` | array[string] | Yes | Professional medical societies | `["Sociedade Alagoana de Neurologia (SAN)"]` |
| `hospitalAffiliations`| array[string] | Yes | Current active hospital positions | `["Hospital Metropolitano de Alagoas", "Santa Casa de Misericórdia de Maceió"]` |
| `portraitImage` | string | Yes | Path to hero portrait image | "assets/img/capa.jpg" |
| `logoImage` | string | Yes | Path to official logo | "assets/img/logo.png" |

### Entity: HeroSectionContent
Encapsulates the rendered text components and visual order of the hero section.

| Element | Type | Content Specification |
|---|---|---|
| `tagline` | string | Empathetic subtitle (e.g., "Cuidado humanizado e atenção especializada à saúde neurológica") |
| `headline` | string | Main title ("Dra. Mylana Gama - Neurologista") |
| `narrativeProse` | string | Two cohesive paragraphs containing background, affiliations, and credentials in continuous text without bullet points |
| `ctaButton` | object | `{ text: "Agendar Consulta", target: "#contato" }` |
| `mobileOrderSequence` | array[string] | `["photo", "description", "logo"]` |

### Entity: DesignTokenTheme
Defines the strict color, spacing, and font tokens used by the Hero and landing page.

| Token Name | Value | Purpose |
|---|---|---|
| `--color-primary` | `#305359` | Hero background, primary accents, brand identity |
| `--color-background` | `#ffffff` | Page canvas, contrast containers, cards |
| `--color-background-soft`| `#f4f6f8` / `#b3b3b3` | Soft neutrals and section boundaries |
| `--color-text-light` | `#ffffff` | Text on `#305359` hero background |
| `--color-text-dark` | `#1a2b2e` | Text on light backgrounds |
| `--color-logo-brand` | `#32555b` | Intrinsic color of the logo image |
| `--font-primary` | `'Montserrat', system-ui, sans-serif` | Typography self-hosted in `assets/src/fonts/` |
