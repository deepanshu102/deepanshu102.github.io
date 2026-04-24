# Portfolio v2.0 — Futuristic 3D Build Phases

**Theme:** Deep System Architecture — Tron Legacy meets backend engineering dashboard  
**Stack:** Vanilla HTML/CSS/JS · Three.js · GSAP · SVG animations · Zero build tools  
**Total Estimate:** ~40 hours across 5 phases  
**Deliverable:** Single `index.html` deployable to GitHub Pages

---

## Summary

| Phase | Name | Effort |
|-------|------|--------|
| 1 | 3D Scene Foundation | 8–10h |
| 2 | Content Sections | 10–12h |
| 3 | Visual FX & Polish | 8–10h |
| 4 | Freelance CTAs & Contact | 4–5h |
| 5 | Responsive + GitHub Deploy | 5–6h |
| **Total** | | **~40h** |

---

## Phase 1 · 3D Scene Foundation
**Effort:** 8–10 hours  
**Goal:** Establish the core visual language — everything else is built on top of this.

> ⚠️ Gating dependency. Phases 2–4 can run in parallel only after Phase 1 is locked.

| Task | Detail | Est. |
|------|--------|------|
| Three.js particle field hero | Floating node graph, pulsing connections — the "network" metaphor | 3h |
| Animated circuit-board background | CSS + SVG trace lines, glowing nodes on scroll trigger | 2h |
| Hero section layout + 3D text tilt | Name with CSS perspective transform on mouse move | 2h |
| Custom cursor + scroll reveal system | Glowing dot cursor, IntersectionObserver stagger reveals | 1.5h |

**Tech:** Three.js (CDN), CSS `perspective` / `transform-3d`, IntersectionObserver API

---

## Phase 2 · Content Sections
**Effort:** 10–12 hours  
**Goal:** Migrate all resume data into the futuristic visual system.

| Task | Detail | Est. |
|------|--------|------|
| About — holographic card with 3D tilt | Gyroscope-style mouse parallax, skill bars animated on scroll | 2.5h |
| Experience — terminal-style timeline | Typewriter reveal, CLI aesthetic for each role card | 3h |
| Projects — 3D card flip grid | Front: project name + stack tags. Back: description + links | 3h |
| Skills — radar/hexagon visualization | SVG animated skill web, grouped by domain | 2h |

**Sections to implement:**
- About (bio, 5.2+ years, specialisations)
- Experience (Kairos → Ascendion → Coforge → NIIT)
- Projects (Jobseekers-Stops, E-Commerce/Imprint, Healthcare, Banking, Sparsh, Training Portal)
- Skills radar (Golang, AWS, Node.js, Java, MongoDB, gRPC, Kubernetes, CI/CD)
- Education & Certifications

---

## Phase 3 · Visual FX & Polish
**Effort:** 8–10 hours  
**Goal:** Elevate the design from functional to stunning.

| Task | Detail | Est. |
|------|--------|------|
| Neon glow palette system | CSS vars: `--glow-cyan`, `--glow-green`, `--glow-purple` with box-shadow layers | 1.5h |
| Scroll-linked parallax layers | 3 depth layers moving at different rates using scroll position | 2.5h |
| Hover micro-interactions | Button press effects, card shimmer, nav link underline draw | 2h |
| Loading sequence animation | Boot-up terminal sequence on first load, then hero fade-in | 2h |

**Colour palette:**
- Background: `#050a0e` (near-black)
- Primary glow: `#00f5ff` (cyan)
- Status/available: `#00ff88` (green)
- Accent: `#7c3aed` (purple)

**Typography:**
- Display/headings: `Orbitron` (Google Fonts) — geometric futuristic
- Body/code: `JetBrains Mono` (Google Fonts) — authentic backend dev feel

---

## Phase 4 · Freelance CTAs & Contact
**Effort:** 4–5 hours  
**Goal:** Make it unmistakably clear that Deepanshu is available for hire.

| Task | Detail | Est. |
|------|--------|------|
| "Available for hire" status badge | Pulsing green dot in nav + hero — like a live system status indicator | 1h |
| Contact section with mailto CTA | Futuristic form UI, prominent email + LinkedIn + GitHub links | 2h |
| Floating "Hire Me" action button | Fixed bottom-right, glowing, links directly to email | 1h |

**Contact details to wire up:**
- Email: deepanshuofficials+pro@gmail.com
- GitHub: github.com/deepanshu102
- LinkedIn: linkedin.com/in/deepanshu102
- Phone: +91 9654346513

---

## Phase 5 · Responsive + GitHub Deploy
**Effort:** 5–6 hours  
**Goal:** Ensure the portfolio works on all devices and is ready to push live.

| Task | Detail | Est. |
|------|--------|------|
| Mobile responsiveness pass | Disable 3D effects on touch, graceful fallbacks for particle systems | 2.5h |
| Performance audit | Lazy-load Three.js, reduce particle count on mobile, `prefers-reduced-motion` | 1.5h |
| GitHub Pages config + final QA | `index.html` at repo root, asset paths relative, cross-browser test | 1.5h |

**Mobile strategy:** 3D particle effects and perspective tilt disabled on `(pointer: coarse)` devices. Design degrades gracefully to a clean dark layout — still premium, just without the WebGL overhead.

**Deploy checklist:**
- [ ] `index.html` at repo root
- [ ] All asset paths relative (no `/` prefix)
- [ ] Three.js loaded from CDN (no local node_modules)
- [ ] GSAP loaded from CDN
- [ ] Google Fonts loaded via `<link>` in `<head>`
- [ ] Profile image at `assets/img/profile-img.jpg`
- [ ] LinkedIn URL populated
- [ ] `prefers-reduced-motion` media query respected

---

## Open Items (needed before build)

| Item | Status |
|------|--------|
| LinkedIn profile URL | ✅ Resolved — linkedin.com/in/deepanshu102 |
| GitHub project links (public repos) | ❓ Confirm which projects are public — needed for Phase 2 project cards |
| Profile photo in repo | ✅ Confirmed loading on live site |
| v1 legacy files | 📦 Move existing files to `/v1-legacy/` before starting Phase 1 |

---

## Seeds (Backlog Ideas)

> Seeds are lightweight future ideas — not scheduled, just captured.

| Seed | Description |
|------|-------------|
| 🌱 LinkedIn deep-link | Wire all "connect" CTAs directly to linkedin.com/in/deepanshu102 |
| 🌱 Public repo validation | Audit which of the 6 projects have public GitHub repos; add live links to project cards |

---

## Key Decisions

| Decision | Rationale |
|----------|-----------|
| Vanilla HTML/CSS/JS only | No build step, direct GitHub Pages deploy, zero dependencies to manage |
| Three.js via CDN | Avoids npm/node_modules, keeps repo clean |
| Single `index.html` | Simplest GitHub Pages setup, no routing needed |
| 3D effects disabled on mobile | WebGL particle systems are expensive on mobile GPUs; graceful fallback preserves UX |
| Terminal boot sequence on load | Immediately signals backend identity to any visitor before they scroll |
| v1 files moved to `/v1-legacy/` | Keeps repo root clean for the new build; preserves rollback option |

---

*Last updated: 2026-04-18 · LinkedIn resolved · v1 legacy strategy confirmed · Seeds planted*
