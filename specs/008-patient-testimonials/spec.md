# Feature Specification: Seção de Comentários sobre Atendimento (Depoimentos de Pacientes)

**Feature Branch**: `008-patient-testimonials`

**Created**: 2026-09-07T18:59:25-03:00

**Status**: Draft

**Input**: User description: "Após a seção de 'Agendamento', crie uma nova section chamada de 'Comentários sobre atendimento'. Nessa seção adicione cards do que alguns pacientes falaram sobre meu atendimento. Os comentários são: [ {Nome: 'Raquel', comentário: 'Excelente Médica! Já conhecia a Drª Mylana da Santa Casa e não pensei duas vezes em procurá-la quando precisei.', fonte: Doctoralia }, {Nome: 'Milene Vieira', comentário: 'Profissional excelente! Além de extremamente competente, é humana, atenciosa e transmite confiança. Sou muito grata pelo cuidado e dedicação. Uma médica que realmente faz a diferença!', fonte: Doctoralia }, {Nome: 'Antônio Carlos Malafaia Ferreira', comentário: 'Escuta com atenção, explica às dúvidas, orienta com detalhes. Excelente profissional!', fonte: Doctoralia }, {Nome: 'Camila Balbina', comentário: 'Dra. Mylana é uma médica excelente! Muito atenciosa, competente e acolhedora. Atendeu minha mãe de uma forma muito humana, explicou tudo com clareza e demonstrou muito cuidado. Recomendo!', fonte: Google Avaliações }, {Nome: 'Rafael Nascimento', comentário: 'A Dra. Mylanna é uma profissional incrível! Sempre muito atenciosa, prestativa e cuidadosa em cada detalhe do atendimento. Transmite segurança, empatia e realmente se importa com o bem-estar dos pacientes. Difícil encontrar alguém com tanta dedicação e humanidade assim. Super recomendo!', fonte: Doctoralia }, {Nome: 'Eliane Santos', comentário: 'Minha experiência foi excelente. Desde o primeiro momento me senti muito acolhida e respeitada. A Dra. me ouviu com muita atenção, conduziu toda a consulta com calma, empatia e dedicação, esclarecendo minhas dúvidas e me transmitindo muita segurança. Saí da consulta me sentindo cuidada e confiante. É uma profissional extremamente competente e humana. Recomendo de coração!.', fonte: Google Avaliações } ]"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Exibição em Carrossel com Troca Automática a Cada 5 Segundos (Priority: P1) 🎯 MVP

Como um paciente ou familiar navegando na landing page, quero visualizar os depoimentos dos pacientes em um carrossel dinâmico e elegante que apresente um único comentário por vez e avance automaticamente a cada 5 segundos, para que eu possa acompanhar confortavelmente as experiências compartilhadas sem poluição visual.

**Why this priority**: A exibição focada de um comentário por vez em formato de carrossel valoriza cada relato individual, mantém o layout limpo e atrai a atenção do visitante com transições fluidas e temporizadas.

**Independent Test**: Carregar a página, rolar até a seção "Comentários sobre atendimento", verificar que apenas um card está visível por vez e cronometrar 5 segundos para observar a troca automática do depoimento.

**Acceptance Scenarios**:

1. **Given** que o visitante está na seção "Comentários sobre atendimento", **When** o carrossel é carregado, **Then** apenas um único card de depoimento deve estar visível na área de exibição.
2. **Given** um depoimento em exibição, **When** transcorrem 5 segundos sem interação direta, **Then** o carrossel deve avançar automaticamente para o próximo depoimento com transição suave.
3. **Given** os 6 depoimentos fornecidos, **When** o carrossel chega ao último depoimento e transcorrem 5 segundos, **Then** ele deve retornar ciclicamente ao primeiro depoimento.

---

### User Story 2 - Estrutura Padronizada do Card de Avaliação (Priority: P1)

Como um visitante lendo os relatos, quero que cada card siga uma hierarquia clara e consistente contendo o nome do paciente em negrito no topo, o comentário entre aspas no centro e a fonte da avaliação no rodapé, para que a leitura seja rápida, confiável e bem estruturada.

**Why this priority**: Garante a uniformidade visual e atende à anatomia solicitada pelo usuário (Topo: Nome em negrito; Centro: Comentário com aspas; Rodapé: Fonte da avaliação).

**Independent Test**: Inspecionar os cards renderizados e confirmar que o topo apresenta o nome em negrito, o centro apresenta o comentário entre aspas tipográficas e o rodapé exibe a fonte ("Doctoralia" ou "Google Avaliações").

**Acceptance Scenarios**:

1. **Given** um card de comentário, **When** renderizado, **Then** o topo do card deve conter o nome do autor em destaque negrito.
2. **Given** o centro do card, **When** visualizado, **Then** o texto do depoimento deve estar envolto por aspas tipográficas destacadas (" ... ").
3. **Given** o rodapé do card, **When** visualizado, **Then** deve indicar claramente o site/plataforma de origem do comentário ("Doctoralia" ou "Google Avaliações").

---

### User Story 3 - Controles Interativos e Responsividade do Carrossel (Priority: P2)

Como um usuário navegando em desktop, tablet ou celular, quero poder controlar manualmente o carrossel através de botões de navegação (anterior/próximo) ou indicadores (dots/bullets), com pausa temporária ao passar o mouse ou tocar, para que eu possa ler com calma os comentários mais longos.

**Why this priority**: Concede controle ao leitor e respeita as boas práticas de acessibilidade e usabilidade para textos de leitura médica.

