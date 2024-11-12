// public/js/theme-toggle.js

// Get the current system preference for dark mode
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Determine the initial theme based on local storage or system preference
function getInitialTheme() {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || (systemPrefersDark ? 'dark' : 'light');
}

// Apply the specified theme to the document
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    toggleIcons(theme);
}

// Toggle the theme between dark and light modes
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
}

// Toggle icons based on the current theme
function toggleIcons(theme) {
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    if (theme === 'dark') {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
}

// Initialize the theme on page load
function initializeTheme() {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);
}

// Set up the theme toggle event listener
function setupToggleEvent() {
    const toggleElement = document.getElementById('theme-toggle');
    if (toggleElement) {
        toggleElement.addEventListener('click', toggleTheme);
    } else {
        console.warn('Theme toggle element not found');
    }
}

// Execute initialization logic when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    setupToggleEvent();
});
