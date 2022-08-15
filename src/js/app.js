import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

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
        if(content.style.maxHeight) {
            document.querySelectorAll('.spoiler-content').forEach((spoilerContent) => {
                spoilerContent.style.maxHeight = null
            })
        } else {
            document.querySelectorAll('.spoiler-content').forEach((spoilerContent) => {
                spoilerContent.style.maxHeight = null
                content.style.maxHeight = content.scrollHeight + 'px'
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

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

/* SWIPER 

const name = new Swiper('.', {
    loop: true,
    navigation: {
        nextEl: '.',
        prevEl: '.',
    },
    pagination: {
        el: '.,
    },
})

*/

