
    // Portfolio data structure containing all project information
const portfolioData = {
    "portfolio": {
        "owner": "Muhammad Hazim",
        "lastUpdated": "2025-02-23",
        "projectCategories": [
            {
                "name": "Educational Technology",
                "description": "Systems for academic and learning management",
                "projects": [
                    {
                        "name": "Student Performance Management System",
                        "variants": [
                            {
                                "name": "perfomanceStudent",
                                "lastModified": "2024-06-08",
                            },

                        ],
                        "type": "Academic Management",
                    },
                    {
                        "name": "Attendance Management System",
                        "lastModified": "2024-06-03",
                        "type": "Academic Management",
                        "description": "Comprehensive attendance tracking solution"
                    }
                ]
            },
            {
                "name": "Food Service Solutions",
                "description": "Restaurant and café management systems",
                "projects": [
                    {
                        "name": "CafeOrderingSystem",
                        "lastModified": "2024-06-23",
                        "type": "POS System"
                    },
                    {
                        "name": "BURGER KIOSK ORDERING SYSTEM",
                        "lastModified": "2025-01-14",
                        "type": "Self-Service Kiosk"
                    },
                    {
                        "name": "food_ordering_system",
                        "lastModified": "2025-02-22",
                        "type": "Online Ordering"
                    }
                ]
            },
            {
                "name": "Transportation and Ticketing",
                "description": "Booking and ticketing systems for transportation",
                "projects": [
                    {
                        "name": "Bus Ticketing System",
                        "variants": [
                            {
                                "name": "bus_ticket_system",
                                "lastModified": "2025-02-01"
                            },
                            {
                                "name": "bus_ticket_app",
                                "lastModified": "2025-01-31"
                            }
                        ],
                        "type": "Flutter"
                    },
                    {
                        "name": "railwayticket",
                        "lastModified": "2024-06-28",
                        "type": "Railway Booking"
                    }
                ]
            },
            {
                "name": "AI and Machine Learning",
                "description": "Artificial Intelligence and ML applications",
                "projects": [
                    {
                        "name": "IMAGE BASED DETECTION MODEL",
                        "lastModified": "2025-02-21",
                        "type": "Computer Vision And Flutter"
                    },
                    {
                        "name": "AI-Inspect PCB",
                        "lastModified": "2025-02-19",
                        "type": "Industrial Inspection"
                    },
                    {
                        "name": "real-time-facial-recognition-attendance",
                        "lastModified": "2025-02-21",
                        "type": "Biometric System"
                    }
                ]
            },
            {
                "name": "QR Code Solutions",
                "description": "QR code-based applications",
                "projects": [
                    {
                        "name": "qrcode-POS-system-eka",
                        "lastModified": "2025-02-16",
                        "type": "Point of Sale"
                    },
                    {
                        "name": "qrcode-attandance",
                        "lastModified": "2024-06-23",
                        "type": "Attendance"
                    },
                    {
                        "name": "qrcode",
                        "lastModified": "2024-07-02",
                        "type": "Generator"
                    }
                ]
            },
            {
                "name": "Mobile Applications",
                "description": "Mobile and navigation apps",
                "projects": [
                    {
                        "name": "Ai-Assistant-In-Flutter-Using-ChatGpt",
                        "lastModified": "2024-12-11",
                        "type": "Mobile Development"
                    },
                    {
                        "name": "navigationApp",
                        "lastModified": "2024-05-02",
                        "type": "Navigation"
                    },
                    {
                        "name": "navigate",
                        "lastModified": "2024-05-04",
                        "type": "Navigation"
                    },
                    {
                        "name": "5S Laundry",
                        "lastModified": "2025-02-06",
                        "type": "Service Management"
                    }
                ]
            },
            {
                "name": "E-commerce and Business",
                "description": "Online retail and business management",
                "projects": [
                    {
                        "name": "django-ecommerce 2",
                        "lastModified": "2025-02-16",
                        "type": "E-commerce Platform"
                    },
                ]
            },
            {
                "name": "Portfolio Websites",
                "description": "Personal portfolio websites",
                "projects": [
                    {
                        "name": "Portfolio Hani",
                        "lastModified": "2025-01-31"
                    },
                    {
                        "name": "Portfolio Huda",
                        "lastModified": "2025-01-31"
                    },
                    {
                        "name": "Portfolio Izati",
                        "lastModified": "2025-01-31"
                    },
                    {
                        "name": "Portfolio Nana",
                        "lastModified": "2025-01-31"
                    },
                    {
                        "name": "Portfolio Sofia",
                        "lastModified": "2025-01-31"
                    },
                    {
                        "name": "Portfolio Syamimie",
                        "lastModified": "2025-01-31"
                    }
                ]
            },
            {
                "name": "Utility Applications",
                "description": "Various utility and service applications",
                "projects": [
                    {
                        "name": "Weather",
                        "lastModified": "2025-02-07",
                        "type": "Weather Application"
                    },
                    {
                        "name": "HOTEL",
                        "lastModified": "2025-01-14",
                        "type": "Hotel Management"
                    },
                    {
                        "name": "marriage",
                        "lastModified": "2024-06-11",
                        "type": "Event Management"
                    },
                    {
                        "name": "sms",
                        "lastModified": "2025-02-19",
                        "type": "Communication"
                    }
                ]
            }
        ],
        "statistics": {
            "totalProjects": 35,
            "categories": 10,
            "latestUpdate": "2025-02-22",
            "activeProjects": 30
        }
    }
};

