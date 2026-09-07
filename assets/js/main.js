/**
 * Dra. Mylana Gama - Neurologista
 * Script Vanilla JavaScript (main.js)
 * Executado ao final da página de forma não-bloqueante
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Menu Mobile Toggle
  const menuToggleBtn = document.getElementById('mobileMenuToggle');
  const siteNav = document.getElementById('siteNav');

  if (menuToggleBtn && siteNav) {
    menuToggleBtn.addEventListener('click', function () {
      const isExpanded = menuToggleBtn.getAttribute('aria-expanded') === 'true';
      menuToggleBtn.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('active');
    });

    // Fechar menu mobile ao clicar em um link
    const navLinks = siteNav.querySelectorAll('.nav-link, .btn');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (siteNav.classList.contains('active')) {
          siteNav.classList.remove('active');
          menuToggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // 2. Rolagem Suave com Compensação do Cabeçalho Fixo
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.site-header');

  internalLinks.forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 3. Atualização Dinâmica do Ano no Rodapé (se aplicável)
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 4. Carrossel de Depoimentos (1 Card por Vez, Autoplay de 5s, Pausa no Hover)
  const track = document.getElementById('testimonialTrack');
  const slides = track ? track.querySelectorAll('.testimonial-slide') : [];
  const prevBtn = document.getElementById('testimonialPrevBtn');
  const nextBtn = document.getElementById('testimonialNextBtn');
  const dots = document.querySelectorAll('.carousel-dot');
  const carouselContainer = document.querySelector('.testimonial-carousel-container');

  if (track && slides.length > 0) {
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoplayTimer = null;
    const INTERVAL_TIME = 5000; // 5 segundos

    function updateCarousel(index) {
      if (index < 0) {
        currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      // Deslocamento da trilha (100% por slide)
      track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';

      // Atualização de classes ativas nos slides
      slides.forEach(function (slide, idx) {
        if (idx === currentIndex) {
          slide.classList.add('active');
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.classList.remove('active');
          slide.setAttribute('aria-hidden', 'true');
        }
      });

      // Atualização dos indicadores (dots)
      dots.forEach(function (dot, idx) {
        if (idx === currentIndex) {
          dot.classList.add('active');
          dot.setAttribute('aria-selected', 'true');
        } else {
          dot.classList.remove('active');
          dot.setAttribute('aria-selected', 'false');
        }
      });
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(function () {
        updateCarousel(currentIndex + 1);
      }, INTERVAL_TIME);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function resetAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    // Controles manuais: Próximo / Anterior
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        updateCarousel(currentIndex + 1);
        resetAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        updateCarousel(currentIndex - 1);
        resetAutoplay();
      });
    }

    // Controles manuais: Dots
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        const targetIndex = parseInt(this.getAttribute('data-index'), 10);
        if (!isNaN(targetIndex)) {
          updateCarousel(targetIndex);
          resetAutoplay();
        }
      });
    });

    // Pausa no Hover e Retomada
    if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', stopAutoplay);
      carouselContainer.addEventListener('mouseleave', startAutoplay);
      carouselContainer.addEventListener('focusin', stopAutoplay);
      carouselContainer.addEventListener('focusout', startAutoplay);
      carouselContainer.addEventListener('touchstart', stopAutoplay, { passive: true });
      carouselContainer.addEventListener('touchend', startAutoplay, { passive: true });
    }

    // Inicialização
    updateCarousel(0);
    startAutoplay();
  }
});
