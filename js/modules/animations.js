(function initAnimations() {
    const revealElements = document.querySelectorAll('[class*="reveal-"]');

    if (revealElements.length) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    const counters = document.querySelectorAll('[data-count]');
    let countersAnimated = false;

    if (counters.length) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    countersAnimated = true;
                    animateCounters();
                    counterObserver.disconnect();
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.about-stats');
        if (statsSection) counterObserver.observe(statsSection);
    }

    function animateCounters() {
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 1500;
            const start = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(eased * target);
                counter.textContent = current + '+';
                if (progress < 1) requestAnimationFrame(update);
            }

            requestAnimationFrame(update);
        });
    }

    const skillBars = document.querySelectorAll('.skill-fill');

    if (skillBars.length) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.dataset.width || 0;
                    bar.style.width = width + '%';
                    skillObserver.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => skillObserver.observe(bar));
    }

    const clock = document.getElementById('clock');
    if (clock) {
        function updateClock() {
            const now = new Date();
            clock.textContent = now.toLocaleTimeString('en-US', {
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
            });
        }
        updateClock();
        setInterval(updateClock, 1000);
    }
})();