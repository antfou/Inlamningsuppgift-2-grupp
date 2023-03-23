/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let tempArray = [];

fetch("https://webacademy.se/fakestore/")
  .then(response => response.json())
  .then(data => {
    render(data);}).catch(error => console.error(error)
);

function render(tempArray){
    
    document.getElementById("id01").innerHTML = tempArray.find(item=>item.id === 1).title
}