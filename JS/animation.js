var element = document.getElementById('myElement');

element.addEventListener('mouseenter', function() {
  element.classList.add('animate__animated', 'animate__fadeIn');
});

element.addEventListener('mouseleave', function() {
  element.classList.remove('animate__animated', 'animate__fadeIn');
});