**Independent Test**: Passar o cursor sobre o card para pausar o autoplay de 5 segundos; clicar nos botões ou dots para avançar/retroceder manualmente.

**Acceptance Scenarios**:

1. **Given** o autoplay ativo a cada 5 segundos, **When** o usuário passa o mouse sobre o carrossel (hover) ou foca no elemento, **Then** a rotação automática deve ser pausada temporariamente até que o cursor saia da área.
2. **Given** os controles de navegação (setas e/ou dots), **When** o usuário clica em um controle, **Then** o carrossel deve navegar imediatamente para o slide solicitado e reiniciar a contagem do ciclo de 5 segundos.
3. **Given** dispositivos móveis (telas sensíveis ao toque), **When** o usuário visualiza o carrossel, **Then** o card deve ocupar 100% da largura útil sem rolagem horizontal na página.

---

### User Story 4 - Integração de Navegação Rápida (Priority: P3)

Como um visitante navegando pelo menu da página, quero encontrar um ponto de navegação ou âncora direta para os comentários e avaliações, para que eu possa consultar rapidamente a opinião de outros pacientes sem ter que rolar manualmente toda a página.

**Why this priority**: Melhora a usabilidade para visitantes que retornam ao site e desejam revisar a reputação da clínica antes do contato.

**Independent Test**: Clicar na âncora correspondente no menu de navegação e verificar a rolagem suave até a seção `#depoimentos` / `#comentarios`.

**Acceptance Scenarios**:

1. **Given** o menu de navegação superior, **When** o usuário clica no link de comentários/avaliações, **Then** a visualização deve deslizar suavemente até a seção "Comentários sobre atendimento".

---

### Edge Cases

- **Comentários de tamanhos variados**: Alguns comentários possuem poucas linhas (ex.: Raquel com 113 caracteres) enquanto outros são parágrafos extensos e detalhados (ex.: Eliane Santos com 352 caracteres). Os cards devem manter altura harmônica ou alinhamento vertical flexível que impeça distorções visuais.
- **Nomes longos de pacientes**: Nomes compostos (ex.: "Antônio Carlos Malafaia Ferreira") não devem truncar, quebrar indevidamente ou vazar para fora do contêiner em telas pequenas de celular.
- **Acessibilidade para leitores de tela**: A indicação de avaliação de 5 estrelas e a identificação de citação/aspas devem conter descrições semânticas e acessíveis para leitores de tela.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema DEVE disponibilizar uma nova seção intitulada "Comentários sobre atendimento", posicionada obrigatoriamente logo após a seção de "Agendamento" (`#agendamento`) e antes da seção de contatos/rodapé.
- **FR-002**: A seção DEVE exibir exatamente os 6 depoimentos fornecidos pelo usuário, sem omissão ou alteração de seus nomes, textos ou fontes.
- **FR-003**: Cada card de depoimento DEVE conter:
  1. Nome do paciente autor da avaliação.
  2. Texto completo do comentário.
  3. Indicação legível da fonte de avaliação ("Doctoralia" ou "Google Avaliações").
- **FR-004**: O sistema DEVE exibir indicadores de avaliação positiva de 5 estrelas em cada card para simbolizar a excelência dos relatos.
- **FR-005**: O layout dos cards DEVE ser flexível e responsivo, adaptando-se confortavelmente do desktop a telas móveis sem barra de rolagem horizontal desnecessária.
- **FR-006**: Os cards DEVEM seguir a identidade visual refinada da landing page, com tipografia legível, contraste em conformidade com acessibilidade visual e suporte a efeitos de interação (hover).
- **FR-007**: A seção DEVE possuir um identificador de âncora semântico (`id="comentarios"` ou `id="depoimentos"`) acessível via navegação interna da página.

### Key Entities *(include if feature involves data)*

- **Depoimento / Avaliação**:
  - `Nome`: Nome do paciente (string).
  - `Comentário`: Texto com a experiência relatada pelo paciente (string).
  - `Fonte`: Plataforma pública de avaliação de onde o relato foi extraído (enum: "Doctoralia" | "Google Avaliações").
  - `Classificação`: Nota atribuída pelo paciente (5 estrelas).

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% dos 6 depoimentos fornecidos encontram-se legíveis e completos na landing page.
- **SC-002**: A seção encontra-se rigorosamente posicionada após o "Agendamento" e antes dos "Contatos / Rodapé".
- **SC-003**: Em qualquer resolução de tela (de 320px a 2560px), nenhum texto de comentário ou nome de autor vaza ou sobrepõe elementos vizinhos.
- **SC-004**: O contraste entre o texto dos depoimentos e o fundo do card atende às diretrizes WCAG AA (mínimo de 4.5:1 para texto normal).
- **SC-005**: A nova seção carrega de maneira imediata sem afetar o tempo de resposta ou introduzir dependências externas de scripts pesados.

---

## Assumptions

- **Formato dos Cards**: Os 6 comentários serão renderizados em uma grade ou disposição em cartões (cards) estáticos, garantindo carregamento rápido, alta confiabilidade e fácil escaneabilidade sem exigir carrosséis com bibliotecas pesadas de terceiros.
- **Fontes Oficiais**: Os selos de origem "Doctoralia" e "Google Avaliações" utilizam texto estilizado e/ou ícones vetoriais leves para manter a fidelidade e autenticidade da proveniência.
- **Nomes e Privacidade**: Os nomes foram fornecidos diretamente pela médica e refletem avaliações públicas existentes nas plataformas Doctoralia e Google.
- **Identificador de Seção**: O identificador semântico sugerido para a seção é `id="comentarios"`, permitindo ligação no menu e âncoras internas.
