// ============================================
// Header com scroll (is-scrolled)
// ============================================
(function () {
  const header = document.getElementById('siteHeader');
  const hero = document.querySelector('.hero');
  if (!header || !hero) return;

  const heroHeight = hero.offsetHeight * 0.6;

  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > heroHeight);
  });
})();
