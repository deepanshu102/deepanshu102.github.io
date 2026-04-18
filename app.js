/**
 * Portfolio v2.0 - Core Engine
 * Stack: Three.js + GSAP + Vanilla JS
 */

import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.module.min.js';
import { CONTENT } from './content.js';

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
    // Bio
    document.getElementById('bio-text').textContent = CONTENT.bio;

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    CONTENT.skills.forEach(skill => {
        const row = document.createElement('div');
        row.className = 'skill-row';
        row.innerHTML = `
            <div class="skill-info">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="progress-bg">
                <div class="progress-fill" data-level="${skill.level}"></div>
            </div>
        `;
        skillsContainer.appendChild(row);
    });

    // Experience
    const expContainer = document.getElementById('experience-timeline');
    CONTENT.experience.forEach(exp => {
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.innerHTML = `
            <div class="log-header">
                <span class="log-company">${exp.company}</span>
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

    // Projects
    const projectsGrid = document.getElementById('projects-grid');
    CONTENT.projects.forEach((proj, idx) => {
        const card = document.createElement('div');
        card.className = 'flip-card-3d';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Project: ${proj.title}. Link to source code on back.`);
        
        // Performance: Use local hardening assets
        const thumbUrl = `assets/graphics/proj-${idx+1}.png`;

        const isIntelRequest = proj.link === '#request-intel';
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="card-shimmer"></div>
                    <div class="project-thumb-container">
                        <img src="${thumbUrl}" alt="" loading="lazy" onerror="this.src='v1-legacy/assets/img/portfolio/portfolio-${idx+1}.jpg'; this.onerror=null;">
                    </div>
                    <h3 class="project-title">${proj.title}</h3>
                    <div class="project-tags">
                        ${proj.tech.map(t => `<span class="project-tag">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="flip-card-back" aria-hidden="true">
                    <div class="project-meta">
                        <span class="project-period">${proj.period}</span>
                    </div>
                    <p class="project-desc">${proj.description}</p>
                    <div class="project-actions">
                        <a href="${proj.link}" ${isIntelRequest ? '' : 'target="_blank"'} class="btn-glow small" tabindex="-1">
                            ${isIntelRequest ? 'REQUEST_INTEL' : 'DECRYPT_SOURCE'}
                        </a>
                    </div>
                </div>
            </div>
        `;

        // Handle #request-intel clicks
        if (isIntelRequest) {
            card.querySelector('.btn-glow').addEventListener('click', (e) => {
                e.preventDefault();
                const commTrigger = document.getElementById('comm-trigger');
                if (commTrigger) commTrigger.click();
            });
        }

        // Keyboard support for flip (Expert Pass Sync)
        const toggleFlip = (isFlipped) => {
            card.classList.toggle('flipped', isFlipped);
            card.querySelector('.flip-card-back').setAttribute('aria-hidden', !isFlipped);
            card.querySelector('.btn-glow').setAttribute('tabindex', isFlipped ? '0' : '-1');
            
            // Dynamic GPU Memory Management
            if (isFlipped) card.style.willChange = 'transform';
            else card.style.willChange = 'auto';
        };

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFlip(!card.classList.contains('flipped'));
            }
        });

        // Sync hover and focus for memory management
        card.addEventListener('mouseenter', () => card.style.willChange = 'transform');
        card.addEventListener('mouseleave', () => card.style.willChange = 'auto');
        card.addEventListener('focus', () => card.style.willChange = 'transform');
        card.addEventListener('blur', () => card.style.willChange = 'auto');

        projectsGrid.appendChild(card);
    });
}

// --- Glitch Engine (Expert Pass) ---
function initGlitchEffect() {
    const heroText = document.querySelector('.glitch-text');
    if (!heroText) return;

    const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 5 });
    REGISTRY.timelines.push(glitchTimeline);

    const generateClip = () => {
        const y1 = Math.random() * 100;
        const y2 = y1 + Math.random() * 20;
        return `polygon(0% ${y1}%, 100% ${y1}%, 100% ${y2}%, 0% ${y2}%)`;
    };

    glitchTimeline
        .to(heroText, { skewX: 20, duration: 0.1, ease: "steps(1)" })
        .set(heroText, { '--glitch-clip-1': generateClip, '--glitch-clip-2': generateClip, willChange: 'transform' })
        .to(heroText, { skewX: -20, duration: 0.1, ease: "steps(1)" })
        .set(heroText, { '--glitch-clip-1': "polygon(0 0, 0 0, 0 0, 0 0)", '--glitch-clip-2': "polygon(0 0, 0 0, 0 0, 0 0)", willChange: 'auto' })
        .to(heroText, { skewX: 0, duration: 0.1 });

    heroText.addEventListener('mouseenter', () => {
        heroText.style.willChange = 'transform';
        gsap.to(heroText, {
            skewX: 40,
            duration: 0.05,
            repeat: 10,
            yoyo: true,
            onComplete: () => {
                gsap.set(heroText, { skewX: 0 });
                heroText.style.willChange = 'auto';
            }
        });
    });
}

