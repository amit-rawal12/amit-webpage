// Typing Effect for Header
const text = "Amit Rawal - Flutter Developer";
let index = 0;

function typeEffect() {
    document.getElementById('typing').innerText = text.slice(0, index++);
    if (index <= text.length) setTimeout(typeEffect, 150);
}

typeEffect();

// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    scrollToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode Toggle
const toggleModeButton = document.createElement('button');
toggleModeButton.textContent = "Switch Mode";
toggleModeButton.style.position = "fixed";
toggleModeButton.style.bottom = "60px";
toggleModeButton.style.right = "20px";
toggleModeButton.style.padding = "10px";
toggleModeButton.style.backgroundColor = "#007BFF";
toggleModeButton.style.color = "white";
toggleModeButton.style.border = "none";
toggleModeButton.style.borderRadius = "5px";
document.body.appendChild(toggleModeButton);

toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
