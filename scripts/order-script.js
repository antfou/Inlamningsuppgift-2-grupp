
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => data.forEach(render))
.catch(error => console.log(error))


function render(tempArray) {
console.log(tempArray)
let nr = sessionStorage.getItem("curr-item")
if(nr == tempArray.id){
    document.getElementById("about-page-name").innerHTML = tempArray.title
    document.getElementById("about-page-image").src = tempArray.image
    document.getElementById("about-page-price").innerHTML = tempArray.price + ":-"
    document.getElementById("about-page-description").innerHTML = tempArray.description
    document.getElementById("about-page-category").innerHTML = tempArray.category
}
}


const name = document.getElementById("name");
const email = document.getElementById("email");
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const phonenr = document.getElementById("phonenr");
const phonenrPattern = /^[\d()-]{1,50}$/;
const adress = document.getElementById("adress");
const zip = document.getElementById("zip");
const zipPattern = /^[0-9]{3}\s?[0-9]{2}$/;
const city = document.getElementById("city");

const submitbtn = document.getElementById("submitbtn")
/* submitbtn.disabled = true;
 */
function validateName() {
    if (name.value.length < 2 || name.value.length > 50) {
        document.querySelector(".name-error").innerHTML = "Please enter a valid name";
        //document.querySelector(".name-error").style.display = "block"
        submitbtn.disabled = true;
        return false;
    } else {
        document.querySelector(".name-error").innerHTML = "";
        //submitbtn.disabled = false;
        return true;
    }
}
//Janis smartare lösning
/* (!email.value.includes('@') || email.value.length > 50) */
function validateEmail() {
    if  (emailPattern.test(email.value)){
        document.querySelector(".email-error").innerHTML = "";
        //submitbtn.disabled = false;
        return true;
    } else {
        document.querySelector(".email-error").innerHTML = "Please enter a valid Email adress";
        submitbtn.disabled = true;
        return false;
    }
}

function validatePhone() {
    if(phonenrPattern.test(phonenr.value)){
        document.querySelector(".phone-error").innerHTML = "";
        //submitbtn.disabled = false;
        return true;
    }else{
        document.querySelector(".phone-error").innerHTML = "Please enter a valid phone number";
        submitbtn.disabled = true;
        return false;
    }
}

function validateAdress() {
    if (adress.value.length < 4 || adress.value.length > 50) {
        document.querySelector(".adress-error").innerHTML = "Please enter a valid city";
        //document.querySelector(".name-error").style.display = "block"
        submitbtn.disabled = true;
        return false;
    } else {
        document.querySelector(".adress-error").innerHTML = "";
        //submitbtn.disabled = false;
        return true;
    }
}

function validateZip() {
    if(zipPattern.test(zip.value)){
        document.querySelector(".zip-error").innerHTML = "";
        //submitbtn.disabled = false;
        return true;
    }else{
        document.querySelector(".zip-error").innerHTML = "Please enter a valid Zip";
        submitbtn.disabled = true;
        return false;
    }
}

function validateOrt() {
    if (city.value.length < 2 || city.value.length > 50) {
        document.querySelector(".city-error").innerHTML = "Please enter a valid city";
        //document.querySelector(".name-error").style.display = "block"
        submitbtn.disabled = true;
        return false;
    } else {
        document.querySelector(".city-error").innerHTML = "";
        //submitbtn.disabled = false;
        return true;
    }
}


function validateAll(){
    if(!validateOrt() || !validateAdress() || !validateEmail() || !validateName() || !validatePhone() || !validateZip()){
        event.preventDefault();
    }else{
        sessionStorage.setItem("customer-name",name.value)
        sessionStorage.setItem("customer-email",email.value)
        sessionStorage.setItem("customer-phonenr",phonenr.value)
        sessionStorage.setItem("customer-adress",adress.value)
        sessionStorage.setItem("customer-zip",zip.value)
        sessionStorage.setItem("customer-city",city.value)
        document.getElementById('submitbtn').href = "confirmation.html"
    }
    }
