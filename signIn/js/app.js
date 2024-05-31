const signinBtn = document.querySelector('#signinBtn');
const signupBtn = document.querySelector('#signupBtn');
const title = document.querySelector('#title'); 
const nameField = document.querySelector('#nameField'); 


signinBtn.onclick = () => {
    title.textContent = 'Sign In'; 
    nameField.style.display = 'none';
    signinBtn.classList.remove('disabled');
    signupBtn.classList.add('disabled');
}

signupBtn.onclick = () => {
    title.textContent = 'Sign Up'; 
    nameField.style.display = 'flex'; 
    signinBtn.classList.add('disabled'); 
    signupBtn.classList.remove('disabled');
}