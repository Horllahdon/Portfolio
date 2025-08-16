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
            animation: moveParticle ${Math.random() * 10 + 10}s linear infinite;
        `;
        hero.appendChild(particle);
    }
}
createParticles();

// Stats section animation
const statsObserverOptions = {
    threshold: 0.5
};

const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.stat-item').forEach(stat => {
                stat.classList.add('visible');
            });
        }
    });
}, statsObserverOptions);

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