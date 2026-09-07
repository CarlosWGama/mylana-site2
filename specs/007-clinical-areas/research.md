# Research: Seção de Áreas de Atuação Neurológica

**Branch**: `007-clinical-areas` | **Date**: 2026-09-07

## 1. Disposição dos Cards com Flexbox Wrap (Máximo de 4 Cards por Linha)

### Contexto e Desafio
O usuário especificou:
- Organizar os cards com Flexbox e wrap para descerem para a linha seguinte.
- Cada linha deve conter no máximo 4 cards em resoluções desktop.
- O total é de 10 cards, resultando em: Linha 1 (4 cards), Linha 2 (4 cards), Linha 3 (2 cards).

### Decisão Técnica
Utilizar contêiner com:
```css
.areas-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: flex-start;
}
```
E para cada card individual:
```css
.area-card {
  flex: 0 1 calc(25% - 1.15rem);
  min-width: 240px;
  background-color: #eef7f9;
  border-radius: var(--border-radius-md);
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
```
**Vantagens**:
- `flex: 0 1 calc(25% - 1.15rem)` impede que os 2 cards da última linha se estiquem desproporcionalmente para ocupar 50% da largura, mantendo a largura uniforme de todos os 10 cards.
- O `gap: 1.5rem` é descontado matematicamente com precisão `(1.5rem * 3 / 4 = 1.125rem)`.
- No tablet (max-width: 992px): `flex: 0 1 calc(50% - 0.75rem)`.
- No mobile (max-width: 600px): `flex: 1 1 100%`.

---

## 2. Estrutura Interna e Estilização dos Cards

### Cores e Tipografia
- **Fundo**: `#eef7f9` (tom ciano/teal suave institucional de altíssimo conforto visual).
- **Título**: Negrito (`font-weight: 700`), cor institucional `#305359`.
- **Ícones**: Ícones vetoriais SVG limpos embutidos ou ícones temáticos com badge circular `#ffffff` ou `#305359` sutil, proporcionando significado semântico imediato para cada uma das 10 especialidades.
- **Descrição**: Breve texto orientado ao paciente com até 100 caracteres.

### Resumo das 10 Descrições Clínicas e Contagem de Caracteres

| # | Área de Atuação | Ícone Temático | Texto da Breve Descrição | Comprimento | Status |
|---|---|---|---|---|---|
| 1 | **Dor** | ⚡ | Diagnóstico e tratamento de enxaquecas, cefaleias e dores crônicas ou neuropáticas. | 83 caracteres | ✓ <= 100 |
| 2 | **Distúrbios do Movimento** | 🔄 | Acompanhamento da Doença de Parkinson, tremores essenciais, distonias e tiques. | 79 caracteres | ✓ <= 100 |
| 3 | **Cognição e demências** | 🧠 | Cuidado humanizado em Doença de Alzheimer, perdas de memória e declínio cognitivo. | 82 caracteres | ✓ <= 100 |
| 4 | **Epilepsia** | ⚡ | Investigação aprofundada, controle e manejo terapêutico de crises convulsivas. | 78 caracteres | ✓ <= 100 |
| 5 | **Vascular** | ❤️ | Prevenção, diagnóstico ágil e reabilitação pós-Acidente Vascular Cerebral (AVC). | 80 caracteres | ✓ <= 100 |
| 6 | **Distúrbios do Sono** | 🌙 | Abordagem médica de insônia, apneia do sono e síndrome das pernas inquietas. | 76 caracteres | ✓ <= 100 |
| 7 | **Neuroinfectologia** | 🛡️ | Tratamento e manejo de sequelas de meningites, encefalites e infecções do SNC. | 78 caracteres | ✓ <= 100 |
| 8 | **Neuroimunologia** | 🧬 | Cuidado em Esclerose Múltipla, neuromielite óptica e doenças desmielinizantes. | 78 caracteres | ✓ <= 100 |
| 9 | **Doenças Neuromusculares** | 🦾 | Avaliação e tratamento de neuropatias periféricas, miastenias e ELA. | 68 caracteres | ✓ <= 100 |
| 10 | **Vertigem** | 🌀 | Investigação de tonturas, labirintopatias, desequilíbrio postural e VPPB. | 73 caracteres | ✓ <= 100 |

Todas as 10 áreas cumprem estritamente o limite de até 100 caracteres.

---

## 3. Integração na Arquitetura de Navegação do Site

A nova seção será inserida no fluxo com o id `#areas-atuacao`. O menu superior em `index.html` passará a contar com a ordem:
1. `Início` (`#hero`)
2. `Áreas de Atuação` (`#areas-atuacao`)
3. `Atendimento` (`#atendimento`)
4. `Endereço` (`#endereco`)
5. `Agendamento` (`#agendamento`)
6. `Contato` (`#contatos`)
