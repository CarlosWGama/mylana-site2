# Quickstart & Validation Guide: Carrossel de Comentários

**Feature**: Seção de Comentários sobre Atendimento (Depoimentos de Pacientes)
**Directory**: `specs/008-patient-testimonials/`

---

## 1. Pré-Requisitos e Ambiente
- Servidor web local ativo (Apache no XAMPP ou servidor estático).
- URL de teste: `http://localhost/mylana/`
- Arquivos inspecionados:
  - `index.html`
  - `assets/css/style.css`
  - `assets/css/responsive.css`
  - `assets/js/main.js`

---

## 2. Cenários de Validação

### Cenário 1: Posicionamento e Renderização Inicial
1. Abra `http://localhost/mylana/` no navegador.
2. Role a página até a seção de "Agendamento de Consultas".
3. Imediatamente após o agendamento e antes do rodapé de contatos, verifique a nova seção:
   - Título: **"Comentários sobre atendimento"**.
   - Visibilidade: **Apenas 1 único comentário visível por vez**.
   - Estrutura do card:
     - Topo: Nome da pessoa em negrito (ex.: **Raquel**).
     - Centro: Comentário entre aspas tipográficas (`“ ... ”`).
     - Rodapé: Fonte do site onde a pessoa comentou (ex.: `Fonte: Doctoralia`).

### Cenário 2: Autoplay de 5 Segundos
1. Mantenha o cursor fora do card e aguarde 5 segundos.
2. **Resultado esperado**: O carrossel transita suavemente para o segundo depoimento (**Milene Vieira**).
3. Aguarde mais 5 segundos para verificar a transição subsequente para **Antônio Carlos Malafaia Ferreira**, sucessivamente até o sexto depoimento e retornando ao primeiro de forma circular.

### Cenário 3: Pausa no Hover e Retomada
1. Posicione o cursor do mouse sobre o card de comentário em exibição.
2. Aguarde mais de 5 segundos com o mouse sobre o card.
3. **Resultado esperado**: O carrossel permanece pausado no comentário atual para permitir leitura tranquila.
4. Retire o cursor do mouse do contêiner.
5. **Resultado esperado**: O carrossel retoma a troca automática após 5 segundos.

### Cenário 4: Controles Manuais (Setas e Dots)
1. Clique no botão de seta para a direita (`>` ou Próximo).
2. **Resultado esperado**: O carrossel avança imediatamente para o slide seguinte e o timer de 5s é reiniciado.
3. Clique em um dos dots/indicadores inferiores.
4. **Resultado esperado**: O carrossel transita diretamente para o comentário correspondente ao dot clicado.

### Cenário 5: Responsividade em Dispositivos Móveis
1. Abra as Ferramentas de Desenvolvedor (F12) e ative a emulação mobile (ex.: 375px ou 412px).
2. Verifique o card de comentário:
   - Largura fluida ocupando 100% da largura útil sem barra de rolagem horizontal.
   - Textos confortavelmente legíveis.
   - Botões e dots acessíveis para toque.
