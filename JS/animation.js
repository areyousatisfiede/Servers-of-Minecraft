var element = document.getElementById('myElement');

element.addEventListener('mouseenter', function() {
  element.classList.add('animate__animated', 'animate__fadeIn');
});

element.addEventListener('mouseleave', function() {
  element.classList.remove('animate__animated', 'animate__fadeIn');
});

document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('main-block');
  element.classList.add('animated');
});

window.addEventListener('scroll', startImageAnimation);

function startImageAnimation() {
  var creatorImg = document.querySelector('.creator-img');
  var helperImg = document.querySelector('.helper-img');
  var creatorImgPosition = creatorImg.getBoundingClientRect().top;
  var helperImgPosition = helperImg.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if (creatorImgPosition < screenPosition) {
    creatorImg.classList.add('animate__animated', 'animate__bounceInLeft');
  }

  if (helperImgPosition < screenPosition) {
    helperImg.classList.add('animate__animated', 'animate__bounceInLeft');
  }
}