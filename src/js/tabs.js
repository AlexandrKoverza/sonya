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

    tab.querySelector('.tabs-button:nth-child(2)').click()
})