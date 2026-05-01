document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("myVideo");
  const playBtn = document.getElementById("customPlayBtn");

  // Play video when the custom button is clicked
  playBtn.addEventListener("click", () => {
    video.play();
  });

  // Optional: Pause the video if the user clicks the video area itself while playing
  video.addEventListener("click", () => {
    if (!video.paused) {
      video.pause();
    }
  });

  // When the video officially starts playing:
  // 1. Hide the custom button
  // 2. Turn on native controls
  video.addEventListener("play", () => {
    playBtn.classList.add("hidden");
    video.setAttribute("controls", "controls");
  });

  // When the video pauses or ends:
  // 1. Show the custom button
  // 2. Turn off native controls
  const handlePause = () => {
    playBtn.classList.remove("hidden");
    video.removeAttribute("controls");
  };

  video.addEventListener("pause", handlePause);
  video.addEventListener("ended", handlePause);
});