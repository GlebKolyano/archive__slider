/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
var upBtn = document.querySelector('.up-button');
var downBtn = document.querySelector('.down-button');
var sidebar = document.querySelector('.sidebar');
var mainSlide = document.querySelector('.main-slide');
var container = document.querySelector('.container');
var countSlides = mainSlide.querySelectorAll('div').length;
var indexSlide = 0;
sidebar.style.top = "-".concat((countSlides - 1) * 100, "vh");
upBtn.addEventListener('click', function () {
  changeSlide('up');
});
downBtn.addEventListener('click', function () {
  changeSlide('down');
});

function changeSlide(direction) {
  if (direction === 'up') {
    indexSlide++;

    if (indexSlide === countSlides) {
      indexSlide = 0;
    }
  } else if (direction === 'down') {
    indexSlide--;

    if (indexSlide < 0) {
      indexSlide = countSlides - 1;
    }
  }

  var heightV = container.clientHeight;
  mainSlide.style.transform = "translateY(-".concat(indexSlide * heightV, "px)");
  sidebar.style.transform = "translateY(".concat(indexSlide * heightV, "px)");
}

;
/******/ })()
;