/* ========== 1. MOBILE NAV TOGGLE (hamburger) ========== */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');   // slide‑in menu on mobile
    navToggle.classList.toggle('active');    // animate hamburger → X
  });
}

/* ========== 2. HIDE HEADER UNTIL HERO BOTTOM ========== */
const header      = document.querySelector('header');
const heroSection = document.querySelector('.index-hero') 
                 || document.querySelector('.analyzer-hero') 
                 || document.querySelector('.contact-wrapper');

if (heroSection) {
  function handleScroll() {
    const triggerY = heroSection.offsetTop + heroSection.offsetHeight / 2;
    if (window.scrollY >= triggerY - 80) {
      header.classList.add('header-visible');
    } else {
      header.classList.remove('header-visible');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}


/* ========== 3. OPTIONAL: CLOSE MOBILE NAV ON LINK CLICK ========== */
navLinks?.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-open');
    navToggle.classList.remove('active');
  })
);
