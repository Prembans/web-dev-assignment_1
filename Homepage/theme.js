// Wait for the HTML body to actually exist before we try to change its color!
document.addEventListener("DOMContentLoaded", function() {
    // Check local storage on page load and apply dark mode if needed
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});

// Function to toggle dark mode (triggered by your button)
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    // Save the user's preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}