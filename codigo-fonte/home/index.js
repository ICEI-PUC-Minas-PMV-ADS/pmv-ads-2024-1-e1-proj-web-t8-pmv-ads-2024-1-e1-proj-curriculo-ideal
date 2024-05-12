const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.carousel-inner img');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = `translateX(${offset}%)`;
  }
}
