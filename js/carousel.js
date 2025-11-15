document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  
  if (!slides.length) return; // Exit if no carousel on page
  
  let currentSlide = 0;
  let autoAdvanceInterval;
  
  function showSlide(n) {
    // Wrap around
    if (n >= slides.length) currentSlide = 0;
    else if (n < 0) currentSlide = slides.length - 1;
    else currentSlide = n;
    
    // Update slides
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });
    
    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }
  
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function prevSlide() {
    showSlide(currentSlide - 1);
  }
  
  // Auto-advance every 5 seconds
  function startAutoAdvance() {
    autoAdvanceInterval = setInterval(nextSlide, 5000);
  }
  
  function stopAutoAdvance() {
    clearInterval(autoAdvanceInterval);
  }
  
  // Event listeners
  if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoAdvance();
    startAutoAdvance(); // Restart timer
  });
  
  if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoAdvance();
    startAutoAdvance(); // Restart timer
  });
  
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'));
      showSlide(slideIndex);
      stopAutoAdvance();
      startAutoAdvance(); // Restart timer
    });
  });
  
  // Pause on hover
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoAdvance);
    carousel.addEventListener('mouseleave', startAutoAdvance);
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      stopAutoAdvance();
      startAutoAdvance();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      stopAutoAdvance();
      startAutoAdvance();
    }
  });
  
  // Start auto-advance
  startAutoAdvance();
});
