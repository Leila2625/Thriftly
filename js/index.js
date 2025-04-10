const API_URL = "http://localhost:3000/products";

const productIds = [63, 117, 108, 6]; // Your 4 target product IDs
const productList = document.getElementById("product-list");

function fetchProductById(id) {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((allProducts) => allProducts.find((p) => p.product_id == id));
}

function renderProduct(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("col-md-3", "mb-4", "text-center");

  productCard.innerHTML = `
    <div class="text-start fst-italic">${product.category}</div>
    <a href="product.html?id=${product.product_id}">
      <img src="${product.image_url}" class="img-fluid" alt="${product.name}">
    </a>
    <div class="d-flex justify-content-center align-items-center mt-2">
      <h5 class="mb-0">${product.name}</h5>
    </div>
    <p><strong>$${product.price}</strong></p>
  `;

  productList.appendChild(productCard);
}

// Load and render each product
productIds.forEach((id) => {
  fetchProductById(id).then((product) => {
    if (product) {
      renderProduct(product);
    } else {
      console.warn(`Product with ID ${id} not found`);
    }
  });
});