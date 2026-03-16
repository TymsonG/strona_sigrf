// Interakcje UI: rok w stopce, menu mobilne i zamykanie menu po wyborze pozycji.

const yearElement = document.querySelector('#year');
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const menuButton = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuButton && navList) {
  menuButton.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });

  // Kliknięcie poza menu zamyka panel mobilny.
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const clickedInsideNav = target.closest('.nav');
    if (!clickedInsideNav) {
      navList.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}
