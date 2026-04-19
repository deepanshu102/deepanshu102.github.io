/**
 * SYSTEM_CONTENT_LAYER
 * Consolidated for fail-safe rendering in all environments.
 */
const CONTENT = {
    bio: "Architect of Resilience. Beyond 5.2 years of deployment metrics, I thrive in the deep-end of high-performance backend engineering. Orchestrating high-scale distributed systems isn't just a role—it's an obsessive pursuit of architectural elegance and the raw intellectual joy of building resilient cloud-native ecosystems.",
    
    email: "deepanshuofficials@gmail.com",
    linkedin: "https://www.linkedin.com/in/bitsbytesofficial/",
    github: "https://github.com/deepanshu102",

    commendations: [
        {
            title: "NASA Space Apps Challenge Winner",
            organization: "NASA",
            year: "2019",
            description: "Led a team to develop an innovative solution for space data visualization, securing top honors in the global hackathon."
        }
    ],

    skills: [
        { name: "GOLANG", level: 95, icon: "G" },
        { name: "NODE.JS", level: 90, icon: "N" },
        { name: "JAVA / SPRING", level: 85, icon: "J" },
        { name: "AWS / CLOUD", level: 88, icon: "A" },
        { name: "KUBERNETES", level: 80, icon: "K" },
        { name: "MONGODB / SQL", level: 85, icon: "D" }
    ],

    experience: [
        {
            company: "KAIROS TECHNOLOGIES",
            role: "Senior Software Engineer",
            period: "Nov 2024 – Present",
            location: "Pune, India",
            points: [
                "Led the architectural transition from distributed microservices to a modular macro-service pattern, reducing operational overhead by consolidating K8S orchestration across key service domains.",
                "Architected a hybrid Macro-service model and resource-sharing framework that reduced infrastructure operational costs by 25%.",
                "Increased internal system stability by improving unit test coverage from 45% to 85% through gRPC mock isolation.",
                "Automated deployment workflows via ADO pipelines, reducing manual release overhead by ~40%."
            ],
            tech: ["Golang", "gRPC", "MySQL", "Node.js", "Kubernetes", "ADO"]
        },
        {
            company: "ASCENDION ENGINEERING",
            role: "Software Engineer (Accenture Engagement)",
            period: "Nov 2022 – Oct 2024",
            location: "Bangalore, India",
            points: [
                "Successfully migrated a global healthcare product from a classic monolith to a cloud-native architecture.",
                "Managed a complex database transformation involving 100+ tables and millions of records with 100% cloud deployment uptime.",
                "Established a robust testing framework with Testify, serving as the gold standard for all subsequent service migrations.",
                "Streamlined CI/CD using GitLab and Harness, implementing blue-green deployment strategies that reduced rollback time from hours to minutes.",
            ],
            tech: ["Golang", "GitLab", "Gorilla/Mux", "MongoDB", "Gorm", "Harness"]
        },
        {
            company: "COFORGE",
            role: "Senior Software Engineer",
            period: "July 2020 – Nov 2022",
            location: "G.Noida, India",
            points: [
                "Architected a Banking Audit System that processed 1M+ transactions daily using a Microservices mesh, improving data integrity by 30%.",
                "Built an API caching layer using Go and Redis that reduced service latency by 40% for high-traffic endpoints.",
                "Engineered a digital platform for pawn-broking dealers with a Task Prioritization and SLA framework that eliminated process bottlenecks.",
                "Optimized backend flows for global stakeholders using AWS Lambda and DynamoDB for event-driven processing."
            ],
            tech: ["Golang", "Echo", "Redis", "AWS", "DynamoDB", "Java", "Spring Boot", "MySQL"]
        },
        {
            company: "NIIT TECHNOLOGIES",
            role: "Trainee Java Developer",
            period: "Jan 2020 – July 2020",
            location: "G.Noida, India",
            points: [
                "Assisted in developing business platforms for pawn-broking dealers with a focus on secure transaction handling.",
                "Developed documentation templates for process model mapping to improve onboarding efficiency."
            ],
            tech: ["Java", "Spring Boot", "JPA", "MySQL", "Golang", "AWS"]
        }
    ],

    projects: [
        {
            title: "BANKING SYSTEM MICROSERVICES",
            description: "PROBLEM: Legacy monolithic ledger systems caused high latency and data sync issues. SOLUTION: Architected an event-driven microservices mesh with Go, Redis caching, and real-time ledger sync. RESULT: Reduced API latency by 40% while processing 1M daily transactions with 30% improved data integrity.",
            period: "2021 – 2022",
            tech: ["Golang", "Echo Server", "Redis", "AWS DynamoDB", "Lambda"],
            link: "#contact"
        },
        {
            title: "HEALTHCARE CLOUD MIGRATION",
            description: "PROBLEM: High-compliance healthcare data was locked in legacy on-prem servers. SOLUTION: Engineered a zero-downtime migration pipeline to AWS using MongoDB and Gorm. RESULT: Successfully transformed millions of records with 100% cloud deployment uptime and HIPAA-compliant data isolation.",
            period: "2022 – 2024",
            tech: ["Golang", "MongoDB", "Gorm", "Gorilla/Mux"],
            link: "#contact"
        },
        {
            title: "ECOMMERCE BACKEND CONSOLIDATION",
            description: "PROBLEM: Distributed microservices caused high operational overhead and cross-service latency. SOLUTION: Consolidated 12+ legacy services into a hybrid Macro-service model (Order, Inventory, User) using K8S Orchestration and a Redis Caching layer. RESULT: Lowered infrastructure costs by 25% and significantly reduced inter-service overhead.",
            period: "2024",
            tech: ["Golang", "Redis", "gRPC", "Kubernetes"],
            link: "#contact"
        }
    ]
};

