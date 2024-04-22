// script.js
const h1 = document.getElementById('welcome');
const originalText = h1.textContent

h1.addEventListener('mouseover', () => {
    h1.textContent = 'Hello Vidya';
});

h1.addEventListener('mouseout', () => {
    h1.textContent = originalText;
});
