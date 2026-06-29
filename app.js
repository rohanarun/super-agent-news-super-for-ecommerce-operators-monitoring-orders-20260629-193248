(() => {
  if (typeof window === 'undefined') return;

  if (window.gsap) {
    gsap.from('.hero h1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
    gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' });
    gsap.from('.hero-actions', { y: 20, opacity: 0, duration: 1, delay: 0.35, ease: 'power3.out' });
  }
})();