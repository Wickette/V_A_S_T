let emailInput = document.querySelector("#email")
let sub = document.querySelector("form")
let subBtn = document.querySelector(".subButton")

function save (){
    let emailEntry = emailInput.value.trim();
    console.log(emailEntry)
     localStorage.setItem("email", emailEntry);
}

function view(){
        sub.innerHTML = "Thank you for subscribing" + " " + localStorage.getItem("email");  
}

subBtn.addEventListener("click", function(){
    save();
    view();
})

