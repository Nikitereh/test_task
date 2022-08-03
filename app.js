function menuHandler() {
  const subMenu = document.querySelector('.menu__submenu');
  const subList = document.querySelector('.submenu__list');
  const dropItems = document.querySelectorAll('.dropdown-menu');
  const subItems = document.querySelectorAll('.submenu__item');
  dropItems.forEach((dropItem) => {
    dropItem.classList.toggle('overlay__dropdown')
  })
  subItems.forEach((subItem) => {
    subItem.classList.toggle('overlay__item');
  })
  subList.classList.toggle('overlay__list');
  subMenu.classList.toggle('overlay__menu');
};

// слайдер картинок
const images = document.querySelectorAll('.slider__photo');
  let i = images.length -1;
function buttonHandler() {
  const btn = document.querySelector('.button__prev');
  images.forEach((image) => {
    image.classList.remove('active')
  })
  images[i].classList.add('active')
  if(i === 0) {
    i = images.length
  }
  i = i -1;
}
window.setInterval(() => {
  images.forEach((image) => {
    image.classList.remove('active')
  })
  images[i].classList.add('active')
  if(i === 0) {
    i = images.length
  }
  i--
},3000)
