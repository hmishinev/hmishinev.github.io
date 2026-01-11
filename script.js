// Cookie Consent Management
(function() {
    'use strict';

    const COOKIE_CONSENT_KEY = 'mishinev_cookie_consent';
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');

    // Check if user has already made a choice
    function getConsentStatus() {
        return localStorage.getItem(COOKIE_CONSENT_KEY);
    }

    // Set consent status
    function setConsentStatus(status) {
        localStorage.setItem(COOKIE_CONSENT_KEY, status);
    }

    // Show cookie banner
    function showBanner() {
        if (cookieBanner) {
            setTimeout(function() {
                cookieBanner.classList.add('show');
            }, 500);
        }
    }

    // Hide cookie banner
    function hideBanner() {
        if (cookieBanner) {
            cookieBanner.classList.remove('show');
        }
    }

    // Initialize cookie consent
    function initCookieConsent() {
        const consentStatus = getConsentStatus();

        if (!consentStatus) {
            showBanner();
        }
    }

    // Event listeners for cookie buttons
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            setConsentStatus('accepted');
            hideBanner();
        });
    }

    if (rejectBtn) {
        rejectBtn.addEventListener('click', function() {
            setConsentStatus('rejected');
            hideBanner();
        });
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCookieConsent);
    } else {
        initCookieConsent();
    }
})();

// Mobile Navigation Toggle
(function() {
    'use strict';

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
})();

// Smooth scroll for anchor links
(function() {
    'use strict';

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
})();

// Header scroll effect
(function() {
    'use strict';

    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });
})();
