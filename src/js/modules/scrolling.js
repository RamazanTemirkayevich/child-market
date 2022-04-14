function scrolling() {
    let head = document.querySelector('.header'),
        list = document.querySelector('.header__body-menu__list'),
        lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || 
            document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
           list.classList.add('out') & head.classList.add('header-out');
        }  else {
           list.classList.remove('out') & head.classList.remove('header-out');
        }
        lastScrollTop = scrollTop   
    })

}

module.exports = scrolling;