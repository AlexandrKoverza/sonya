import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

// Header
window.onscroll = () => {
    // Button to top
    const toTop = document.querySelector('.toTop')
    const Y = window.scrollY

    if (Y > window.innerHeight) {
        toTop.classList.add('toTop-fixed')
    } else {
        toTop.classList.remove('toTop-fixed')
    }
}

// Smooth scrolling
let anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
        event.preventDefault()
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// Burger
let burger = document.querySelector('.burger')
let nav = document.querySelector('.header-bottom')

burger.addEventListener('click', (e) => {
    e.preventDefault()
    burger.classList.toggle('burger-active')
    nav.classList.toggle('active')
})


// Spoiler
document.querySelectorAll('.spoiler-title').forEach((element) => {
    element.addEventListener('click', () => {
        let content = element.nextElementSibling
        if (content.style.maxHeight) {
            document.querySelectorAll('.spoiler-content').forEach((spoilerContent) => {
                spoilerContent.style.maxHeight = null
            })
            setTimeout(() => {
                document.querySelectorAll('.spoiler-title').forEach(title => {
                    title.style.borderBottomLeftRadius = "10px"
                    title.style.borderBottomRightRadius = "10px"
                })
            }, 170)
            if (!content.scrollHeight) {
                document.querySelector('.spoiler-title__plus').forEach(titleArrow => {
                    titleArrow.classList.remove('addMinus')
                })
            }
        } else {
            document.querySelectorAll('.spoiler-content').forEach((spoilerContent) => {
                spoilerContent.style.maxHeight = null
                content.style.maxHeight = content.scrollHeight + 'px'
                if (content.scrollHeight) {
                    document.querySelectorAll('.spoiler-title__plus').forEach(titleArrow => {
                        titleArrow.classList.add('addMinus')
                    })
                }
            })

            document.querySelectorAll('.spoiler-title').forEach(title => {
                title.style.borderBottomLeftRadius = "0px"
                title.style.borderBottomRightRadius = "0px"
            })
        }
    })
});

// Tabs
const tabs = document.querySelectorAll('.tabs')

tabs.forEach(tab => {
    const tabButtons = tab.querySelectorAll('.tabs-button')
    const tabContents = tab.querySelectorAll('.tab-content')

    tabButtons.forEach(tabButton => {
        tabButton.addEventListener('click', () => {
            let tabData = tabButton.getAttribute('data-tab')
            let tabContent = tab.querySelector(tabData)
            if (!tabButton.classList.contains('active')) {
                tabButtons.forEach(item => {
                    item.classList.remove('active')
                })
                tabContents.forEach(item => {
                    item.classList.remove('active')
                })
                tabButton.classList.add('active')
                tabContent.classList.add('active')
            }
        })
    })
    tab.querySelector('.tabs-button:nth-child(1)').click()
})

// Quantity
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

// Select
// Для корректного отображения в IE
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

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

// Swiper
/* .card-item-swiper - Big slider */
const cardBigSlider = new Swiper('.card-item-swiper', {
    loop: true,
})
/* .card-item-small - Small slider */
const cardSmallSlider = new Swiper('.card-item-small', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        424: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        575: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        768: {
            spaceBetween: 50
        },
        992: {
            spaceBetween: 60
        },
    }
})
cardBigSlider.controller.control = cardSmallSlider
cardSmallSlider.controller.control = cardBigSlider

// .article-slider-small - Small slider 
const articleSmallSlider = new Swiper('.article-slider-small', {
    direction: 'vertical',
    loop: false,
    slidesPerView: 5,
    spaceBetween: 29,
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        575: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
    }
})
// .article-slider-big - Big slider 
const articleBigSlider = new Swiper('.article-slider-big', {
    direction: 'vertical',
    loop: false,
})
articleBigSlider.controller.control = articleSmallSlider
articleSmallSlider.controller.control = articleBigSlider