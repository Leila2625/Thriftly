// Load total price from localStorage and display it
document.addEventListener("DOMContentLoaded", function () {
  let storedPrice = localStorage.getItem("storedPrice");

  if (storedPrice) {
    let numericPrice = parseFloat(storedPrice);
    let totalCheckout = document.getElementById("totalCheckout");
    totalCheckout.innerHTML = `Total is: $${numericPrice.toFixed(2)}`;
  }
});

// Validate form and create order
function validateForm(event) {
  let valid = true;
  event.preventDefault();

  // Reset error messages
  document.querySelectorAll(".text-danger").forEach(function (error) {
    error.style.display = "none";
  });

  // Form Validation Logic
  const validationRules = [
    { id: "firstName", regex: /^[A-Za-z\s]+$/, errorId: "firstNameError" },
    { id: "lastName", regex: /^[A-Za-z\s]+$/, errorId: "lastNameError" },
    { id: "email", regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorId: "emailError" },
    { id: "address", regex: /^[A-Za-z0-9\s,.-]+$/, errorId: "addressError" },
    { id: "zip", regex: /^[0-9]+$/, errorId: "zipError" },
    { id: "state", regex: /^[A-Za-z\s]+$/, errorId: "stateError" },
    {
      id: "suite",
      regex: /^[A-Za-z0-9\s.,-]*$/,
      errorId: "suiteError",
      optional: true,
    },
    { id: "cardNumber", regex: /^[0-9\s]+$/, errorId: "cardNumberError" },
    { id: "expMonth", regex: /^[0-9]{2}$/, errorId: "expMonthError" },
    { id: "expYear", regex: /^[0-9]{4}$/, errorId: "expYearError" },
    { id: "cvv", regex: /^[0-9]{3,4}$/, errorId: "cvvError" },
    { id: "cardName", regex: /^[A-Za-z\s]+$/, errorId: "cardNameError" },
    ,
  ];

  validationRules.forEach(({ id, regex, errorId, optional }) => {
    const value = document.getElementById(id).value;
    if (!optional && !value.match(regex)) {
      document.getElementById(errorId).style.display = "inline";
      valid = false;
    }
  });

  // If valid, create the order and redirect to cart3.html
  if (valid) {
    function createOrder(orderData) {
      fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData), // Send the order data as JSON
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Order created successfully") {
            console.log("Order created successfully:", data);
            // After the order is created, redirect to cart3.html
            window.location.href = "../pages/cart3.html";
          } else {
            console.error("Error creating order:", data);
          }
        })
        .catch((error) => {
          console.error("Error with the fetch operation:", error);
        });
    }

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const zip = document.getElementById("zip").value;
    const state = document.getElementById("state").value;
    const suite = document.getElementById("suite").value;

    // Get the total price from localStorage and parse it
    let storedPrice = localStorage.getItem("storedPrice");
    let numericPrice = parseFloat(storedPrice);
    let addressLine = `${address}, ${zip}, ${state}, Suite# / Apt#: ${suite}`;

    // Create order data object
    const orderData = {
      first_name: firstName, // Changed to match backend field name
      last_name: lastName, // Changed to match backend field name
      email: email,
      address: addressLine,
      total_price: numericPrice,
    };

    // Call createOrder function to send order data to the server
    createOrder(orderData);
  }
  return valid;
}
