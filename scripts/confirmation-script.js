fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => data.forEach(render))
.catch(error => console.log(error))


function render(tempArray) {
console.log(tempArray)
let nr = sessionStorage.getItem("curr-item")
if(nr == tempArray.id){
    document.getElementById("product-name").innerHTML = tempArray.title
    document.getElementById("product-image").src = tempArray.image
    document.getElementById("product-price").innerHTML = tempArray.price + ":-"
}

document.getElementById("thank-you-message").innerHTML = "Tack för ditt köp " + sessionStorage.getItem("customer-name") + "!"
document.getElementById("customer-email").innerHTML = "Mail: "+ sessionStorage.getItem("customer-email")
document.getElementById("customer-phonenr").innerHTML = "Telefon: " +sessionStorage.getItem("customer-phonenr")
document.getElementById("customer-adress").innerHTML = "Levernasadress: " + sessionStorage.getItem("customer-adress")
document.getElementById("customer-city").innerHTML = "Ort: " + sessionStorage.getItem("customer-city")
document.getElementById("customer-zip").innerHTML = "Postnummer: " + sessionStorage.getItem("customer-zip")
}
