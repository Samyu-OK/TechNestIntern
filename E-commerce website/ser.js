function menu() {
  document.querySelector(".cat").style.display = "block";
}

function bae() {
  document.querySelector(".cat").style.display = "none";
  document.querySelectorAll(".collect").forEach(item => item.style.display = "block");
}


let currentIndex = 0;
const totalSlides = 4;

function showSlide(index) {
  const slides = document.querySelector('.slides');

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(() => {
  nextSlide();
}, 6000);
