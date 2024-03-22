
var card= document.getElementById("card");

function handleForm(){
    event.preventDefault();
    var name= document.getElementById("name");
    var password= document.getElementById("password");
    console.log(name.value);
    console.log(password.value);
}





card.addEventListener("submit",handleForm);