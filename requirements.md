# Requirements Specification

## Functional Requirements
1.  **Core Navigation:** One-page scrolling with IntersectionObserver highlighting.
2.  **Interactive 3D:** Hero section must feature an interactive Three.js particle graph.
3.  **Terminal Simulation:** Experience section must use a typewriter effect to simulate a CLI.
4.  **Portfolio Display:** Projects must be displayed in a 3D flip-card grid with stack tags.
5.  **Lead Gen:** A visible "Available for Hire" status and a fixed floating CTA for contact.
6.  **Responsive Design:** Content must be readable on mobile; heavy 3D elements must be replaced by static/2D CSS equivalents on small screens.

## Content Requirements
- **Bio:** 5.2+ years experience in backend/system architecture.
- **Experience History:** Kairos, Ascendion, Coforge, NIIT.
- **Project List:** Jobseekers-Stops, E-Commerce/Imprint, Healthcare, Banking, Sparsh, Training Portal.
- **Tech Stack:** Golang, AWS, Node.js, Java, MongoDB, gRPC, Kubernetes, CI/CD.
- **Contact:** Email (deepanshuofficials+pro@gmail.com), GitHub, LinkedIn, Phone.

## Non-Functional Requirements
- **Performance:** No "flash of unstyled content" (FOUC). Boot sequence acts as a loader.
- **Deployment:** Zero build tools (No Webpack/Vite). Single `index.html`.
- **Accessibility:** Respect `prefers-reduced-motion` media queries.
