# Data Model: Comentários sobre Atendimento (Depoimentos)

**Feature**: Seção de Comentários sobre Atendimento (Depoimentos de Pacientes)
**Directory**: `specs/008-patient-testimonials/`

---

## 1. Entidade: Depoimento (`Testimonial`)

Representa a avaliação individual de um paciente sobre o atendimento médico prestado pela Dra. Mylana Gama.

### Atributos

| Campo | Tipo | Obrigatoriedade | Descrição | Exemplo |
|---|---|---|---|---|
| `id` | string / number | Sim | Identificador único do depoimento | `"depoimento-1"` |
| `nome` | string | Sim | Nome completo ou de exibição do paciente | `"Milene Vieira"` |
| `comentario` | string | Sim | Texto transcrito na íntegra da experiência do paciente | `"Profissional excelente! Além de..."` |
| `fonte` | enum string | Sim | Plataforma de onde o comentário é originário | `"Doctoralia"` \| `"Google Avaliações"` |
| `avaliacao` | number | Opcional | Nota da avaliação (padrão 5 estrelas) | `5` |

---

## 2. Instâncias Concretas dos Dados

```json
[
  {
    "id": 1,
    "nome": "Raquel",
    "comentario": "Excelente Médica! Já conhecia a Drª Mylana da Santa Casa e não pensei duas vezes em procurá-la quando precisei.",
    "fonte": "Doctoralia",
    "avaliacao": 5
  },
  {
    "id": 2,
    "nome": "Milene Vieira",
    "comentario": "Profissional excelente! Além de extremamente competente, é humana, atenciosa e transmite confiança. Sou muito grata pelo cuidado e dedicação. Uma médica que realmente faz a diferença!",
    "fonte": "Doctoralia",
    "avaliacao": 5
  },
  {
    "id": 3,
    "nome": "Antônio Carlos Malafaia Ferreira",
    "comentario": "Escuta com atenção, explica às dúvidas, orienta com detalhes. Excelente profissional!",
    "fonte": "Doctoralia",
    "avaliacao": 5
  },
  {
    "id": 4,
    "nome": "Camila Balbina",
    "comentario": "Dra. Mylana é uma médica excelente! Muito atenciosa, competente e acolhedora. Atendeu minha mãe de uma forma muito humana, explicou tudo com clareza e demonstrou muito cuidado. Recomendo!",
    "fonte": "Google Avaliações",
    "avaliacao": 5
  },
  {
    "id": 5,
    "nome": "Rafael Nascimento",
    "comentario": "A Dra. Mylanna é uma profissional incrível! Sempre muito atenciosa, prestativa e cuidadosa em cada detalhe do atendimento. Transmite segurança, empatia e realmente se importa com o bem-estar dos pacientes. Difícil encontrar alguém com tanta dedicação e humanidade assim. Super recomendo!",
    "fonte": "Doctoralia",
    "avaliacao": 5
  },
  {
    "id": 6,
    "nome": "Eliane Santos",
    "comentario": "Minha experiência foi excelente. Desde o primeiro momento me senti muito acolhida e respeitada. A Dra. me ouviu com muita atenção, conduziu toda a consulta com calma, empatia e dedicação, esclarecendo minhas dúvidas e me transmitindo muita segurança. Saí da consulta me sentindo cuidada e confiante. É uma profissional extremamente competente e humana. Recomendo de coração!.",
    "fonte": "Google Avaliações",
    "avaliacao": 5
  }
]
```

---

## 3. Estado do Carrossel (`CarouselState`)

Representa o estado de exibição do carrossel na interface:

| Propriedade | Tipo | Valor Inicial | Descrição |
|---|---|---|---|
| `currentIndex` | number | `0` | Índice do slide atualmente ativo (de 0 a 5) |
| `totalSlides` | number | `6` | Total de depoimentos no carrossel |
| `autoplayInterval` | number | `5000` | Duração do ciclo de troca em milissegundos (5 segundos) |
| `isPaused` | boolean | `false` | Indica se o autoplay está pausado por hover ou toque |
