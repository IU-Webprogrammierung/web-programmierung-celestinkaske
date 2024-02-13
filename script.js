function flipCard(card) {
  card.classList.toggle("flipped");
}

const toggleButton = document.getElementById("toggleButton");
const navLinks = document.getElementById("navLinks");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const menuEl = document.getElementById("hamburger-menu");
  const closeEl = document.getElementById("close-menu");

  const isMenuOpen = navLinks.classList.contains("active");

  if (isMenuOpen) {
    menuEl.style.display = "none";
    closeEl.style.display = "block";
  } else {
    menuEl.style.display = "block";
    closeEl.style.display = "none";
  }
});
