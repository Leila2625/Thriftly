const cart = JSON.parse(localStorage.getItem("cart")) || [];
const checkoutButton = document.getElementById("checkoutButton");
const shoppingCart = document.getElementById("shoppingCart");
let storedPrice = 0;
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
  // Generate cart items
  checkoutButton.classList.remove("hidden"); // Unhide
  cartItemsContainer.innerHTML = cart
    .map((item) => {
      // Parse price and remove the $
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
            <button class="btn btn-danger btn-sm remove-item" data-id="${item.id}">Remove</button>
          </div>
        </div>
        <hr class="border-green">
      `;
    })
    .join("");

  // Add total price for all items
  const totalPrice = cart.reduce(
    (acc, item) => acc + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  let totalCalculatedPrice = totalPrice * 1.065 + 9.99;
  totalCPriceElement.innerHTML = `<strong>$${totalCalculatedPrice.toFixed(2)}</strong>`;
  totalPriceElement.innerHTML = `$${totalPrice.toFixed(2)}`;
  storedPrice = totalPrice * 1.065 + 9.99;

  // Remove item functionality
  cartItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-item")) {
      const itemId = event.target.dataset.id;

      // Find index of first item that matches
      const itemIndex = cart.findIndex((item) => item.id.toString() === itemId);

      if (itemIndex > -1) {
        // Remove only the first occurrence
        cart.splice(itemIndex, 1);
      }

      // Update cart in localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Refresh the cart
      location.reload();
    }
  });
}

checkoutButton.addEventListener("click", () => {
  window.location.href = "../pages/cart2.html";
});

// Function to add item to the cart
function addToCart(product) {
  // Get the size and quantity (assumed to be passed to this function)
  const size = document.getElementById("sizeSelect").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  // Check if the size is selected
  if (!size) {
    alert("Please select a size.");
    return;
  }

  // Find if the product is already in the cart
  const existingItemIndex = cart.findIndex((item) => item.id === product.id && item.size === size);

  if (existingItemIndex > -1) {
    // If the product already exists, update the quantity
    cart[existingItemIndex].quantity += quantity;
  } else {
    // If not, add a new item to the cart
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: size,
      quantity: quantity,
      image: product.image,
    };
    cart.push(cartItem);
  }

  // Save the updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${product.name} added to cart!`);
}

// Store price to localStorage
localStorage.setItem("storedPrice", storedPrice);
