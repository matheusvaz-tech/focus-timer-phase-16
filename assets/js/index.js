// ES6 Modules
// Default import
import resetControls from "./controls.js";
import { Timer } from "./timer.js";

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

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls,
});

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  buttonSet.classList.add("hide");
  buttonStop.classList.remove("hide");

  timer.countDown();
});

buttonPause.addEventListener("click", function () {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");

  clearTimeout(timerTimeOut);
});

buttonStop.addEventListener("click", function () {
  resetControls();
  timer.resetTimer();
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
  let newMinutes = prompt("Quantos minutos?");

  if (!newMinutes) {
    timer.resetTimer();
    return;
  }

  minutes = newMinutes;
  updateTimerDisplay(0, minutes);
});
