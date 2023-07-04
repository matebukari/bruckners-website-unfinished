const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let i = 0;

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[n].classList.add('active');
}

function prevSlide() {
  i--;
  if (i < 0) {
    i = slides.length - 1;
  }
  showSlide(i);
}

function nextSlide() {
  i++;
  if (i > slides.length - 1) {
    i = 0;
  }
  showSlide(i);
}

showSlide(i);
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
