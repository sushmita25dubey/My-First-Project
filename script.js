const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.toggle('active-popup');
});

var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");

pass.addEventListener('input', () => {
    if(pass.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
    if(pass.value.length < 4){
        str.innerHTML = "weak";
        pass.style.borderColor = "red";
        msg.style.color ="red";
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
         str.innerHTML = "medium";
         pass.style.borderColor = "yellow";
        msg.style.color ="yellow";
    }
    else if(pass.value.length >= 8){
        str.innerHTML = "strong";
        pass.style.borderColor = "green";
        msg.style.color ="green";
    }
})



