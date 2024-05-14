let string = ''; 

let buttons = document.querySelectorAll('.button'); 
let display = document.querySelector('#display');

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {

        try {
            if (event.target.innerHTML == '=') {
                string = eval(string); 
                display.value = string;    
            } else if (event.target.innerHTML == 'C') {
                string = ''; 
                display.value = string;
            } else {
                string += event.target.innerHTML;
                display.value = string;    
            }
        }
        catch(error) {
            display.value = 'Syntax Error';
        }
             
    })
});