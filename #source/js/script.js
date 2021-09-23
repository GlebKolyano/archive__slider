const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')

const container = document.querySelector('.container')

let countSlides = mainSlide.querySelectorAll('div').length
let indexSlide = 0

sidebar.style.top = `-${(countSlides-1)*100}vh`

upBtn.addEventListener('click', () => {
  changeSlide('up')
})
downBtn.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if (direction === 'up') {
    indexSlide++
    if (indexSlide === countSlides) {
      indexSlide = 0
    }
  }
  else if (direction === 'down') {
    indexSlide--
    if (indexSlide < 0) {
      indexSlide = countSlides - 1
    }
  }
  const heightV = container.clientHeight
  mainSlide.style.transform = `translateY(-${indexSlide * heightV}px)`
  sidebar.style.transform = `translateY(${indexSlide * heightV}px)`
};