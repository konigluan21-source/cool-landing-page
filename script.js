// Smooth scrolling für Navigation Links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Scroll-to-Top Animation
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (lastScrollY > 50) {
        navbar.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer für Fade-In Effekte
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Beobachte alle Feature Cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Form Submit Handler
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Hier könnte eine echte Verarbeitung stattfinden
    console.log('Nachricht gesendet:', { name, email, message });
    
    // Bestätigungsnachricht anzeigen
    alert(`Danke ${name}! Deine Nachricht wurde gesendet. 🚀`);
    
    // Form zurücksetzen
    form.reset();
}

// Parallax Effekt für Hero Section
document.addEventListener('mousemove', (e) => {
    const boxes = document.querySelectorAll('.floating-box');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    boxes.forEach((box, index) => {
        const moveX = x * 50 - 25;
        const moveY = y * 50 - 25;
        box.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Animationen beim Laden
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');
    
    heroTitle.style.animation = 'fadeInLeft 0.8s ease-out';
    heroSubtitle.style.animation = 'fadeInLeft 0.8s ease-out 0.2s both';
    ctaButton.style.animation = 'fadeInLeft 0.8s ease-out 0.4s both';
});

// Keyboard Navigation Support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        window.scrollBy(0, 100);
    }
});

console.log('🚀 Coole Landing Page geladen! Viel Spaß!');
