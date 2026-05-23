/**
 * ELEC Dashboard — Unified Header V5.0
 * Dropdown navigation + theme sync + active page detection
 */

const UI = {
    config: {
        brand: 'ELEC<br>D<span class="blink">A</span>SHBOARD',
        version: 'V5.0'
    },

    getBasePath() {
        const p = window.location.pathname;
        if (p.includes('/lean/') || p.includes('/process/')) return '../../';
        if (p.includes('/modules/') || p.includes('/tools/') || p.includes('/blocks/')) return '../';
        return './';
    },

    getThemeIcon() {
        const theme = document.documentElement.getAttribute('data-theme') || 'dark';
        return theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    },

    isActivePage(href) {
        const current = window.location.pathname;
        return current.endsWith(href.split('/').pop()) ? 'active-page' : '';
    },

    injectHeader() {
        const b = this.getBasePath();
        const ti = this.getThemeIcon();

        const html = `
<header class="app-header" id="elec-header">
  <a href="${b}index.html" class="logo">
    <i class="fas fa-bolt"></i>
    <span>${this.config.brand}</span>
  </a>

  <nav class="app-nav">
    <a href="${b}index.html" class="nav-link-plain">
      <i class="fas fa-home"></i> Főoldal
    </a>

    <div class="nav-dropdown">
      <button class="nav-btn">
        <i class="fas fa-cubes"></i> Modulok
        <i class="fas fa-chevron-down nav-caret"></i>
      </button>
      <div class="dropdown-menu">
        <a href="${b}modules/ai_atad_villany_black.html" class="dropdown-item">
          <i class="fas fa-robot"></i> AI Villany
        </a>
        <a href="${b}modules/efficiency.html" class="dropdown-item">
          <i class="fas fa-bolt"></i> Hatékonyság
        </a>
        <a href="${b}modules/relax_center.html" class="dropdown-item">
          <i class="fas fa-mug-hot"></i> Relax Center
        </a>
        <a href="${b}modules/vibe_code.html" class="dropdown-item">
          <i class="fas fa-code"></i> Vibe Code
        </a>
        <div class="dropdown-divider"></div>
        <a href="${b}modules/lean/index.html" class="dropdown-item">
          <i class="fas fa-keyboard"></i> Billentyűk
        </a>
        <a href="${b}modules/lean/lean_office.html" class="dropdown-item">
          <i class="fas fa-graduation-cap"></i> Lean Iroda
        </a>
      </div>
    </div>

    <div class="nav-dropdown">
      <button class="nav-btn">
        <i class="fas fa-project-diagram"></i> Process
        <i class="fas fa-chevron-down nav-caret"></i>
      </button>
      <div class="dropdown-menu">
        <a href="${b}modules/process/cms.html" class="dropdown-item">
          <i class="fas fa-photo-video"></i> CMS Media
        </a>
        <a href="${b}modules/process/factory_onboarding_plan.html" class="dropdown-item">
          <i class="fas fa-file-invoice"></i> Gyár Kézikönyv
        </a>
        <a href="${b}modules/termeles_tervezo_sap.html" class="dropdown-item">
          <i class="fas fa-clipboard-list"></i> Termelés Tervező
        </a>
      </div>
    </div>

    <div class="nav-dropdown">
      <button class="nav-btn">
        <i class="fas fa-tools"></i> Eszközök
        <i class="fas fa-chevron-down nav-caret"></i>
      </button>
      <div class="dropdown-menu">
        <a href="${b}tools/local_weather.html" class="dropdown-item">
          <i class="fas fa-cloud-sun"></i> Időjárás
        </a>
        <a href="${b}tools/weather_log.html" class="dropdown-item">
          <i class="fas fa-history"></i> Időjárás Napló
        </a>
        <div class="dropdown-divider"></div>
        <a href="${b}tools/pdfreader.html" class="dropdown-item">
          <i class="fas fa-file-pdf"></i> PDF Olvasó
        </a>
        <a href="${b}tools/translator.html" class="dropdown-item">
          <i class="fas fa-language"></i> Fordító
        </a>
        <a href="${b}tools/speech.html" class="dropdown-item">
          <i class="fas fa-volume-up"></i> Felolvasó
        </a>
        <a href="${b}tools/stt.html" class="dropdown-item">
          <i class="fas fa-microphone"></i> Hangfelismerő
        </a>
      </div>
    </div>
  </nav>

  <div class="header-info-line">
    <div class="h-info-item">
      <i class="fas fa-clock"></i>
      <span class="h-info-val" id="global-clock-time" style="font-variant-numeric: tabular-nums; display: inline-block; width: 65px; text-align: center;">--:--:--</span>
    </div>
    <div class="h-info-item" id="h-date-item">
      <i class="fas fa-calendar-alt"></i>
      <span class="h-info-val" id="global-clock-date">--</span>
    </div>
    <div class="h-info-item">
      <i class="fas fa-map-marker-alt"></i>
      <span class="h-info-val">Fonyód</span>
    </div>
    <div class="header-btns">
      <button onclick="App && App.toggleTheme()" class="icon-btn-tiny" id="theme-toggle-btn" title="Témaváltás">
        <i id="theme-toggle-icon" class="${ti}"></i>
      </button>
      <button onclick="App && App.logout()" class="icon-btn-tiny" title="Kilépés">
        <i class="fas fa-sign-out-alt"></i>
      </button>
    </div>
  </div>
</header>`;

        const existing = document.querySelector('.app-header');
        if (existing) {
            existing.outerHTML = html;
        } else {
            document.body.insertAdjacentHTML('afterbegin', html);
        }

        // Inject Ambient Effects from background.html
        if (!document.querySelector('.glow-container')) {
            document.body.insertAdjacentHTML('afterbegin', `
            <div class="glow-container">
                <div class="glow-bl"></div>
                <div class="glow-tl"></div>
            </div>
            <div class="noise"></div>
            `);
        }
    },

    injectFooter() {
        const html = `
<footer class="app-footer">
  <div class="footer-content">
    &copy; 2026 ELEC Industrial &nbsp;|&nbsp; ${this.config.version} &nbsp;|&nbsp; Confidential &nbsp;|&nbsp; Fonyód
  </div>
</footer>`;
        const existing = document.querySelector('.app-footer, footer.app-footer');
        if (existing) {
            existing.outerHTML = html;
        } else {
            document.body.insertAdjacentHTML('beforeend', html);
        }
    },

    syncThemeIcon() {
        const icon = document.getElementById('theme-toggle-icon');
        if (icon) {
            const theme = document.documentElement.getAttribute('data-theme') || 'dark';
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    },

    init() {
        this.injectHeader();
        this.injectFooter();
        // sync icon after App potentially changes theme
        setTimeout(() => this.syncThemeIcon(), 50);
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UI.init());
} else {
    UI.init();
}
