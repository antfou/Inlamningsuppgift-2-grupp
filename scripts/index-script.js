
let tempArray = [];

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    render(data);
  }).catch(error => console.error(error)
  );

function render(tempArray) {
  for (let i = 1; i < tempArray.length + 1; i++) {
    document.getElementById("id" + i + "-name").innerHTML = tempArray.find(item => item.id === i).title
    document.getElementById("id" + i + "-image").src = tempArray.find(item => item.id === i).image
    document.getElementById("id" + i + "-price").innerHTML = tempArray.find(item => item.id === i).price + ":-"
  }
}

function selectItem(input) {
  sessionStorage.setItem("curr-item", input)
}