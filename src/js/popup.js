let buttons = document.querySelectorAll('*[data-popup-btn]')

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', function () {
        let name = buttons[index].getAttribute('data-popup-btn')
        let popup = document.querySelector("[data-popup-window='" + name + "']")
        popup.style.opacity = '1'
        popup.style.visibility = 'visible'

        let popupClose = popup.querySelector('.popup__close')
        popupClose.addEventListener('click', function () {
            popup.style.opacity = '0'
            popup.style.visibility = 'hidden'
        })
    })
}

window.onclick = function (e) {
    if (e.target.hasAttribute('data-popup-window')) {
        let popups = document.querySelectorAll("*[data-popup-window]")
        for (let index = 0; index < popups.length; index++) {
            popups[index].style.opacity = '0'
            popups[index].style.visibility = 'hidden'
        }
    }
}