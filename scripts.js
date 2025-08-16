// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations - FIXED VERSION
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Make all content visible immediately and then observe for animations
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all content is visible first
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        observer.observe(el);
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(44, 62, 80, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(44, 62, 80, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Dynamic typing effect for hero subtitle
const subtitle = document.querySelector('.hero-subtitle');
const titles = [
    'Virtual Assistant & Data Analytics Professional',
    'IT Infrastructure & Support Specialist',
    'Lead Generation & Research Expert',
    'Business Process Optimization Professional'
];

let currentTitle = 0;

function changeTitle() {
    subtitle.style.opacity = '0';
    setTimeout(() => {
        currentTitle = (currentTitle + 1) % titles.length;
        subtitle.textContent = titles[currentTitle];
        subtitle.style.opacity = '1';
    }, 500);
}

// Change title every 4 seconds
setInterval(changeTitle, 4000);

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-5px) scale(1)';
    });
});

// Particle effect for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(212, 175, 55, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s infinite linear;
            pointer-events: none;
        `;
        hero.appendChild(particle);
    }
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

// Add click tracking for analytics
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('project-link') || 
        e.target.classList.contains('cta-button')) {
        console.log(`Portfolio Click: ${e.target.textContent} - ${new Date().toISOString()}`);
    }
});

// Add professional animations to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// FIXED: Enhanced contact card interactions with proper URL handling
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent.trim();
        console.log('Clicked card title:', title); // Debug log
        
        if (title === 'Email') {
            window.location.href = 'mailto:olamilekan9194@gmail.com';
        } else if (title === 'LinkedIn') {
            window.open('https://linkedin.com/in/nurudeen-olalere', '_blank');
        } else if (title === 'Phone') {
            window.location.href = 'tel:+2347045608751';
        } else if (title === 'Upwork Profile') {
            window.open('https://www.upwork.com/freelancers/~019b945a107bea2534', '_blank');
        } else if (title === 'Resume') {
            window.open('https://drive.google.com/file/d/1VvUkdvyv5L8rMadVbOak9zddYNz3yCUj/view?usp=sharing', '_blank');
        }
    });
});

// Add loading animation for stats
const stats = document.querySelectorAll('.stat-number');
const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/\D/g, ''));
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + suffix;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + suffix;
            }
        }, 30);
    });
};

// Trigger stats animation when section comes into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
});

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Profile picture error handling and fallback - CORRECTION POINT
document.addEventListener('DOMContentLoaded', function() {
    // IMMEDIATE CONTENT VISIBILITY FIX
    const allElements = document.querySelectorAll('.stat-item, .skill-card, .project-card, .timeline-item, .contact-card, .fade-in');
    allElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.visibility = 'visible';
        el.style.display = el.style.display || 'block';
    });

    const profileImg = document.getElementById('profileImg');
    const placeholder = document.querySelector('.profile-placeholder');
    
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            // If image fails to load, show placeholder
            this.style.display = 'none';
            if (placeholder) placeholder.style.opacity = '1';
        });
        
        profileImg.addEventListener('load', function() {
            // If image loads successfully, hide placeholder
            if (placeholder) placeholder.style.opacity = '0';
        });
        
        // Check if image source exists
        if (!profileImg.src || profileImg.src.includes('profile.jpg')) {
            // If no valid source, show placeholder
            profileImg.style.display = 'none';
            if (placeholder) placeholder.style.opacity = '1';
        }
    }
});