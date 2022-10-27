function updateTimerDisplay(seconds, minutes) {
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
}

function resetTimer() {
  updateTimerDisplay(0, minutes);
  clearTimeout(timerTimeOut);
}

function countDown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    updateTimerDisplay(0, minutes);

    if (minutes <= 0) {
      resetControls();
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      --minutes;
    }

    updateTimerDisplay(seconds - 1, minutes);

    countDown();
  }, 1000);
}
