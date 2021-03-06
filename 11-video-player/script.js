const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

video.addEventListener('click', togglePlay);
//video.addEventListener('play', updateButton)
toggle.addEventListener('click', togglePlay);
document.addEventListener('keyup', (e) => {
  if (e.keyCode === 32) {
    togglePlay();
}})
