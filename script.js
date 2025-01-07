// Get references to the elements
const playButton = document.getElementById("playButton");
const videoWrapper = document.querySelector(".video-wrapper");
const video = document.getElementById("video");
const imageContainer = document.querySelector(".image-container");
const hamburgerMenu = document.getElementById("hamburgerMenu"); // Reference to the hamburger menu icon
const menu = document.querySelector(".menu"); // Reference to the menu to toggle

// Add click event listener to the button
playButton.addEventListener("click", function() {
    // Hide the image container and show the video
    imageContainer.style.display = "none";  // Hides the thumbnail image
    videoWrapper.style.display = "block";  // Shows the video
    video.play();  // Plays the video
    playButton.style.display = "none"; // Hide the play button once the video starts
});

// Hamburger menu functionality
if (hamburgerMenu && menu) {
    hamburgerMenu.addEventListener("click", function() {
        menu.classList.toggle("active"); // Toggle the 'active' class on the menu
    });
}

// Add click event listener to the hamburger icon for mobile navigation
const hamburger = document.getElementById('hamburger-icon');
const mobileNavLinks = document.getElementById('mobile-nav');
if (hamburger && mobileNavLinks) {
    hamburger.addEventListener('click', () => {
        mobileNavLinks.classList.toggle('active'); // Toggle the active class
    });
}

