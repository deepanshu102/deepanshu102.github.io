# System Architecture & Design (Milestone 2)

## Layout Structure
- **Global:** Single `index.html` structure.
- **Layer 0 (Background):** Three.js Canvas (Particle field) + CSS Mesh gradient.
- **Layer 1 (Midground):** SVG Circuit traces (Animated via CSS `stroke-dashoffset`).
- **Layer 2 (Foreground):** Content cards, UI text, and Interactive elements.

## Design System
- **Theme:** Tron Legacy / Cyberpunk / Backend Dashboard.
- **Typography:**
    - Headings: `Orbitron` (Geometric/Futuristic).
    - Body: `JetBrains Mono` (Technical/Monospace).
- **Color Palette:**
    - Background: `#050a0e`
    - Primary Cyan: `#00f5ff`
    - Accent Purple: `#7c3aed`
    - Success Green: `#00ff88`

## Logic Flow
1.  **Initialization:** User lands -> Terminal boot sequence starts -> Three.js assets load in background.
2.  **Navigation:** Scroll triggers `IntersectionObserver` -> Section animations fire (GSAP).
3.  **Interaction:** Mouse movement affects 3D text tilt and particle attraction.
