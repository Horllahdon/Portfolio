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
            // Open Google Drive folder - replace with your actual Google Drive folder link
            window.open('https://drive.google.com/drive/folders/your-folder-id', '_blank');
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
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create email body
            const subject = `Portfolio Contact from ${firstName} ${lastName}`;
            const body = `Name: ${firstName} ${lastName}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
            
            // Create mailto link
            const mailtoLink = `mailto:olamilekan9194@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your email client should open now.');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Project Details Modal Functions
function openProjectDetails(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    let content = '';
    
    switch(projectId) {
        case 'b2b-lead':
            content = `
                <h2>B2B Lead Generation Database - Project Overview</h2>
                <p>This comprehensive project involved creating a robust B2B lead generation database using Apollo.io's premium platform, targeting multiple industry verticals with high-accuracy contact information.</p>
                
                <h3>Project Scope</h3>
                <ul>
                    <li>Generated <span class="highlight">1,000+ verified business contacts</span> across 9 major industries</li>
                    <li>Focused on <span class="highlight">C-Suite executives and decision makers</span></li>
                    <li>Achieved <span class="highlight">95%+ email verification accuracy</span></li>
                    <li>Delivered comprehensive database in 5 business days</li>
                </ul>
                
                <h3>Industries Covered</h3>
                <ul>
                    <li>Technology & Software</li>
                    <li>Healthcare & Pharmaceuticals</li>
                    <li>Financial Services</li>
                    <li>Manufacturing</li>
                    <li>Professional Services</li>
                    <li>Retail & E-commerce</li>
                    <li>Real Estate</li>
                    <li>Education</li>
                    <li>Non-Profit Organizations</li>
                </ul>
                
                <h3>Data Points Collected</h3>
                <ul>
                    <li>Full contact names and job titles</li>
                    <li>Verified email addresses</li>
                    <li>Phone numbers (where available)</li>
                    <li>Company information and size</li>
                    <li>LinkedIn profiles</li>
                    <li>Industry classifications</li>
                </ul>
                
                <p><strong>Client Outcome:</strong> The client successfully launched their B2B outreach campaign using this database, resulting in a 15% response rate and multiple qualified leads within the first month.</p>
            `;
            break;
            
        case 'b2b-details':
            content = `
                <h2>B2B Lead Generation - Technical Details</h2>
                <p>Detailed methodology and technical approach used in the B2B lead generation project.</p>
                
                <h3>Tools & Platforms Used</h3>
                <ul>
                    <li><span class="highlight">Apollo.io Premium:</span> Primary lead generation platform</li>
                    <li><span class="highlight">Hunter.io:</span> Email verification and validation</li>
                    <li><span class="highlight">LinkedIn Sales Navigator:</span> Profile verification</li>
                    <li><span class="highlight">Google Sheets:</span> Data organization and delivery</li>
                    <li><span class="highlight">ZoomInfo:</span> Additional data enrichment</li>
                </ul>
                
                <h3>Quality Assurance Process</h3>
                <ul>
                    <li>Multi-step email verification process</li>
                    <li>Cross-referencing contact information across platforms</li>
                    <li>Manual verification of C-Suite contacts</li>
                    <li>Removal of duplicates and invalid entries</li>
                    <li>Final accuracy check before delivery</li>
                </ul>
                
                <h3>Delivery Format</h3>
                <ul>
                    <li>Clean, organized spreadsheet with multiple tabs</li>
                    <li>Segmented by industry and company size</li>
                    <li>Verification status for each contact</li>
                    <li>Additional notes on contact preferences</li>
                </ul>
                
                <h3>Success Metrics</h3>
                <ul>
                    <li><span class="highlight">95.3% email deliverability rate</span></li>
                    <li><span class="highlight">Zero bounced emails</span> from verified contacts</li>
                    <li><span class="highlight">500+ C-Suite executives</span> included</li>
                    <li><span class="highlight">100% client satisfaction</span></li>
                </ul>
            `;
            break;
            
        case 'job-case':
            content = `
                <h2>Automated Job Application System - Case Study</h2>
                <p>Comprehensive case study of the automated job application system developed for Isabella Gonzalez, focusing on process optimization and results.</p>
                
                <h3>Client Challenge</h3>
                <p>Isabella was spending 8-10 hours daily manually applying for jobs across multiple platforms, with inconsistent tracking and low efficiency. She needed a systematic approach to scale her job search efforts.</p>
                
                <h3>Solution Overview</h3>
                <ul>
                    <li>Developed automated workflow for job applications</li>
                    <li>Created comprehensive tracking system</li>
                    <li>Implemented quality control measures</li>
                    <li>Established regular reporting and optimization</li>
                </ul>
                
                <h3>Implementation Process</h3>
                <ul>
                    <li><span class="highlight">Week 1-2:</span> System setup and initial testing</li>
                    <li><span class="highlight">Week 3-4:</span> Full deployment and monitoring</li>
                    <li><span class="highlight">Month 2-4:</span> Optimization and scaling</li>
                </ul>
                
                <h3>Key Results</h3>
                <ul>
                    <li><span class="highlight">150+ applications per week</span> (up from 30-40)</li>
                    <li><span class="highlight">30% time reduction</span> in application process</li>
                    <li><span class="highlight">100% tracking accuracy</span> with detailed reporting</li>
                    <li><span class="highlight">25% increase in interview requests</span></li>
                </ul>
                
                <h3>Client Testimonial</h3>
                <p><em>"The automated system transformed my job search. What used to take me all day now takes just a few hours, and I'm getting better results. The tracking system helps me follow up effectively."</em> - Isabella Gonzalez</p>
            `;
            break;
            
        case 'job-methodology':
            content = `
                <h2>Job Application Automation - Methodology</h2>
                <p>Detailed methodology and technical approach for the automated job application system.</p>
                
                <h3>Automation Tools Used</h3>
                <ul>
                    <li><span class="highlight">Zapier:</span> Workflow automation platform</li>
                    <li><span class="highlight">Google Workspace:</span> Document management and tracking</li>
                    <li><span class="highlight">Calendly:</span> Interview scheduling automation</li>
                    <li><span class="highlight">Job Board APIs:</span> LinkedIn, Indeed, Glassdoor integration</li>
                </ul>
                
                <h3>Workflow Design</h3>
                <ul>
                    <li>Job search criteria setup and filtering</li>
                    <li>Automated application submission with custom cover letters</li>
                    <li>Real-time tracking and status updates</li>
                    <li>Follow-up reminder system</li>
                    <li>Interview scheduling coordination</li>
                </ul>
                
                <h3>Quality Control Measures</h3>
                <ul>
                    <li>Manual review of job matches before application</li>
                    <li>Customized cover letter templates for different industries</li>
                    <li>Application limit controls to avoid spam flags</li>
                    <li>Regular system performance monitoring</li>
                    <li>Weekly optimization based on response rates</li>
                </ul>
                
                <h3>Tracking System Features</h3>
                <ul>
                    <li><span class="highlight">Application Status Dashboard:</span> Real-time view of all applications</li>
                    <li><span class="highlight">Response Tracking:</span> Automated capture of employer responses</li>
                    <li><span class="highlight">Interview Pipeline:</span> Calendar integration for interview scheduling</li>
                    <li><span class="highlight">Analytics:</span> Success rate analysis and optimization insights</li>
                </ul>
                
                <h3>Performance Metrics</h3>
                <ul>
                    <li>Applications submitted per day/week</li>
                    <li>Response rate tracking</li>
                    <li>Interview conversion rates</li>
                    <li>Time saved analysis</li>
                    <li>Platform performance comparison</li>
                </ul>
            `;
            break;
            
        case 'event-details':
            content = `
                <h2>Fundraising Event Coordination - Event Details</h2>
                <p>Comprehensive details of the high-profile fundraising event coordinated for Supportifly, including logistics, stakeholder management, and execution.</p>
                
                <h3>Event Overview</h3>
                <ul>
                    <li><span class="highlight">Event Type:</span> Annual Fundraising Gala</li>
                    <li><span class="highlight">Campaign Goal:</span> $500,000</li>
                    <li><span class="highlight">Attendees:</span> 200+ donors and stakeholders</li>
                    <li><span class="highlight">Duration:</span> 4-hour evening event</li>
                    <li><span class="highlight">Venue:</span> Premium hotel ballroom</li>
                </ul>
                
                <h3>Coordination Responsibilities</h3>
                <ul>
                    <li><span class="highlight">Venue Management:</span> Site selection, booking, and logistics</li>
                    <li><span class="highlight">Catering Coordination:</span> Menu planning, dietary accommodations</li>
                    <li><span class="highlight">Stakeholder Relations:</span> VIP guest management and seating</li>
                    <li><span class="highlight">Timeline Management:</span> Event schedule and flow coordination</li>
                    <li><span class="highlight">Vendor Coordination:</span> AV, decorations, and entertainment</li>
                </ul>
                
                <h3>Event Highlights</h3>
                <ul>
                    <li>Keynote speech by organization founder</li>
                    <li>Live auction with high-value items</li>
                    <li>Impact presentation with beneficiary stories</li>
                    <li>Networking reception and dinner</li>
                    <li>Entertainment by local performers</li>
                </ul>
                
                <h3>Results Achieved</h3>
                <ul>
                    <li><span class="highlight">$575,000 raised</span> (15% over goal)</li>
                    <li><span class="highlight">100% on-time execution</span> of all event elements</li>
                    <li><span class="highlight">Zero logistical issues</span> during the event</li>
                    <li><span class="highlight">95% attendee satisfaction</span> based on post-event survey</li>
                </ul>
            `;
            break;
            
        case 'event-planning':
            content = `
                <h2>Fundraising Event - Planning Process</h2>
                <p>Detailed planning methodology and project management approach for the Supportifly fundraising event.</p>
                
                <h3>Planning Timeline</h3>
                <ul>
                    <li><span class="highlight">6 Months Before:</span> Initial planning and goal setting</li>
                    <li><span class="highlight">4 Months Before:</span> Venue booking and vendor selection</li>
                    <li><span class="highlight">2 Months Before:</span> Invitations and marketing launch</li>
                    <li><span class="highlight">1 Month Before:</span> Final confirmations and rehearsals</li>
                    <li><span class="highlight">Event Week:</span> Setup and execution</li>
                </ul>
                
                <h3>Team Coordination</h3>
                <ul>
                    <li><span class="highlight">6-person core team</span> with defined roles</li>
                    <li>Weekly planning meetings with detailed agendas</li>
                    <li>Shared project management dashboard</li>
                    <li>Clear communication protocols and escalation paths</li>
                </ul>
                
                <h3>Key Planning Elements</h3>
                <ul>
                    <li><span class="highlight">Budget Management:</span> $75,000 event budget oversight</li>
                    <li><span class="highlight">Logistics Coordination:</span> Multi-vendor management</li>
                    <li><span class="highlight">Guest Management:</span> RSVP tracking and seating arrangements</li>
                    <li><span class="highlight">Risk Management:</span> Contingency planning for various scenarios</li>
                </ul>
                
                <h3>Meeting Agenda Management</h3>
                <ul>
                    <li>Weekly team meetings with structured agendas</li>
                    <li>Action item tracking and follow-up</li>
                    <li>Stakeholder update presentations</li>
                    <li>Vendor coordination meetings</li>
                    <li>Post-event debrief and lessons learned</li>
                </ul>
                
                <h3>Success Factors</h3>
                <ul>
                    <li>Detailed project timeline with milestones</li>
                    <li>Regular stakeholder communication</li>
                    <li>Proactive risk management</li>
                    <li>Strong vendor relationships</li>
                    <li>Clear delegation and accountability</li>
                </ul>
            `;
            break;
            
        case 'it-technical':
            content = `
                <h2>IT Infrastructure Optimization - Technical Details</h2>
                <p>Comprehensive technical overview of the IT infrastructure optimization project for FutureMinds Development Initiative.</p>
                
                <h3>Infrastructure Assessment</h3>
                <ul>
                    <li><span class="highlight">Network Architecture:</span> Windows Server-based environment</li>
                    <li><span class="highlight">User Base:</span> 8+ regular users across multiple departments</li>
                    <li><span class="highlight">Hardware:</span> Mixed workstation and laptop environment</li>
                    <li><span class="highlight">Software:</span> Microsoft Office suite, custom applications</li>
                </ul>
                
                <h3>Backup System Implementation</h3>
                <ul>
                    <li><span class="highlight">Automated Daily Backups:</span> Implemented using Windows Server Backup</li>
                    <li><span class="highlight">Redundant Storage:</span> Local and cloud backup solutions</li>
                    <li><span class="highlight">Backup Verification:</span> Automated integrity checks</li>
                    <li><span class="highlight">Recovery Testing:</span> Monthly restore procedure validation</li>
                </ul>
                
                <h3>Network Optimization</h3>
                <ul>
                    <li>Network topology analysis and optimization</li>
                    <li>Bandwidth utilization monitoring</li>
                    <li>Security protocol implementation</li>
                    <li>Performance bottleneck identification and resolution</li>
                </ul>
                
                <h3>System Monitoring</h3>
                <ul>
                    <li><span class="highlight">Automated Monitoring:</span> Server health and performance tracking</li>
                    <li><span class="highlight">Alert System:</span> Proactive notification of issues</li>
                    <li><span class="highlight">Performance Metrics:</span> Regular reporting on system health</li>
                    <li><span class="highlight">Preventive Maintenance:</span> Scheduled system optimization tasks</li>
                </ul>
                
                <h3>Security Enhancements</h3>
                <ul>
                    <li>Firewall configuration and optimization</li>
                    <li>Antivirus deployment and management</li>
                    <li>User access control implementation</li>
                    <li>Security policy development and training</li>
                </ul>
            `;
            break;
            
        case 'it-results':
            content = `
                <h2>IT Infrastructure Optimization - Results & Impact</h2>
                <p>Measurable outcomes and business impact of the IT infrastructure optimization project.</p>
                
                <h3>Performance Improvements</h3>
                <ul>
                    <li><span class="highlight">99.9% Backup Success Rate:</span> Eliminated data loss risks</li>
                    <li><span class="highlight">60% Faster Recovery Time:</span> Reduced system restore duration</li>
                    <li><span class="highlight">40% Reduction in Service Interruptions:</span> Improved system stability</li>
                    <li><span class="highlight">25% Network Performance Improvement:</span> Optimized data transfer speeds</li>
                </ul>
                
                <h3>Business Impact</h3>
                <ul>
                    <li><span class="highlight">Zero Data Loss Incidents:</span> Protected critical organizational data</li>
                    <li><span class="highlight">Improved User Productivity:</span> Reduced downtime and system issues</li>
                    <li><span class="highlight">Cost Savings:</span> Prevented expensive emergency repairs</li>
                    <li><span class="highlight">Enhanced Security:</span> Reduced vulnerability to cyber threats</li>
                </ul>
                
                <h3>User Training & Support</h3>
                <ul>
                    <li>Trained 8+ users on new systems and procedures</li>
                    <li>Created comprehensive documentation and user guides</li>
                    <li>Established help desk procedures for ongoing support</li>
                    <li>Regular training sessions on cybersecurity best practices</li>
                </ul>
                
                <h3>Long-term Benefits</h3>
                <ul>
                    <li><span class="highlight">Scalable Infrastructure:</span> System ready for organizational growth</li>
                    <li><span class="highlight">Automated Processes:</span> Reduced manual intervention requirements</li>
                    <li><span class="highlight">Disaster Recovery:</span> Comprehensive backup and recovery procedures</li>
                    <li><span class="highlight">Ongoing Monitoring:</span> Proactive issue identification and resolution</li>
                </ul>
                
                <h3>Client Satisfaction</h3>
                <ul>
                    <li>100% client satisfaction with project outcomes</li>
                    <li>Reduced IT support requests by 45%</li>
                    <li>Improved system reliability and user confidence</li>
                    <li>Ongoing partnership for IT support and maintenance</li>
                </ul>
            `;
            break;
            
        default:
            content = '<h2>Project information not available</h2><p>Please check back later for detailed project information.</p>';
    }
    
    modalContent.innerHTML = content;
    modal.style.display = 'block';
    
    // Add escape key listener
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
});

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