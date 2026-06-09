document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Attivazione immediata delle animazioni per gli elementi visibili all'avvio
    const header = document.querySelector('.timeline-header');
    if (header) header.classList.add('visible');

    // 2. Controllo dello scroll per far apparire i blocchi a serpentina e le icone
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        root: null,
        threshold: 0.10 // Appare appena il blocco entra leggermente nello schermo
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // 3. Gestione della comparsa del pallino "Torna Su"
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 250) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
