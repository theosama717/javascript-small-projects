let count = 0; 

var btns = document.querySelectorAll('button'); 
var val = document.getElementById('value'); 

btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let classes = event.target.className; 
        if (classes === 'increase') {
            count++ 
        } else if (classes === 'decrease') {
            count--
        } else {
            count = 0;
        } 

        if (count > 0) {
            val.style.color = 'green';
        } else if (count < 0) {
            val.style.color = 'red';
        } else {
            val.style.color = 'black';
        }

        val.innerHTML = count
    })
});