const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const quizContainers = document.querySelectorAll('.quiz-container');
let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  if (activeSlide === 5){
    quizContainers.forEach(element => {
      element.style.display = 'block';
    });
    quizContainers.forEach(function(container){
        container.style.position = 'relative';
    }); 
  } else{
    quizContainers.forEach(element => {
      element.style.display = 'none';
    });
    quizContainers.forEach(function(container){
        container.style.position = 'static';
    });
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  if (activeSlide === 5){
    quizContainers.forEach(element => {
      element.style.display = 'block';
    });
    quizContainers.forEach(function(container){
        container.style.position = 'relative';
    });
  } else{
    quizContainers.forEach(element => {
      element.style.display = 'none';
    });
    quizContainers.forEach(function(container){
        container.style.position = 'static';
    });
  }
  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}