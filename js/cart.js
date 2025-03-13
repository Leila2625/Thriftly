document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartItemsEmpty = document.getElementById("cartItemsEmpty");
  const totalPriceElement = document.getElementById("totalPrice");
  const totalCalculatedPriceElement = document.getElementById(
    "totalCalculatedPrice"
  );
  const checkoutButton = document.getElementById("checkoutButton");
  const API_URL = "http://localhost:3000/cart"; // Backend API

  // ✅ Fetch cart items from backend
  function fetchCartItems() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((cartItems) => {
        cartItemsContainer.innerHTML = ""; // Clear previous items

        if (!cartItems || cartItems.length === 0) {
          cartItemsEmpty.innerHTML = "<p>Your cart is empty.</p>";
          totalPriceElement.innerHTML = "$0.00";
          totalCalculatedPriceElement.innerHTML = "$9.99"; // Shipping only
          return;
        }

        let total = 0;

        cartItems.forEach((item) => {
          total += parseFloat(item.price); // Ensure price is a number

          const cartItem = document.createElement("div");
          cartItem.classList.add(
            "cart-item",
            "d-flex",
            "justify-content-between",
            "mb-3"
          );

          cartItem.innerHTML = `
            <div class="d-flex align-items-center">
              <!-- Increase the image size -->
              <img src="${item.image_url}" class="cart-img me-3" alt="${item.name}"
              style="width: 200px; height: 200px;"> <!-- Increased image size -->
              <div>
                <h5>${item.name}</h5>
                <p>Price: $${item.price}</p>
              </div>
            </div>
            <!-- Reduce the size of the remove button -->
            <button class="btn btn-danger btn-sm remove-item"
            data-cart-id="${item.cart_id}" style="font-size: 0.75rem; padding: 0.3rem 0.6rem; height: 40px; width: auto;">Remove</button> <!-- Smaller button -->
          `;

          cartItemsContainer.appendChild(cartItem);
        });

        // ✅ Store total price including shipping in localStorage
        const totalWithShipping = total + 9.99;
        localStorage.setItem("storedPrice", totalWithShipping.toFixed(2));

        // Update total prices in UI
        totalPriceElement.innerHTML = `$${total.toFixed(2)}`;
        totalCalculatedPriceElement.innerHTML = `$${totalWithShipping.toFixed(
          2
        )}`;

        attachRemoveEventListeners();
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
        cartItemsEmpty.innerHTML = "<p>Failed to load cart items.</p>";
      });
  }

  // ✅ Remove item from cart
  function attachRemoveEventListeners() {
    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", function () {
        const cartId = this.getAttribute("data-cart-id");

        fetch(`${API_URL}/${cartId}`, { method: "DELETE" })
          .then((response) => response.json())
          .then(() => {
            fetchCartItems(); // Refresh cart after deletion
          })
          .catch((error) => console.error("Error removing item:", error));
      });
    });
  }

  // ✅ Checkout (Redirects to `cart2.html` WITHOUT clearing the cart)
  checkoutButton.addEventListener("click", function () {
    window.location.href = "../pages/cart2.html"; // ✅ Redirect to checkout page
  });

  fetchCartItems(); // Initial load
});
