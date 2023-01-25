let menu = document.getElementById('slideMenu');
let title = menu.querySelector('.title');

title.onclick = function() {
    menu.classList.toggle('open');
};