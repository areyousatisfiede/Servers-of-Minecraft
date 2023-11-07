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