// Get references to the elements
const playButton = document.getElementById("playButton");
const videoWrapper = document.querySelector(".video-wrapper");
const video = document.getElementById("video");
const imageContainer = document.querySelector(".image-container");
const img = clickedItem.querySelector('.pricing-img');
const newImageSrc = img.getAttribute('data-active-img');
img.setAttribute('src', newImageSrc);  // Get the new image URL from data attribute
// Add click event listener to the button
playButton.addEventListener("click", function() {
    // Hide the image container and show the video
    imageContainer.style.display = "none";  // Hides the thumbnail image
    videoWrapper.style.display = "block";  // Shows the video
    video.play();  // Plays the video
    playButton.style.display = "none"; // Hide the play button once the video starts
});

/// Function to swap columns and change the image
function swapColumns(index) {
    const gridSection = document.querySelector('.grid-section6');
    const items = gridSection.children;

    // Remove the 'zoomed', 'move-to-center', and 'active' classes from all columns
    for (let item of items) {
        item.classList.remove('zoomed');
        item.classList.remove('move-to-center');
        item.classList.remove('active');  // Remove the active class
    }

    // Add 'zoomed' class to the clicked column
    const clickedItem = items[index];
    clickedItem.classList.add('zoomed');
    
    // Add 'active' class to change the background color of the clicked column
    clickedItem.classList.add('active');
    
    // Get the image inside the clicked column
    const img = clickedItem.querySelector('.pricing-img');
    
    // Get the new image source from the 'data-active-img' attribute
    const newImageSrc = img.getAttribute('data-active-img');
    
    // Check if the new image source is different from the current one
    if (newImageSrc && img.src !== newImageSrc) {
        img.src = newImageSrc;  // Set the new image source as the 'src' attribute
    }

    // Move the side columns to the center (if the clicked column is not the middle one)
    if (index === 1) {  // If middle column is clicked
        return;  // Don't move the side columns when the middle column is clicked
    }

    // Move the side columns to the center (make them visually smaller and centered)
    for (let i = 0; i < items.length; i++) {
        if (i !== index) {
            items[i].classList.add('move-to-center');
        }
    }
}
// Get elements
const hamburger = document.getElementById('hamburger-icon');
const mobileNavLinks = document.getElementById('mobile-nav-links');

// Add click event listener to toggle the "active" class
hamburger.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('active');
});

