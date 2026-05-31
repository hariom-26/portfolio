// 1. We find the button on the page using its ID
const themeToggleBtn = document.getElementById('theme-toggle');

// 2. We find the main body of the webpage
const body = document.body;

// 3. We tell the button to listen for a 'click'
themeToggleBtn.addEventListener('click', () => {
    
    // 4. When clicked, it adds or removes the 'dark-mode' style to the body
    body.classList.toggle('dark-mode');
    
    // 5. If dark mode is active, change the text to 'Light Mode'
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } 
    // 6. Otherwise, change the text back to 'Dark Mode'
    else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});