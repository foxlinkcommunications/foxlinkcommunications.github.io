const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');
const closeBtn = document.querySelector('.close-btn');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.add('nav-active');
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('nav-active');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
    scrollToSection(item.getAttribute('href'));
  });
});

function scrollToSection(target) {
  const section = document.querySelector(target);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
