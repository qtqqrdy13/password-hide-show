let eyeIcon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeIcon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
};
