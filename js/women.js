// document.addEventListener("DOMContentLoaded", function () {
//   loadProducts();
// });

// let products = []; // Global variable to store fetched products

// function loadProducts() {
//   const productList = document.getElementById("product-list");

//   fetch("http://localhost:3000/products/women/upcycled") // Make sure this endpoint is correct
//     .then((response) => response.json())
//     .then((data) => {
//       products = data; // Store fetched products globally

//       if (!products || products.length === 0) {
//         productList.innerHTML = "<p>No products found.</p>";
//         return;
//       }

//       displayProducts(products); // Display products
//     })
//     .catch((error) => {
//       console.error("Error fetching products:", error);
//       productList.innerHTML = "<p>Failed to load products.</p>";
//     });
// }

// // Function to display products
// function displayProducts(productArray) {
//   const productList = document.getElementById("product-list");
//   productList.innerHTML = ""; // Clear previous content

//   productArray.forEach((product) => {
//     // Check for missing image
//     const productImage = product.image ? product.image : '../assets/default-image.jpg'; // Fallback image
    
//     const productCard = document.createElement("div");
//     productCard.classList.add("col-md-3", "mb-4", "text-center");

//     productCard.innerHTML = `
//       <div class="card h-100">
//         <a href="product.html?id=${product.id}">
//           <img src="${productImage}" class="card-img-top img-fluid" alt="${product.name}">
//         </a>
//         <div class="card-body">
//           <h5 class="card-title">${product.name}</h5>
//           <p class="card-text"><strong>${product.price}</strong></p>
//         </div>
//       </div>
//     `;
//     productList.appendChild(productCard);
//   });
// }

// // Sorting Functionality
// let clicked = false;
// document.getElementById("sortButton").onclick = () => {
//   clicked = !clicked;

//   const sortedProducts = [...products].sort((a, b) => {
//     const priceA = parseFloat(a.price.replace("$", ""));
//     const priceB = parseFloat(b.price.replace("$", ""));
//     return clicked ? priceB - priceA : priceA - priceB; // Toggle sorting order
//   });

//   displayProducts(sortedProducts);

//   document.getElementById("sortButton").innerHTML = ` Sort by Price<span id="arrow">${clicked ? "&darr;&uarr;" : "&uarr;&darr;"}</span>`;
// };

document.addEventListener("DOMContentLoaded", function () {
  const productsDiv = document.getElementById("product-list");

  fetch("http://localhost:3000/products/women/thrift")
    .then((response) => response.json())
    .then((products) => {
      if (!products || products.length === 0) {
        productsDiv.innerHTML = "<p>No upcycled products available.</p>";
        return;
      }

      // Clear existing content
      productsDiv.innerHTML = "";

      // Loop through the products and create cards
      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-md-3", "mb-4", "text-center");

        productCard.innerHTML = `
          <a href="product.html?id=${product.product_id}">
            <img src="${product.image_url}" class="img-fluid" alt="${product.name}">
          </a>
          <div class="d-flex justify-content-center align-items-center mt-2">
            <h5 class="mb-0">${product.name}</h5>
          </div>
          <p><strong>$${product.price}</strong></p>
        `;
        productsDiv.appendChild(productCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      productsDiv.innerHTML = "<p>Failed to load products.</p>";
    });
});