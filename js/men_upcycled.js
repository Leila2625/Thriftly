// //products to be listed
// const products = [
//   {
//     name: "Black Baggy Jeans",
//     image: "../assets/male/male9.png",
//     price: "$18.99",
//     description: "Stylish black baggy jeans for a relaxed look.",
//     id: 25,
//   },
//   {
//     name: "Mouth T-Shirt",
//     image: "../assets/male/male10.png",
//     price: "$32.50",
//     description: "Bold Mouth T-shirt perfect for casual wear.",
//     id: 26,
//   },
//   {
//     name: "Frank Ocean T-Shirt",
//     image: "../assets/male/male11.png",
//     price: "$24.99",
//     description: "Frank Ocean-inspired T-shirt for music fans.",
//     id: 27,
//   },
//   {
//     name: "Seven Ball T-Shirt",
//     image: "../assets/male/male12.png",
//     price: "$29.99",
//     description: "Trendy Seven Ball graphic T-shirt.",
//     id: 28,
//   },
//   {
//     name: "White Nike T-Shirt",
//     image: "../assets/male/male13.png",
//     price: "$15.99",
//     description: "Simple and classic white Nike T-shirt.",
//     id: 29,
//   },
//   {
//     name: "White Car T-Shirt",
//     image: "../assets/male/male14.png",
//     price: "$21.00",
//     description: "Casual white T-shirt with a cool car design.",
//     id: 30,
//   },
//   {
//     name: "Grey T-Shirt",
//     image: "../assets/male/male15.png",
//     price: "$35.00",
//     description: "Comfortable grey T-shirt for everyday wear.",
//     id: 31,
//   },
//   {
//     name: "Navy Blue Carhartt Jacket",
//     image: "../assets/male/male16.png",
//     price: "$28.50",
//     description: "Durable navy blue jacket from Carhartt.",
//     id: 32,
//   },
// ];

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
//       // Remove the dollar sign
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

  fetch("http://localhost:3000/products/men/upcycled")
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