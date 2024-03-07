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

//preparation for the content animation on scroll and needs to be styled in css

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); //based on the classes of my content
    } else {
      entry.target.classList.remove("show"); //based on the classes of my content
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden"); //based on the classes of my content
hiddenElements.forEach((el) => observer.observe(el));
