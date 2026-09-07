# Quickstart: Validação da Seção Áreas de Atuação

**Branch**: `007-clinical-areas` | **Date**: 2026-09-07

Este guia orienta a validação completa da seção "Áreas de Atuação" no site da Dra. Mylana Gama.

## Pré-requisitos
- Servidor local ativo (ex.: `http://localhost/mylana/`).
- Navegador Google Chrome, Firefox ou Edge.

---

## Cenários de Validação

### Cenário 1: Posicionamento e Estrutura dos 10 Cards
1. Abra `http://localhost/mylana/` no navegador.
2. Role para baixo logo após a Hero Section.
3. **Resultado esperado**:
   - A seção "Áreas de Atuação" surge antes da seção "Onde e Como Ser Atendido" (Atendimento).
   - Existem exatamente 10 cards: Dor, Distúrbios do Movimento, Cognição e demências, Epilepsia, Vascular, Distúrbios do Sono, Neuroinfectologia, Neuroimunologia, Doenças Neuromusculares e Vertigem.
   - Cada card possui cor de fundo `#eef7f9`.
   - Cada card possui título em negrito na cor `#305359`.
   - Cada card possui um ícone temático e uma descrição clara.

### Cenário 2: Validação de Limite de Caracteres (<= 100 caracteres)
1. Inspecione o texto de descrição de cada card.
2. **Resultado esperado**:
   - Nenhum dos 10 cards ultrapassa 100 caracteres no parágrafo descritivo.

### Cenário 3: Distribuição Flexbox Wrap (Máx. 4 Cards por Linha)
1. Maximize o navegador em resolução Desktop (1200px+).
2. Observe a distribuição dos 10 cards na tela.
3. **Resultado esperado**:
   - A primeira linha contém 4 cards.
   - A segunda linha contém 4 cards.
   - A terceira linha contém 2 cards com a mesma largura uniforme (sem esticar de forma disforme).

### Cenário 4: Link no Menu de Navegação
1. Clique no link "Áreas de Atuação" na barra superior de navegação.
2. **Resultado esperado**:
   - A página realiza rolagem suave até a seção `#areas-atuacao`.

### Cenário 5: Responsividade Mobile e Tablet
1. Abra o DevTools (`F12`) e redimensione para 768px (Tablet) e depois 390px (Mobile).
2. **Resultado esperado**:
   - Em 768px, os cards quebram para 2 por linha.
   - Em 390px, os cards empilham-se fluidamente em 1 por linha com leitura confortável e sem rolagem horizontal.
