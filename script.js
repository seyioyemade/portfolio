const container = document.querySelector('.container');
const mobileMenuIcons = document.querySelectorAll('nav > button > img');
const mobileMenuCanvas = document.querySelector('.mobile-menu-canvas');

for (let i = 0; i < mobileMenuIcons.length; i++) {
  mobileMenuIcons[i].addEventListener('click',function() {
    container.classList.toggle('show');  
    mobileMenuCanvas.classList.toggle('show');
    mobileMenuIcons[0].classList.toggle('hide');
    mobileMenuIcons[1].classList.toggle('hide');

  });
}





