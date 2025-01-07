// Loading Screen
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('fade-out');
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        navLinks.classList.add('active');
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    menuOpen = !menuOpen;
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.menu-btn')) {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        menuOpen = false;
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        menuOpen = false;
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Performance optimization for mobile
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});
