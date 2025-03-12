document.addEventListener("DOMContentLoaded", function () {
  const productsDiv = document.getElementById("product-list");
  const sortButton = document.getElementById("sortButton");
  let isAscending = true; // Track the sort order (cheapest to expensive by default)

  fetch("http://localhost:3000/products/women/thrift")
    .then((response) => response.json())
    .then((products) => {
      if (!products || products.length === 0) {
        productsDiv.innerHTML = "<p>No upcycled products available.</p>";
        return;
      }

      // Function to display products
      function displayProducts(productsToDisplay) {
        productsDiv.innerHTML = ""; // Clear existing content

        // Loop through the products and create cards
        productsToDisplay.forEach((product) => {
          const productCard = document.createElement("div");
          productCard.classList.add("col-md-3", "mb-4", "text-center");

          productCard.innerHTML = `
            <a href="product.html?id=${product.product_id}">
              <img src="${product.image_url}" class="img-fluid" alt="${product.name}">
            </a>
            <div class="d-flex justify-content-center align-items-center mt-2">
              <h5 class="mb-0">${product.name} (${product.size})</h5>
            </div>
            <p><strong>$${product.price}</strong></p>
          `;
          productsDiv.appendChild(productCard);
        });
      }

      // Function to sort products by price (ascending or descending)
      function sortProducts() {
        const sortedProducts = [...products].sort((a, b) => {
          const priceA = parseFloat(a.price.replace("$", ""));
          const priceB = parseFloat(b.price.replace("$", ""));
          return isAscending ? priceA - priceB : priceB - priceA;
        });
        displayProducts(sortedProducts); // Re-render products with sorted order
      }

      // Initially display products sorted from cheapest to expensive
      sortProducts();

      // Event listener for the sort button
      sortButton.addEventListener("click", () => {
        // Flip the arrow direction based on the sort order first
        if (isAscending) {
          sortButton.innerHTML =
            'Sort by Price<span id="arrow">&uarr;&darr;</span>'; // Ascending to descending
        } else {
          sortButton.innerHTML =
            'Sort by Price<span id="arrow">&darr;&uarr;</span>'; // Descending to ascending
        }

        // Toggle the sorting order
        isAscending = !isAscending;

        // Call sortProducts to apply the new sorting order
        sortProducts();
      });
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      productsDiv.innerHTML = "<p>Failed to load products.</p>";
    });
});
