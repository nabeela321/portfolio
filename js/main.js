/* ─────────────────────────────────────────
   NABEELA PORTFOLIO — main.js
───────────────────────────────────────── */

/* ── TYPED ROLE ANIMATION ── */
const roles = [
  'Full Stack Developer',
  'Blockchain Enthusiast',
  'React Developer',
  'Computer Vision Dev',
  'Problem Solver'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeRole() {
  if (!typedEl) return;
  const current = roles[roleIndex];

  if (!isDeleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeRole, 2000);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeRole, isDeleting ? 55 : 90);
}

typeRole();

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 90);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));

/* ── ACTIVE NAV LINK ON SCROLL ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveNav() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 250) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

/* ── NAVBAR SCROLLED CLASS ── */
const navbar = document.getElementById('navbar');

function onScroll() {
  setActiveNav();
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', onScroll, { passive: true });

/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

if (hamburger && navLinksEl) {
  hamburger.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
  });

  // Close menu on link click
  navLinksEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinksEl.classList.remove('open');
    });
  });
}

/* ── SMOOTH SCROLL (fallback for older browsers) ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── CONTACT FORM (basic UI feedback) ── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = 'Message Sent! ✓';
    btn.style.background = 'linear-gradient(135deg, #00c9a7, #38bdf8)';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = '';
      btn.disabled = false;
      this.reset();
    }, 3000);
  });
}
