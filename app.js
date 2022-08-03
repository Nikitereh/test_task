// const App = {
//   data() {
//     return {
//       input: '123'
//     }
//   }
// }
// var Ctor = Vue.createApp(App).mount('#vue__block')
var Main = {
  data() {
    return {
      input: ''
    }
  }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')

// описываем функцию хендлер для переключения оверлея при клике на бургер
function menuHandler() {
  const subMenu = document.querySelector('.menu__submenu');
  const subList = document.querySelector('.submenu__list');
  const dropItems = document.querySelectorAll('.dropdown-menu-item');
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