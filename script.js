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
    if (subtitle) {
        subtitle.style.opacity = '0';
        setTimeout(() => {
            currentTitle = (currentTitle + 1) % titles.length;
            subtitle.textContent = titles[currentTitle];
            subtitle.style.opacity = '1';
        }, 500);
    }
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

// PROJECT DETAILS FUNCTIONALITY
const projectDetails = {
    'b2b-details': {
        title: 'B2B Lead Generation - Project Details',
        content: `
            <div class="project-detail">
                <h3><i class="fas fa-bullseye"></i> Project Overview</h3>
                <p>Comprehensive B2B lead generation project utilizing Apollo.io premium database to deliver high-quality, verified contacts across multiple industry verticals.</p>
                
                <h4>Key Deliverables:</h4>
                <ul>
                    <li>1,000+ verified B2B contacts with 95%+ email accuracy</li>
                    <li>500+ C-Suite executives and decision makers</li>
                    <li>Comprehensive data across 9 major industry verticals</li>
                    <li>Complete contact information including email, phone, LinkedIn profiles</li>
                    <li>Company information with employee count and revenue data</li>
                </ul>

                <h4>Industries Covered:</h4>
                <div class="industry-tags">
                    <span class="industry-tag">Technology</span>
                    <span class="industry-tag">Healthcare</span>
                    <span class="industry-tag">Finance</span>
                    <span class="industry-tag">Manufacturing</span>
                    <span class="industry-tag">Retail</span>
                    <span class="industry-tag">Real Estate</span>
                    <span class="industry-tag">Professional Services</span>
                    <span class="industry-tag">Education</span>
                    <span class="industry-tag">Non-Profit</span>
                </div>

                <h4>Data Quality Assurance:</h4>
                <ul>
                    <li>Email verification using Hunter.io and ZeroBounce</li>
                    <li>LinkedIn profile verification</li>
                    <li>Company information cross-reference</li>
                    <li>GDPR compliance verification</li>
                    <li>Duplicate removal and data cleansing</li>
                </ul>

                <div class="cta-section">
                    <p><strong>Ready to scale your lead generation?</strong></p>
                    <a href="#talk-to-me" class="modal-cta-btn">Get Similar Results</a>
                </div>
            </div>
        `
    },
    'job-case-study': {
        title: 'Automated Job Application System - Case Study',
        content: `
            <div class="project-detail">
                <h3><i class="fas fa-robot"></i> Case Study Overview</h3>
                <p><strong>Client:</strong> Isabella Gonzalez - Job Seeker transitioning careers</p>
                <p><strong>Challenge:</strong> Time-consuming manual job application process affecting job search efficiency</p>
                
                <h4>The Challenge:</h4>
                <ul>
                    <li>Manual application process taking 4+ hours daily</li>
                    <li>Difficulty tracking applications across multiple platforms</li>
                    <li>Inconsistent application quality and follow-up</li>
                    <li>Limited time for interview preparation and networking</li>
                </ul>

                <h4>Solution Implemented:</h4>
                <ul>
                    <li>Developed automated workflow using Zapier and Google Sheets</li>
                    <li>Created standardized application templates</li>
                    <li>Implemented comprehensive tracking system</li>
                    <li>Set up automated follow-up sequences</li>
                    <li>Integrated calendar scheduling for interviews</li>
                </ul>

                <h4>Results Achieved:</h4>
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-number">150+</div>
                        <div class="result-label">Weekly Applications</div>
                    </div>
                    <div class="result-item">
                        <div class="result-number">30%</div>
                        <div class="result-label">Time Reduction</div>
                    </div>
                    <div class="result-item">
                        <div class="result-number">40%</div>
                        <div class="result-label">Response Rate Increase</div>
                    </div>
                    <div class="result-item">
                        <div class="result-number">100%</div>
                        <div class="result-label">Application Tracking</div>
                    </div>
                </div>

                <div class="cta-section">
                    <p><strong>Need similar automation for your job search?</strong></p>
                    <a href="#talk-to-me" class="modal-cta-btn">Automate Your Applications</a>
                </div>
            </div>
        `
    },
    'job-methodology': {
        title: 'Automated Job Application - Methodology',
        content: `
            <div class="project-detail">
                <h3><i class="fas fa-cogs"></i> Implementation Methodology</h3>
                
                <h4>Phase 1: Analysis & Planning (Week 1)</h4>
                <ul>
                    <li>Analyzed current application process and time tracking</li>
                    <li>Identified key job boards and application requirements</li>
                    <li>Mapped client's career goals and target positions</li>
                    <li>Created standardized resume and cover letter templates</li>
                </ul>

                <h4>Phase 2: System Development (Week 2-3)</h4>
                <ul>
                    <li>Set up Google Sheets tracking system with automated formulas</li>
                    <li>Created Zapier workflows for job board integrations</li>
                    <li>Developed email templates for different job types</li>
                    <li>Implemented automated calendar scheduling</li>
                    <li>Created follow-up sequence automation</li>
                </ul>

                <h4>Phase 3: Testing & Optimization (Week 4)</h4>
                <ul>
                    <li>Conducted pilot testing with 50 applications</li>
                    <li>Refined templates based on response rates</li>
                    <li>Optimized automation triggers and workflows</li>
                    <li>Created training documentation for client</li>
                </ul>

                <h4>Tools & Technologies Used:</h4>
                <div class="tools-grid">
                    <span class="tool-tag">Google Sheets</span>
                    <span class="tool-tag">Zapier</span>
                     <span class="tool-tag">Gmail</span>
                    <span class="tool-tag">Google Calendar</span>
                    <span class="tool-tag">Indeed API</span>
                    <span class="tool-tag">LinkedIn Job API</span>
                </div>

                <h4>Ongoing Support & Maintenance:</h4>
                <ul>
                    <li>Weekly performance reviews and optimization</li>
                    <li>Monthly template updates based on industry trends</li>
                    <li>Continuous monitoring of application success rates</li>
                    <li>Regular system updates and bug fixes</li>
                </ul>

                <div class="cta-section">
                    <p><strong>Want to implement similar automation?</strong></p>
                    <a href="#talk-to-me" class="modal-cta-btn">Discuss Your Project</a>
                </div>
            </div>
        `
    },
    'event-details': {
        title: 'Fundraising Event Coordination - Event Details',
        content: `
            <div class="project-detail">
                <h3><i class="fas fa-calendar-alt"></i> Event Overview</h3>
                <p><strong>Client:</strong> Supportifly - Non-profit Organization</p>
                <p><strong>Event:</strong> Annual Fundraising Gala 2024</p>
                <p><strong>Goal:</strong> $500K fundraising target with 15% increase from previous year</p>
                
                <h4>Event Specifications:</h4>
                <ul>
                    <li><strong>Venue:</strong> Grand Ballroom, Downtown Conference Center</li>
                    <li><strong>Capacity:</strong> 300 guests including donors, sponsors, and VIPs</li>
                    <li><strong>Duration:</strong> 4-hour evening event with dinner and entertainment</li>
                    <li><strong>Theme:</strong> "Building Bridges, Changing Lives"</li>
                </ul>

                <h4>Logistics Coordination:</h4>
                <ul>
                    <li>Venue selection and contract negotiation</li>
                    <li>Catering coordination for 300 guests with dietary accommodations</li>
                    <li>Entertainment booking and technical requirements</li>
                    <li>Registration system setup and guest management</li>
                    <li>Sponsorship package development and management</li>
                    <li>Marketing material design and distribution</li>
                </ul>

                <h4>Stakeholder Management:</h4>
                <ul>
                    <li>6 team members across different departments</li>
                    <li>15+ major sponsors and corporate partners</li>
                    <li>Board of directors and executive committee</li>
                    <li>External vendors and service providers</li>
                    <li>Media representatives and photographers</li>
                </ul>

                <h4>Event Outcomes:</h4>
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-number">$485K</div>
                        <div class="result-label">Total Raised</div>
                    </div>
                    <div class="result-item">
                        <div class="result-number">280</div>
                        <div class="result-label">Attendees</div>
                    </div>
                    <div class="result-item">
                        <div class="result-number">97%</div>
                        <div class="result-label">Goal Achievement</div>
                    </div>
                    <div class="result-item">
                        <div class="result-number">100%</div>
                        <div class="result-label">On-Time Execution</div>
                    </div>
                </div>

                <div class="cta-section">
                    <p><strong>Planning a corporate event or fundraiser?</strong></p>
                    <a href="#talk-to-me" class="modal-cta-btn">Plan Your Event</a>
                </div>
            </div>
        `
    },
    'planning-process': {
        title: 'Fundraising Event - Planning Process',
        content: `
            <div class="project-detail">
                <h3><i class="fas fa-tasks"></i> Comprehensive Planning Process</h3>
                
                <h4>Phase 1: Strategic Planning (8 weeks before)</h4>
                <ul>
                    <li>Stakeholder meetings to define event goals and objectives</li>
                    <li>Budget development and approval process</li>
                    <li>Venue research, site visits, and contract negotiations</li>
                    <li>Initial sponsor outreach and package development</li>
                    <li>Event timeline and milestone planning</li>
                </ul>

                <h4>Phase 2: Coordination & Setup (6 weeks before)</h4>
                <ul>
                    <li>Vendor selection and contract management</li>
                    <li>Marketing campaign launch and social media strategy</li>
                    <li>Registration system implementation</li>
                    <li>Menu planning and dietary accommodation management</li>
                    <li>Entertainment booking and technical requirements</li>
                </ul>

                <h4>Phase 3: Final Preparations (2 weeks before)</h4>
                <ul>
                    <li>Final headcount confirmation and seating arrangements</li>
                    <li>Rehearsal coordination and script preparation</li>
                    <li>Gift bag preparation and sponsor recognition materials</li>
                    <li>Staff briefing and volunteer coordination</li>
                    <li>Contingency planning and risk assessment</li>
                </ul>

                <h4>Meeting Management System:</h4>
                <ul>
                    <li><strong>Weekly Planning Meetings:</strong> Core team progress updates</li>
                    <li><strong>Bi-weekly Stakeholder Updates:</strong> Board and sponsor communications</li>
                    <li><strong>Vendor Check-ins:</strong> Regular progress monitoring</li>
                    <li><strong>Emergency Protocols:</strong> 24/7 communication channels</li>
                </ul>

                <h4>Project Management Tools:</h4>
                <div class="tools-grid">
                    <span class="tool-tag">Trello</span>
                    <span class="tool-tag">Google Workspace</span>
                    <span class="tool-tag">Eventbrite</span>
                    <span class="tool-tag">Slack</span>
                    <span class="tool-tag">Canva</span>
                    <span class="tool-tag">Zoom</span>
                </div>

                <div class="cta-section">
                    <p><strong>Need expert event coordination?</strong></p>
                    <a href="#talk-to-me" class="modal-cta-btn">Start Planning</a>
                </div>
            </div>
        `
    },
    'tech-details': {
        title: 'IT Infrastructure Optimization - Technical Details',
        content: `
            <div class="project-detail">
                <h3><i class="fas fa-server"></i> Technical Implementation</h3>
                <p><strong>Client:</strong> FutureMinds Development Initiative</p>
                <p><strong>Infrastructure:</strong> 8+ users, multiple workstations, shared network resources</p>
                
                <h4>Automated Backup System:</h4>
                <ul>
                    <li><strong>Solution:</strong> Veeam Backup & Replication with cloud integration</li>
                    <li><strong>Schedule:</strong> Daily incremental, weekly full backups</li>
                    <li><strong>Storage:</strong> Local NAS + Google Drive Business for redundancy</li>
                    <li><strong>Recovery Time:</strong> Reduced from 4 hours to 24 minutes</li>
                    <li><strong>Success Rate:</strong> 99.9% backup completion rate</li>
                </ul>

                <h4>Network Infrastructure Management:</h4>
                <ul>
                    <li>Cisco managed switches with VLAN segmentation</li>
                    <li>Ubiquiti UniFi access points for wireless coverage</li>
                    <li>pfSense firewall with intrusion detection</li>
                    <li>Network monitoring using PRTG Network Monitor</li>
                    <li>Quality of Service (QoS) implementation</li>
                </ul>

                <h4>System Administration Tasks:</h4>
                <ul>
                    <li>Windows Server 2019 domain controller setup</li>
                    <li>Group Policy management for security compliance</li>
                    <li>User account and permission management</li>
                    <li>Software deployment and patch management</li>
                    <li>Antivirus and security policy enforcement</li>
                </ul>

                <h4>Performance Improvements:</h4>
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-number">99.9%</div>
                        <div class="result-label">Backup Success</div>
                    </div>
                    <div class="result-item">
                        <div class="result-number">40%</div>
                        <div class="result-label">Fewer Interruptions</div>
                    </div>
                    <div class="result-item">
                        <div class="result-number">60%</div>
                        <div class="result-label">Faster Recovery</div>
                    </div>
                    <div class="result-item">
                        <div class="result-number">24/7</div>
                        <div class="result-label">System Monitoring</div>
                    </div>
                </div>

                <div class="cta-section">
                    <p><strong>Need IT infrastructure optimization?</strong></p>
                    <a href="#talk-to-me" class="modal-cta-btn">Optimize Your Systems</a>
                </div>
            </div>
        `
    },
    'it-results': {
        title: 'IT Infrastructure Optimization - Results & Impact',
        content: `
            <div class="project-detail">
                <h3><i class="fas fa-chart-line"></i> Project Results & Business Impact</h3>
                
                <h4>Quantifiable Improvements:</h4>
                <ul>
                    <li><strong>System Downtime:</strong> Reduced from 8 hours/month to 1.2 hours/month</li>
                    <li><strong>Backup Failures:</strong> Decreased from 15% to 0.1% failure rate</li>
                    <li><strong>Data Recovery Time:</strong> Improved from 4 hours to 24 minutes average</li>
                    <li><strong>Network Performance:</strong> 35% increase in data transfer speeds</li>
                    <li><strong>Security Incidents:</strong> Zero breaches during implementation period</li>
                </ul>

                <h4>User Training & Adoption:</h4>
                <ul>
                    <li>Trained 6+ staff members on new backup procedures</li>
                    <li>Created comprehensive documentation and SOPs</li>
                    <li>Established IT helpdesk procedures</li>
                    <li>Implemented user feedback system</li>
                    <li>Achieved 100% user adoption within 3 weeks</li>
                </ul>

                <h4>Cost Savings Achieved:</h4>
                <ul>
                    <li><strong>Reduced IT Support Costs:</strong> 45% decrease in external support needs</li>
                    <li><strong>Hardware Longevity:</strong> Extended equipment lifespan by 2+ years</li>
                    <li><strong>Productivity Gains:</strong> 25% improvement in daily operations</li>
                    <li><strong>Data Loss Prevention:</strong> Estimated $50K+ in potential loss avoidance</li>
                </ul>

                <h4>Long-term Benefits:</h4>
                <ul>
                    <li>Scalable infrastructure supporting 50% growth</li>
                    <li>Improved regulatory compliance and data protection</li>
                    <li>Enhanced disaster recovery capabilities</li>
                    <li>Reduced dependency on external IT consultants</li>
                    <li>Foundation for digital transformation initiatives</li>
                </ul>

                <h4>Client Testimonial:</h4>
                <blockquote>
                    "Nurudeen's IT infrastructure optimization transformed our operations. We went from constant system issues to a reliable, efficient network that supports our growth. The automated backup system alone has saved us countless hours and given us peace of mind." 
                    <cite>- Executive Director, FutureMinds Development Initiative</cite>
                </blockquote>

                <div class="cta-section">
                    <p><strong>Ready to transform your IT infrastructure?</strong></p>
                    <a href="#talk-to-me" class="modal-cta-btn">Get Started Today</a>
                </div>
            </div>
        `
    }
};

