function basket() {
    let openBasket = document.getElementById('basket-box');
    let basketModal = document.querySelector('.basket');
    let closeBasket = document.getElementById('close-box');
    let product = document.querySelector('.promo');
    let addToBasket = document.querySelector('.promo__descr-function__add');
    let promo = document.querySelector('.basket__box-container__promo');
    let buy = document.querySelector('.basket__box-container__btns-buy');
    let remove = document.querySelector('.basket__box-container__btns-remove');
    let title = document.querySelector('.basket__box-container__title');
    let nameBasket = document.querySelector('.basket__box-container__name');


    openBasket.addEventListener('click', openBox);

    closeBasket.addEventListener('click', closeBtn);

    window.addEventListener('click', outsideClick);

    function openBox() {
        basketModal.style.display = 'flex';
    };

    function closeBtn() {
        basketModal.style.display = 'none';
    };

    function outsideClick(e) {
        if (e.target == basketModal) {
            basketModal.style.display = 'none';
        };
    };

    addToBasket.addEventListener('click', function() {
        let item = product.cloneNode(true),
            btn = item.querySelector('.promo__descr-function__add'),
            img = item.querySelector('.promo__img'),
            widthPromo = item.querySelector('.promo__descr-function');

        btn.style.display = 'none';
        widthPromo.style.width = '170px';
        promo.appendChild(item);
        item.style.margin = '0px 0px 0px 0px';
        buy.style.display = 'block';
        remove.style.display = 'block';
        img.style.height = '445px';
        title.style.display = 'block';
        nameBasket.style.display = 'none';

        remove.addEventListener('click', () => {
            item.style.display = 'none';
            buy.style.display = 'none';
            remove.style.display = 'none';
            title.style.display = 'none';
        });
    });
}

module.exports = basket;