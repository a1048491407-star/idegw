const revealTargets = document.querySelectorAll(
  '.hero-copy, .hero-visual, .section-heading, .gallery, .feature-row, .android-card, .pill-grid, .beta-panel, .faq-list'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

revealTargets.forEach((el) => observer.observe(el));

const style = document.createElement('style');
style.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 700ms ease, transform 700ms ease;
  }
  .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
