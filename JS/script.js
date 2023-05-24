const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.createElement("span");
closeBtn.innerHTML = "&times;";
closeBtn.classList.add("close-btn");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  if (navLinks.classList.contains("nav-active")) {
    navLinks.appendChild(closeBtn);
  } else {
    navLinks.removeChild(closeBtn);
  }
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("nav-active");
  navLinks.removeChild(closeBtn);
});