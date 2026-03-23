const revealItems = document.querySelectorAll('.reveal-up');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => observer.observe(item));

const sizePills = document.querySelectorAll('.size-pill');
sizePills.forEach((pill) => {
  pill.addEventListener('click', () => {
    sizePills.forEach((button) => button.classList.remove('active'));
    pill.classList.add('active');
  });
});

const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach((button) => button.classList.remove('active'));
    thumb.classList.add('active');
  });
});
