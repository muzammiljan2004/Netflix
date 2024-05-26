let video = document.getElementById('video')
let playBtn = document.getElementById('playBtn')
let playIcon = document.getElementById('playIcon')
let seekbar = document.getElementById('seekbar')
let forwardBtn = document.getElementById('forwardBtn')
let backwardBtn = document.getElementById('backwardBtn')
let forwardIcon = document.getElementById('forwardIcon')
let backwardIcon = document.getElementById('backwardIcon')
let paused = 0

forwardBtn.addEventListener('click', () => {
    video.currentTime += 10

})

backwardBtn.addEventListener('click', () => {
    video.currentTime -= 10
})

let playFunction = () => {
    video.play()
    paused = 1
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");      
}

let pauseFunction = () => {
    video.pause()
    paused = 0
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");        
}

let togglePlayPause = () => {
    if (paused == 0) {
        playFunction()
    }
    else if (paused == 1) {
        pauseFunction()
    }
}

playBtn.addEventListener('click', togglePlayPause)

//Seekbar
video.addEventListener('timeupdate', () => {
    seekbar.value = video.currentTime / video.duration * seekbar.max
  })
  
  seekbar.addEventListener('change', () => {
    video.currentTime = video.duration * seekbar.value / seekbar.max
  })


