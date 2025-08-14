document.addEventListener('DOMContentLoaded', () => {

    // --- Simple Fade-in on Scroll Animation ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // --- Accordion for FAQ Section ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            item.classList.toggle('active');
        });
    });

    /*************************************************/
    /* --- NEW: Pricing Accordion for Mobile --- */
    /*************************************************/
    const pricingPlans = document.querySelectorAll('.pricing-plan');
    // Set the "Featured" plan to be active by default on page load for mobile
    const featuredPlan = document.querySelector('.pricing-plan.featured');
    if (window.innerWidth <= 768 && featuredPlan) {
        featuredPlan.classList.add('active');
    }

    pricingPlans.forEach(plan => {
        const header = plan.querySelector('.plan-header');
        header.addEventListener('click', () => {
            // This accordion functionality should only work on mobile screens
            if (window.innerWidth <= 768) {
                // Check if the clicked plan is already active
                const wasActive = plan.classList.contains('active');
                
                // First, remove 'active' class from all plans
                pricingPlans.forEach(p => p.classList.remove('active'));

                // If the clicked plan was not active, make it active
                if (!wasActive) {
                    plan.classList.add('active');
                }
            }
        });
    });

    // --- Mobile Navigation Menu ---
    const menuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    if(menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const scrollFunction = () => {
        if (scrollToTopBtn) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }
    };
    window.onscroll = () => {
        scrollFunction();
        revealOnScroll();
    };
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});