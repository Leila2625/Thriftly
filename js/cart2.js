document.addEventListener("DOMContentLoaded", () => {
  const checkoutForm = document.getElementById("checkoutForm");

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (event) => {
      event.preventDefault();
      validateForm();
    });
  }

  function validateForm() {
    let valid = true;

    const fields = ["firstName", "lastName", "email", "address", "zip", "state"];
    fields.forEach((fieldId) => {
      const input = document.getElementById(fieldId);
      const errorSpan = document.getElementById(`${fieldId}Error`);

      if (!input.value.trim()) {
        errorSpan.textContent = `${input.placeholder} is required.`;
        valid = false;
      } else {
        errorSpan.textContent = "";
      }

      if (fieldId === "email" && input.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          errorSpan.textContent = "Please enter a valid email address.";
          valid = false;
        }
      }
    });

    if (valid) {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const address = document.getElementById("address").value;
      const zip = document.getElementById("zip").value;
      const state = document.getElementById("state").value;
      const suite = document.getElementById("suite").value;

      let storedPrice = localStorage.getItem("storedPrice");
      let numericPrice = parseFloat(storedPrice || "0");
      let addressLine = `${address}, ${zip}, ${state}, Suite# / Apt#: ${suite}`;

      const orderData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        address: addressLine,
        total_price: numericPrice,
      };

      console.log("Submitting order:", orderData);
      createOrder(orderData);
    }
  }

  function createOrder(orderData) {
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Order created successfully") {
          console.log("Order created:", data);

          const sessionId = localStorage.getItem("session_id");
          console.log("🧹 Attempting to clear cart for session:", sessionId);

          if (!sessionId) {
            console.warn("session_id is missing from localStorage!");
            window.location.href = "../pages/cart3.html";
            return;
          }

          fetch(`http://localhost:3000/cart/session/${sessionId}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((result) => {
              console.log("Cart cleared successfully:", result);

              window.location.href = "../pages/cart3.html";
            })
            .catch((err) => {
              console.error("Error clearing cart:", err);
              window.location.href = "../pages/cart3.html";
            });
        } else {
          console.error("Order creation error:", data);
        }
      })
      .catch((error) => {
        console.error("Fetch failed:", error);
      });
  }
});
