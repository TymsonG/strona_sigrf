// Proste interakcje UI: rok w stopce, menu mobilne i aktywne zamykanie po kliknięciu linku.

const yearElement = document.querySelector('#year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear().toString();
}

const menuButton = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuButton && navList) {
  menuButton.addEventListener('click', () => {
    const opened = navList.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(opened));
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}
