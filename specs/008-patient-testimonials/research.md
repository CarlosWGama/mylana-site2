# Research: Carrossel de Comentários sobre Atendimento

**Feature**: Seção de Comentários sobre Atendimento (Depoimentos de Pacientes)
**Directory**: `specs/008-patient-testimonials/`

---

## 1. Arquitetura do Carrossel (Pure Vanilla JavaScript)

### Decision
Implementar um componente de carrossel leve em Vanilla JavaScript puro (ES6+), utilizando um contêiner com `overflow: hidden`, uma trilha flexível (`display: flex; transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);`) ou transição controlada por classes ativas (`active`/`current`). Cada slide ocupará 100% da largura do contêiner (`flex: 0 0 100%`), garantindo a exibição estrita de um único card por vez.

### Rationale
- Em conformidade estrita com o Princípio Constitucional II (*Pure Vanilla Architecture*), dispensa bibliotecas pesadas de terceiros (como Swiper, Owl Carousel ou Slick).
- Mantém o arquivo JS leve, rápido e sem dependências externas.
- Permite cálculo fluido de redimensionamento e transição de hardware acelerada via CSS `transform: translateX(-N00%)`.

### Alternatives Considered
- *Swiper.js / Splide.js*: Rejeitados por violarem a regra de Vanilla sem bibliotecas externas.
- *Carrossel puramente CSS com `:checked` ou scroll-snap*: Rejeitado porque a troca automática a cada 5 segundos com pausa ao passar o mouse exige controle em JavaScript.

---

## 2. Temporizador de Autoplay e Controle de Ciclo (5 Segundos)

### Decision
- Utilizar `setInterval(nextSlide, 5000)` para rotação automática a cada 5 segundos.
- Adicionar ouvintes de evento para `mouseenter`/`focusin` que limpam o intervalo (`clearInterval`), e `mouseleave`/`focusout` que reiniciam o contador.
- Ao clicar em controles manuais (dots/indicadores ou setas de navegação), o temporizador é reiniciado imediatamente para evitar trocas bruscas logo após uma interação manual.

### Rationale
- Cumpre exatamente a diretriz do usuário: *"O carrossel deve ficar trocando sozinho de comentário a cada 5 segundos."*
- Proporciona acessibilidade (WCAG 2.1 Critério de Sucesso 2.2.2 - Pause, Stop, Hide), permitindo que pessoas com ritmos variados de leitura pausem a rotação enquanto o cursor estiver sobre o comentário.

---

## 3. Anatomia Visual e Hierarquia do Card

### Decision
A estrutura do card é dividida em 3 zonas estritas:
1. **Topo (`.testimonial-card-header`)**:
   - Nome da pessoa em **negrito** (`font-weight: 700`), cor primária `#305359`.
   - Adição opcional de 5 estrelas douradas (`★ ★ ★ ★ ★`) para reforço de autoridade médica.
2. **Centro (`.testimonial-card-body`)**:
   - O comentário da pessoa envolto por aspas estilizadas (`“` e `”`), tipografia acolhedora em tamanho `1.05rem` a `1.15rem`, cor `#415e64`, estilo itálico suave.
3. **Rodapé (`.testimonial-card-footer`)**:
   - A fonte do site onde a pessoa comentou a respeito (`Doctoralia` ou `Google Avaliações`), com selo refinado em pill badge.

### Rationale
- Atende 100% aos requisitos de layout estabelecidos na solicitação do usuário.
- Garante destaque visual, legibilidade impecável e alta credibilidade.

---

## 4. Integração na Página Principal e Identificadores

### Decision
- A seção será inserida imediatamente após `<section id="agendamento" class="booking-section">` e antes de `<footer id="contatos" class="site-footer">`.
- ID semântico: `<section id="comentarios" class="testimonials-section">`.
- Link de navegação no cabeçalho: Adicionar "Depoimentos" ou "Avaliações" caso apropriado, mantendo a harmonia visual da barra superior.
