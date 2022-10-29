import Sounds from "./sounds.js";

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  minutes,
}) {
  let timerTimeOut;
  minutes = Number(minutesDisplay.textContent);

  function updateDisplay(seconds, newMinutes) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;

    secondsDisplay.textContent = String(seconds).padStart(2, "0");
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
  }

  function reset() {
    updateDisplay(0, minutes);
    clearTimeout(timerTimeOut);
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(0, minutes);

      if (isFinished) {
        resetControls();
        updateDisplay();
        Sounds().timeEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(String(seconds - 1), minutes);

      countDown();
    }, 1000);
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  return {
    countDown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  };
}
