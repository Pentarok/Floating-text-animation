
let Iconeye = document.querySelector('.holder');
        
let password = document.getElementById('password');

Iconeye.addEventListener('click',()=>{
    if(password.type == "password"){
        Iconeye.innerHTML = ' <i class="fa-solid fa-eye"></i>';
        password.type = "text";
        
    }else{
        Iconeye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        password.type = "password";
    }
          
})


let password2 = document.getElementById('password2');
let Iconeye2 = document.querySelector('.holder2');

Iconeye2.addEventListener('click',()=>{
    if(password2.type == "password"){
        Iconeye2.innerHTML = '<i class="fa-solid fa-eye"></i>';
        password2.type = "text";
        
    }else{
        Iconeye2.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        password2.type = "password";
    }
          
})

function Login(){
var Line = document.getElementById('underline');
var Register = document.getElementById('register');
var Login = document.getElementById('login');

Line.style.transform = "translateX(-180px)";
Register.style.transform = "translateX(390px)";
Login.style.transform = "translateY(-270px)";

}
function Register(){
var Line = document.getElementById('underline');
var Register = document.getElementById('register');
var Login = document.getElementById('login');

Line.style.transform = "translateX(0px)";
Register.style.transform = "translateY(0px)";
Login.style.transform = "translateY(0px)";

}