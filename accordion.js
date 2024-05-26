let accordion = document.querySelectorAll('.accordion')

accordion.forEach((item, index) => {
    let accordionBtn = item.querySelector('.accordion-btn')
    accordionBtn.addEventListener('click', () => {
        item.classList.toggle('active')
        let content = item.querySelector('.accordion-content')
        let icon = item.querySelector('.icon')
        if (item.classList.contains('active')) {
            content.style.maxHeight = `${content.scrollHeight}px`
            icon.style.transform = 'rotate(45deg)';
        }
        else {
            content.style.maxHeight = "0px"
            icon.style.transform = 'rotate(0deg)';
        }
        removeOpen(index);
    })
})

let removeOpen = (index1) => {
    accordion.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove('active')
            let content2 = item2.querySelector('.accordion-content')
            content2.style.maxHeight = "0px"
            item2.querySelector('.icon').style.transform = 'rotate(0deg)';
        }
    })
}