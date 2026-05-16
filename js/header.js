/**
 * ELEC - Unified Header & UI Component System
 */

const UI = {
    config: {
        logoText: "IRODAI<br>ASSZISZTENS",
        version: "V3.60"
    },

    getBasePath() {
        // Calculate relative path to root based on current depth
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length;
        // This is a bit tricky for local files. 
        // Let's assume a standard structure where index.html is in the root.
        if (path.includes('/modules/') || path.includes('/tools/') || path.includes('/blocks/')) {
            if (path.includes('/lean/')) return '../../';
            return '../';
        }
        return './';
    },

    injectHeader() {
        const base = this.getBasePath();
        const headerHTML = `
        <header class="app-header">
            <a href="${base}index.html" class="logo">
                <i class="fab fa-android"></i>
                <span>${this.config.logoText}</span>
            </a>
            
            <nav class="app-nav">
                <a href="${base}index.html#modulok" class="nav-link">MODULOK</a>
                <a href="${base}index.html#blokkok" class="nav-link">BLOKKOK</a>
                <a href="${base}index.html#eszközök" class="nav-link">ESZKÖZÖK</a>
            </nav>

            <div class="header-info-line">
                <div class="h-info-item"><i class="fas fa-sun"></i> <span class="h-info-val h-info-item-sun">--:-- | --:--</span></div>
                <div class="h-info-item"><i class="fas fa-thermometer-half"></i> <span class="h-info-val" id="header-temp-val">--°C</span></div>
                <div class="h-info-item"><i class="fas fa-clock"></i> <span class="h-info-val" id="global-clock-time">00:00:00</span></div>
                <div class="h-info-item"><i class="fas fa-calendar-alt"></i> <span class="h-info-val" id="global-clock-date">----. --. --.</span></div>
                <div class="h-info-item"><i class="fas fa-map-marker-alt"></i> <span class="h-info-val">Nagyatád</span></div>
                <div class="header-btns">
                    <button onclick="App.toggleTheme()" class="icon-btn-tiny" title="Téma"><i id="theme-toggle-icon" class="fas fa-moon"></i></button>
                    <button onclick="App.logout()" class="icon-btn-tiny" title="Kilépés"><i class="fas fa-sign-out-alt"></i></button>
                </div>
            </div>
        </header>
        `;

        const existingHeader = document.querySelector('.app-header');
        if (existingHeader) {
            existingHeader.outerHTML = headerHTML;
        } else {
            document.body.insertAdjacentHTML('afterbegin', headerHTML);
        }
    },

    injectFooter() {
        const footerHTML = `
        <footer class="app-footer">
            <div class="footer-content">
                © 2024-2026 Irodai Asszisztens | ${this.config.version} | Minden jog fenntartva.
            </div>
        </footer>
        `;
        const existingFooter = document.querySelector('footer');
        if (existingFooter) {
            existingFooter.outerHTML = footerHTML;
        } else {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    },

    init() {
        this.injectHeader();
        this.injectFooter();
    }
};

// Auto-init when script is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UI.init());
} else {
    UI.init();
}
