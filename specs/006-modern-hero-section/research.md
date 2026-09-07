# Research: Modernização da Hero Section com Fundo Integrado e Logo Flutuante

**Branch**: `006-modern-hero-section` | **Date**: 2026-09-07

## 1. Integração da Imagem de Fundo com Degradê nas Extremidades

### Contexto e Desafio
O layout anterior utilizava a foto da médica dentro de uma caixa retangular (`.hero-photo-wrapper`), o que gerava uma divisão rígida e "quadrada" na tela. A referência de design (`modelos/thaisa.jpg`) adota um padrão contemporâneo onde a imagem da médica faz parte do ambiente visual de fundo, com as extremidades e bordas esmaecendo suavemente em degradê contínuo para a cor primária (#305359).

### Decisão Técnica
Utilizar uma camada de mídia de fundo dedicada (`.hero-background`) com a imagem `assets/img/capa.jpg` posicionada à direita/centro, combinada com camadas de sobreposição em CSS contendo:
1. **Gradiente horizontal de fusão**: Um `linear-gradient(to right, #305359 0%, rgba(48,83,89, 0.85) 45%, rgba(48,83,89, 0.4) 75%, #305359 100%)` que garante que o lado esquerdo (área do texto) seja opaco o suficiente para garantir contraste máximo, enquanto o lado direito revela a foto com clareza.
2. **Gradiente vertical de base**: Um `linear-gradient(to bottom, transparent 65%, #305359 100%)` que faz a base da foto esmaecer suavemente para o tom `#305359`, eliminando o corte reto inferior.
3. **Máscara de extremidade (Vignette)**: Degradês nas extremidades laterais garantem que em monitores ultrawide (>1920px), a foto não termine abruptamente, fundindo-se uniformemente no fundo `#305359`.

### Alternativas Avaliadas
- *Recorte PNG manual da foto sem fundo*: Descartado por ser mais destrutivo e não aproveitar a ambientação profissional do consultório (com o letreiro "Nube Clinic" no fundo da foto).
- *Background-image puro no container*: Descartado porque controlar a opacidade, contraste do texto e transições responsivas é muito mais flexível e performático utilizando um contêiner de imagem posicionado de forma absoluta com `pointer-events: none` e `object-fit: cover`.

---

## 2. Visibilidade do Logotipo sobre o Fundo Escuro sem Caixa Branca

### Contexto e Desafio
O arquivo `assets/img/logo.png` é um PNG transparente desenhado com linhas em azul petróleo escuro (`#32555b`). Se colocado diretamente sobre o fundo `#305359` sem nenhuma intervenção, ele se tornaria praticamente invisível devido à falta de contraste. Anteriormente, havia um cartão retangular branco ao redor do logo, que o usuário pediu para remover por deixar o visual "quadrado".

### Decisão Técnica
Aplicar transformação via CSS Filter no elemento do logotipo flutuante:
```css
.hero-logo-floating {
  filter: brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.35));
  max-width: 210px;
  height: auto;
  transition: transform 0.3s ease;
}
```
**Efeito**:
- `brightness(0) invert(1)` transforma com máxima fidelidade vetorial todos os traços escuros em traços brancos puros (`#ffffff`).
- O símbolo do cérebro em traço contínuo e a tipografia "Mylana Gama - Neurologista" tornam-se brancos luminosos de alta sofisticação, combinando perfeitamente com a paleta institucional.
- `drop-shadow(0 2px 8px rgba(0,0,0,0.35))` confere profundidade tridimensional e garante que o logo seja 100% legível mesmo que qualquer elemento mais claro passe por trás.

### Alternativas Avaliadas
- *Manter fundo branco com cantos arredondados*: O usuário pediu expressamente "sem o fundo branco".
- *Adicionar círculo ou cápsula translúcida*: Menos minimalista que o logo branco puro flutuante, que segue perfeitamente a referência `thaisa.jpg`.

---

## 3. Botão de Chamada para Ação ("Agendar Consulta")

### Contexto e Desafio
A Hero anterior não possuía um botão direto de agendamento na primeira dobra, forçando o visitante a rolar até a quarta seção (`#agendamento`) para encontrar o link do WhatsApp ou Doctoralia. Na referência `thaisa.jpg`, há um botão arredondado em destaque ("AGENDE UM EXAME").

### Decisão Técnica
Adicionar um botão de destaque interativo na base do texto da Hero:
- Texto: `📅 Agendar Consulta`
- Link: `#agendamento` (rolagem suave nativa via `scroll-behavior: smooth`)
- Estilização: Formato pílula (`border-radius: 50px`), fundo branco com texto `#305359` em negrito ou fundo com acento verde WhatsApp suave, com hover que inverte as cores ou eleva o botão com sombra luminosa.
- Tamanho mínimo tátil: Altura mínima de 48px e padding generoso para conformidade com acessibilidade em smartphones.

---

## 4. Ordem e Hierarquia na Hero Section

### Padrão Desktop (Inspirado em `thaisa.jpg`)
1. **Fundo**: Foto da médica em alta resolução (`capa.jpg`) integrada com transparência e degradê para `#305359`.
2. **Coluna Esquerda (Conteúdo em destaque)**:
   - Logotipo oficial flutuante em branco (acima do nome).
   - Nome: `Dra. Mylana Gama` (tipografia imponente e elegante).
   - Credenciais em badge/pílula moderna: `CRM-AL 7100 | RQE 4871`.
   - Texto biográfico humanizado e fluido (UNCISAL, UPE/HUOC, SAN, Metropolitano, Santa Casa).
   - Botão de ação: `Agendar Consulta`.

### Padrão Mobile (<= 768px)
- Alinhamento centralizado ou balanceado com padding ergonômico.
- Sobreposição escura suave sobre a foto de fundo para assegurar legibilidade em 100% dos visores.
- Hierarquia fluida: Logo -> Nome -> Credenciais -> Biografia -> Botão CTA.
