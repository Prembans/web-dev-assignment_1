function applyTheme() {
    const darkMode = localStorage.getItem('darkMode');
    const body = document.body;
    
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Trigger as soon as the window starts loading
window.onload = applyTheme;

// Trigger when the page content is loaded
document.addEventListener("DOMContentLoaded", applyTheme);

// Toggle function for the button
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }
}