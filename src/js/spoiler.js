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