// ============================================
// Tema (dark / light)
// ============================================
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const initial = saved || 'light';
  root.classList.add('theme-' + initial);

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const isLight = root.classList.contains('theme-light');
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(isLight ? 'theme-dark' : 'theme-light');
    localStorage.setItem('theme', isLight ? 'dark' : 'light');
  });
})();
