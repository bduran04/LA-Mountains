
//this is the script for the function of the carousel
const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

// Function to alternate between images
const imageContainer = document.getElementById("content");
const images = ["./images/carousel_image_01.png", "./images/carousel_image_02.png"];
let imageIndex = 0;
let alternatingCount = 0;

function alternateImages() {
  if (alternatingCount < 12) {
    const newImg = document.createElement("img");
    const newClass = document.createElement("class")
    newImg.src = images[imageIndex];
    newImg.alt = `Image ${imageIndex + 1}`;

    imageContainer.appendChild(newImg);
    imageContainer.appendChild(newClass);

    imageIndex = 1 - imageIndex; // Toggle between 0 and 1
    alternatingCount++;

    // Call the function again after a delay (e.g., 1 second)
    setTimeout(alternateImages); // 1000 milliseconds = 1 second
  }
}

// Start alternating images
alternateImages();

// Get references to the image and the buttons
const image = document.getElementById('image');
const toggleButton1 = document.getElementById('toggleButton1');
const toggleButton2 = document.getElementById('toggleButton2');

// Define an array with the image sources
const imageSources = ['./images/bottom_image', 'image2.jpg'];

// Initialize a variable to keep track of the currently displayed image
let currentImageIndex = 0;

// Add click event listeners to the buttons
toggleButton1.addEventListener('click', function () {
  // Show the first image
  currentImageIndex = 0;
  image.src = imageSources[currentImageIndex];
});

toggleButton2.addEventListener('click', function () {
  // Show the second image
  currentImageIndex = 1;
  image.src = imageSources[currentImageIndex];
});
