let quantities = document.querySelectorAll('.quantity')

quantities.forEach(quantity => {
    let number = quantity.querySelector('.number')
    let minus = quantity.querySelector('.minus')
    let plus = quantity.querySelector('.plus')
    let x = 1

    plus.addEventListener('click', () => {
        x++
        number.innerText = x
    })

    minus.addEventListener('click', () => {
        if (number.innerHTML > 1) {
            x--
            number.innerText = x
        }
    })
})