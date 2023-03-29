
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
