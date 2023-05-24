const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  navItems.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = '';
    } else {
      item.style.animation = `slideIn 0.5s forwards ${index / 7 + 0.3}s`;
    }
  });
});

// Close the menu and scroll to the section when clicking on a navigation item
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
