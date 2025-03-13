// Load total price from localStorage and display it
document.addEventListener("DOMContentLoaded", function () {
  let storedPrice = localStorage.getItem("storedPrice");

  if (storedPrice) {
    let numericPrice = parseFloat(storedPrice);
    let totalCheckout = document.getElementById("totalCheckout");
    totalCheckout.innerHTML = `Total is: $${numericPrice.toFixed(2)}`;
  }
});

// Validate form and redirect to 'cart3.html'
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
    { id: "cardNumber", regex: /^[0-9]+$/, errorId: "cardNumberError" },
    { id: "expMonth", regex: /^[0-9]{2}$/, errorId: "expMonthError" },
    { id: "expYear", regex: /^[0-9]{4}$/, errorId: "expYearError" },
    { id: "cvv", regex: /^[0-9]{3,4}$/, errorId: "cvvError" },
    { id: "cardName", regex: /^[A-Za-z\s]+$/, errorId: "cardNameError" },
  ];

  validationRules.forEach(({ id, regex, errorId, optional }) => {
    const value = document.getElementById(id).value;
    if (!optional && !value.match(regex)) {
      document.getElementById(errorId).style.display = "inline";
      valid = false;
    }
  });

  // If valid, redirect to 'cart3.html'
  if (valid) {
    window.location.href = "../pages/cart3.html";
  }

  return valid;
}
