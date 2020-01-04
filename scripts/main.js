document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  const menuButton = document.querySelector('#nav-menu-btn');
  const navLinks = document.querySelectorAll('.nav-link');

  menuButton.addEventListener('click', handleMenuClick);
  navLinks.forEach(link => {
    link.addEventListener('click', handleMenuClick);
  });
}

function handleMenuClick() {
  document.querySelector('#nav-links-container').classList.toggle('hidden');
}
