const hamburger = document.querySelector('.hamburger'),
   menu = document.querySelector('.menu'),
   closeElem = document.querySelector('.menu__close'),
   closeElemSecond = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
   menu.classList.remove('active');
});

closeElemSecond.addEventListener('click', () => {
   menu.classList.remove('active');
});

