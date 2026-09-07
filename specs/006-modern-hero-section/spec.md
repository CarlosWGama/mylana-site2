# Feature Specification: Modernização Visual da Hero Section com Fundo Integrado e Logo Flutuante

**Feature Branch**: `006-modern-hero-section`

**Created**: 2026-09-07

**Status**: Draft

**Input**: User description: "Reformule o herosection para ficar mais moderno. Pode tomar como base a imagem ./modelos/thaisa.jpg. Remove a imagem do hero section e adicione ela como fundo transparente da hero section ocupando boa parte da imagem. Caso a imagem não seja larga o suficiente, faça as extremidades irem em degrade para a cor primaria (#305359). Adicione o botão de agendar consulta no hero section. Adicione a logo acima do nome e sem o fundo branco, porém tomando o cuidado para que a logo ainda fique visivel no fundo."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Fundo Integrado em Degradê com a Foto da Médica (Priority: P1)

Como paciente ou familiar visitando o site, desejo ver a fotografia da médica integrada organicamente ao plano de fundo da Hero Section (com transparência/fusão suave e degradê para a cor primária #305359 nas extremidades), em vez de uma foto recortada em caixa retangular rígida, para uma experiência visual contemporânea, elegante e imersiva inspirada na referência da Dra. Thaysa Avelino.

**Why this priority**: Elimina radicalmente a sensação de layout "quadrado" e amador, integrando a figura da médica ao ambiente visual sofisticado da clínica.

**Independent Test**: Carregar a página em qualquer resolução de tela (desktop, tablet e mobile); verificar que não há mais contêiner quadrado de foto. A imagem de capa preenche o plano de fundo da Hero com transparência/gradientes que esmaecem naturalmente para o fundo `#305359` nas bordas laterais e inferiores.

**Acceptance Scenarios**:

1. **Given** que o usuário acessa a página em desktop, **When** a Hero Section é visualizada, **Then** a foto da médica ocupa expressiva parte da área visual de fundo (especialmente à direita/centro), esmaecendo com degradê lateral e inferior para a cor `#305359`.
2. **Given** que a tela seja ultra-larga ou mais ampla que as dimensões originais da foto, **When** a imagem atinge seus limites, **Then** as extremidades transicionam suavemente em degradê contínuo para o tom institucional `#305359`, sem cortes bruscos.

---

### User Story 2 - Logotipo Flutuante sem Fundo Branco Acima do Nome (Priority: P1)

Como visitante, desejo ver o logotipo oficial da Dra. Mylana Gama posicionado diretamente acima do nome da doutora, sem caixa retangular branca em volta, mas com perfeito contraste e nitidez sobre o fundo, para conferir leveza e sofisticação de marca de alto padrão.

**Why this priority**: A caixa branca quadrada do logo destoava do tom da Hero. Tornar o logo livre de caixa e com visibilidade perfeita eleva o branding médico.

**Independent Test**: Observar a posição do logotipo acima do título "Dra. Mylana Gama"; confirmar que o fundo branco foi removido e que o símbolo e a tipografia do logo permanecem perfeitamente nítidos, legíveis e com alto contraste sobre a tonalidade `#305359`.

**Acceptance Scenarios**:

1. **Given** o bloco de conteúdo principal da Hero, **When** o visitante examina o topo do texto, **Then** o logotipo da Dra. Mylana Gama aparece posicionado imediatamente acima do nome, perfeitamente nítido e iluminado sobre o fundo escuro, livre de qualquer cartão ou caixa branca retangular de suporte.

---

### User Story 3 - Botão de Ação Direta "Agendar Consulta" na Hero (Priority: P1)

Como paciente interessado em marcar uma consulta, desejo encontrar um botão de chamada para ação ("Agendar Consulta") logo na primeira dobra da página, para poder iniciar o agendamento de forma rápida e intuitiva.

**Why this priority**: Facilita a conversão imediata de pacientes que já chegam decididos a agendar consulta presencial, domiciliar ou online.

**Independent Test**: Clicar no botão "Agendar Consulta" na Hero Section e verificar rolagem suave imediata até a seção de agendamento (`#agendamento`), destacando os canais de WhatsApp e Doctoralia.

**Acceptance Scenarios**:

1. **Given** a Hero Section carregada, **When** o visitante clica no botão "Agendar Consulta", **Then** a página realiza rolagem fluida e posiciona a visão na seção de agendamento (`#agendamento`).

---

### User Story 4 - Adaptação Responsiva e Legibilidade em Telas Menores (Priority: P2)

Como usuário em dispositivo móvel, desejo ler com clareza todo o texto da apresentação e interagir com o botão de agendamento sem que o fundo da foto prejudique o contraste das palavras.

**Why this priority**: No mobile a foto de fundo precisa de tratamento cuidadoso de opacidade/camada escura para não concorrer com o texto branco da biografia.

**Independent Test**: Reduzir a largura da janela para viewport móvel (375px–420px); verificar que o texto biográfico, as credenciais, o logotipo e o botão continuam com leitura 100% nítida e confortável.

**Acceptance Scenarios**:

1. **Given** acesso por smartphone, **When** a Hero é renderizada, **Then** o texto e o logotipo permanecem em primeiro plano com contraste garantido sobre a camada com degradê e a foto de fundo.

---

### Edge Cases

- **Telas Ultra-Wide (> 1920px)**: O degradê radial/linear nas extremidades deve se estender uniformemente na cor `#305359` sem repetição indesejada de padrão de imagem.
- **Telas de Alto Brilho / Sol**: O contraste do texto branco e do logo branco/iluminado sobre `#305359` deve superar 7:1 (padrão WCAG AAA).
- **Rolagem em dispositivos táteis**: O botão de agendamento deve possuir área mínima de clique de 48px para facilitar o toque com o polegar.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A Hero Section DEVE remover o contêiner de imagem isolado (`hero-photo-wrapper`) e incorporar a foto da médica (`capa.jpg`) como plano de fundo integrado e translúcido, posicionado de forma a ocupar destaque harmonioso na composição.
- **FR-002**: A composição de fundo DEVE aplicar efeito de degradê suave (gradiente linear e/ou radial) fazendo com que todas as extremidades da foto se fundam harmoniosamente na cor primária institucional `#305359`.
- **FR-003**: O logotipo oficial DEVE ser reposicionado para ficar diretamente acima do nome "Dra. Mylana Gama".
- **FR-004**: O contêiner retangular com fundo branco do logotipo DEVE ser removido por completo, aplicando tratamento de iluminação/filtro (ex.: versão branca nítida ou filtro de alto contraste) para assegurar visibilidade e legibilidade impecáveis sobre o fundo `#305359`.
- **FR-005**: A Hero Section DEVE incorporar um botão de destaque ("Agendar Consulta") estilizado em formato arredondado moderno, com link direto para a seção `#agendamento`.
- **FR-006**: O texto biográfico e as credenciais (CRM-AL 7100 | RQE 4871) DEVEM ser preservados na íntegra de forma contínua e humanizada (sem tópicos/bullets).
- **FR-007**: A camada de conteúdo DEVE garantir contraste absoluto sobre a imagem de fundo através de sobreposição gradiente suave (dark overlay gradient) que mantenha o texto 100% legível em qualquer dispositivo.
- **FR-008**: Em dispositivos móveis, a disposição dos elementos DEVE ser verticalmente equilibrada: Logotipo nítido -> Nome e credenciais -> Biografia humanizada -> Botão de agendamento.

### Key Entities

- **Hero Integrated Canvas**: Composição que une a cor `#305359`, a imagem da médica com transparência e transições de borda em degradê, e a camada de contraste para texto.
- **Floating Brand Logo**: Logotipo estilizado diretamente sobre o fundo, sem moldura sólida.
- **Primary Hero CTA**: Elemento interativo de ação direta que conecta a Hero à conversão de agendamentos.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% de eliminação de caixas retangulares duras (foto em bloco isolado e cartão branco do logo removidos).
- **SC-002**: Contraste do texto e logotipo sobre o fundo mantém proporção superior a 7:1 (WCAG AAA).
- **SC-003**: 1 clique a partir da Hero direciona o paciente diretamente aos canais de agendamento.
- **SC-004**: Carregamento da página mantém FCP (First Contentful Paint) < 1.0s com 0 scripts bloqueantes ou bibliotecas externas.

## Assumptions

- A imagem base continua sendo `assets/img/capa.jpg`, com a foto da médica em alta resolução.
- O logotipo continua sendo `assets/img/logo.png`, adaptado via CSS filter para manter máxima nitidez sobre fundo `#305359`.
- O layout toma como inspiração a harmonia e modernidade da referência de design médica (`./modelos/thaisa.jpg`).
- Todo o código obedece aos princípios da constituição do projeto (Vanilla HTML5 e CSS3 puro).
