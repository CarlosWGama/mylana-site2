# Contract: Site Footer HTML/CSS Contract

**Feature**: `005-footer-contacts`  
**Date**: 2026-09-07  
**Status**: Active Contract

## 1. DOM Hierarchy Contract

The footer MUST close the main content in `index.html`:

```html
<!-- Site Footer -->
<footer class="site-footer">
  <div class="container footer-container">
    
    <!-- 12-Column Grid -->
    <div class="footer-grid">

      <!-- Part 1: Doctor Photo (4/12 on desktop, hidden on mobile) -->
      <div class="footer-col-photo">
        <div class="footer-photo-card">
          <img src="assets/img/contato.jpg" alt="Dra. Mylana Gama - Atendimento e Contato" class="footer-doctor-img" loading="lazy">
        </div>
      </div>

      <!-- Part 2: Contacts & Social Media (8/12 on desktop, 100% on mobile) -->
      <div class="footer-col-content">
        <div class="footer-brand-block">
          <h3 class="footer-title">Dra. Mylana Gama</h3>
          <p class="footer-specialty">Médica Neurologista</p>
          <p class="footer-crm">CRM-AL 7100 | RQE 4871</p>
        </div>

        <div class="footer-contacts-list">
          <!-- Instagram Contact -->
          <a href="https://www.instagram.com/mylanagama.neuro/" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="footer-contact-link">
            <span class="contact-icon instagram-icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <!-- Instagram SVG -->
              </svg>
            </span>
            <div class="contact-text">
              <span class="contact-label">Siga no Instagram</span>
              <strong class="contact-value">@mylanagama.neuro</strong>
            </div>
          </a>

          <!-- Email Contact -->
          <a href="mailto:mylanagama.neurologia@gmail.com" class="footer-contact-link">
            <span class="contact-icon email-icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <!-- Email SVG -->
              </svg>
            </span>
            <div class="contact-text">
              <span class="contact-label">Contato por E-mail</span>
              <strong class="contact-value">mylanagama.neurologia@gmail.com</strong>
            </div>
          </a>
        </div>
      </div>

    </div>

    <!-- Centered Developer Attribution (below the grid) -->
    <div class="footer-bottom-bar">
      <p class="footer-credit-text">Desenvolvido por CarlosWGama</p>
    </div>

  </div>
</footer>
```

## 2. CSS Grid & Responsive Contract

```css
.site-footer {
  background-color: #305359;
  color: #ffffff;
  padding: 4rem 0 1.5rem 0;
}

/* Desktop: 12-Column Grid */
.footer-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2.5rem;
  align-items: center;
}

.footer-col-photo {
  grid-column: span 4; /* 4/12 */
}

.footer-col-content {
  grid-column: span 8; /* 8/12 */
}

.footer-bottom-bar {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: 3rem;
  padding-top: 1.5rem;
  text-align: center;
}

.footer-credit-text {
  font-size: 0.95rem;
  color: #e0edf0;
  margin: 0;
}

/* Mobile Media Query */
@media (max-width: 768px) {
  .footer-col-photo {
    display: none !important; /* Photo hidden on mobile */
  }

  .footer-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .footer-col-content {
    width: 100%;
  }

  .footer-contacts-list {
    flex-direction: column;
    align-items: center;
  }
}
```
