function burger() {
    let burger = document.querySelector('.header__body-burger');
    let menu = document.querySelector('.header__body-menu');
    
    burger.onclick = function() {
        burger.classList.toggle('header__body-burger__active');
        menu.classList.toggle('header__body-menu__active');
    }
}

module.exports = burger;