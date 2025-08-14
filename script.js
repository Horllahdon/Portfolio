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

// Project Modal Content Data
const projectData = {
    'b2b-lead-generation': {
        title: 'B2B Lead Generation Database - Project Details',
        content: `
            <h3>Project Overview</h3>
            <p>Comprehensive B2B lead generation project utilizing Apollo.io premium database to deliver high-quality, verified contacts across multiple industry verticals.</p>
            
            <h3>Key Deliverables</h3>
            <ul>
                <li>1,000+ verified B2B contacts with 95%+ email accuracy</li>
                <li>500+ C-Suite executives (CEOs, CTOs, CMOs, VPs)</li>
                <li>Coverage across 9 major industry verticals</li>
                <li>Complete contact profiles with LinkedIn URLs</li>
                <li>Industry-specific segmentation and categorization</li>
                <li>Email verification using multiple validation tools</li>
            </ul>

            <h3>Industries Covered</h3>
            <ul>
                <li>Technology & Software</li>
                <li>Healthcare & Medical</li>
                <li>Financial Services</li>
                <li>Manufacturing</li>
                <li>Professional Services</li>
                <li>E-commerce & Retail</li>
                <li>Real Estate</li>
                <li>Education</li>
                <li>Marketing & Advertising</li>
            </ul>

            <h3>Tools & Technologies Used</h3>
            <ul>
                <li>Apollo.io Premium Database</li>
                <li>Email verification tools (Hunter.io, Clearbit)</li>
                <li>LinkedIn Sales Navigator</li>
                <li>Google Sheets for data organization</li>
                <li>Advanced filtering and search techniques</li>
            </ul>

            <h3>Quality Assurance Process</h3>
            <ul>
                <li>Multi-stage email verification process</li>
                <li>Manual verification of executive positions</li>
                <li>LinkedIn profile cross-referencing</li>
                <li>Company information validation</li>
                <li>Duplicate removal and data cleaning</li>
            </ul>
        `
    },
    'job-application-system': {
        title: 'Automated Job Application System - Case Study',
        content: `
            <h3>Client Challenge</h3>
            <p>Isabella Gonzalez needed to streamline her job application process while maintaining personalization and tracking accuracy. Manual applications were time-consuming and difficult to track effectively.</p>
            
            <h3>Solution Implemented</h3>
            <ul>
                <li>Automated application workflow across multiple job platforms</li>
                <li>Personalized cover letter and resume customization system</li>
                <li>Comprehensive tracking spreadsheet with status updates</li>
                <li>Weekly reporting and analytics dashboard</li>
                <li>Follow-up reminder system</li>
            </ul>

            <h3>Platforms Integrated</h3>
            <ul>
                <li>LinkedIn Jobs</li>
                <li>Indeed</li>
                <li>Glassdoor</li>
                <li>ZipRecruiter</li>
                <li>Company career pages</li>
                <li>Industry-specific job boards</li>
            </ul>

            <h3>Results Achieved</h3>
            <ul>
                <li>150+ weekly applications consistently submitted</li>
                <li>30% reduction in application time</li>
                <li>100% tracking accuracy maintained</li>
                <li>Improved response rate due to personalization</li>
                <li>Better interview scheduling management</li>
            </ul>

            <h3>Impact & Outcomes</h3>
            <ul>
                <li>Increased job application volume by 300%</li>
                <li>Enhanced application quality through template optimization</li>
                <li>Reduced administrative burden by 4 hours per week</li>
                <li>Improved job search strategy through data analytics</li>
            </ul>
        `
    },
    'job-application-methodology': {
        title: 'Job Application Automation - Methodology',
        content: `
            <h3>Phase 1: Assessment & Planning</h3>
            <ul>
                <li>Current process analysis and bottleneck identification</li>
                <li>Platform research and selection</li>
                <li>Template creation for resumes and cover letters</li>
                <li>Tracking system design and implementation</li>
            </ul>

            <h3>Phase 2: Automation Setup</h3>
            <ul>
                <li>Browser automation tools configuration</li>
                <li>Form auto-fill setup for common application fields</li>
                <li>Document management system organization</li>
                <li>Scheduling and reminder system implementation</li>
            </ul>

            <h3>Phase 3: Quality Control</h3>
            <ul>
                <li>Application review process establishment</li>
                <li>Error detection and correction protocols</li>
                <li>A/B testing for application effectiveness</li>
                <li>Continuous optimization based on results</li>
            </ul>

            <h3>Tools & Technologies</h3>
            <ul>
                <li>Browser automation (Selenium WebDriver)</li>
                <li>Google Sheets API for tracking</li>
                <li>Gmail API for email management</li>
                <li>Calendar integration for scheduling</li>
                <li>Data validation and error handling</li>
            </ul>

            <h3>Success Metrics</h3>
            <ul>
                <li>Application volume increase</li>
                <li>Time savings per application</li>
                <li>Response rate improvement</li>
                <li>Interview conversion rate</li>
                <li>Overall job search efficiency</li>
            </ul>
        `
    },
    'fundraising-event': {
        title: 'Fundraising Event Coordination - Event Details',
        content: `
            <h3>Event Overview</h3>
            <p>High-profile fundraising event for Supportifly with $500K campaign goal, requiring comprehensive coordination of venue, catering, stakeholder management, and logistical planning.</p>
            
            <h3>Event Specifications</h3>
            <ul>
                <li>Target audience: 200+ attendees</li>
                <li>Duration: Full-day event (8 hours)</li>
                <li>Multiple session formats (presentations, networking, dinner)</li>
                <li>VIP donor recognition program</li>
                <li>Live streaming capabilities for remote participants</li>
            </ul>

            <h3>Coordination Responsibilities</h3>
            <ul>
                <li>Venue selection and contract negotiation</li>
                <li>Catering menu planning and dietary accommodations</li>
                <li>Audio/visual equipment setup and testing</li>
                <li>Guest registration and check-in system</li>
                <li>Speaker coordination and presentation management</li>
                <li>Photography and videography arrangements</li>
            </ul>

            <h3>Stakeholder Management</h3>
            <ul>
                <li>Board member communication and updates</li>
                <li>Donor relations and VIP coordination</li>
                <li>Vendor management and timeline coordination</li>
                <li>Volunteer recruitment and training</li>
                <li>Media relations and press coverage</li>
            </ul>

            <h3>Results & Impact</h3>
            <ul>
                <li>Successfully exceeded $500K fundraising goal by 15%</li>
                <li>100% on-time delivery of all event components</li>
                <li>Zero major incidents or logistical issues</li>
                <li>98% attendee satisfaction rate</li>
                <li>Secured commitments for future donations</li>
            </ul>
        `
    },
    'planning-process': {
        title: 'Event Planning Process & Methodology',
        content: `
            <h3>Pre-Planning Phase (8 weeks before)</h3>
            <ul>
                <li>Goal setting and budget allocation</li>
                <li>Venue research and site visits</li>
                <li>Save-the-date distribution</li>
                <li>Initial vendor outreach</li>
                <li>Team role assignments</li>
            </ul>

            <h3>Detailed Planning Phase (6 weeks before)</h3>
            <ul>
                <li>Final venue booking and contract execution</li>
                <li>Catering menu finalization</li>
                <li>Invitation design and distribution</li>
                <li>Registration system setup</li>
                <li>Speaker confirmations and content review</li>
            </ul>

            <h3>Execution Phase (4 weeks before)</h3>
            <ul>
                <li>Final headcount confirmations</li>
                <li>Vendor final briefings and walkthroughs</li>
                <li>Volunteer training sessions</li>
                <li>Contingency planning and backup arrangements</li>
                <li>Day-of timeline creation and distribution</li>
            </ul>

            <h3>Day-of-Event Management</h3>
            <ul>
                <li>Early morning venue setup supervision</li>
                <li>Real-time coordination and problem-solving</li>
                <li>Guest experience management</li>
                <li>Timeline adherence and adjustment</li>
                <li>Post-event breakdown coordination</li>
            </ul>

            <h3>Post-Event Activities</h3>
            <ul>
                <li>Thank you notes and follow-up communications</li>
                <li>Final financial reconciliation</li>
                <li>Vendor feedback and payment processing</li>
                <li>Event success analysis and reporting</li>
                <li>Lessons learned documentation</li>
            </ul>
        `
    },
    'it-infrastructure': {
        title: 'IT Infrastructure Optimization - Technical Details',
        content: `
            <h3>System Architecture</h3>
            <p>Comprehensive infrastructure overhaul for FutureMinds Development Initiative, serving 8+ users with automated backup systems and network optimization.</p>
            
            <h3>Backup System Implementation</h3>
            <ul>
                <li>Automated daily, weekly, and monthly backup schedules</li>
                <li>Cloud storage integration (Google Drive, Dropbox Business)</li>
                <li>Local redundancy with external drive rotation</li>
                <li>Database backup with point-in-time recovery</li>
                <li>File versioning and retention policies</li>
                <li>Automated backup verification and integrity checks</li>
            </ul>

            <h3>Network Infrastructure</h3>
            <ul>
                <li>Network topology redesign for optimal performance</li>
                <li>Ethernet and Wi-Fi infrastructure upgrade</li>
                <li>VLAN segmentation for security and performance</li>
                <li>Bandwidth monitoring and optimization</li>
                <li>Quality of Service (QoS) implementation</li>
                <li>Network security protocols and firewall configuration</li>
            </ul>

            <h3>Server Configuration</h3>
            <ul>
                <li>Windows Server 2019 deployment and configuration</li>
                <li>Active Directory setup for user management</li>
                <li>File server with shared drive organization</li>
                <li>Print server for centralized printing</li>
                <li>Email server configuration and management</li>
                <li>Remote access VPN setup</li>
            </ul>

            <h3>Security Measures</h3>
            <ul>
                <li>Endpoint protection deployment across all workstations</li>
                <li>Regular security updates and patch management</li>
                <li>User access control and privilege management</li>
                <li>Network monitoring and intrusion detection</li>
                <li>Data encryption for sensitive information</li>
                <li>Security awareness training for staff</li>
            </ul>
        `
    },
    'it-results': {
        title: 'IT Infrastructure Optimization - Results & Impact',
        content: `
            <h3>Performance Improvements</h3>
            <ul>
                <li>99.9% backup success rate achieved</li>
                <li>60% reduction in data recovery time</li>
                <li>40% decrease in network-related service interruptions</li>
                <li>50% improvement in file access speeds</li>
                <li>25% increase in overall system reliability</li>
            </ul>

            <h3>Operational Benefits</h3>
            <ul>
                <li>Eliminated manual backup processes</li>
                <li>Reduced IT support tickets by 45%</li>
                <li>Improved staff productivity through better system performance</li>
                <li>Enhanced data security and compliance</li>
                <li>Streamlined remote work capabilities</li>
            </ul>

            <h3>User Experience Enhancements</h3>
            <ul>
                <li>Faster login times and application loading</li>
                <li>Improved file sharing and collaboration</li>
                <li>Reduced downtime and system interruptions</li>
                <li>Better print management and queue handling</li>
                <li>Enhanced email performance and reliability</li>
            </ul>

            <h3>Cost Savings</h3>
            <ul>
                <li>30% reduction in IT maintenance costs</li>
                <li>Decreased hardware replacement frequency</li>
                <li>Reduced external IT support requirements</li>
                <li>Lower data loss risk and recovery costs</li>
                <li>Improved energy efficiency</li>
            </ul>

            <h3>Long-term Impact</h3>
            <ul>
                <li>Scalable infrastructure ready for organizational growth</li>
                <li>Established best practices for ongoing maintenance</li>
                <li>Improved disaster recovery capabilities</li>
                <li>Enhanced cybersecurity posture</li>
                <li>Foundation for future technology upgrades</li>
            </ul>
        `
    }
};

