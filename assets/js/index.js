// ES6 Modules
import { resetControls } from "./controls.js";
import "./timer.js";

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

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  buttonSet.classList.add("hide");
  buttonStop.classList.remove("hide");

  countDown();
});

buttonPause.addEventListener("click", function () {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");

  clearTimeout(timerTimeOut);
});

buttonStop.addEventListener("click", function () {
  resetControls();
  resetTimer();
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
    resetTimer();
    return;
  }

  minutes = newMinutes;
  updateTimerDisplay(0, minutes);
});
