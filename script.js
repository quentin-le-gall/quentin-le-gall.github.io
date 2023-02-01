const audioPlayer1 = document.querySelector("#audio-player-1");
const playButton1 = document.querySelector("#play-button-1");
const pauseButton1 = document.querySelector("#pause-button-1");

playButton1.addEventListener("click", function() {
  audioPlayer1.play();
});

pauseButton1.addEventListener("click", function() {
  audioPlayer1.pause();
});

const audioPlayer2 = document.querySelector("#audio-player-2");
const playButton2 = document.querySelector("#play-button-2");
const pauseButton2 = document.querySelector("#pause-button-2");

playButton2.addEventListener("click", function() {
  audioPlayer2.play();
});

pauseButton2.addEventListener("click", function() {
    audioPlayer2.pause();
  });
