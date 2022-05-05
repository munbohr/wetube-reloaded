const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volumeRange = document.getElementById("volume");


let volumeValue = 0.5
video.volume = volumeValue;

const handlePlayClick= (e)=> {
    //if the video is playing, pause Btn has to be appear
    //else play Btn appear
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
    playBtn.innerText = video.paused ? "Pause" : "Play";   
};


const handleMuteClick = (e)=> {
   if(video.muted) {
       video.muted = false;
    } else {
        video.muted = true;
    }
    muteBtn.innerText = video.muted ? "Unmute" : "Mute";
    volumeRange.value = video.muted ? 0: volumeValue;
};

const handleVolumeChange =  (event) => {
    const {
        target: {value}, 
    } = event;
    if(video.muted) {
        video.muted = false;
        muteBtn.innerText = `Mute`;
    } 
    volumeValue = value;
    video.volume = value;
};

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMuteClick);
volumeRange.addEventListener("input", handleVolumeChange);