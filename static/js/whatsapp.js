// ============================================
// Modal WhatsApp (escolha de especialista)
// ============================================
(function () {
  const modal = document.getElementById('whatsModal');
  if (!modal) return;
  let previousFocus = null;
  const closeButton = modal.querySelector('.whats-modal-close');

  function openModal(e) {
    if (e) e.preventDefault();
    previousFocus = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previousFocus) previousFocus.focus();
  }

  const triggers = [
    document.getElementById('openWhatsModal'),
    document.getElementById('openWhatsModalHero'),
    document.getElementById('openWhatsModalContato'),
  ].filter(Boolean);

  triggers.forEach((btn) => btn.addEventListener('click', openModal));

  modal.querySelectorAll('[data-close]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && modal.classList.contains('is-open')) {
      const focusable = Array.from(modal.querySelectorAll('button, a[href]'));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
})();
