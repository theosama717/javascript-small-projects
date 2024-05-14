const submitBtn = document.querySelector('#submitBtn'); 
const okBtn = document.querySelector('#okBtn'); 
const popup = document.querySelector('#popup'); 


submitBtn.addEventListener('click', () => {
    popup.classList.add('open-popup');
})

okBtn.addEventListener('click', () => {
    popup.classList.remove('open-popup');
})