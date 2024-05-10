let currentSlide = 1;

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  if (n < 1) {
    currentSlide = slides.length;
  } else if (n > slides.length) {
    currentSlide = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[currentSlide - 1].style.display = 'block';
}

// Show the first slide by default
showSlide(currentSlide);

// Handle keyboard navigation
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    showSlide(currentSlide -= 1);
  } else if (event.key === 'ArrowRight') {
    showSlide(currentSlide += 1);
  }
});

