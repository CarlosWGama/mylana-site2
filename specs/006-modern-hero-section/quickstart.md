# Quickstart: Validação da Hero Section Modernizada

**Branch**: `006-modern-hero-section` | **Date**: 2026-09-07

Este guia descreve os cenários de teste e validação para confirmar que a modernização visual da Hero Section cumpre todos os requisitos definidos pelo usuário com base na referência de design.

## Pré-requisitos
- Servidor web local ativo (ex.: XAMPP Apache em `http://localhost/mylana/`) ou abertura direta do arquivo `index.html` em navegador web moderno.
- Navegador Google Chrome, Mozilla Firefox ou Microsoft Edge com DevTools habilitado.

---

## Cenários de Teste

### Cenário 1: Integração de Fundo com Foto e Degradê (Desktop)
1. Abra `http://localhost/mylana/` no navegador em tela cheia (1440px ou superior).
2. **Resultado esperado**:
   - Não há nenhuma foto emoldurada em caixa retangular rígida.
   - A foto da médica (`capa.jpg`) surge integrada organicamente ao plano de fundo.
   - As extremidades esquerda, direita e inferior da foto esmaecem suavemente em degradê contínuo para a cor primária institucional `#305359`.
   - O texto da biografia no lado esquerdo possui contraste perfeito e excelente legibilidade sobre a camada de fundo.

### Cenário 2: Logotipo Flutuante sem Fundo Branco
1. Na Hero Section, observe a área superior imediatamente acima do nome "Dra. Mylana Gama".
2. **Resultado esperado**:
   - O logotipo oficial da Dra. Mylana Gama está posicionado diretamente acima do nome.
   - O cartão/fundo branco retangular foi 100% removido.
   - As linhas do logotipo aparecem em branco luminoso e nítido (via filtro CSS invertido com sombra de elevação), com alto contraste sobre o tom `#305359`.

### Cenário 3: Botão "Agendar Consulta" e Rolagem Suave
1. Localize o botão "Agendar Consulta" na base da apresentação da Hero.
2. Posicione o cursor sobre o botão (hover).
   - **Resultado esperado**: O botão responde com elevação sutil e transição suave de cor.
3. Clique no botão "Agendar Consulta".
   - **Resultado esperado**: A página executa rolagem suave (smooth scroll) até a seção de agendamento (`#agendamento`), exibindo os canais de WhatsApp e Doctoralia.

### Cenário 4: Responsividade e Legibilidade Mobile
1. Pressione `F12` no navegador e alterne para o modo de emulação de dispositivos móveis (ex.: iPhone 12/14 a 390px ou Galaxy S20 a 412px).
2. Recarregue a página.
3. **Resultado esperado**:
   - O logotipo flutuante branco permanece centralizado no topo.
   - O nome, os badges de credenciais e a biografia adaptam-se com espaçamento ergonômico.
   - O degradê sobre a foto de fundo mantém a legibilidade impecável de cada palavra.
   - O botão "Agendar Consulta" permanece facilmente acessível ao toque com o polegar.
