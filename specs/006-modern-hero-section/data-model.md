# Data Model: Hero Section Modernizada com Fundo Integrado e Logo Flutuante

**Branch**: `006-modern-hero-section` | **Date**: 2026-09-07

## 1. Entidades da Hero Section

### 1.1 HeroBackgroundConfig (Configuração da Mídia de Fundo)
| Propriedade | Tipo | Valor / Padrão | Descrição |
|---|---|---|---|
| `image_source` | String (Path) | `assets/img/capa.jpg` | Caminho da imagem oficial da médica |
| `background_color` | String (Hex) | `#305359` | Cor primária institucional de preenchimento |
| `gradient_horizontal` | CSS Gradient | `linear-gradient(to right, ...)` | Degradê lateral da esquerda para a direita |
| `gradient_vertical` | CSS Gradient | `linear-gradient(to bottom, ...)` | Degradê na base para transição fluida |
| `opacity_desktop` | Float | `0.45` a `0.85` | Opacidade balanceada para evidenciar a médica |
| `opacity_mobile` | Float | `0.25` a `0.40` | Opacidade reduzida no mobile para priorizar texto |

### 1.2 FloatingLogoConfig (Logotipo Flutuante)
| Propriedade | Tipo | Valor / Padrão | Descrição |
|---|---|---|---|
| `logo_source` | String (Path) | `assets/img/logo.png` | Caminho do logotipo oficial |
| `position` | Enum | `above_name` | Posicionado diretamente acima do nome da médica |
| `background` | String | `transparent` | Fundo 100% transparente (sem caixa branca) |
| `filter_effect` | CSS Filter | `brightness(0) invert(1) drop-shadow(...)` | Converte o logo escuro em branco luminoso com sombra |
| `max_width` | CSS Dimension | `200px` (desktop), `160px` (mobile) | Largura máxima proporcional |

### 1.3 HeroBioContent (Conteúdo e Credenciais)
| Campo | Tipo | Valor | Regras |
|---|---|---|---|
| `doctor_name` | String | `Dra. Mylana Gama` | Título principal (h1), tipografia imponente |
| `specialty_badge` | String | `Neurologista` | Identificação da especialidade |
| `medical_license` | String | `CRM-AL 7100` | Registro no Conselho Regional de Medicina de Alagoas |
| `specialist_record` | String | `RQE 4871` | Registro de Qualificação de Especialista |
| `narrative_bio` | Text | Formação UNCISAL, residência UPE/HUOC Recife, SAN, Metropolitano e Santa Casa | Texto corrido sem tópicos/bullets |

### 1.4 HeroCTAButton (Chamada para Ação)
| Campo | Tipo | Valor | Descrição |
|---|---|---|---|
| `label` | String | `Agendar Consulta` | Texto do botão de conversão |
| `icon` | String / Emoji | `📅` | Ícone amigável de calendário |
| `target_href` | String (Anchor) | `#agendamento` | Rola suavemente até a seção de agendamento |
| `shape` | Enum | `pill` (`border-radius: 50px`) | Formato arredondado moderno |

---

## 2. Design Tokens Atualizados

```css
:root {
  --color-primary: #305359;
  --color-primary-dark: #243e43;
  --color-white: #ffffff;
  --color-cta-bg: #ffffff;
  --color-cta-text: #305359;
  --color-cta-hover-bg: #25d366;
  --color-cta-hover-text: #ffffff;
  --hero-radius-pill: 50px;
  --hero-radius-card: 24px;
  --hero-shadow-glow: 0 4px 24px rgba(0, 0, 0, 0.25);
  --hero-logo-filter: brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.35));
}
```
