export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls,
}) {
  function updateDisplay(seconds, minutes) {
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
  }

  function reset() {
    updateDisplay(0, minutes);
    clearTimeout(timerTimeOut);
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      updateDisplay(0, minutes);

      if (minutes <= 0) {
        resetControls();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(seconds - 1, minutes);

      countDown();
    }, 1000);
  }

  return {
    countDown,
    reset,
    updateDisplay,
  };
}
