function flipCard(card) {
  card.classList.toggle("flipped");
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const navLinks = document.getElementById("navLinks");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
