const playButton = document.getElementById("playButton");
const videoWrapper = document.querySelector(".video-wrapper");
const video = document.getElementById("video");
const imageContainer = document.querySelector(".image-container");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const menu = document.querySelector(".menu");

function swapColumns(index) {
    const gridSection = document.querySelector('.grid-section6');
    const items = gridSection.children;

    for (let item of items) {
        item.classList.remove('zoomed');
        item.classList.remove('move-to-center');
        item.classList.remove('active');
    }

    const clickedItem = items[index];
    clickedItem.classList.add('zoomed');
    clickedItem.classList.add('active');

    const img = clickedItem.querySelector('.pricing-img');
    const newImageSrc = img.getAttribute('data-active-img');

    if (newImageSrc && img.src !== newImageSrc) {
        img.src = newImageSrc;
    }

    if (index === 1) {
        return;
    }

    for (let i = 0; i < items.length; i++) {
        if (i !== index) {
            items[i].classList.add('move-to-center');
        }
    }
}

playButton.addEventListener("click", function() {
    imageContainer.style.display = "none";
    videoWrapper.style.display = "block";
    video.play();
    playButton.style.display = "none";
});

if (hamburgerMenu && menu) {
    hamburgerMenu.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
}

const hamburger = document.getElementById('hamburger-icon');
const mobileNavLinks = document.getElementById('mobile-nav-links');

if (hamburger && mobileNavLinks) {
    hamburger.addEventListener('click', () => {
        console.log("Hamburger icon clicked");
        mobileNavLinks.classList.toggle('active');
        console.log("Mobile nav links active class toggled:", mobileNavLinks.classList.contains('active'));
    });
} else {
    console.error("Hamburger icon or mobile nav links not found");
}

