const btns = document.querySelectorAll('.btn'); 


btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const ans = btn.parentElement.nextElementSibling;
        ans.classList.toggle('show-ans')
        const i = btn.childNodes[1]; 
        if (i.classList.contains('fa-plus')) {
            i.classList.add('fa-minus'); 
            i.classList.remove('fa-plus');
        } else if (i.classList.contains('fa-minus')) {
            i.classList.add('fa-plus'); 
            i.classList.remove('fa-minus');
            
        }
    })
})