// GSAP and THREE are provided as globals via index.html <script> tags.

// --- Configuration ---
const CONFIG = {
    particles: {
        count: 150,
        color: 0x00f5ff,
        connectionDistance: 150,
        nodeSize: 1.5
    },
    bootSequence: [
        "> INITIALIZING SYSTEM KERNEL v2.0...",
        "> LOADING SYSTEM ARCHITECTURE LAYER...",
        "> ESTABLISHING THREE.JS CONTEXT...",
        "> SYNCING BACKEND MODULES (GOLANG/NODE.JS)...",
        "> CONNECTING TO CLOUD INFRASTRUCTURE (AWS)...",
        "> AUTHENTICATION SUCCESSFUL...",
        "> WELCOME, VISITOR."
    ],
    circuit: {
        color: 'rgba(0, 245, 255, 0.05)',
        glowColor: 'rgba(0, 245, 255, 0.2)',
        count: 15
    },
    glitch: {
        intervalMin: 8000, // Adjusted for expert feedback
        intervalMax: 15000,
        duration: 0.2
    }
};

// --- Registry for Expert Management ---
const REGISTRY = {
    triggers: [],
    timelines: [],
    setters: [],
    masterTimeline: null,
    isSystemPaused: false
};

// --- SVG Circuit Layer (Expert Pass - Abstract Traces) ---
function initCircuitBackground() {
    const layer = document.getElementById('svg-background-layer');
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    let svgHtml = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
    
    // Abstract traces - Layer 4 (Sparse)
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = 50 + Math.random() * 200;
        svgHtml += `
            <path d="M ${x} ${y} L ${x + size} ${y} L ${x + size + 20} ${y + 20}" 
                  stroke="rgba(0, 245, 255, 0.05)" 
                  stroke-width="0.5" 
                  fill="none" />
        `;
    }

    svgHtml += '</svg>';
    layer.innerHTML = svgHtml;
}

