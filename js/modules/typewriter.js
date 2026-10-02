(function initTypewriter() {
    const element = document.getElementById('typewriter');
    if (!element) return;

    const text = 'Derick Muluka';
    let index = 0;
    const speed = 100;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        element.textContent = text;
        return;
    }

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    setTimeout(type, 600);
})();