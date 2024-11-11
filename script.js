AOS.init();

var typed = new Typed('#heroText', {
  strings: [
    'Full-Stack Engineer'
  ],
  typeSpeed: 50,
});

let menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", function () {
  let navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
  if (menuBtn.classList.contains("bx-menu")) {
    menuBtn.classList.replace("bx-menu", "bx-x");
  }
  else {
    menuBtn.classList.replace("bx-x", "bx-menu");
  }
})
let currentIndex = 0;
const itemsPerView = 7;

function scrollCarousel(direction) {
  const carousel = document.querySelector('.skills-grid');
  const totalItems = carousel.children.length;

  if (direction === 'right') {
    currentIndex += itemsPerView;
    if (currentIndex >= totalItems) {
      currentIndex = 0; // Loop back to the beginning
    }
  } else if (direction === 'left') {
    currentIndex -= itemsPerView;
    if (currentIndex < 0) {
      currentIndex = totalItems - itemsPerView; // Loop to the end
    }
  }

  // Calculate the width to move the carousel
  const itemWidth = carousel.children[0].clientWidth + 20; // Adjust for gap between items
  const offset = -itemWidth * currentIndex;
  carousel.style.transform = `translateX(${offset}px)`;
}
