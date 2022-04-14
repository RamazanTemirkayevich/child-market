window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          counter = require('./modules/counter'),
          burger = require('./modules/burger'),
          chosen = require('./modules/chosen'),
          basket = require('./modules/basket'),
          scrolling = require('./modules/scrolling'),
          closeForm = require('./modules/closeForm'),
          messageModal = require('./modules/messageModal');
    
    tabs();
    counter();
    burger();
    chosen();
    basket();
    scrolling();
    closeForm();
    messageModal()
});