
let tempArray = [];

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    render(data);
  }).catch(error => console.error(error)
  );

const parent = document.getElementById("parent");

for (let i = 1; i <= 20; i++) {
  const card = document.createElement("div");
  card.classList.add("col", "mb-5");

  card.innerHTML = `
    <div class="card h-100">
      <img id="id${i}-image" class="card-img-top" alt="..." />
      <div class="card-body p-4">
        <div class="text-center">
          <h5 id="id${i}-name" class="fw-bolder"></h5>
          <p id="id${i}-price"></p>
        </div>
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a class="btn btn-outline-dark mt-auto" href="about.html" onclick="selectItem(${i})">About</a>
        </div>
      </div>
    </div>
  `;

  parent.appendChild(card);
}


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