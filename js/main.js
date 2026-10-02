document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    console.log('%c DM Portfolio ',
        'background: #4ade80; color: #0d1117; padding: 4px 10px; border-radius: 4px; font-weight: bold;',
        'Terminal Edition v3.0'
    );
});