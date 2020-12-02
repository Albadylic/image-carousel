const carouselImages = document.getElementsByClassName("carousel-image");
const startButton = document.querySelector("#start-button");
const stopButton = document.getElementById("stop-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentImage = 0;
let isPlaying = true;

function nextImage() {
  carouselImages[currentImage].classList.remove("visible");
  carouselImages[currentImage].classList.add("hidden");
  currentImage++;
  checkLimits();
  carouselImages[currentImage].classList.add("visible");
  carouselImages[currentImage].classList.remove("hidden");
}

function prevImage() {
  carouselImages[currentImage].classList.remove("visible");
  carouselImages[currentImage].classList.add("hidden");
  carouselImage--;
  checkLimits();
  carouselImages[currentImage].classList.add("visible");
  carouselImages[currentImage].classList.remove("hidden");
}

const checkLimits = () => {
  if (currentImage > carouselImages.length - 1) {
    currentImage = 0;
  } else if (currentImage < 0) {
    currentImage = carouselImages.length - 1;
  }
};

let carouselInterval = setInterval(nextImage, 3000);

const startCarousel = () => {
  if (!isPlaying) {
    isPlaying = true;
    carouselInterval = setInterval(nextImage, 3000);
  }
};

const stopCarousel = () => {
  isPlaying = false;
  clearInterval(carouselInterval);
};

startButton.addEventListener("click", startCarousel);
stopButton.addEventListener("click", stopCarousel);
