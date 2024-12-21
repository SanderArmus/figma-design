// Get references to the elements
const playButton = document.getElementById("playButton");
const videoWrapper = document.querySelector(".video-wrapper");
const video = document.getElementById("video");
const imageContainer = document.querySelector(".image-container");

// Add click event listener to the button
playButton.addEventListener("click", function() {
    // Hide the image container and show the video
    imageContainer.style.display = "none";  // Hides the thumbnail image
    videoWrapper.style.display = "block";  // Shows the video
    video.play();  // Plays the video
    playButton.style.display = "none"; // Hide the play button once the video starts
});
