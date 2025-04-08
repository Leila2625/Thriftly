document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "http://localhost:3000/products";
  const addToCartButton = document.getElementById("addToCartButton");

  // Create or reuse a session ID
  if (!localStorage.getItem("session_id")) {
    const sessionId = crypto.randomUUID();
    localStorage.setItem("session_id", sessionId);
  }

  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // Fetch and display product details
  fetch(API_URL)
    .then((response) => response.json())
    .then((products) => {
      const product = products.find((item) => item.product_id == productId);
      if (product) {
        document.getElementById("productSize").textContent = `Size ${product.size}`;
        document.getElementById("productImage").src = product.image_url;
        document.getElementById("productName").textContent = product.name;
        document.getElementById("productDescription").textContent = product.description;
        document.getElementById("productPrice").textContent = `$${product.price}`;
        document.getElementById("productColor").textContent = `Color: ${product.color}`;

      } else {
        document.getElementById("productName").textContent = "Product Not Found";
      }
    })
    .catch((error) => console.error("Error fetching products:", error));

  //Handle Add to Cart button click
  addToCartButton.addEventListener("click", () => {
    const sessionId = localStorage.getItem("session_id");

    if (!productId || !sessionId) {
      alert("Error: Missing product or session ID.");
      return;
    }

    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id: parseInt(productId, 10), session_id: sessionId }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Cart Response:", data);
        alert(data.message || "Added to cart!");
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
        alert("Failed to add product to cart.");
      });
  });
});
