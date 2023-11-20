document.querySelector('.headerBurger').addEventListener('click', function(){
    this.classList.toggle('on');
    document.querySelector('.nav-list').classList.toggle('open');
});