// Project Modal Functions
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    if (projectData[projectId]) {
        modalContent.innerHTML = `
            <h2>${projectData[projectId].title}</h2>
            ${projectData[projectId].content}
            <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #34495e;">
                <h3>Need More Information?</h3>
                <p>Contact me directly for detailed project documentation, code samples, or to discuss similar projects for your organization.</p>
                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
                    <a href="mailto:olamilekan9194@gmail.com?subject=Project Inquiry - ${projectData[projectId].title}" 
                       style="background: linear-gradient(45deg, #d4af37, #b8860b); color: #2c3e50; padding: 0.75rem 1.5rem; border-radius: 25px; text-decoration: none; font-weight: 600;">
                       Request Details
                    </a>
                    <a href="https://drive.google.com/drive/folders/YOUR_FOLDER_ID" target="_blank"
                       style="background: transparent; color: #d4af37; border: 2px solid #d4af37; padding: 0.75rem 1.5rem; border-radius: 25px; text-decoration: none; font-weight: 600;">
                       View Files
                    </a>
                </div>
            </div>
        `;
    } else {
        modalContent.innerHTML = `
            <h2>Project Information</h2>
            <p>Detailed information for this project is being updated. Please contact me directly for more details.</p>
            <div style="text-align: center; margin-top: 2rem;">
                <a href="mailto:olamilekan9194@gmail.com?subject=Project Inquiry" 
                   style="background: linear-gradient(45deg, #d4af37, #b8860b); color: #2c3e50; padding: 1rem 2rem; border-radius: 25px; text-decoration: none; font-weight: 600;">
                   Contact Me
                </a>
            </div>
        `;
    }
    
    modal.style.display = 'block';
}

