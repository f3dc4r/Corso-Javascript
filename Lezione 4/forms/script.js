document.addEventListener('DOMContentLoaded', function(){
      document.getElementById('login').onclick = login; 
})

function login(){
    var email = document.loginForm.email;
    var password = document.loginForm.password;
    if (email.value == '' || email.value == undefined){
        alert('non hai compilato il campo email');
        email.focus(); //.blur()
    }

    if (password.value == '' || password.value == undefined){
        alert('non hai compilato il campo password');
        password.focus(); //.blur()
    }
}