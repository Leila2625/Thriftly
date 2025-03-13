document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevents default form submission

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone_number: document.getElementById("phone").value,
      inquiry: document.getElementById("message").value,
    };

    // Validation checks in form
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
    const phoneRegex = /^[0-9\-\+\/]+$/; // Only numbers, hyphens, slashes, and plus signs
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Basic email format
    const inquiryCheck = formData.inquiry.trim() !== ""; // Inquiry is not empty

    if (!nameRegex.test(formData.name)) {
      alert("Please enter a valid name (letters only).");
      return;
    }

    if (!phoneRegex.test(formData.phone_number)) {
      alert(
        "Please enter a valid phone number (numbers, hyphens, slashes allowed)."
      );
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!inquiryCheck) {
      alert("Please enter an inquiry message.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset(); // Clear form fields after a successful submission
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  });
});
