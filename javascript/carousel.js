
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

const image = document.getElementById('image');
const toggleButton = document.getElementById('toggleButton');

// Define an array with the image sources
const imageSources = ['image1.jpg', 'image2.jpg'];

// Initialize a variable to keep track of the currently displayed image
let currentImageIndex = 0;

// Add a click event listener to the button
toggleButton.addEventListener('click', function() {
  // Toggle between the two images
  currentImageIndex = (currentImageIndex + 1) % imageSources.length;
  image.src = imageSources[currentImageIndex];
});