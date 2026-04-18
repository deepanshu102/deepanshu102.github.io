# Phase 2.1: 3D Scene Foundation

## Goal
Establish the core visual framework for the v2.0 portfolio: Terminal Loader, Three.js Particle Hero, and the base Grid layout.

## Scope
- [ ] Initialize `index.html` with Futuristic SEO and CDN dependencies (Three.js, GSAP, Google Fonts).
- [ ] Implement "Layer 0": The Three.js Canvas with a floating node graph.
- [ ] Implement "Layer 1": SVG Circuit traces (base CSS/HTML structure).
- [ ] Implement the "Terminal Boot Sequence": A JS-driven typewriter effect that hides the site until "boot" is complete.

## Technical Details

### Dependencies
- Three.js: `https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.module.min.js`
- GSAP: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`

### Layout Strategy
- Use CSS Grid to overlay the Three.js canvas (z-index: 0), SVG traces (z-index: 1), and content (z-index: 2).
- The "Boot Sequence" will be a full-screen overlay (z-index: 999) that fades out after initialization.

### Three.js Logic
- Particle System: Use `BufferGeometry` for performance.
- Nodes: Small circular sprites.
- Connections: `LineSegments` between particles within a certain distance.
- Interaction: Mouse hover exerts a small gravitational pull/repulsion.

## Verification
- [ ] Browser test: Ensure Three.js context initializes without errors.
- [ ] Performance check: Confirm stable 60fps on desktop.
- [ ] Loader sequence: Verify it correctly transitions to the Hero.
