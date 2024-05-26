let modal = document.getElementById("modal")
let close = document.getElementsByClassName("closeBtn")[0]
let imgLinks = document.querySelectorAll('.imgLinks');
let windows = document.getElementsByTagName("body")[0]
let modalContainer = document.getElementById("modalContainer");

let movieTitle = document.getElementById('movieTitle')
let moviePlot = document.getElementById('moviePlot')
let movieSource = document.getElementById('modalVideo')

imgLinks.forEach(image => {
    
    image.addEventListener('click', () => {
        modal.style.display = "block";
        modalContainer.style.display = "block";
        setTimeout(() => {
            modal.style.scale = "1";
        }, 100);
        let title = image.getAttribute('data-movieTitle')
        let src = image.getAttribute('data-src')
        let movieSrc = image.getAttribute('data-movieSrc')

        movieTitle.textContent = title
        modalCover.src = src
        movieSource.src = movieSrc
        
    })
})

close.addEventListener('click', () => {
    closeModal()
})

windows.addEventListener('click', (e) => {
    if (e.target == modalContainer) {
        closeModal();
    }
})

let closeModal = () => {
    modal.style.scale = "0";
    setTimeout(() => {
        modal.style.display = "none";
        modalContainer.style.display = "none";
    }, 100);
    video.pause()
    video.currentTime = 0
    paused = 0
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
    playIcon.style.opacity = 1;
    modalCover.style.opacity = 1;
    video.style.opacity = 0
}

// Modal Video Play
let videoBtn = document.getElementById('playBtn')
let video = document.getElementById('modalVideo')
let modalCover = document.getElementById('modalCover')
let playIcon = document.getElementById('playIcon')
let paused = 0
let hideTimeout;

function playVideo() {
    modalCover.style.opacity = 0;
    video.style.zIndex = 999;
    video.style.opacity = 1
    video.play();
    paused = 1;
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
    scheduleHideIcon();
}

function pauseVideo() {
    video.pause();
    paused = 0;
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
    playIcon.style.opacity = 1;
}

function toggleVideo() {
    if (paused == 0) {
        playVideo();
    } else {
        pauseVideo();
    }
}

function scheduleHideIcon() {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        playIcon.style.opacity = 0;
    }, 2000);
}

video.addEventListener('click', toggleVideo);
videoBtn.addEventListener('click', toggleVideo);

video.addEventListener('mouseover', () => {
    clearTimeout(hideTimeout);
    playIcon.style.opacity = 1;
});

video.addEventListener('mouseout', () => {
    if (paused == 1) {
        scheduleHideIcon();
    }
});