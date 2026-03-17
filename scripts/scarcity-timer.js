let time = 600;

setInterval(() => {
  time--;

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  document.getElementById("timer").innerText =
    minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

}, 1000);
