let burger = document.querySelector('.burger')

burger.addEventListener('click', (e) => {
    e.preventDefault()
    burger.classList.toggle('burger-active')
})