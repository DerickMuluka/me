(function initNavigation() {
    const header = document.getElementById('header');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileClose = document.getElementById('mobileClose');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const sections = document.querySelectorAll('section[id]');
    const backToTop = document.getElementById('backToTop');

    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu?.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    mobileClose?.addEventListener('click', () => {
        mobileMenu?.classList.remove('open');
        document.body.style.overflow = '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    if (sections.length && navLinks.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href && href.includes('#')) {
                            const hash = href.split('#')[1];
                            link.classList.toggle('active', hash === id);
                        }
                    });
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

        sections.forEach(section => observer.observe(section));
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header?.classList.add('scrolled');
        else header?.classList.remove('scrolled');

        if (window.scrollY > 500) backToTop?.classList.add('visible');
        else backToTop?.classList.remove('visible');
    }, { passive: true });

    backToTop?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();