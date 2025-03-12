// // Function to create product cards
// function loadProducts() {
//   const productList = document.getElementById("product-list");

//   // Sort the products by price
//   const sortedProducts = products.sort((a, b) => {
//     const priceA = parseFloat(a.price.replace("$", ""));
//     const priceB = parseFloat(b.price.replace("$", ""));
//     return priceA - priceB;
//   });

//   // Clear product list before reloading
//   productList.innerHTML = "";

//   // Loop through products and create the cards
//   sortedProducts.forEach((product) => {
//     const productCard = document.createElement("div");
//     productCard.classList.add("col-md-3", "mb-4", "text-center");

//     productCard.innerHTML = `
//       <a href="product.html?id=${product.id}">
//         <img src="${product.image}" class="img-fluid" alt="${product.name}">
//       </a>
//       <div class="d-flex justify-content-center align-items-center mt-2">
//         <h5 class="mb-0">${product.name}</h5>
//       </div>
//       <p><strong>${product.price}</strong></p>
//     `;
//     productList.appendChild(productCard);
//   });
// }

// // Call the function when page is ready
// loadProducts();
// //function for sorting products
// let clicked = false;
// let sortButton = document.getElementById("sortButton");
// sortButton.onclick = () => {
//   if (clicked === false) {
//     const productList = document.getElementById("product-list");
//     const sortedProducts = products.sort((b, a) => {
//       // Remove dollar sign
//       const priceA = parseFloat(a.price.replace("$", ""));
//       const priceB = parseFloat(b.price.replace("$", ""));
//       return priceA - priceB;
//     });

//     productList.innerHTML = "";

//     // Loop again
//     sortedProducts.forEach((product) => {
//       const productCard = document.createElement("div");
//       productCard.classList.add("col-md-3", "mb-4", "text-center");

//       productCard.innerHTML = `
//         <a href="product.html?id=${product.id}">
//           <img src="${product.image}" class="img-fluid" alt="${product.name}">
//         </a>
//         <div class="d-flex justify-content-center align-items-center mt-2">
//           <h5 class="mb-0">${product.name}</h5>
//         </div>
//         <p><strong>${product.price}</strong></p>
//       `;
//       productList.appendChild(productCard);
//     });
//     document.getElementById(
//       "sortButton"
//     ).innerHTML = ` Sort by Price<span id="arrow">&darr;&uarr;</span>`;
//     clicked = true;
//   } else if (clicked === true) {
//     loadProducts();
//     document.getElementById(
//       "sortButton"
//     ).innerHTML = ` Sort by Price<span id="arrow">&uarr;&darr;</span>`;
//     clicked = false;
//   }
// };

document.addEventListener("DOMContentLoaded", function () {
  const productsDiv = document.getElementById("product-list");

  fetch("http://localhost:3000/products/men/thrift")
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