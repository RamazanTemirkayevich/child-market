/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/basket.js":
/*!**********************************!*\
  !*** ./src/js/modules/basket.js ***!
  \**********************************/
/***/ ((module) => {

function basket() {
    
}

module.exports = basket;

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

/***/ "./src/js/modules/click.js":
/*!*********************************!*\
  !*** ./src/js/modules/click.js ***!
  \*********************************/
/***/ ((module) => {

function click() {
    
}

module.exports = click;

/***/ }),

/***/ "./src/js/modules/closeForm.js":
/*!*************************************!*\
  !*** ./src/js/modules/closeForm.js ***!
  \*************************************/
/***/ ((module) => {

function closeForm() {
    let input = document.getElementById('form');
    let close = document.getElementById('btn-close');

    close.addEventListener('click', clearForm);

    function clearForm() {
        input.style.visibility = 'hidden';
    };
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

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/***/ ((module) => {

function scrolling() {
    
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
          click = __webpack_require__(/*! ./modules/click */ "./src/js/modules/click.js"),
          chosen = __webpack_require__(/*! ./modules/chosen */ "./src/js/modules/chosen.js"),
          basket = __webpack_require__(/*! ./modules/basket */ "./src/js/modules/basket.js"),
          scrolling = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js"),
          closeForm = __webpack_require__(/*! ./modules/closeForm */ "./src/js/modules/closeForm.js");
    
    tabs();
    counter();
    click();
    chosen();
    basket();
    scrolling();
    closeForm();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map