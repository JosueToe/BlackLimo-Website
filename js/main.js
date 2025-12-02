/* ============================================
   BLACK CAR SERVICE MIAMI - MAIN JAVASCRIPT
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate on Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
    
    // ============================================
    // SMOOTH SCROLL NAVIGATION
    // ============================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                const mobileToggle = document.getElementById('mobileMenuToggle');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
                
                // Calculate offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // STICKY HEADER ON SCROLL
    // ============================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
    
    // ============================================
    // FLEET IMAGE CAROUSEL
    // ============================================
    const carouselImages = document.querySelectorAll('.carousel-image');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const carouselDots = document.querySelectorAll('.carousel-dots .dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        // Hide all slides
        carouselImages.forEach(img => img.classList.remove('active'));
        carouselDots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        if (carouselImages[index]) {
            carouselImages[index].classList.add('active');
        }
        if (carouselDots[index]) {
            carouselDots[index].classList.add('active');
        }
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % carouselImages.length;
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
        showSlide(prev);
    }
    
    if (carouselNext) {
        carouselNext.addEventListener('click', nextSlide);
    }
    
    if (carouselPrev) {
        carouselPrev.addEventListener('click', prevSlide);
    }
    
    // Dot navigation
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-rotate carousel (optional)
    // setInterval(nextSlide, 5000);
    
    // ============================================
    // TESTIMONIAL SLIDER
    // ============================================
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    let currentTestimonial = 0;
    let testimonialInterval;
    
    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        if (testimonialCards[index]) {
            testimonialCards[index].classList.add('active');
        }
        if (testimonialDots[index]) {
            testimonialDots[index].classList.add('active');
        }
        
        currentTestimonial = index;
    }
    
    function nextTestimonial() {
        const next = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(next);
    }
    
    // Auto-rotate testimonials every 5 seconds
    function startTestimonialSlider() {
        testimonialInterval = setInterval(nextTestimonial, 5000);
    }
    
    function stopTestimonialSlider() {
        clearInterval(testimonialInterval);
    }
    
    // Dot navigation for testimonials
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
            stopTestimonialSlider();
            // Restart after 10 seconds
            setTimeout(startTestimonialSlider, 10000);
        });
    });
    
    // Start auto-rotation
    if (testimonialCards.length > 0) {
        startTestimonialSlider();
        
        // Pause on hover
        const testimonialsCarousel = document.querySelector('.testimonials-carousel');
        if (testimonialsCarousel) {
            testimonialsCarousel.addEventListener('mouseenter', stopTestimonialSlider);
            testimonialsCarousel.addEventListener('mouseleave', startTestimonialSlider);
        }
    }
    
    // ============================================
    // SCROLL TO TOP BUTTON
    // ============================================
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ============================================
    // LAZY LOADING FOR IMAGES
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ============================================
    // LOADING ANIMATION
    // ============================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // ============================================
    // PREVENT FORM RESUBMISSION ON PAGE RELOAD
    // ============================================
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
    
    // ============================================
    // ACCESSIBILITY: KEYBOARD NAVIGATION
    // ============================================
    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach(element => {
        if (!element.hasAttribute('tabindex') && element.getAttribute('tabindex') !== '-1') {
            element.setAttribute('tabindex', '0');
        }
    });
    
    // ============================================
    // PERFORMANCE: DEBOUNCE SCROLL EVENTS
    // ============================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll events
    const debouncedScroll = debounce(() => {
        // Scroll-based functionality here
    }, 10);
    
    window.addEventListener('scroll', debouncedScroll);
    
    // ============================================
    // CONSOLE MESSAGE
    // ============================================
    console.log('%cBlack Car Service Miami', 'color: #D4AF37; font-size: 24px; font-weight: bold;');
    console.log('%cLuxury Transportation Services', 'color: #C0C0C0; font-size: 14px;');
    
});

