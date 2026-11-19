(function () {
  const wraps = document.querySelectorAll('.gallery-item-wrap');
  wraps.forEach((wrap, index) => {
    const video = wrap.querySelector('video');
    const button = wrap.querySelector('button');
    if (!video || !button) return;

    button.addEventListener('click', () => {
      if (video.paused) {
        wraps.forEach((other) => {
          const otherVideo = other.querySelector('video');
          if (otherVideo && otherVideo !== video) otherVideo.pause();
        });
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });

    video.addEventListener('play', () => {
      wrap.classList.add('is-playing');
      button.textContent = '❚❚ Pausar';
      button.setAttribute('aria-label', `Pausar vídeo ${index + 1}`);
    });
    video.addEventListener('pause', () => {
      wrap.classList.remove('is-playing');
      button.textContent = '▶ Ver';
      button.setAttribute('aria-label', `Reproduzir vídeo ${index + 1}`);
    });
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) document.querySelectorAll('.gallery-video').forEach((video) => video.pause());
  });
})();
