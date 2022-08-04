const App = {
  data() {
    return {
      inputValue: '',
      placeHolder: 'Веедите слова...',
      words: null,
      seen: false,
      checkedNumbers:[],
    }
    
  },
  methods: {
    inputHandler(event) {
      this.inputValue = event.target.value
      this.words = this.inputValue.trim().split(' ').sort()
      if(event.target.value.length === 0) {
        this.seen = false
      }
    },
    resultHandler() {
      let arr = this.checkedNumbers
      let sum = 0;
      if(arr.length > 1) {
        for(let i = 0; i < arr.length; i++) {
          sum = sum + Number(arr[i])
        }
        return sum
      }
      },
    }
}


Vue.createApp(App).mount('#app')

const ham = document.querySelector('.submenu__ham')
  ham.addEventListener('click', () => {
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
})
// слайдер картинок
const images = document.querySelectorAll('.slider__photo');
  let i = 0;
function buttonHandler() {
  const btn = document.querySelector('.button__prev');
  images.forEach((image) => {
    image.classList.remove('active')
  })
  images[i].classList.add('active')
  if(i === images.length -1) {
    i = 0
  }
  i++;
}
window.setInterval(() => {
  images.forEach((image) => {
    image.classList.remove('active')
  })
  images[i].classList.add('active')
  if(i === images.length -1) {
    i = 0
  }
  i++;
},3000)