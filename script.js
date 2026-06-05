/**
 * 1. GLOBAL SCOPE FUNCTIONS
 * Handles modal logic for certificates.
 */
function openModal(imgSrc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("fullCertImage");
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = imgSrc;
        document.body.style.overflow = 'hidden'; 
    }
}

function closeModal() {
    const modal = document.getElementById("certModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; 
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // --- 2. Enhanced Scroll Reveal Logic ---
    const reveals = document.querySelectorAll(".reveal");
    const reveal = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 120; // Slightly increased for smoother entry
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    };

    // --- 3. Unified Scroll & Resize Controller ---
    // Throttle scroll events for better performance
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                handleScrollEffects();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    function handleScrollEffects() {
        // A. Progress Bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const myBar = document.getElementById("myBar");
        if (myBar) myBar.style.width = `${scrolled}%`;

        // B. Scroll Spy
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-links a");
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });

        reveal();
    }

    // --- 4. Typewriter Effect ---
    if (document.querySelector('#typewriter')) {
        new Typed('#typewriter', {
            strings: ['Data Analyst', 'Python Developer', 'Visualization Expert', 'Problem Solver'],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true
        });
    }

    // --- 5. Interactive Card Parallax (Hero Card) ---
    // const heroCard = document.getElementById('main-card');
    // if (heroCard) {
    //     heroCard.addEventListener('mousemove', e => {
    //         const { left, top, width, height } = heroCard.getBoundingClientRect();
    //         const x = e.clientX - left;
    //         const y = e.clientY - top;
            
    //         // Set mouse position for CSS glow
    //         heroCard.style.setProperty('--mouse-x', `${x}px`);
    //         heroCard.style.setProperty('--mouse-y', `${y}px`);

    //         // Subtle 3D rotation based on mouse position
    //         const centerX = width / 2;
    //         const centerY = height / 2;
    //         const rotateX = (y - centerY) / 20;
    //         const rotateY = (centerX - x) / 20;
    //         heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    //     });

    //     heroCard.addEventListener('mouseleave', () => {
    //         heroCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    //     });
    // }

    // --- 6. Smart Cursor ---
    const dot = document.querySelector(".cursor-dot");
    const outline = document.querySelector(".cursor-outline");
    
    window.addEventListener("mousemove", (e) => {
        if (dot && outline) {
            dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            outline.animate({
                transform: `translate(${e.clientX}px, ${e.clientY}px)`
            }, { duration: 400, fill: "forwards" });
        }
    });

    // Cursor interaction for links
    document.querySelectorAll('a, button, .cert-card').forEach(link => {
        link.addEventListener('mouseenter', () => outline.classList.add('cursor-hover'));
        link.addEventListener('mouseleave', () => outline.classList.remove('cursor-hover'));
    });

    // --- 7. Project Slider ---
    const slides = document.querySelectorAll('.project-slide');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    let currentIndex = 0;

    const updateSlider = (n) => {
        if (slides.length === 0) return;
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.opacity = "0";
        });
        currentIndex = (n + slides.length) % slides.length;
        slides[currentIndex].classList.add('active');
        slides[currentIndex].style.opacity = "1";
    };

    if (nextBtn) nextBtn.addEventListener('click', () => updateSlider(currentIndex + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => updateSlider(currentIndex - 1));

    // --- 8. Mobile Menu Toggle ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // --- 9. Form Validation & Submission ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            // Simulate network delay
            setTimeout(() => {
                alert(`Success! Your message has been sent successfully.`);
                this.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // --- 10. Initialization & Cleanup ---
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    window.addEventListener("load", () => {
        const loader = document.getElementById("portal-loader");
        if (loader) {
            loader.classList.add("portal-exit");
            setTimeout(() => loader.style.display = "none", 1000);
        }
        reveal();
    });
});