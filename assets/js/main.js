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
});
