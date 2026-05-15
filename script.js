document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.service-card, .about-content, .about-image, .banner');
  
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    observer.observe(el);
  });

  // Navbar scroll logic
  const navbar = document.getElementById('navbar');
  const heroLogo = document.getElementById('hero-logo');
  
  if (navbar && heroLogo) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If the large hero logo is not intersecting (has been scrolled past)
        if (!entry.isIntersecting) {
          navbar.classList.add('visible');
        } else {
          navbar.classList.remove('visible');
        }
      });
    }, { 
      threshold: 0,
      rootMargin: "-80px 0px 0px 0px" // Offset by navbar height roughly
    });
    
    heroObserver.observe(heroLogo);
  }
});
