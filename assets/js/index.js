// ES6 Modules
// Default import
import Controls from "./controls.js";
import Timer from "./timer.js";

// DOM - Document Object Model
const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");

const secondsDisplay = document.querySelector(".seconds");
const minutesDisplay = document.querySelector(".minutes");
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;

const controls = Controls();

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls,
});

buttonPlay.addEventListener("click", function () {
  controls.play();
  timer.countDown();
});

buttonPause.addEventListener("click", function () {
  controls.pause();
  clearTimeout(timerTimeOut);
});

buttonStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.remove("hide");
  buttonSoundOff.classList.add("hide");
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
});

buttonSet.addEventListener("click", function () {
  
});
