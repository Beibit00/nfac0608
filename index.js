
const background = document.getElementById("video-background")
const container = document.getElementById("container")
let playVideoBtn = document.getElementById("btn-change-background")
const playPauseTrackBtn = document.getElementById("playpause-track")
const audio = document.getElementById("audio")
const progressBar = document.getElementById("progressBar")
// background.removeAttribute('controls');
// controls.style.visibility = 'visible';
// playVideoBtn.addEventListener("click", (e)=>{
//   background.innerHTML = 
//     '<video id="video" autoplay muted loop width="100%"><source src="assets/video/video.mov"></source> </video>'
// })

function playVideo() {
  if (background.paused) {
    background.play();
    playVideoBtn.style.backgroundColor = 'red'
  } else {
    background.pause()
    playVideoBtn.style.backgroundColor = 'transparent'
    // playVideoBtn.innerHTML = '<p style="color: white;">Party Mode</p>'
  }
}


function playPauseTrack() {
  if (audio.paused) {
    audio.play();
    playPauseTrackBtn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
  } else {
    audio.pause();
    playPauseTrackBtn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';

  }
}


// function progressValue() {

//   progressBar.max = track.duration;
//   progressBar.value = track.currentTime;

//   currentTime.textContent = formatTime(track.currentTime);
//   durationTime.textContent = formatTime(track.duration);
// }

// setInterval(progressValue, 500);

// function formatTime(sec) {
//   let minutes = Math.floor(sec / 60);
//   let seconds = Math.floor(sec - minutes * 60);
//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }
//   return `${minutes}:${seconds}`;
// }

// function changeProgressBar() {
//   track.currentTime = progressBar.value;
// }

// progressBar.addEventListener("click", changeProgressBar);





document.addEventListener('keyup', (event) => {
  var name = event.key;
  var code = event.code;
  // Alert the key name and key code on keydown
  alert(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);


playPauseTrackBtn.addEventListener("click", playPauseTrack);

background.addEventListener("click", playVideo);