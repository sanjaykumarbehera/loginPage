const LoginForm = document.querySelector(".LoginForm");
const RegisterForm = document.querySelector(".RegisterForm");
const LoginLink = document.querySelector(".LoginLink");
const RegisterLink = document.querySelector(".RegisterLink");

RegisterLink.onclick=()=>{
    RegisterForm.classList.add("X0");
    LoginForm.classList.add("X-450")
    // LoginForm.classList.add("Logactive")
    console.log("clicked me!")
}

LoginLink.onclick=()=>{
    RegisterForm.classList.remove("X0");
    LoginForm.classList.remove("X-450")
    // LoginForm.classList.add("Logactive")
    console.log("clicked me!")
}

