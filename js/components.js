// Basil Bistro - Reusable Components
// This file eliminates header/footer duplication across pages

// Google Ads Conversion Tracking
function trackConversion(conversionType) {
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-16466652766/n7gPCPPYvssbEN7c9Ks9',
      'event_callback': function() {
        console.log('Conversion tracked: ' + conversionType);
      }
    });
  }
}

const BasilBistro = {
  // Site configuration - single source of truth
  config: {
    phone: '919603692222',
    email: 'infobasilbistro@gmail.com',
    whatsappLink: 'https://api.whatsapp.com/send?phone=919603692222',
    zomatoLink: 'https://www.zomato.com/hyderabad/basil-bistro-4-kompally',
    zomatoOrderLink: 'https://zomato.onelink.me/xqzv/rndzibes',
    swiggyLink: 'https://www.swiggy.com/city/hyderabad/basil-bistro-medchal-kompally-rest806816',
    swiggyOrderLink: 'https://www.swiggy.com/direct/brand/42179?source=swiggy-direct&subSource=generic',
    instagramLink: 'https://www.instagram.com/basilbistro.kompally',
    facebookLink: 'https://www.facebook.com/basilbistro.kompally',
    twitterLink: 'https://x.com/BasilBistroHyd',
    youtubeLink: 'https://www.youtube.com/@basilbistro',
    address: 'H.No 3-65/10, Devi Homes,<br>Ruby Block, Kompally,<br>Hyderabad, Telangana, 500014.',
    hours: 'Mon - Thu: 10 AM - 11 PM<br>Fri - Sun: 9 AM - 11 PM'
  },

  // SVG Icons
  icons: {
    whatsapp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.52 3.48C18.25 1.25 15.16 0 12 0 5.48 0 .16 5.32.16 11.88c0 2.1.55 4.16 1.59 6l-1.69 6.16 6.32-1.66c1.76.94 3.78 1.44 5.85 1.44h.01c6.52 0 11.84-5.32 11.84-11.88 0-3.16-1.25-6.25-3.48-8.52zM12 21.6c-1.82 0-3.6-.49-5.16-1.41l-.37-.22-3.83 1.01.98-3.57-.24-.38C3.51 15.94 3.05 13.96 3.05 11.88c0-5.4 4.4-9.8 9.8-9.8 2.61 0 5.06 1.01 6.9 2.85 1.84 1.84 2.85 4.29 2.85 6.9 0 5.4-4.4 9.8-9.8 9.8zm5.37-7.35c-.29-.15-1.73-.86-2-.96-.27-.1-.47-.15-.67.15-.2.3-.77 1.14-.94 1.37-.17.22-.34.25-.63.09-1.78-.88-2.94-1.55-4.11-3.54-.28-.48.28-1.47 1.28-2.37.14-.1.17-.28.04-.44-.12-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.38-1.77 1.9-.92 4.78 1.75 7.6 2.82 2.82 5.36 3.48 6.28 3.65.27.05.43-.13.6-.38.14-.22.55-.86.7-1.16.15-.3.29-.25.48-.15.19.1 1.2.56 1.4.67.2.11.33.17.38.26.05.09.05.52-.13.93-.18.41-1.1 1.02-1.49 1.11z"/>
    </svg>`,
    phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>`,
    email: `<svg width="18" height="18" viewBox="0 0 24 24" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>`,
    instagram: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="instagramGradient" cx="30%" cy="107%" r="150%">
          <stop offset="0%" style="stop-color:#fdf497"/>
          <stop offset="5%" style="stop-color:#fdf497"/>
          <stop offset="45%" style="stop-color:#fd5949"/>
          <stop offset="60%" style="stop-color:#d6249f"/>
          <stop offset="90%" style="stop-color:#285AEB"/>
        </radialGradient>
      </defs>
      <path fill="url(#instagramGradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
    </svg>`,
    facebook: `<svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>`,
    twitter: `<svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>`,
    youtube: `<svg width="24" height="24" viewBox="0 0 24 24" fill="#FF0000" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C.5 8.07.5 12 .5 12s0 3.93.479 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136c.479-1.884.479-5.814.479-5.814s0-3.93-.479-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>`
  },

  // Get current page for active nav highlighting
  getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('menu')) return 'menu';
    if (path.includes('contact')) return 'contact';
    return 'home';
  },

  // Generate Header HTML
  renderHeader() {
    const currentPage = this.getCurrentPage();
    return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="index.html" class="logo-link"><h1 class="logo">Basil Bistro</h1></a>
        <div class="header-order-icons">
          <a href="${this.config.whatsappLink}" onclick="trackConversion('whatsapp_header')" aria-label="Order on WhatsApp" title="WhatsApp" target="_blank" rel="noopener noreferrer" class="whatsapp-icon">
            ${this.icons.whatsapp}
          </a>
          <a href="${this.config.zomatoLink}" onclick="trackConversion('zomato_header')" aria-label="Order on Zomato" title="Zomato" target="_blank" rel="noopener noreferrer" class="zomato-icon">
            <img src="images/svg/zomato.png" alt="Zomato" width="75" height="75">
          </a>
          <a href="${this.config.swiggyLink}" onclick="trackConversion('swiggy_header')" aria-label="Order on Swiggy" title="Swiggy" target="_blank" rel="noopener noreferrer" class="swiggy-icon">
            <img src="images/svg/swiggy.svg" alt="Swiggy" width="24" height="24">
          </a>
        </div>
        <button class="mobile-menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="site-nav">
          <a href="index.html" ${currentPage === 'home' ? 'class="active"' : ''}>Home</a>
          <a href="menu.html" ${currentPage === 'menu' ? 'class="active"' : ''}>Menu</a>
          <a href="contact.html" ${currentPage === 'contact' ? 'class="active"' : ''}>Contact</a>
        </nav>
      </div>
    </header>`;
  },

  // Generate Footer HTML
  renderFooter() {
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-section">
            <h4>Address</h4>
            <p>${this.config.address}</p>
          </div>

          <div class="footer-section">
            <h4>Hours</h4>
            <p>${this.config.hours}</p>
          </div>

          <div class="footer-section">
            <h4>Contact Us</h4>
            <p style="margin: 0;">
              <a href="tel:${this.config.phone}" onclick="trackConversion('phone_click')" style="color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                ${this.icons.phone}
                <span style="font-size: 1.1rem;">${this.config.phone.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3')}</span>
              </a>
              <a href="mailto:${this.config.email}" onclick="trackConversion('email_click')" style="color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
                ${this.icons.email}
                <span style="font-size: 1.1rem;">${this.config.email}</span>
              </a>
            </p>
          </div>

          <div class="footer-section">
            <h4>Find Us On</h4>
            <div class="social-icons">
              <a href="${this.config.instagramLink}" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer" class="social-instagram">
                ${this.icons.instagram}
              </a>
              <a href="${this.config.facebookLink}" aria-label="Facebook" title="Facebook" target="_blank" rel="noopener noreferrer" class="social-facebook">
                ${this.icons.facebook}
              </a>
              <a href="${this.config.twitterLink}" aria-label="Twitter" title="Twitter" target="_blank" rel="noopener noreferrer" class="social-twitter">
                ${this.icons.twitter}
              </a>
              <a href="${this.config.youtubeLink}" aria-label="YouTube" title="YouTube" target="_blank" rel="noopener noreferrer" class="social-youtube">
                ${this.icons.youtube}
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h4>Order On</h4>
            <div class="order-icons">
              <a href="${this.config.whatsappLink}" onclick="trackConversion('whatsapp_footer')" aria-label="WhatsApp" title="WhatsApp" target="_blank" rel="noopener noreferrer" class="whatsapp-icon">
                ${this.icons.whatsapp}
              </a>
              <a href="${this.config.zomatoOrderLink}" onclick="trackConversion('zomato_footer')" aria-label="Zomato" title="Zomato" target="_blank" rel="noopener noreferrer">
                <img src="images/svg/zomato.png" alt="Zomato" width="38" height="38">
              </a>
              <a href="${this.config.swiggyOrderLink}" onclick="trackConversion('swiggy_footer')" aria-label="Swiggy" title="Swiggy" target="_blank" rel="noopener noreferrer">
                <img src="images/svg/swiggy.svg" alt="Swiggy" width="38" height="38">
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>`;
  },

  // Initialize components
  init() {
    // Insert header at placeholder or beginning of body
    const headerPlaceholder = document.getElementById('header-component');
    if (headerPlaceholder) {
      headerPlaceholder.outerHTML = this.renderHeader();
    }

    // Insert footer at placeholder or end of body
    const footerPlaceholder = document.getElementById('footer-component');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = this.renderFooter();
    }

    // Re-initialize mobile menu after header is inserted
    this.initMobileMenu();
  },

  // Mobile menu functionality (moved from menu.js)
  initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.site-nav');
    
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
      });

      // Close menu when clicking a link
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('active');
          toggle.classList.remove('active');
        });
      });
    }
  }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => BasilBistro.init());
