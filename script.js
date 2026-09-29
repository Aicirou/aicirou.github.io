document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle & URL parameter support
    const themeToggle = document.getElementById('theme-toggle');
    const urlParams = new URLSearchParams(window.location.search);
    const queryTheme = urlParams.get('theme');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = queryTheme || savedTheme || document.documentElement.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', initialTheme);

    if (themeToggle) {
        themeToggle.textContent = initialTheme === 'dark' ? '☀ light' : '☾ dark';

        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            themeToggle.textContent = next === 'dark' ? '☀ light' : '☾ dark';
        });

        // Listen for OS theme changes if user hasn't explicitly set preference
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                if (!localStorage.getItem('theme') && !urlParams.get('theme')) {
                    const osTheme = e.matches ? 'dark' : 'light';
                    document.documentElement.setAttribute('data-theme', osTheme);
                    themeToggle.textContent = osTheme === 'dark' ? '☀ light' : '☾ dark';
                }
            });
        }
    }
});
