# Data Model: Seção de Áreas de Atuação Neurológica

**Branch**: `007-clinical-areas` | **Date**: 2026-09-07

## 1. Entidades da Seção

### 1.1 ClinicalAreaCard (Entidade de Especialidade)

| Campo | Tipo | Descrição | Validação |
|---|---|---|---|
| `id` | String | Identificador semântico (ex.: `area-dor`) | Único no DOM |
| `name` | String | Nome da especialidade neurológica | Não vazio, texto em negrito |
| `icon_symbol` | SVG / String | Ícone representativo da especialidade | SVG vetorial estilizado |
| `description` | String | Breve descrição orientada ao paciente | Obrigatório, tamanho <= 100 caracteres |
| `bg_color` | Hex | Cor de fundo do card | `#eef7f9` |
| `title_color` | Hex | Cor do título da área | `#305359` |

### 1.2 Mapeamento das 10 Instâncias de Especialidades

```json
[
  {
    "id": "dor",
    "name": "Dor",
    "icon": "icon-pain",
    "description": "Diagnóstico e tratamento de enxaquecas, cefaleias e dores crônicas ou neuropáticas."
  },
  {
    "id": "disturbios-movimento",
    "name": "Distúrbios do Movimento",
    "icon": "icon-movement",
    "description": "Acompanhamento da Doença de Parkinson, tremores essenciais, distonias e tiques."
  },
  {
    "id": "cognicao-demencias",
    "name": "Cognição e demências",
    "icon": "icon-cognition",
    "description": "Cuidado humanizado em Doença de Alzheimer, perdas de memória e declínio cognitivo."
  },
  {
    "id": "epilepsia",
    "name": "Epilepsia",
    "icon": "icon-epilepsy",
    "description": "Investigação aprofundada, controle e manejo terapêutico de crises convulsivas."
  },
  {
    "id": "vascular",
    "name": "Vascular",
    "icon": "icon-vascular",
    "description": "Prevenção, diagnóstico ágil e reabilitação pós-Acidente Vascular Cerebral (AVC)."
  },
  {
    "id": "disturbios-sono",
    "name": "Distúrbios do Sono",
    "icon": "icon-sleep",
    "description": "Abordagem médica de insônia, apneia do sono e síndrome das pernas inquietas."
  },
  {
    "id": "neuroinfectologia",
    "name": "Neuroinfectologia",
    "icon": "icon-infection",
    "description": "Tratamento e manejo de sequelas de meningites, encefalites e infecções do SNC."
  },
  {
    "id": "neuroimunologia",
    "name": "Neuroimunologia",
    "icon": "icon-immunity",
    "description": "Cuidado em Esclerose Múltipla, neuromielite óptica e doenças desmielinizantes."
  },
  {
    "id": "doencas-neuromusculares",
    "name": "Doenças Neuromusculares",
    "icon": "icon-neuromuscular",
    "description": "Avaliação e tratamento de neuropatias periféricas, miastenias e ELA."
  },
  {
    "id": "vertigem",
    "name": "Vertigem",
    "icon": "icon-vertigo",
    "description": "Investigação de tonturas, labirintopatias, desequilíbrio postural e VPPB."
  }
]
```

---

## 2. Design Tokens Atualizados

```css
:root {
  --color-area-card-bg: #eef7f9;
  --color-area-card-title: #305359;
  --color-area-card-desc: #415e64;
  --color-area-icon-bg: #ffffff;
  --color-area-border-hover: #305359;
  --area-card-radius: 16px;
  --area-card-shadow: 0 4px 15px rgba(48, 83, 89, 0.06);
  --area-card-shadow-hover: 0 10px 25px rgba(48, 83, 89, 0.12);
}
```
