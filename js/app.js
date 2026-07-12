let currentLang = 'en';
let currentView = null;
let localeCache = {};

function t(key) {
    return localeCache[key] || DEFAULT_LOCALE[key] || key;
}

async function loadLocale(lang) {
    const localeFile = LOCALE_MAP[lang] || lang;
    if (lang === 'en') {
        localeCache = { ...DEFAULT_LOCALE };
        return;
    }
    try {
        const res = await fetch(`locales/${localeFile}.json`);
        localeCache = await res.json();
    } catch {
        localeCache = { ...DEFAULT_LOCALE };
    }
}

function applyLocale() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
}

async function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    await loadLocale(lang);
    applyLocale();
    if (currentView) renderView(currentView);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
}

function renderBadge(id) {
    const b = BADGES[id];
    if (!b) return;
    const statusLabel = b.status === 'testing' ? `<span class="status testing">${t('in-testing')}</span>`
        : b.status === 'unobtainable' ? `<span class="status unobtainable">${t('unreachable')}</span>`
            : b.difficulty ? `<span class="status difficulty">${t(b.difficulty)}</span>` : '';
    const guideHtml = b.guide && b.guide.length
        ? `<div class="guide"><h3>${t('guide-steps')}</h3><ol>${b.guide.map(s => `<li>${s}</li>`).join('')}</ol></div>`
        : '';
    document.getElementById('mainContent').innerHTML = `
        <div class="badge-detail">
            <div class="badge-detail-header">
                <img src="${b.image}" alt="${b.name}" class="badge-detail-image">
                <div>
                    <h2>${b.name}</h2>
                    ${statusLabel}
                    <p class="badge-description">${b.description}</p>
                </div>
            </div>
            ${guideHtml}
        </div>
    `;
}

function renderTiers(id) {
    const data = TIERS[id];
    if (!data) return;
    document.getElementById('mainContent').innerHTML = `
        <div class="tiers-view">
            <h2>${data.name} — ${t('tiers')}</h2>
            <div class="tiers-grid">
                ${data.levels.map(l => `
                    <div class="tier-card">
                        <img src="${l.image}" alt="${l.label}" class="tier-image">
                        <div class="tier-label">${t(l.label)}</div>
                        <div class="tier-count">${l.count}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderSkinTones() {
    document.getElementById('mainContent').innerHTML = `
        <div class="skin-tones-view">
            <h2>${t('skin-tones')}</h2>
            <p>Quickdraw skin tone variants</p>
            <div class="skin-tones-grid">
                ${SKIN_TONES.map(s => `
                    <div class="skin-tone-card">
                        <img src="${s.image}" alt="${s.tone}">
                        <div class="skin-tone-emoji">${s.emoji}</div>
                        <div class="skin-tone-label">${t(s.tone)}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderHighlights() {
    document.getElementById('mainContent').innerHTML = `
        <div class="highlights-view">
            <h2>${t('highlights')}</h2>
            <table class="highlights-table">
                <thead><tr><th>${t('badge')}</th><th>${t('obtainable')}</th><th>${t('how-to-achieve')}</th></tr></thead>
                <tbody>
                    ${HIGHLIGHTS.map(h => `
                        <tr>
                            <td><strong>${h.name}</strong></td>
                            <td>${h.obtainable ? `<span class="status-yes">${t('yes')}</span>` : `<span class="status-no">${t('no')}</span>`}</td>
                            <td>${h.how}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderView(view) {
    currentView = view;
    document.querySelectorAll('.nav-item').forEach(a => a.classList.toggle('active', a.dataset.view === view.type && a.dataset.id === view.id));
    if (view.type === 'badge') renderBadge(view.id);
    else if (view.type === 'tiers') renderTiers(view.id);
    else if (view.type === 'skin-tones') renderSkinTones();
    else if (view.type === 'highlights') renderHighlights();
}

document.addEventListener('DOMContentLoaded', async () => {
    localeCache = { ...DEFAULT_LOCALE };

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            renderView({ type: item.dataset.view, id: item.dataset.id });
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('sidebarBackdrop').classList.remove('visible');
        });
    });

    document.getElementById('sidebarToggle').addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        const backdrop = document.getElementById('sidebarBackdrop');
        const isOpen = sidebar.classList.toggle('open');
        backdrop.classList.toggle('visible', isOpen);
    });

    document.getElementById('sidebarBackdrop').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebarBackdrop').classList.remove('visible');
    });
});