// --- Terminal Boot Sequence ---
async function runBootSequence() {
    const textTarget = document.getElementById('terminal-boot-text');
    const loader = document.getElementById('loader-overlay');
    const main = document.getElementById('main-content');

    for (const line of CONFIG.bootSequence) {
        const lineElement = document.createElement('div');
        textTarget.appendChild(lineElement);
        
        // Check for reduced motion early
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            lineElement.textContent = line;
            continue;
        }

        // Typewriter effect per line
        for (let i = 0; i < line.length; i++) {
            lineElement.textContent += line[i];
            await new Promise(r => setTimeout(r, 20));
        }
        await new Promise(r => setTimeout(r, 200));
    }

    // Fade out loader
    gsap.to(loader, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            loader.style.display = 'none';
            gsap.to(main, { opacity: 1, duration: 1.5 });
        }
    });
}

// --- Three.js Particle Engine ---
class ParticleEngine {
    constructor() {
        this.canvas = document.getElementById('canvas-3d');
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
        
        this.particles = [];
        this.mouse = new THREE.Vector2(0, 0);
        
        this.init();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.camera.position.z = 400;

        // Create particles
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(CONFIG.particles.count * 3);
        
        for (let i = 0; i < CONFIG.particles.count; i++) {
            const x = (Math.random() - 0.5) * 800;
            const y = (Math.random() - 0.5) * 800;
            const z = (Math.random() - 0.5) * 800;
            
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            
            this.particles.push({
                pos: new THREE.Vector3(x, y, z),
                vel: new THREE.Vector3((Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5)
            });
        }

        const material = new THREE.PointsMaterial({
            color: CONFIG.particles.color,
            size: CONFIG.particles.nodeSize,
            transparent: true,
            opacity: 0.8
        });

        this.points = new THREE.Points(geometry, material);
        this.scene.add(this.points);

        window.addEventListener('resize', () => this.onResize());
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
        
        this.animate();
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onMouseMove(e) {
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        if (REGISTRY.isSystemPaused) return;

        const positions = this.points.geometry.attributes.position ? this.points.geometry.attributes.position.array : new Float32Array(CONFIG.particles.count * 3);
        
        for (let i = 0; i < CONFIG.particles.count; i++) {
            const p = this.particles[i];
            
            // Subtle movement
            p.pos.add(p.vel);
            
            // Boundary check
            if (p.pos.x > 400 || p.pos.x < -400) p.vel.x *= -1;
            if (p.pos.y > 400 || p.pos.y < -400) p.vel.y *= -1;
            if (p.pos.z > 400 || p.pos.z < -400) p.vel.z *= -1;

            positions[i * 3] = p.pos.x;
            positions[i * 3 + 1] = p.pos.y;
            positions[i * 3 + 2] = p.pos.z;
        }
        
        this.points.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this.points.geometry.attributes.position.needsUpdate = true;

        // Subtle camera drift based on mouse
        this.camera.position.x += (this.mouse.x * 50 - this.camera.position.x) * 0.05;
        this.camera.position.y += (this.mouse.y * 50 - this.camera.position.y) * 0.05;
        this.camera.lookAt(this.scene.position);

        this.renderer.render(this.scene, this.camera);
    }
}

// --- Content Rendering ---
function renderContent() {
    try {
        console.info("HYDRATION_CORE // Initializing system content injection...");
        
        // Diagnostic Heartbeat
        const targets = {
            bio: !!document.getElementById('bio-text'),
            skills: !!document.getElementById('skills-container'),
            experience: !!document.getElementById('experience-timeline'),
            projects: !!document.getElementById('projects-grid'),
            commendations: !!document.getElementById('commendations-grid')
        };
        
        console.info(`HYDRATION_CORE // Data Metrics: Experience[${CONTENT.experience.length}] Projects[${CONTENT.projects.length}] Skills[${CONTENT.skills.length}]`);
        console.info("HYDRATION_CORE // DOM Targets Status:", targets);
        
        // Bio
        const bioText = document.getElementById('bio-text');
        if (bioText) {
            bioText.textContent = CONTENT.bio;
        } else {
            console.warn("BIO_CONTAINER_NOT_FOUND // Skipping bio hydration.");
        }

        // Skills
        const skillsContainer = document.getElementById('skills-container');
        if (skillsContainer) {
            skillsContainer.innerHTML = ''; 
            CONTENT.skills.forEach(skill => {
                const row = document.createElement('div');
                row.className = 'skill-row';
                row.innerHTML = `
                    <div class="skill-info">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-percentage">${skill.level}%</span>
                    </div>
                    <div class="progress-bg">
                        <div class="progress-fill" style="width: 0%" data-width="${skill.level}%"></div>
                    </div>
                `;
                skillsContainer.appendChild(row);
            });
        } else {
            console.warn("SKILLS_CONTAINER_NOT_FOUND // Skipping skills hydration.");
        }

        // Experience
        const expContainer = document.getElementById('experience-timeline');
        if (expContainer) {
            expContainer.innerHTML = '';
            CONTENT.experience.forEach((exp, idx) => {
                const entry = document.createElement('div');
                entry.className = 'log-entry';
                const isCurrent = idx === 0;

                entry.innerHTML = `
                    <div class="log-header">
                        <span class="log-company">
                            ${exp.company}
                            ${isCurrent ? '<span class="status-badge pulsing">CURRENT</span>' : ''}
                        </span>
                        <span class="log-period">[ ${exp.period} ]</span>
                    </div>
                    <div class="log-body">
                        <p>> ${exp.role} // ${exp.location}</p>
                        <ul class="log-points">
                            ${exp.points.map(p => `<li>- ${p}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="log-tech-tags">
                        ${exp.tech.map(t => `<span class="tech-tag-mini">${t}</span>`).join('')}
                    </div>
                `;
                expContainer.appendChild(entry);
            });
        } else {
            console.warn("EXP_CONTAINER_NOT_FOUND // Skipping experience hydration.");
        }

        // Commendations
        const commsGrid = document.getElementById('commendations-grid');
        if (commsGrid) {
            commsGrid.innerHTML = '';
            CONTENT.commendations.forEach(comm => {
                const card = document.createElement('div');
                card.className = 'holo-card comm-card';
                card.innerHTML = `
                    <div class="card-inner">
                        <div class="comm-icon">VALIDATOR_CERT</div>
                        <h3 class="comm-title">${comm.title}</h3>
                        <p class="comm-org">${comm.organization} // ${comm.year}</p>
                        <p class="comm-desc">${comm.description}</p>
                    </div>
                `;
                commsGrid.appendChild(card);
            });
        } else {
            console.warn("COMMS_CONTAINER_NOT_FOUND // Skipping commendation hydration.");
        }

        // Projects
        const projectsGrid = document.getElementById('projects-grid');
        if (projectsGrid) {
            projectsGrid.innerHTML = '';
            CONTENT.projects.forEach((proj, idx) => {
                const card = document.createElement('div');
                card.className = 'flip-card-3d';
                card.setAttribute('tabindex', '0');
                card.setAttribute('role', 'button');
                card.setAttribute('aria-label', `Project: ${proj.title}`);
                
                const thumbUrl = `assets/graphics/proj-${idx+1}.png`;
                const isIntelRequest = proj.link === '#request-intel';

                card.innerHTML = `
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div class="project-thumb-container">
                                <img src="${thumbUrl}" alt="${proj.title} Layout" onerror="this.src='https://placehold.co/600x400/000814/00f5ff?text=SYSTEM_SCAN_PENDING'; this.style.opacity='0.5';">
                            </div>
                            <div class="project-info">
                                <h3>${proj.title}</h3>
                                <p>${proj.period}</p>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <div class="project-details">
                                <p class="proj-desc">${proj.description}</p>
                                <div class="proj-tech">
                                    ${proj.tech.map(t => `<span>${t}</span>`).join('')}
                                </div>
                                <a href="${proj.link}" class="btn-glow">${isIntelRequest ? 'REQUEST_INTEL' : 'VIEW_SOURCE'}</a>
                            </div>
                        </div>
                    </div>
                `;
                projectsGrid.appendChild(card);
            });
        } else {
            console.warn("PROJECTS_CONTAINER_NOT_FOUND // Skipping project hydration.");
        }

        // --- Post-Render Logic: Interaction Bindings ---
        initSystemCounters();
        initProjectFlipLogic();

    } catch (err) {
        console.error("Hydration Error:", err);
    }
}

// --- Interactions & Animations ---
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Fixed Parallax Logic
    const initParallax = () => {
        const layer1 = document.getElementById('parallax-bg-layer-1');
        const layer2 = document.getElementById('parallax-bg-layer-2');
        if (!layer1 || !layer2) return;

        const layer1Setter = gsap.quickTo(layer1, 'y', { duration: 0.5, ease: 'power2.out' });
        const layer2Setter = gsap.quickTo(layer2, 'y', { duration: 0.8, ease: 'power3.out' });
        
        ScrollTrigger.create({
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
                const scroll = self.scroll();
                layer1Setter(scroll * -0.2);
                layer2Setter(scroll * -0.05);
            }
        });
    };

    if (window.innerWidth > 768) initParallax();

    // Intersection Observer for Skill Progress
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target.querySelector('.progress-fill');
                if (bar) bar.style.width = bar.getAttribute('data-width');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skill-row').forEach(row => observer.observe(row));
}

// --- Glitch Engine ---
function initGlitchEffect() {
    const heroText = document.querySelector('.glitch-text');
    if (!heroText) return;

    const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 5 });
    
    const generateClip = () => {
        const y1 = Math.random() * 100;
        const y2 = y1 + Math.random() * 20;
        return `polygon(0% ${y1}%, 100% ${y1}%, 100% ${y2}%, 0% ${y2}%)`;
    };

    glitchTimeline
        .to(heroText, { skewX: 20, duration: 0.1, ease: "steps(1)" })
        .set(heroText, { '--glitch-clip-1': generateClip, '--glitch-clip-2': generateClip })
        .to(heroText, { skewX: -20, duration: 0.1, ease: "steps(1)" })
        .set(heroText, { '--glitch-clip-1': "polygon(0 0, 0 0, 0 0, 0 0)", '--glitch-clip-2': "polygon(0 0, 0 0, 0 0, 0 0)" })
        .to(heroText, { skewX: 0, duration: 0.1 });
}

// --- Counter Logic ---
function initSystemCounters() {
    const metrics = document.querySelectorAll('.metric-value');
    metrics.forEach(metric => {
        const target = parseInt(metric.getAttribute('data-target'));
        if (isNaN(target)) return;

        gsap.to(metric, {
            scrollTrigger: {
                trigger: metric,
                start: "top 80%", /* Accelerated trigger v12.0 */
                once: true
            },
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            ease: "power2.out"
        });
    });
}

// --- Project Interaction Hardening v12.0 ---
function initProjectFlipLogic() {
    document.querySelectorAll('.flip-card-3d').forEach(card => {
        // Handle touch/click for mobile discoverability
        card.addEventListener('click', (e) => {
            // Only toggle if not clicking the "VIEW SOURCE" link inside
            if (!e.target.closest('.btn-glow')) {
                card.classList.toggle('flipped');
            }
        });
        
        // Ensure keyboard accessibility
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                card.classList.toggle('flipped');
            }
        });
    });
}

// --- Contact Form ---
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        
        btn.textContent = 'UPLINK_SUCCESSFUL // TRANSMISSION_SENT';
        btn.style.background = 'rgba(0, 255, 136, 0.2)';
        btn.style.borderColor = 'var(--success-green)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.borderColor = '';
            form.reset();
        }, 5000);
    });
}

// --- HUD Drawer ---
function initCommDrawer() {
    const trigger = document.getElementById('comm-trigger');
    const drawer = document.getElementById('comm-drawer');
    if (!trigger || !drawer) return;

    trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', !isExpanded);
        drawer.classList.toggle('active');
        drawer.setAttribute('aria-hidden', isExpanded);
    });
}

// --- Side Nav [Refined v9.1] ---
function initSideNav() {
    const sections = document.querySelectorAll('.page-section, #hero');
    const navItems = document.querySelectorAll('#side-nav li');
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const sideNav = document.getElementById('side-nav');

    // Mobile Toggle Logic
    if (mobileToggle && sideNav) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = mobileToggle.classList.contains('open');
            mobileToggle.classList.toggle('open');
            sideNav.classList.toggle('open');
            mobileToggle.setAttribute('aria-expanded', !isOpen);
        });
    }

    const updateNav = () => {
        let current = 'hero';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Precise v9.1 threshold for 6rem padding
            if (window.pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.section === current);
        });
    };

    window.addEventListener('scroll', updateNav);
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = document.getElementById(item.dataset.section);
            if (target) {
                // Tactical Close on Mobile
                if (window.innerWidth <= 768) {
                    mobileToggle.classList.remove('open');
                    sideNav.classList.remove('open');
                }
                
                // Hard-coded v9.1 offset bond [offsetTop - 80]
                const targetPos = target.offsetTop - 80;
                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// --- System Navigator AI [Definitive Spec v11.0] ---
function initSystemNavigator() {
    const nav = document.getElementById('system-navigator');
    const input = document.getElementById('navigator-input');
    const history = document.getElementById('navigator-history');
    const toggle = document.getElementById('toggle-navigator');
    const header = document.querySelector('.navigator-header');

    if (!nav || !input || !history || !toggle || !header) return;

    const addMessage = (text, type = 'bot') => {
        const msg = document.createElement('div');
        msg.className = `msg ${type}`;
        msg.textContent = text;
        history.appendChild(msg);
        history.scrollTop = history.scrollHeight;
    };

    const handleCommand = (cmd) => {
        const inputVal = cmd.toLowerCase().trim();
        addMessage(cmd, 'user');

        setTimeout(() => {
            if (inputVal.includes('project') || inputVal.includes('work') || inputVal.includes('build')) {
                addMessage('ROUTING // Active Projects Section...');
                const target = document.getElementById('projects');
                if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            } 
            else if (inputVal.includes('experience') || inputVal.includes('career') || inputVal.includes('log')) {
                addMessage('ROUTING // System Logs Section...');
                const target = document.getElementById('experience');
                if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
            else if (inputVal.includes('contact') || inputVal.includes('hire') || inputVal.includes('email')) {
                addMessage('ROUTING // Communications Uplink...');
                const target = document.getElementById('contact');
                if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
            else if (inputVal.includes('about') || inputVal.includes('bio') || inputVal.includes('who')) {
                addMessage('ROUTING // Core Identity Scan...');
                const target = document.getElementById('hero');
                if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
            else if (inputVal.includes('hi') || inputVal.includes('hello')) {
                addMessage('GREETINGS_VISITOR // How can I assist your architectural audit?');
            }
            else {
                addMessage('ERROR // Command unrecognized. Try "Projects", "Experience", or "Contact".');
            }
        }, 500);
    };

    header.addEventListener('click', () => {
        nav.classList.toggle('minimized');
        toggle.textContent = nav.classList.contains('minimized') ? '_' : '×';
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim()) {
            handleCommand(input.value);
            input.value = '';
        }
    });
}

// --- Boot Lifecycle [Expert Pass] ---
(async function() {
    try {
        console.log("System initialization initiated...");
        initCircuitBackground();
        await runBootSequence();
        renderContent();
        initAnimations();
    } catch (err) {
        console.warn("System kernel encountered an initialization error. Activating fail-safe...", err);
        renderContent();
    } finally {
        // Critical cleanup and post-render init
        initGlitchEffect();
        initCommDrawer();
        initSideNav();
        initSystemNavigator();
        initContactForm();
        new ParticleEngine();
        
        // Final sanity for the overlay
        const overlay = document.getElementById('loader-overlay');
        const main = document.getElementById('main-content');
        if (overlay) overlay.style.display = 'none';
        if (main) main.style.opacity = 1;

        console.log("System online.");
    }
})();
