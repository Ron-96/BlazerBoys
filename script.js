const images = document.querySelectorAll('.image-carousel img');
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 5000);

const images1 = document.querySelectorAll('.image-carousel1 img');
let currentImageIndex1 = 0;

function showNextImage1() {
  images1[currentImageIndex1].classList.remove('active');
  currentImageIndex1 = (currentImageIndex1 + 1) % images1.length;
  images1[currentImageIndex1].classList.add('active');
}

setInterval(showNextImage1, 5000);

const images2 = document.querySelectorAll('.image-carousel2 img');
let currentImageIndex2 = 0;

function showNextImage2() {
  images2[currentImageIndex2].classList.remove('active');
  currentImageIndex2 = (currentImageIndex2 + 1) % images2.length;
  images2[currentImageIndex2].classList.add('active');
}

setInterval(showNextImage2, 5000);

const images3 = document.querySelectorAll('.image-carousel3 img');
let currentImageIndex3 = 0;

function showNextImage3() {
  images3[currentImageIndex3].classList.remove('active');
  currentImageIndex3 = (currentImageIndex3 + 1) % images3.length;
  images3[currentImageIndex3].classList.add('active');
}

setInterval(showNextImage3, 5000);

const images4 = document.querySelectorAll('.image-carousel4 img');
let currentImageIndex4 = 0;

function showNextImage4() {
  images4[currentImageIndex4].classList.remove('active');
  currentImageIndex4 = (currentImageIndex4 + 1) % images4.length;
  images4[currentImageIndex4].classList.add('active');
}

setInterval(showNextImage4, 5000);