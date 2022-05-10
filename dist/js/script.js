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

const counters = document.querySelectorAll('.skills__ratings-counter'),
   lines = document.querySelectorAll('.skills__ratings-line span');

// console.log(counters);
counters.forEach((item, i) => {
   lines[i].style.width = item.innerHTML;
   console.log(item.innerHTML);
   console.log(item);
   console.log(i);
});