// --- Interactions & Animations ---
function initAnimations() {
    // Expert Pass Protection
    ScrollTrigger.getAll().forEach(t => t.kill());
    REGISTRY.triggers = [];
    REGISTRY.timelines = [];
    REGISTRY.setters = [];

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Master Lifecycle Timeline (Expert Pass)
    const master = gsap.timeline({ repeat: -1 });
    REGISTRY.masterTimeline = master;

    // Weighted Parallax Physics (Expert Pass - Zero Snap)
    const initParallax = () => {
        const layer1Setter = gsap.quickTo('#parallax-bg-layer-1', 'y', { duration: 0.5, ease: 'power2.out' });
        const layer2Setter = gsap.quickTo('#parallax-bg-layer-2', 'y', { duration: 0.8, ease: 'power3.out' });
        
        // Zero-snap initialization
        const initialScroll = window.pageYOffset;
        layer1Setter(initialScroll * -0.2);
        layer2Setter(initialScroll * -0.05);
        
        REGISTRY.setters.push(layer1Setter, layer2Setter);

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

    initParallax();

    // Orientation Change Resilience
    window.addEventListener('resize', () => {
        gsap.delayedCall(0.3, () => {
            ScrollTrigger.refresh();
            initParallax(); // Recreate setters for stale targets
        });
    });

    // Tilt Effect for Holo Cards
    const cards = document.querySelectorAll('.holo-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // Dynamic GPU Management
            card.style.willChange = 'transform';
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: 'power2.out'
            });

            // Shimmer follow mouse
            gsap.to(card, {
                '--shimmer-x': `${x}px`,
                '--shimmer-y': `${y}px`,
                duration: 0.2
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
                rotateX: 0, 
                rotateY: 0, 
                duration: 1, 
                ease: 'elastic.out(1, 0.3)',
                onComplete: () => card.style.willChange = 'auto' 
            });
        });
    });

    // Scroll Triggers
    gsap.utils.toArray('.page-section').forEach(section => {
        // Nav highlight via ScrollTrigger
        ScrollTrigger.create({
            trigger: section,
            start: "top 20%",
            end: "bottom 20%",
            onToggle: self => {
                if (self.isActive) {
                    navItems.forEach(item => {
                        item.classList.toggle('active', item.dataset.section === section.id);
                    });
                }
            }
        });

        // Persistent scanline timeline (Expert Pass Pattern)
        const entries = section.querySelectorAll('.terminal-log');
        entries.forEach(entry => {
            const tl = gsap.timeline({ repeat: -1, paused: true });
            tl.to(entry, { '--scan-y': '1000%', duration: 4, ease: 'none' });
            REGISTRY.timelines.push(tl);
            
            entry.addEventListener('mouseenter', () => tl.play());
            entry.addEventListener('mouseleave', () => tl.reverse()); // Subtle retreat
        });

        // Skill bars animation
        if (section.id === 'about') {
            ScrollTrigger.create({
                trigger: section,
                start: "top 40%",
                onEnter: () => {
                    document.querySelectorAll('.progress-fill').forEach(bar => {
                        bar.style.width = bar.dataset.level + '%';
                    });
                }
            });
        }

        // Terminal log sequences with Flush Logic
        if (section.id === 'experience') {
            const entries = section.querySelectorAll('.log-entry');
            
            gsap.to(entries, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 60%",
                    onLeave: () => {
                        // Flush any remaining animations if user scrolls past
                        entries.forEach(entry => entry.style.opacity = 1);
                    }
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.3
            });
        }
    });

    // Side Nav Logic
    const navItems = document.querySelectorAll('#side-nav li');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.dataset.section;
            gsap.to(window, { duration: 1, scrollTo: `#${targetId}`, ease: "power2.inOut" });
        });
    });

    initCommDrawer();

    // Initialize Master Lifecycle (Phase 2.4.2 Hardening)
    initMasterLifecycle();
}

/**
 * Master Lifecycle Hub
 * Centralizes all visibility, blur, and focus events across the system
 */
function initMasterLifecycle() {
    const handleVisibility = () => {
        const isHidden = document.hidden || !document.hasFocus();
        REGISTRY.isSystemPaused = isHidden;

        if (isHidden) {
            REGISTRY.masterTimeline?.pause();
            REGISTRY.timelines.forEach(tl => tl.pause());
            gsap.globalTimeline.pause();

            // Auto-close Comms
            const drawer = document.getElementById('comm-drawer');
            if (drawer?.classList.contains('active')) {
                drawer.classList.remove('active');
                document.getElementById('comm-trigger').setAttribute('aria-expanded', 'false');
                drawer.setAttribute('aria-hidden', 'true');
            }
        } else {
            REGISTRY.masterTimeline?.play();
            REGISTRY.timelines.forEach(tl => tl.play());
            gsap.globalTimeline.resume();
        }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('blur', handleVisibility);
    window.addEventListener('focus', handleVisibility);
}

/**
 * Communication Drawer HUD Logic
 * Handles toggle, dynamic will-change, and visibility sync
 */
function initCommDrawer() {
    const trigger = document.getElementById('comm-trigger');
    const drawer = document.getElementById('comm-drawer');
    const closeBtn = document.getElementById('close-drawer');
    
    if (!trigger || !drawer || !closeBtn) return;

    const toggleDrawer = (isOpen) => {
        drawer.classList.toggle('active', isOpen);
        trigger.setAttribute('aria-expanded', isOpen);
        drawer.setAttribute('aria-hidden', !isOpen);
        
        // Dynamic GPU Management
        drawer.style.willChange = 'transform';
        gsap.delayedCall(0.5, () => drawer.style.willChange = 'auto');
    };

    trigger.addEventListener('click', () => toggleDrawer(!drawer.classList.contains('active')));
    closeBtn.addEventListener('click', () => toggleDrawer(false));

    // Keyboard Access: Escape key closes drawer
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('active')) {
            toggleDrawer(false);
        }
    });
}

// Start sequence
initCircuitBackground();
runBootSequence().then(() => {
    renderContent();
    initAnimations();
    initGlitchEffect();
});
new ParticleEngine();
