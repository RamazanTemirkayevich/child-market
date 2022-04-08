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