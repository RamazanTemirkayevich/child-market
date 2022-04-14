/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/basket.js":
/*!**********************************!*\
  !*** ./src/js/modules/basket.js ***!
  \**********************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((module) => {

function burger() {
    let burger = document.querySelector('.header__body-burger');
    let menu = document.querySelector('.header__body-menu');
    
    burger.onclick = function() {
        burger.classList.toggle('header__body-burger__active');
        menu.classList.toggle('header__body-menu__active');
    }
}

module.exports = burger;

/***/ }),

/***/ "./src/js/modules/chosen.js":
/*!**********************************!*\
  !*** ./src/js/modules/chosen.js ***!
  \**********************************/
/***/ ((module) => {

function chosen() {
    
}

module.exports = chosen;

/***/ }),

/***/ "./src/js/modules/closeForm.js":
/*!*************************************!*\
  !*** ./src/js/modules/closeForm.js ***!
  \*************************************/
/***/ ((module) => {

function closeForm() {
    let input = document.getElementById('form');
    let close = document.getElementById('btn-close');

    // close.addEventListener('click', clearForm);

    // function clearForm() {
    //     input.style.visibility = 'hidden';
    // };

    close.addEventListener('click', () => {
        input.classList.toggle('clear');
    });
}

module.exports = closeForm;

/***/ }),

/***/ "./src/js/modules/counter.js":
/*!***********************************!*\
  !*** ./src/js/modules/counter.js ***!
  \***********************************/
/***/ ((module) => {

function counter() {
    let counterShow = document.querySelector('.count');
    let counterMinusElem = document.querySelector('.minus');
    let counterPlusElem = document.querySelector('.plus');

    let count = 1;

    updateDisplay();

    counterPlusElem.addEventListener("click", () => {
        count++;
        updateDisplay();
    });

    counterMinusElem.addEventListener("click", () => {

        if (count != 1) {
            count--;
        };

        updateDisplay();
    });

    function updateDisplay() {
        counterShow.innerHTML = count;
    };
}

module.exports = counter;

/***/ }),

/***/ "./src/js/modules/messageModal.js":
/*!****************************************!*\
  !*** ./src/js/modules/messageModal.js ***!
  \****************************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((module) => {

function tabs() {
    
}

module.exports = tabs;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener('DOMContentLoaded', () => {
    const tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
          counter = __webpack_require__(/*! ./modules/counter */ "./src/js/modules/counter.js"),
          burger = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js"),
          chosen = __webpack_require__(/*! ./modules/chosen */ "./src/js/modules/chosen.js"),
          basket = __webpack_require__(/*! ./modules/basket */ "./src/js/modules/basket.js"),
          scrolling = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js"),
          closeForm = __webpack_require__(/*! ./modules/closeForm */ "./src/js/modules/closeForm.js"),
          messageModal = __webpack_require__(/*! ./modules/messageModal */ "./src/js/modules/messageModal.js");
    
    tabs();
    counter();
    burger();
    chosen();
    basket();
    scrolling();
    closeForm();
    messageModal()
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map