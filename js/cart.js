const cart = JSON.parse(localStorage.getItem("cart")) || [];
const checkoutButton = document.getElementById("checkoutButton");
const shoppingCart = document.getElementById("shoppingCart");
// Hide the checkout form and cart section by default
let storedPrice = 0;
// Reference to the cart container and total price element
const cartItemsContainer = document.getElementById("cartItems");
const cartItemsEmpty = document.getElementById("cartItemsEmpty");
const totalPriceElement = document.getElementById("totalPrice");
const totalCPriceElement = document.getElementById("totalCalculatedPrice");
// Check if the cart is empty

if (cart.length === 0) {
  cartItemsEmpty.innerHTML = "<p>Your cart is empty.</p>";
  checkoutButton.classList.add("hidden"); // Hide
  shoppingCart.classList.add("hidden");
} else {
  // Generate the cart items dynamically
  checkoutButton.classList.remove("hidden"); // Unhide
  cartItemsContainer.innerHTML = cart
    .map((item) => {
      // Parse the price to remove the $ and convert to float
      const parsedPrice = parseFloat(item.price.replace("$", "")) || 0;

      return `
        <div class="row cart-item mb-4">
          <div class="col-md-3">
            <img src="${item.image}" alt="${item.name}" class="img-fluid" />
          </div>
          <div class="col-md-9">
            <h3>${item.name}</h3>
            <p>Size: ${item.size}</p>
            <p>Price: $${parsedPrice.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
            <button class="btn btn-danger btn-sm remove-item" data-id="${
              item.id
            }">Remove</button>
          </div>
        </div>
        <hr class="border-green">
      `;
    })
    .join("");

  // Add the total price, parsing price for all items
  const totalPrice = cart.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  let totalCalculatedPrice = totalPrice * 1.065 + 9.99;
  totalCPriceElement.innerHTML = `<strong>$${totalCalculatedPrice.toFixed(
    2
  )}</strong>`;
  totalPriceElement.innerHTML = `$${totalPrice.toFixed(2)}`;
  storedPrice = totalPrice * 1.065 + 9.99;
  // Add remove item functionality using event delegation
  // Add remove item functionality using event delegation
  cartItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-item")) {
      const itemId = event.target.dataset.id;

      // Find the index of the first item that matches the itemId
      const itemIndex = cart.findIndex((item) => item.id.toString() === itemId);

      if (itemIndex > -1) {
        // Remove only the first occurrence of the item from the cart
        cart.splice(itemIndex, 1);
      }

      // Update the cart in localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Refresh the page or cart content
      location.reload();
    }
  });
}
checkoutButton.addEventListener("click", () => {
  window.location.href = "../pages/cart2.html";
});
// Function to add item to the cart
localStorage.setItem("storedPrice", storedPrice);
