const mobileMenuIcons = document.querySelectorAll('nav > button > img');
const mobileMenu = document.querySelectorAll('.mobile-menu-canvas li');
const mobileMenuCanvas = document.querySelector('.mobile-menu-canvas');

for (let i = 0; i < mobileMenu.length; i++) {
  mobileMenu[i].addEventListener('click', () => {
    mobileMenuCanvas.classList.toggle('show');
    mobileMenuIcons[0].classList.toggle('hide');
    mobileMenuIcons[1].classList.toggle('hide');
  });
}

for (let i = 0; i < mobileMenuIcons.length; i++) {
  mobileMenuIcons[i].addEventListener('click', () => {
    mobileMenuCanvas.classList.toggle('show');
    mobileMenuIcons[0].classList.toggle('hide');
    mobileMenuIcons[1].classList.toggle('hide');
  });
}
