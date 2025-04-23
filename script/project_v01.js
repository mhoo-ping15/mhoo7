// =========================== video section ===================================
const video = document.getElementById("heroVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("videoProgress");
const playButton = document.getElementById("playButton");

function togglePlay() {
  if (video.paused) {
    video.play();
    playPauseBtn.innerText = "pause";
    playButton.style.display = "none"; // Hide the play button
  } else {
    video.pause();
    playPauseBtn.innerText = "play";
    playButton.style.display = "flex"; // Show the play button again
  }
}

video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.value = percent || 0;
});

progressBar.addEventListener("input", () => {
  const seekTime = (progressBar.value / 100) * video.duration;
  video.currentTime = seekTime;
});

video.addEventListener("play", () => {
  playPauseBtn.innerText = "pause";
  playButton.style.display = "none"; // Hide the play button during playback
});

video.addEventListener("pause", () => {
  playPauseBtn.innerText = "play";
  playButton.style.display = "flex"; // Show the play button again when paused
});

function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}