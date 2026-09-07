# Interface & Layout Contract: Carrossel de Depoimentos

**Feature**: Seção de Comentários sobre Atendimento (Depoimentos de Pacientes)
**Directory**: `specs/008-patient-testimonials/contracts/`

---

## 1. Contrato de Estrutura HTML

```html
<section id="comentarios" class="testimonials-section">
  <div class="container">
    
    <!-- Cabeçalho da Seção -->
    <div class="section-header text-center">
      <span class="section-badge">Experiências Reais</span>
      <h2 class="section-title">Comentários sobre atendimento</h2>
      <p class="section-subtitle">
        Veja o que dizem os pacientes e familiares sobre a atenção, empatia e cuidado neurológico da Dra. Mylana Gama.
      </p>
    </div>

    <!-- Contêiner do Carrossel (Um card por vez) -->
    <div class="testimonial-carousel-container" aria-roledescription="carousel" aria-label="Depoimentos de Pacientes">
      
      <!-- Trilha / Viewport do Carrossel -->
      <div class="testimonial-carousel-track" id="testimonialTrack">
        
        <!-- Slide 1 a 6 -->
        <article class="testimonial-slide active" aria-roledescription="slide" aria-label="1 de 6">
          <div class="testimonial-card">
            <!-- Topo: Nome da pessoa em negrito -->
            <div class="testimonial-card-header">
              <span class="testimonial-author-name">Raquel</span>
              <div class="testimonial-stars" aria-label="Avaliação 5 de 5 estrelas">★★★★★</div>
            </div>

            <!-- Centro: Comentário da pessoa com aspas -->
            <blockquote class="testimonial-card-body">
              <span class="quote-mark quote-start" aria-hidden="true">“</span>
              <p class="testimonial-text">Excelente Médica! Já conhecia a Drª Mylana da Santa Casa e não pensei duas vezes em procurá-la quando precisei.</p>
              <span class="quote-mark quote-end" aria-hidden="true">”</span>
            </blockquote>

            <!-- Rodapé: Fonte do site onde a pessoa comentou a respeito -->
            <div class="testimonial-card-footer">
              <span class="testimonial-source-label">Fonte:</span>
              <span class="testimonial-source-badge badge-doctoralia">Doctoralia</span>
            </div>
          </div>
        </article>

        <!-- Demais slides com a mesma estrutura estrita... -->

      </div>

      <!-- Controles de Navegação -->
      <div class="testimonial-carousel-controls">
        <button type="button" class="carousel-btn btn-prev" id="testimonialPrevBtn" aria-label="Depoimento anterior">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <!-- Indicadores / Dots -->
        <div class="carousel-dots" id="testimonialDots" role="tablist" aria-label="Selecionar depoimento">
          <!-- Botões dos dots gerados ou inseridos estaticamente -->
        </div>

        <button type="button" class="carousel-btn btn-next" id="testimonialNextBtn" aria-label="Próximo depoimento">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

    </div>

  </div>
</section>
```

---

## 2. Contrato de Estilos CSS

### Tokens e Classes
- `.testimonials-section`: Fundo claro com contraste suave (`#f8fbfb` ou `#ffffff`), `padding: 5rem 0;`.
- `.testimonial-carousel-container`: `max-width: 800px; margin: 0 auto; position: relative; overflow: hidden;`.
- `.testimonial-carousel-track`: `display: flex; transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);`.
- `.testimonial-slide`: `flex: 0 0 100%; width: 100%; box-sizing: border-box; padding: 0.5rem 1rem;`.
- `.testimonial-card`: 
  - `background-color: #ffffff;`
  - `border-radius: 20px;`
  - `padding: 2.5rem 2.2rem;`
  - `box-shadow: 0 10px 30px rgba(48, 83, 89, 0.08);`
  - `border: 1px solid rgba(48, 83, 89, 0.1);`
  - `text-align: center;`
- `.testimonial-card-header`:
  - `margin-bottom: 1.25rem;`
  - `.testimonial-author-name`: `font-weight: 700; font-size: 1.35rem; color: #305359;`
- `.testimonial-card-body`:
  - `position: relative; margin: 1.25rem 0 1.5rem 0;`
  - `.testimonial-text`: `font-size: 1.15rem; line-height: 1.75; color: #415e64; font-style: italic;`
  - `.quote-mark`: `font-size: 2rem; color: #305359; opacity: 0.35; font-family: serif;`
- `.testimonial-card-footer`:
  - `display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid rgba(48, 83, 89, 0.08);`
  - `.testimonial-source-badge`: `font-weight: 600; font-size: 0.88rem; padding: 0.35rem 0.9rem; border-radius: 50px; background-color: #eef7f9; color: #305359;`

---

## 3. Contrato de Interatividade JavaScript (Vanilla)

### Eventos e Comportamento
1. **Autoplay 5 segundos**: `setInterval(() => goToNext(), 5000)`.
2. **Pausa por Hover/Foco**: 
   - `mouseenter` / `focusin` no container -> pausa autoplay.
   - `mouseleave` / `focusout` -> reinicia autoplay.
3. **Navegação Manual**:
   - Clique em `prevBtn` -> slide anterior, reinicia timer.
   - Clique em `nextBtn` -> próximo slide, reinicia timer.
   - Clique em `dot` -> slide específico, reinicia timer.
4. **Ciclo Infinito**:
   - No slide 6, clicar em "próximo" (ou decorridos 5s) avança para o slide 1 (`(currentIndex + 1) % totalSlides`).
