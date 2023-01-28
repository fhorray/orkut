// Login Page Images
const image = document.querySelector(".hero-container img");

const images = [
  "../img/hero-imgs/img-hero-0.png",
  "../img/hero-imgs/img-hero-1.png",
  "../img/hero-imgs/img-hero-2.png",
  "../img/hero-imgs/img-hero-3.png",
  "../img/hero-imgs/img-hero-4.png",
];

let currentImage = 0;

setInterval(() => {
  image.src = images[currentImage];
  currentImage = (currentImage + 1) % images.length;
}, 5000);
