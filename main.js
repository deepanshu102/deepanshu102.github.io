document.addEventListener("DOMContentLoaded", () => {
    
    /* -------------------------------------
       Custom Cursor
    ------------------------------------- */
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Slight delay for the outline for a smooth trailing effect
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Enlarge custom cursor on hoverable elements
    const hoverables = document.querySelectorAll('a, button, .tag, .glass-card, .timeline-content');
    hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursorOutline.style.width = "60px";
            cursorOutline.style.height = "60px";
            cursorOutline.style.borderColor = "rgba(99, 102, 241, 0.8)"; // Primary color
        });
        el.addEventListener("mouseleave", () => {
            cursorOutline.style.width = "40px";
            cursorOutline.style.height = "40px";
            cursorOutline.style.borderColor = "rgba(6, 182, 212, 0.5)"; // Secondary color
        });
    });

    /* -------------------------------------
       Navbar Scroll Effect
    ------------------------------------- */
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    /* -------------------------------------
       Mobile Navigation Toggle
    ------------------------------------- */
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const mobileOverlay = document.querySelector(".mobile-nav-overlay");
    const mobileLinks = document.querySelectorAll(".mobile-links a");

    function toggleMenu() {
        mobileOverlay.classList.toggle("active");
        if (mobileOverlay.classList.contains("active")) {
            document.body.style.overflow = "hidden"; // prevent scrolling when menu open
        } else {
            document.body.style.overflow = "auto";
        }
    }

    mobileBtn.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener("click", toggleMenu);
    });

    /* -------------------------------------
       Scroll Intersection Observer (Reveals)
    ------------------------------------- */
    const reveals = document.querySelectorAll(".reveal");

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // fade in once
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    /* -------------------------------------
       Typing Effect logic (optional flair)
    ------------------------------------- */
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const textArray = ["Senior Software Engineer.", "Cloud Architecture Specialist.", "Backend Expert.", "Freelance Developer."];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = textArray[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                // Pause at end
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        
        // Start typing effect slightly after page load
        setTimeout(type, 1500);
    }
});
