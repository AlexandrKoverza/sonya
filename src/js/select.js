// Для корректного отображения в IE
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// Select
const selects = document.querySelectorAll('.select')

selects.forEach((select) => {
    const selectMainButton = select.querySelector('.select-main')
    const selectMenu = select.querySelector('.select-menu')
    const selectMenuButtons = selectMenu.querySelectorAll('.select-menu__button')

    selectMainButton.addEventListener('click', () => {
        selectMenu.classList.toggle('active')
        selectMainButton.classList.add('active')
    })

    selectMenuButtons.forEach((selectMenuButton) => {
        selectMenuButton.addEventListener('click', (e) => {
            e.stopPropagation()
            let selectMenuButtonText = selectMenuButton.innerText
            selectMainButton.innerText = selectMenuButtonText
            selectMainButton.focus()
            selectMenu.classList.remove('active')
        })
    })

    document.addEventListener('click', (e) => {
        if (e.target !== selectMainButton) {
            selectMenu.classList.remove('active')
            selectMainButton.classList.remove('active')
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' || e.key === 'Escape') {
            selectMenu.classList.remove('active')
            selectMainButton.classList.remove('active')
        }
    })

})