document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalSummaryPrice");
  const totalExplanation = document.getElementById("totalExplanation");
  const shoppingCart = document.getElementById("shoppingCart");
  const API_URL = "http://localhost:3000/orders";

  fetch(API_URL)
    .then((response) => response.json())
    .then((orders) => {
      if (!Array.isArray(orders) || orders.length === 0) {
        cartItemsContainer.innerHTML = "<p>Could not load your order.</p>";
        shoppingCart.classList.add("hidden");
        return;
      }

      // Get the most recent order
      const latestOrder = orders[orders.length - 1];

      cartItemsContainer.innerHTML = `
        <div class="mb-4">
          <h4>Order Details</h4>
          <p><strong>Name:</strong> ${latestOrder.first_name} ${latestOrder.last_name}</p>
          <p><strong>Email:</strong> ${latestOrder.email}</p>
          <p><strong>Shipping Address:</strong> ${latestOrder.address}</p>
          <p><strong>Order Date:</strong> ${new Date(latestOrder.order_date).toLocaleString()}</p>
        </div>
      `;

      const price = parseFloat(latestOrder.total_price);
      const shipping = 9.99;
      const subtotal = (price - shipping).toFixed(2);

      totalPriceElement.innerHTML = `<strong>Total:</strong> $${price.toFixed(2)}`;
      totalExplanation.innerHTML = `<strong>Subtotal:</strong> $${subtotal} + $9.99 <strong>Shipping</strong>`;
    })
    .catch((error) => {
      console.error("Error fetching order details:", error);
      cartItemsContainer.innerHTML = "<p>Failed to load order details.</p>";
    });

  // Clear localStorage cart
  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("storedPrice");
  });
});