// Main initialization function that runs when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
    setupScrollAnimations();
    initializeNavigation();
    setupContactAnimations();
});

// Add this to your existing JavaScript
function initializeSectionAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    // Observe about section and experience items
    document.querySelector('#about p').classList.add('fade-in');
    
    document.querySelectorAll('.experience-item').forEach(item => {
        observer.observe(item);
    });
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', initializeSectionAnimations);

// Function to initialize the portfolio section
function initializePortfolio() {
    const projectsSection = document.querySelector('#projects .container');
    if (!projectsSection) return;

    // Initialize category filters
    createCategoryFilters(projectsSection);
    
    // Create and populate projects grid
    createProjectsGrid(projectsSection);
    
    // Add initial animations
    setupScrollAnimations();
}

// Function to create category filters
function createCategoryFilters(container) {
    // Get unique categories from portfolio data
    const categories = ['All', ...new Set(
        portfolioData.portfolio.projectCategories.map(cat => cat.name)
    )];
    
    const filterContainer = document.createElement('div');
    filterContainer.className = 'category-filters';
    
    // Create filter buttons
    filterContainer.innerHTML = categories.map(category => `
        <button class="category-filter ${category === 'All' ? 'active' : ''}" 
                data-category="${category}">
            ${category}
        </button>
    `).join('');
    
    // Add filter container to DOM
    container.insertBefore(filterContainer, container.firstChild);
    
    // Setup filter functionality
    setupFilterHandlers();
}

// Function to handle filter button clicks
function setupFilterHandlers() {
    document.querySelectorAll('.category-filter').forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.dataset.category;
            
            // Update active state of filter buttons
            document.querySelectorAll('.category-filter')
                .forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter and animate projects
            filterProjects(selectedCategory);
        });
    });
}

// Function to filter projects based on selected category
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const projectCategory = card.dataset.category;
        const shouldShow = category === 'All' || projectCategory === category;
        
        if (shouldShow) {
            card.style.display = 'flex';
            // Use requestAnimationFrame for smooth animation
            requestAnimationFrame(() => {
                card.classList.add('animate-in');
            });
        } else {
            card.classList.remove('animate-in');
            // Wait for animation before hiding
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Function to create the projects grid
function createProjectsGrid(container) {
    const projectsGrid = document.createElement('div');
    projectsGrid.className = 'projects-grid';
    
    // Populate grid with project cards
    portfolioData.portfolio.projectCategories.forEach(category => {
        category.projects.forEach(project => {
            projectsGrid.innerHTML += createProjectCard(project, category.name);
        });
    });
    
    container.appendChild(projectsGrid);
}

// Function to create a project card
function createProjectCard(project, category) {
    return `
        <div class="project-card" data-category="${category}">
            <div class="project-content">
                <h3 class="project-title">${project.name}</h3>
                
                ${project.description ? `
                    <p class="project-description">${project.description}</p>
                ` : ''}
                
                ${project.type ? `
                    <span class="tech-tag primary">${project.type}</span>
                ` : ''}
                
                ${project.variants ? `
                    <div class="project-variants">
                        <div class="variants-list">
                            ${project.variants.map(variant => `
                                <div class="variant-item">
                                    <span>${variant.name}</span>
                                    <div class="variant-info">
                                        <small>${formatDate(variant.lastModified)}</small>
                                        ${variant.status ? `
                                            <span class="status-tag ${variant.status.toLowerCase()}">${variant.status}</span>
                                        ` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <div class="project-meta">
                    Last updated: ${formatDate(project.lastModified)}
                </div>
            </div>
        </div>
    `;
}

// Function to handle scroll animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.project-card, .section-title, .experience-item, .contact-item'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        observer.observe(element);
    });
}

// Function to format dates consistently
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

// Function to initialize navigation
function initializeNavigation() {
    const nav = document.querySelector('.nav-container');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Handle navigation visibility
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Hide/show navigation based on scroll direction
        if (currentScroll > lastScroll && currentScroll > 500) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
        
        // Update active navigation link
        updateActiveNavLink();
    });
    
    // Setup smooth scrolling
    setupSmoothScrolling();
}

// Function to update active navigation link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const currentScroll = window.pageYOffset;
        
        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
            const currentSection = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Function to setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// Function to setup contact section animations
function setupContactAnimations() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px)';
            const icon = item.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            const icon = item.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
}

// Add necessary styles for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }

    .project-card {
        transition: all 0.3s ease;
    }

    .contact-item i {
        transition: transform 0.3s ease;
    }
`;

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('nav');
    nav.insertBefore(navToggle, nav.firstChild);
    
    navToggle.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
        
        // Change icon based on menu state
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
});

document.head.appendChild(style);