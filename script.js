document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Falling Leaves Animation
    createLeaves();
});

function createLeaves() {
    const container = document.body;
    const leafCount = 15; // Number of leaves

    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');

        // Randomize initial position and animation properties
        const startLeft = Math.random() * 100; // 0% to 100%
        const delay = Math.random() * 5; // 0s to 5s delay
        const duration = 10 + Math.random() * 10; // 10s to 20s duration
        const size = 10 + Math.random() * 20; // 10px to 30px size

        leaf.style.left = `${startLeft}vw`;
        leaf.style.animationDelay = `${delay}s`;
        leaf.style.animationDuration = `${duration}s`;
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;

        container.appendChild(leaf);
    }
}
