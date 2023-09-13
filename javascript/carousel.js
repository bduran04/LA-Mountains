
//this is the script for the function of the carousel
const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

// next.addEventListener("click", e => {
//   carousel.scrollBy(width + gap, 0);
//   if (carousel.scrollWidth !== 0) {
//     prev.style.display = "flex";
//   }
//   if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "none";
//   }
// });
// prev.addEventListener("click", e => {
//   carousel.scrollBy(-(width + gap), 0);
//   if (carousel.scrollLeft - width - gap <= 0) {
//     prev.style.display = "none";
//   }
//   if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "flex";
//   }
// });

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