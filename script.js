const dropBtn = document.querySelector('.services-btn')
const dropDown = document.querySelector('.dropdown')

dropBtn.addEventListener('mouseover', () => {
    dropDown.classList.toggle('active'); 
})

dropBtn.addEventListener('mouseout', () => {
    dropDown.classList.toggle('active');
})

dropDown.addEventListener('mouseover', () => {
        console.log('yea')
        dropDown.classList.toggle('active')
})

dropDown.addEventListener('mouseout', () => {
    dropDown.classList.toggle('active');
})