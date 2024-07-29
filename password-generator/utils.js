const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
const lowerSet = 'abcdefghijklmnopqrstuvwxyz';
const numberSet = '1234567890'; 
const symbolSet = '~!@#$%^&*()+/';



// selectors 

const passBox = document.getElementById('pass-box'); 
const totalChar = document.getElementById('total-char'); 
const upperInput = document.getElementById('upper-case'); 
const lowerInput = document.getElementById('lower-case'); 
const numberInput = document.getElementById('numbers'); 
const symbolInput = document.getElementById('symbols');

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}



const getPassword = (password = '') => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }

    if (password.length < totalChar.value) {
       return getPassword(password)
    }

    console.log(password.substring(0, totalChar.value))
    
}

getPassword()

document.querySelector('#btn').addEventListener('click', function() {
    getPassword()   
})

