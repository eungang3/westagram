'use strict'

const loginBtn = document.getElementsByClassName('login-btn')[0];
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('keyup', function(){
    if (usernameInput.value && passwordInput.value){
        loginBtn.disabled = false;
    }
    else {
        loginBtn.disabled = true;
    }
})

