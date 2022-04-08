window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          counter = require('./modules/counter'),
          click = require('./modules/click'),
          chosen = require('./modules/chosen'),
          basket = require('./modules/basket'),
          scrolling = require('./modules/scrolling'),
          closeForm = require('./modules/closeForm');
    
    tabs();
    counter();
    click();
    chosen();
    basket();
    scrolling();
    closeForm();
});