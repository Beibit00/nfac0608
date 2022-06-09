
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

const audioTest = new Audio("./assets/kui---erke-sylkym_(muzsoul.net).mp3");

const playPauseTrack = () => {
 
  if (!audioTest.paused) {
    audioTest.pause();
    playPauseTrackBtn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';
  } else {
    audioTest.play();
    playPauseTrackBtn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
  }
  // if (audio.paused) {
  //   audio.play();
  //   playPauseTrackBtn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
  // } else {
  //   audio.pause();
  //   playPauseTrackBtn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';

  // }
}


function progressValue() {

  progressBar.max = audioTest.duration;
  progressBar.value = audioTest.currentTime;

  document.getElementById('currentTime').innerHTML = (formatTime(Math.floor(audioTest.currentTime)));
  if (document.getElementById('durationTime').innerHTML === "NaN:NaN") {
    document.getElementById('durationTime').innerHTML = "0:00";
  } else {
    document.getElementById('durationTime').innerHTML = (formatTime(Math.floor(audioTest.duration)));
  }



  // currentTime.textContent = formatTime(track.currentTime);
  // durationTime.textContent = formatTime(track.duration);
}
function formatTime(seconds) {
  let min = Math.floor((seconds / 60));
  let sec = Math.floor(seconds - (min * 60));
  if (sec < 10) {
    sec = `0${sec}`;
  };
  return `${min}:${sec}`;
};

setInterval(progressValue, 500);



function changeProgressBar() {
  audioTest.currentTime = progressBar.value;
}







// document.addEventListener('keyup', (event) => {
//   var name = event.key;
//   var code = event.code;
//   // Alert the key name and key code on keydown
//   alert(`Key pressed ${name} \r\n Key code value: ${code}`);
// }, false);


playPauseTrackBtn.addEventListener("click", playPauseTrack);

progressBar.addEventListener("click", changeProgressBar);

background.addEventListener("click", playVideo);