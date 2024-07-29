const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
const lowerSet = 'abcdefghijklmnopqrstuvwxyz'; 
const numberSet = '1234567890'; 
const symbolSet = '~!@#$%^&*()_+/'; 


// selectors 
const passBox = document.querySelector('#pass-box'); 
const totalChar = document.querySelector('#total-char'); 
const upperInput = document.querySelector('#upper-case'); 
const lowerInput = document.querySelector('#lower-case'); 
const numberInput = document.querySelector('#numbers'); 
const symbolInput = document.querySelector('#symbols'); 
const genBtn = document.querySelector('#btn');
const copyBtn = document.querySelector('#copy');


const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]; 
}

const saveData = (password = '') => {
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
        return saveData(password)
    }

    passBox.innerHTML = password.substring(0, totalChar.value)
}

saveData()


genBtn.addEventListener('click', () => {
    saveData()
    copyBtn.disabled = false
    copyBtn.textContent = 'Copy!'
    copyBtn.style.opacity = '1'
});


copyBtn.addEventListener('click', () => {
    copyBtn.textContent = 'Copied!'
    copyBtn.disabled = true
    copyBtn.style.opacity = '0.5'
    navigator.clipboard.writeText(passBox.innerHTML);
    setInterval(() => {
        copyBtn.disabled = false
        copyBtn.textContent = 'Copy!'
        copyBtn.style.opacity = '1'
    }, 3000);
    
})