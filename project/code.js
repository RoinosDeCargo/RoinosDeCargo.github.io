const flipSound = document.getElementById("flip-sound");

document.querySelectorAll(".flip-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    flipSound.currentTime = 0;
    flipSound.play();
  });
});
