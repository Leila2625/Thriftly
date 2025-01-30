function validateForm(event) {
  let valid = true;
  event.preventDefault();
  // Reset error messages
  document.querySelectorAll(".text-danger").forEach(function (error) {
    error.style.display = "none";
  });

  // First Name Validation
  const firstName = document.getElementById("firstName").value;
  const firstNameRegex = /^[A-Za-z\s]+$/;
  if (!firstName.match(firstNameRegex)) {
    document.getElementById("firstNameError").style.display = "inline";
    valid = false;
  }

  // Last Name Validation
  const lastName = document.getElementById("lastName").value;
  const lastNameRegex = /^[A-Za-z\s]+$/;
  if (!lastName.match(lastNameRegex)) {
    document.getElementById("lastNameError").style.display = "inline";
    valid = false;
  }

  // Email Validation
  const email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    document.getElementById("emailError").style.display = "inline";
    valid = false;
  }

  // Address Validation
  const address = document.getElementById("address").value;
  const addressRegex = /^[A-Za-z0-9\s,.-]+$/;
  if (!address.match(addressRegex)) {
    document.getElementById("addressError").style.display = "inline";
    valid = false;
  }

  // Zip Code Validation
  const zip = document.getElementById("zip").value;
  const zipRegex = /^[0-9]+$/;
  if (!zip.match(zipRegex)) {
    document.getElementById("zipError").style.display = "inline";
    valid = false;
  }

  // State Validation
  const state = document.getElementById("state").value;
  const stateRegex = /^[A-Za-z\s]+$/;
  if (!state.match(stateRegex)) {
    document.getElementById("stateError").style.display = "inline";
    valid = false;
  }

  // Suite Validation
  const suite = document.getElementById("suite").value;
  if (suite && !suite.match(/^[A-Za-z0-9\s.,-]*$/)) {
    document.getElementById("suiteError").style.display = "inline";
    valid = false;
  }

  // Card Number Validation
  const cardNumber = document.getElementById("cardNumber").value;
  const cardNumberRegex = /^[0-9]+$/;
  if (!cardNumber.match(cardNumberRegex)) {
    document.getElementById("cardNumberError").style.display = "inline";
    valid = false;
  }

  // Expiration Month Validation
  const expMonth = document.getElementById("expMonth").value;
  if (expMonth.length !== 2 || !expMonth.match(/^[0-9]+$/)) {
    document.getElementById("expMonthError").style.display = "inline";
    valid = false;
  }

  // Expiration Year Validation
  const expYear = document.getElementById("expYear").value;
  if (expYear.length !== 4 || !expYear.match(/^[0-9]+$/)) {
    document.getElementById("expYearError").style.display = "inline";
    valid = false;
  }

  // CVV Validation
  const cvv = document.getElementById("cvv").value;
  if (!cvv.match(/^[0-9]{3,4}$/)) {
    document.getElementById("cvvError").style.display = "inline";
    valid = false;
  }

  // Full Name on Card Validation
  const cardName = document.getElementById("cardName").value;
  const cardNameRegex = /^[A-Za-z\s]+$/;
  if (!cardName.match(cardNameRegex)) {
    document.getElementById("cardNameError").style.display = "inline";
    valid = false;
  }

  // If form is valid, navigate to cart3.html
  if (valid) {
    window.location.href = "../pages/cart3.html";
  }

  // Prevent form submission if validation fails
  return valid;
}

let storedPrice = localStorage.getItem("storedPrice");
let numericPrice = parseFloat(storedPrice);
let totalCheckout = document.getElementById("totalCheckout");
totalCheckout.innerHTML = `Total is: $${numericPrice.toFixed(2)}`;
