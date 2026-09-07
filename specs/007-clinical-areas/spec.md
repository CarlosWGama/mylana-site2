# Feature Specification: Seção de Áreas de Atuação Neurológica

**Feature Branch**: `007-clinical-areas`

**Created**: 2026-09-07

**Status**: Draft

**Input**: User description: "Após a hero section e antes da seção de atendimentos adicione uma nova seção: 'Áreas de atuação'. As áreas tratadas serão: Dor, Distúrbios do Movimento, Cognição e demências, Epilepsia, Vascular, Distúrbios do Sono, Neuroinfectologia, Neuroimunologia, Doenças Neuromusculares, Vertigem. A seção deve conter cards com o nome da área e uma breve descrição da área. Cada card deve conter: background color #eef7f9, um ícone relacionado à área, título em negrito na cor #305359, breve descrição de até 100 caracteres. Organização em flexbox com wrap, máximo de 4 cards por linha."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visualização e Identificação das Áreas de Atuação (Priority: P1) 🎯 MVP

Como paciente ou familiar com sintomas neurológicos, desejo visualizar logo após a Hero Section uma grade moderna de cards com as especialidades atendidas pela Dra. Mylana Gama, para identificar rapidamente se minha condição de saúde é tratada na clínica.

**Why this priority**: É o ponto focal da funcionalidade. Acelera a compreensão do paciente sobre o escopo clínico e dá segurança para o agendamento.

**Independent Test**: Rolar a página para logo após a Hero; constatar a presença da seção "Áreas de Atuação" com cards estilizados no fundo `#eef7f9`, ícones representativos, títulos em negrito `#305359` e descrições com até 100 caracteres.

**Acceptance Scenarios**:

1. **Given** que o visitante conclui a visualização da Hero Section, **When** rola a página, **Then** visualiza a seção "Áreas de Atuação" antes da seção de atendimento.
2. **Given** a seção "Áreas de Atuação", **When** o usuário examina a grade, **Then** encontra os 10 cards específicos organizados em no máximo 4 cards por linha em desktop via flexbox wrap.

---

### User Story 2 - Leitura de Descrições Concisas (até 100 caracteres) (Priority: P1)

Como paciente, desejo ler uma explicação breve, clara e direta (até 100 caracteres) em cada especialidade, para compreender a aplicação clínica sem cansaço visual.

**Why this priority**: Descrições curtas e precisas garantem rápida escaneabilidade e mantêm a altura dos cards uniforme e elegante.

**Independent Test**: Conferir o texto de cada um dos 10 cards; certificar que nenhum ultrapassa o limite estrito de 100 caracteres e que todos comunicam os pontos essenciais daquela área médica.

**Acceptance Scenarios**:

1. **Given** qualquer um dos 10 cards, **When** o texto descritivo é analisado, **Then** o número total de caracteres da descrição é menor ou igual a 100 caracteres.

---

### User Story 3 - Navegação pelo Menu Superior (Priority: P2)

Como visitante utilizando o cabeçalho, desejo clicar no item "Áreas de Atuação" para que a página execute rolagem suave até a nova seção.

**Why this priority**: Permite acesso imediato ao catálogo de serviços médicos sem necessidade de rolagem manual longa.

**Independent Test**: Clicar no link de navegação "Áreas de Atuação" no cabeçalho; verificar que a tela rola suavemente até `#areas-atuacao`.

**Acceptance Scenarios**:

1. **Given** a barra de navegação no topo, **When** o usuário clica em "Áreas de Atuação", **Then** a página desliza fluidamente até a âncora `#areas-atuacao`.

---

### User Story 4 - Responsividade e Quebra em Linhas (Flexbox Wrap) (Priority: P2)

Como usuário em dispositivos de diferentes resoluções, desejo que os cards se distribuam harmoniosamente (no máximo 4 por linha no desktop, 2 por linha no tablet e 1 por linha no smartphone).

**Why this priority**: Garante que o layout não quebre ou fique espremido em telas intermediárias e móveis.

**Independent Test**: Redimensionar o navegador entre 375px e 1440px; verificar a quebra natural dos cards conforme a largura da tela.

**Acceptance Scenarios**:

1. **Given** visualização desktop (>992px), **When** a seção é renderizada, **Then** os cards são organizados com no máximo 4 por linha, descendo os excedentes para as linhas seguintes.
2. **Given** visualização mobile (<=768px), **When** a seção é renderizada, **Then** os cards preenchem a largura disponível com legibilidade confortável.

---

### Edge Cases

- **Telas intermediárias (768px–992px)**: Os cards devem quebrar para 2 ou 3 por linha mantendo o espaçamento uniforme.
- **Títulos longos**: Nomes como "Distúrbios do Movimento" ou "Doenças Neuromusculares" devem manter peso visual e entrelinhamento sem estourar o card.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema DEVE incluir a seção "Áreas de Atuação" (`#areas-atuacao`) exatamente entre a Hero Section e a seção de Atendimento.
- **FR-002**: A seção DEVE apresentar exatamente as 10 áreas: Dor, Distúrbios do Movimento, Cognição e Demências, Epilepsia, Vascular, Distúrbios do Sono, Neuroinfectologia, Neuroimunologia, Doenças Neuromusculares e Vertigem.
- **FR-003**: Cada card DEVE ter cor de fundo `#eef7f9`.
- **FR-004**: Cada card DEVE conter um ícone ilustrativo relacionado à especialidade neurológica.
- **FR-005**: Cada card DEVE exibir o título da área em negrito na cor `#305359`.
- **FR-006**: Cada card DEVE exibir uma breve descrição com no máximo 100 caracteres.
- **FR-007**: A disposição dos cards DEVE utilizar Flexbox com `flex-wrap: wrap`, limitando a no máximo 4 cards por linha em telas grandes.
- **FR-008**: O menu de navegação do cabeçalho DEVE incluir o link para "Áreas de Atuação" apontando para a âncora `#areas-atuacao`.

### Key Entities

- **PracticeAreaCard**: Entidade visual contendo `id`, `name`, `icon`, `description` (máx. 100 caracteres) e estilos temáticos (`#eef7f9` de fundo e `#305359` no título).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% das 10 áreas clínicas renderizadas com fundo `#eef7f9`, ícone, título em negrito `#305359` e descrição <= 100 caracteres.
- **SC-002**: No desktop, a primeira linha contém exatamente 4 cards, a segunda linha 4 cards e a terceira linha 2 cards (máx. 4 cards por linha via Flexbox wrap).
- **SC-003**: Navegação pelo menu superior para `#areas-atuacao` funcional com scroll suave.
- **SC-004**: FCP mantido abaixo de 1.0s com 0 bibliotecas externas.

## Assumptions

- Os 10 textos de descrição foram redigidos e revisados para respeitar rigorosamente o limite de 100 caracteres.
- O estilo do cabeçalho da seção manterá o padrão do projeto com badge de seção e título em `#305359`.
