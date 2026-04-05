// theme.js — loaded on ALL pages via <script src="..." defer>
// The toggle button only exists on the homepage; other pages just get the class applied.

function applyTheme() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    updateToggleIcon();
}

function updateToggleIcon() {
    // The icon span only exists on the homepage — safe to return early if absent
    const icon = document.querySelector('.theme-icon');
    if (!icon) return;
    const isDark = document.body.classList.contains('dark-mode');
    // FIX: Set textContent only — CSS ::before pseudo-element removed to stop double-icon
    icon.textContent = isDark ? '🌙' : '☀️';
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
    updateToggleIcon();
}

// defer guarantees body exists, but DOMContentLoaded is the safe guarantee across all pages
document.addEventListener('DOMContentLoaded', applyTheme);