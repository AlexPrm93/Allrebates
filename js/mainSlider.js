let dots;
let slides;
let pauseBtn;
let slideCount;
let mob;

let screenSize = window.innerWidth;
const infoBoxes = document.querySelectorAll('.main-block .info-box');

const slideFunct = (countNum) => {
  let count = countNum;
  let currentEl = 0;

  for (let i = 0; i < slideCount; i++) {
    if (dots[i].classList.contains('active')) {
      if (typeof count === 'undefined') {
        count = i + 1;
      }
      currentEl = i;
    }
    dots[i].classList.remove('active');
    slides[i].classList.remove('active');
    if (!mob) {
      infoBoxes[i].classList.remove('active');
    }
  }

  if (count === slideCount) count = 0;

  setTimeout(() => {
    dots[count].classList.add('active');
    slides[count].classList.add('active');
    slides[count].classList.add('animated');
    if (!mob) {
      infoBoxes[count].classList.add('active');
    }
  }, 700)

  setTimeout(() => {
    slides[currentEl].classList.remove('animated');
  }, 1000)

  timer = setTimeout(slideFunct, 7000);
}

const pauseSlide = (pauseBlock) => {
  pauseBlock.addEventListener('click', () => {

    if ( pauseBlock.classList.contains('active') ) {
      pauseBlock.classList.remove('active');
      slideFunct();
    } else {
      pauseBlock.classList.add('active');
      clearTimeout(timer);
    }

  });
}

const chooseSlide = (e) => {
  const target = e.target;
  if (target.className == "dot") {
    for (let i = 0; i < dots.length; i++) {
      if (target === dots[i]) {
        if ( pauseBtn.classList.contains('active') ) {
          pauseBtn.classList.remove('active');
        }
        clearTimeout(timer);
        slideFunct(i);
      }
    }
  }
}

const desktopOrMob = () => {
  screenSize = window.innerWidth;
  if (screenSize > 576) {
    dots      = document.querySelectorAll('.main-block .dot');
    slides    = document.querySelectorAll('.main-block .slide');
    pauseBtn  = document.querySelector('.main-block .pause-block');
    slideCount = 6;
    mob = false;

    pauseSlide(pauseBtn);
    document.querySelector('.main-block .dots-block').addEventListener("click", function(e) {
      chooseSlide(e);
    });
  } else {
    dots      = document.querySelectorAll('.main-block-mob .dot');
    slides    = document.querySelectorAll('.main-block-mob .slide');
    pauseBtn  = document.querySelector('.main-block-mob .pause-block');
    slideCount = 3;
    mob = true;

    pauseSlide(pauseBtn);
    document.querySelector('.main-block-mob .dots-block').addEventListener("click", function(e) {
      chooseSlide(e);
    });
  }
}

let timer = setTimeout(slideFunct, 7000);

desktopOrMob();

window.addEventListener('resize', () => {
  desktopOrMob();
});