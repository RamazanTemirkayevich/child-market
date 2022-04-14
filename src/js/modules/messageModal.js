function messageModal() {
    let btnBasket = document.querySelector('.promo__descr-function__add');
    let modal = document.querySelector('.message');
    let secondBtn = document.querySelector('.promo__descr-function__fav');
    let favoriteModal = document.querySelector('.favorite');

    btnBasket.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    secondBtn.addEventListener('click', () => {
        favoriteModal.style.display = 'flex';
    });

    window.addEventListener('click', outsideClick);

    function outsideClick(e) {
        if (e.target == modal || e.target == favoriteModal) {
            modal.style.display = 'none', favoriteModal.style.display = 'none';
        };
    };
}

module.exports = messageModal;