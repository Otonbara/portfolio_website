// Loading Screen
window.onload = function() {
    const loadingText = document.getElementById('loading-text');

    // Move Goku and then show text
    setTimeout(function() {
        loadingText.style.display = 'block'; // Show the loading text
        loadingText.style.opacity = 1; // Fade in the text
    }, 3000); // Show text after Goku finishes moving

    // Hide the loading screen after an additional 3 seconds
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none'; // Hide the loading screen
    }, 1850); // Total of 6 seconds before hiding the loading screen
};

// Dark & Light Mode Switch
const toggle = document.getElementById('toggle');
const body = document.body;

// Load theme preference from localStorage (if exists)
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    toggle.checked = true;
}

toggle.addEventListener('change', () => {
    body.classList.toggle('light-mode');

    // Save theme preference in localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});