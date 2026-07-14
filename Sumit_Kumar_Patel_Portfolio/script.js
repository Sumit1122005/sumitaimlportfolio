// Rotating hero phrase
const phrases = [
  "intelligent systems",
  "machine learning models",
  "full stack web apps",
  "real-time dashboards",
];
let idx = 0;
const rotator = document.getElementById('rotator');
if (rotator) {
  setInterval(() => {
    idx = (idx + 1) % phrases.length;
    rotator.style.opacity = 0;
    setTimeout(() => {
      rotator.textContent = phrases[idx];
      rotator.style.opacity = 1;
    }, 250);
  }, 2600);
  rotator.style.transition = 'opacity .25s ease';
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navInner = document.querySelector('.nav-inner');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.skill-card, .project-row, .timeline-item, .stat');
revealEls.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
