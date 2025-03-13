document.addEventListener("DOMContentLoaded", function () {
  const productsDiv = document.getElementById("product-list");
  const sortButton = document.getElementById("sortButton");
  let clicked = false;

  // Fetch the products from the server
  fetch("http://localhost:3000/products/men/upcycled")
    .then((response) => response.json())
    .then((products) => {
      if (!products || products.length === 0) {
        productsDiv.innerHTML = "<p>No upcycled products available.</p>";
        return;
      }

      // Sort products by price (ascending) by default
      let sortedProducts = sortByPriceAsc([...products]);
      loadProducts(sortedProducts);

      // Sorting function
      function loadProducts(productsToDisplay) {
        // Clear the existing content
        productsDiv.innerHTML = "";

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

      // Sorting by Price Ascending
      function sortByPriceAsc(products) {
        return products.sort(
          (a, b) =>
            parseFloat(a.price.replace("$", "")) -
            parseFloat(b.price.replace("$", ""))
        );
      }

      // Sorting by Price Descending
      function sortByPriceDesc(products) {
        return products.sort(
          (a, b) =>
            parseFloat(b.price.replace("$", "")) -
            parseFloat(a.price.replace("$", ""))
        );
      }

      // Sort Button Toggle Functionality
      sortButton.onclick = () => {
        if (!clicked) {
          // Sort in descending order
          sortedProducts = sortByPriceDesc([...products]);
          loadProducts(sortedProducts);
          sortButton.innerHTML = `Sort by Price<span id="arrow">&darr;&uarr;</span>`; // Update button text
          clicked = true;
        } else {
          // Sort in ascending order
          sortedProducts = sortByPriceAsc([...products]);
          loadProducts(sortedProducts);
          sortButton.innerHTML = `Sort by Price<span id="arrow">&uarr;&darr;</span>`; // Update button text
          clicked = false;
        }
      };
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      productsDiv.innerHTML = "<p>Failed to load products.</p>";
    });
});
