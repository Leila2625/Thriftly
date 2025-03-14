document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "http://localhost:3000/products";

  // Fetch and display product details
  fetch(API_URL)
    .then((response) => response.json())
    .then((products) => {
      // Get product ID from URL
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get("id");

      // Find and display the product details
      const product = products.find((item) => item.product_id == productId);
      if (product) {
        document.getElementById(
          "productSize"
        ).textContent = `Size ${product.size}`;
        document.getElementById("productImage").src = product.image_url;
        document.getElementById("productName").textContent = product.name;
        document.getElementById("productDescription").textContent =
          product.description;
        document.getElementById(
          "productPrice"
        ).textContent = `$${product.price}`;
      } else {
        document.getElementById("productName").textContent =
          "Product Not Found";
      }
    })
    .catch((error) => console.error("Error fetching products:", error));
});

// Add a product to the cart using API
function addToCart() {
  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (!productId) {
    alert("Error: Product ID not found.");
    return;
  }

  console.log("Adding product to cart with product_id:", productId);

  fetch("http://localhost:3000/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product_id: parseInt(productId, 10) }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Cart Response:", data);
      alert(data.message); // Show success message
    })
    .catch((error) => {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart.");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButton = document.getElementById("addToCartButton");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", addToCart);
  }
});
