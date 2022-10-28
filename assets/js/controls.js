import Timer from "./timer";

export default function Controls() {
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    buttonSet.classList.add("hide");
    buttonStop.classList.remove("hide");
  }

  function pause() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
  }

  function reset() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
    buttonSet.classList.remove("hide");
    buttonStop.classList.add("hide");
  }

  function getMinutes() {
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      return false;
    }

    minutes = newMinutes;
    Timer.updateDisplay(0, minutes);
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
  };
}