// Modal functions
function showProjectDetails(detailId) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (projectDetails[detailId]) {
        modalBody.innerHTML = `
            <h2>${projectDetails[detailId].title}</h2>
            ${projectDetails[detailId].content}
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// PDF and Google Drive functions
function openProjectPDF(projectName) {
    // Opens Google Drive folder for the specific project
    const driveUrl = 'https://drive.google.com/drive/folders/your-folder-id';
    window.open(driveUrl, '_blank');
}

function openGoogleDrive() {
    // Opens main Google Drive portfolio folder
    const driveUrl = 'https://drive.google.com/drive/u/0/folders/your-main-folder-id';
    window.open(driveUrl, '_blank');
}

function openResumePDF() {
    // Opens resume PDF from Google Drive
    const resumeUrl = 'https://drive.google.com/file/d/your-resume-file-id/view';
    window.open(resumeUrl, '_blank');
}

// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const message = formData.get('message');

            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Create mailto link with form data
            const subject = `Portfolio Inquiry from ${firstName} ${lastName}`;
            const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;
            const mailtoLink = `mailto:olamilekan9194@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            setTimeout(() => {
                formStatus.innerHTML = `
                    <div class="success-message">
                        <i class="fas fa-check-circle"></i>
                        <p>Your email client should now be open with your message. If it didn't open automatically, please send an email to <strong>olamilekan9194@gmail.com</strong> with your inquiry.</p>
                    </div>
                `;
                
                // Reset form
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Hide success message after 10 seconds
                setTimeout(() => {
                    formStatus.innerHTML = '';
                }, 10000);
            }, 1000);
        });
    }
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Particle effect for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (hero) {
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
        }
        // Portfolio Files and Resume clicks are handled by their respective onclick attributes
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
});