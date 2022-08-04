const ham = document.querySelector('.submenu__ham');
  ham.addEventListener('click', () => {
  const subMenu = document.querySelector('.menu__submenu');
  const subList = document.querySelector('.submenu__list');
  const dropItems = document.querySelectorAll('.dropdown-menu');
  const subItems = document.querySelectorAll('.submenu__item');
  dropItems.forEach((dropItem) => {
    dropItem.classList.toggle('overlay__dropdown');
  })
  subItems.forEach((subItem) => {
    subItem.classList.toggle('overlay__item');
  })
  subList.classList.toggle('overlay__list');
  subMenu.classList.toggle('overlay__menu');
})