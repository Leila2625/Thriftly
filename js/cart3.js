// Get the cart from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const shoppingCart = document.getElementById("shoppingCart");

const cartItemsContainer = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalSummaryPrice");
const totalExplanation = document.getElementById("totalExplanation");
if (cart.length === 0) {
  cartItemsEmpty.innerHTML = "<p>Your order is empty!</p>";

  shoppingCart.classList.add("hidden");
} else {
  // Generate the cart items dynamically

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
  let tax = totalCalculatedPrice - 9.99 - totalPrice;
  console.log(totalCalculatedPrice);
  totalPriceElement.innerHTML = `<strong>Total</strong>: $${totalCalculatedPrice.toFixed(
    2
  )}`;
  totalExplanation.innerHTML = `<strong>Subtotal</strong>: $${totalPrice.toFixed(
    2
  )}+ $9.99 <strong>Shipping</strong> + $${tax.toFixed(
    2
  )} <strong>Taxes</strong>`;
}
window.addEventListener("beforeunload", () => {
  localStorage.removeItem("cart");
  localStorage.removeItem("storedPrice");
});
