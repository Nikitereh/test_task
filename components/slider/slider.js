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