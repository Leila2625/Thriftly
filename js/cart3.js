document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalSummaryPrice");
  const totalExplanation = document.getElementById("totalExplanation");
  const shoppingCart = document.getElementById("shoppingCart");
  const API_URL = "http://localhost:3000/cart"; // Backend API

  // ✅ Load total price from localStorage
  let storedPrice = localStorage.getItem("storedPrice");
  let numericPrice = parseFloat(storedPrice) || 0;

  if (numericPrice > 0) {
    totalPriceElement.innerHTML = `<strong>Total</strong>:
  $${numericPrice.toFixed(2)}`;
    totalExplanation.innerHTML = `<strong>Subtotal</strong>:
  $${(numericPrice - 9.99).toFixed(2)}
  + $9.99 <strong>Shipping</strong>`;
  } else {
    totalPriceElement.innerHTML = "<strong>Total</strong>: $0.00";
    totalExplanation.innerHTML = "";
  }

  // ✅ Fetch cart items from backend (since localStorage is now cleared)
  fetch(API_URL)
    .then((response) => response.json())
    .then((cartItems) => {
      cartItemsContainer.innerHTML = ""; // Clear previous items

      if (!cartItems || cartItems.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your order is empty!</p>";
        shoppingCart.classList.add("hidden");
        return;
      }

      cartItems.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "mb-3"
        );

        cartItem.innerHTML = `
  <div class="d-flex align-items-center">
  <img src="${item.image_url}" class="cart-img me-3" alt="${item.name}"
  style="width: 80px; height: 80px;">
  <div>
  <h5>${item.name}</h5>
  <p>Price: $${item.price}</p>
  </div>
  </div>
  `;

        cartItemsContainer.appendChild(cartItem);
      });

      // ✅ Clear cart from backend AFTER displaying order summary
      fetch(API_URL, { method: "DELETE" })
        .then(() => {
          console.log("Cart cleared successfully!");
        })
        .catch((error) => console.error("Error clearing cart:", error));
    })
    .catch((error) => {
      console.error("Error fetching cart items:", error);
      cartItemsContainer.innerHTML = "<p>Failed to load order details.</p>";
    });

  // ✅ Clear localStorage items so the cart is empty for the next session
  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("storedPrice");
  });
});
