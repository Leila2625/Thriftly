// document.addEventListener("DOMContentLoaded", () => {
//   fetch("http://localhost:3000/products") // Adjust the URL if needed
//     .then(response => response.json())
//     .then(products => {
//       productData = products; // Store products in productData
//       displayGroupedProducts(groupProductsBySize(productData));

//       // Get product ID from URL
//       const urlParams = new URLSearchParams(window.location.search);
//       const productId = urlParams.get("id");

//       // Find and display the product details
//       const product = productData.find((item) => item.product_id == productId);
//       if (product) {
//         document.getElementById("productImage").src = product.image_url;
//         document.getElementById("productName").textContent = product.name;
//         document.getElementById("productDescription").textContent = product.description;
//         document.getElementById("productPrice").textContent = `$${product.price}`;
//       } else {
//         document.getElementById("productName").textContent = "Product Not Found";
//       }
//     })
//     .catch(error => console.error("Error fetching products:", error));
// });

// //add quantity of products
// function incrementQuantity() {
//   const quantityInput = document.getElementById("quantity");
//   const currentValue = parseInt(quantityInput.value);

//   if (currentValue < 5) {
//     quantityInput.value = currentValue + 1;
//   }
// }
// function decrementQuantity() {
//   const quantityInput = document.getElementById("quantity");
//   const currentValue = parseInt(quantityInput.value);
//   if (currentValue > 1) {
//     quantityInput.value = currentValue - 1;
//   }
// }
// //add to cart
// function addToCart() {
//   const size = document.getElementById("sizeSelect").value;
//   const quantity = parseInt(document.getElementById("quantity").value);

//   if (!size) {
//     alert("Please select a size.");
//     return;
//   }

//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const existingItem = cart.find(item => item.id === product.id && item.size === size);
  
//   if (existingItem) {
//     existingItem.quantity += quantity; // Update quantity if item exists
//   } else {
//     cart.push({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       size: size,
//       quantity: quantity,
//       image: product.image,
//     });
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert(`${product.name} added to cart!`);
// }

// // Group products by size
// function groupProductsBySize(products) {
//   return products.reduce((acc, product) => {
//     const size = product.size;
//     if (!acc[size]) {
//       acc[size] = []; // Initialize an empty array for each size
//     }
//     acc[size].push(product); // Add the product to its corresponding size array
//     return acc;
//   }, {});
// }

// const groupedProducts = groupProductsBySize(productData);

// // Example of how to display products grouped by size in the front-end
// function displayGroupedProducts(groupedProducts) {
//   const container = document.getElementById('productsContainer'); // Your container element

//   for (const size in groupedProducts) {
//     const sizeSection = document.createElement('div');
//     const sizeHeader = document.createElement('h3');
//     sizeHeader.textContent = `Size: ${size}`;
//     sizeSection.appendChild(sizeHeader);

//     groupedProducts[size].forEach((product) => {
//       const productElement = document.createElement('div');
//       productElement.classList.add('product');
      
//       productElement.innerHTML = `
//         <img src="${product.image}" alt="${product.name}">
//         <h4>${product.name}</h4>
//         <p>${product.description}</p>
//         <p>${product.price}</p>
//       `;

//       sizeSection.appendChild(productElement);
//     });

//     container.appendChild(sizeSection);
//   }
// }

// displayGroupedProducts(groupedProducts);

// // Attach event listener for the "Add to Cart" button
// document.addEventListener("DOMContentLoaded", () => {
//   const addToCartButton = document.getElementById("addToCartButton");
//   if (addToCartButton) {
//     addToCartButton.addEventListener("click", addToCart);
//   }
// });

//   document.addEventListener("DOMContentLoaded", () => {
//     fetch("http://localhost:3000/products") // Adjust the URL if needed
//       .then(response => response.json())
//       .then(products => {
//         const container = document.getElementById("productsContainer");
//         container.innerHTML = ""; // Clear existing content
  
//         products.forEach(product => {
//           const productElement = document.createElement("div");
//           productElement.classList.add("product");
//           productElement.innerHTML = `
//             <a href="product-details.html?id=${product.id}">
//               <img src="${product.image}" alt="${product.name}">
//               <h4>${product.name}</h4>
//               <p>${product.description}</p>
//               <p>$${product.price}</p>
//             </a>
//           `;
//           container.appendChild(productElement);
//         });
//       })
//       .catch(error => console.error("Error fetching products:", error));
//   });

document.addEventListener("DOMContentLoaded", () => {
  // Fetch the products once
  fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(products => {
      const productData = products; // Store products in productData
      displayGroupedProducts(groupProductsBySize(productData));

      // Get product ID from URL
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get("id");

      // Find and display the product details
      const product = productData.find((item) => item.product_id == productId);
      if (product) {
        document.getElementById("productImage").src = product.image_url;
        document.getElementById("productName").textContent = product.name;
        document.getElementById("productDescription").textContent = product.description;
        document.getElementById("productPrice").textContent = `$${product.price}`;
      } else {
        document.getElementById("productName").textContent = "Product Not Found";
      }
    })
    .catch(error => console.error("Error fetching products:", error));
});

// Function to increment/decrement quantity
function incrementQuantity() {
  const quantityInput = document.getElementById("quantity");
  const currentValue = parseInt(quantityInput.value);

  if (currentValue < 5) {
    quantityInput.value = currentValue + 1;
  }
}

function decrementQuantity() {
  const quantityInput = document.getElementById("quantity");
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

// Add to cart functionality
function addToCart() {
  const size = document.getElementById("sizeSelect").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  if (!size) {
    alert("Please select a size.");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.id === product.id && item.size === size);

  if (existingItem) {
    existingItem.quantity += quantity; // Update quantity if item exists
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      size: size,
      quantity: quantity,
      image: product.image_url, // Ensure correct image URL field
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

// Group products by size
function groupProductsBySize(products) {
  return products.reduce((acc, product) => {
    const size = product.size;
    if (!acc[size]) {
      acc[size] = []; // Initialize an empty array for each size
    }
    acc[size].push(product); // Add the product to its corresponding size array
    return acc;
  }, {});
}

// Function to display grouped products
function displayGroupedProducts(groupedProducts) {
  const container = document.getElementById('productsContainer'); // Your container element

  if (!container) {
    console.error("Container element not found");
    return;
  }

  for (const size in groupedProducts) {
    const sizeSection = document.createElement('div');
    const sizeHeader = document.createElement('h3');
    sizeHeader.textContent = `Size: ${size}`;
    sizeSection.appendChild(sizeHeader);

    groupedProducts[size].forEach((product) => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      
      productElement.innerHTML = `
        <img src="${product.image_url}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <p>$${product.price}</p>
      `;

      sizeSection.appendChild(productElement);
    });

    container.appendChild(sizeSection);
  }
}

// Add event listener for the "Add to Cart" button
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButton = document.getElementById("addToCartButton");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", addToCart);
  }
});