// Modal close functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Contact Form Functionality
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create email body
    const emailBody = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    
    // Create mailto link
    const mailtoLink = `mailto:olamilekan9194@gmail.com?subject=Portfolio Contact Form - ${firstName} ${lastName}&body=${emailBody}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! Your email client should open now. If not, please email me directly at olamilekan9194@gmail.com');
    
    // Reset form
    this.reset();
});

// Intersection Observer for fade-in animations
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
        el.style.visibility = 'visible';
        el.style.display = el.style.display || 'block';
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

// Enhanced contact card interactions
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        if (title === 'Email') {
            window.location.href = 'mailto:olamilekan9194@gmail.com';
        } else if (title === 'LinkedIn') {
            window.open('https://linkedin.com/in/nurudeen-olalere', '_blank');
        } else if (title === 'Phone') {
            window.location.href = 'tel:+2347045608751';
        } else if (title === 'Upwork Profile') {
            window.open('https://www.upwork.com/freelancers/~019b945a107bea2534', '_blank');
        } else if (title === 'Resume') {
            // You can replace this with your actual resume PDF link
            window.open('https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view', '_blank');
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

// Profile picture error handling and fallback
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

    // Initialize modal functionality
    initializeModal();
});

// Initialize modal functionality
function initializeModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Form validation
function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!firstName || !lastName) {
        alert('Please enter both first and last name.');
        return false;
    }
    
    if (!email || !isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    if (!message || message.length < 10) {
        alert('Please enter a message with at least 10 characters.');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Enhanced form submission with validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm()) {
                return;
            }
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create email body
            const emailBody = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
            
            // Create mailto link
            const mailtoLink = `mailto:olamilekan9194@gmail.com?subject=Portfolio Contact Form - ${firstName} ${lastName}&body=${emailBody}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#27ae60';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = 'linear-gradient(45deg, #d4af37, #b8860b)';
                this.reset();
            }, 3000);
        });
    }
});

// Google Drive integration helper function
function openProjectFiles(projectType) {
    // Replace these with your actual Google Drive folder IDs
    const driveLinks = {
        'b2b-leads': 'https://drive.google.com/file/d/18B40ttVYhsTUIfzVLT9jvNu-eAUOadMj/view?usp=sharing',
        'job-automation': 'https://drive.google.com/file/d/1ZC4wxD5hachN6u9FZBtBHRZucreoQ3Rl/view?usp=sharing',
        'fundraising': 'https://docs.google.com/document/d/1AnuNFpV2LPxw7GX9r3pa3lCEN8LwZBuy7tVizd_dJ94/edit?usp=sharing',
        'it-infrastructure': 'https://docs.google.com/document/d/1AnuNFpV2LPxw7GX9r3pa3lCEN8LwZBuy7tVizd_dJ94/edit?usp=sharing'
    };
    
    const link = driveLinks[projectType] || 'https://drive.google.com/file/d/1VvUkdvyv5L8rMadVbOak9zddYNz3yCUj/view?usp=sharing';
    window.open(link, '_blank');
}