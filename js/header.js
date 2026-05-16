/**
 * ELEC - Unified Header & UI Component System
 */

const UI = {
    config: {
        logoText: "ELEC<br>DASHBOARD",
        version: "V4.0 SANITIZED"
    },

    getBasePath() {
        const path = window.location.pathname;
        if (path.includes('/modules/') || path.includes('/tools/') || path.includes('/blocks/')) {
            if (path.includes('/lean/') || path.includes('/process/')) return '../../';
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
                <a href="${base}index.html#process" class="nav-link">PROCESS</a>
            </nav>

            <div class="header-info-line">
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
                © 2026 ELEC INDUSTRIAL | ${this.config.version} | CONFIDENTIAL
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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UI.init());
} else {
    UI.init();
}
