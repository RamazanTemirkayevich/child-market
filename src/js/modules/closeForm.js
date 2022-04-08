function closeForm() {
    let input = document.getElementById('form');
    let close = document.getElementById('btn-close');

    close.addEventListener('click', clearForm);

    function clearForm() {
        input.style.visibility = 'hidden';
    };
}

module.exports = closeForm;