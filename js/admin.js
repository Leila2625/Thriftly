document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch inquiries and display them
  async function fetchInquiries() {
    try {
      // Fetch the inquiries from the /donate route
      const response = await fetch("http://localhost:3000/donate");

      // Check if the response is okay (status 200)
      if (response.ok) {
        const data = await response.json();

        // Create a container to hold the inquiries
        let htmlContent = `<div class="inquiries-container">`;

        // Loop through the response data and create a stacked display for each inquiry
        data.forEach((inquiry) => {
          htmlContent += `
              <div class="inquiry-item">
                <h5><strong>Name:</strong> ${inquiry.name}</h5>
                <p><strong>Email:</strong> ${inquiry.email}</p>
                <p><strong>Phone Number:</strong> ${inquiry.phone_number}</p>
                <p><strong>Inquiry:</strong> ${inquiry.inquiry}</p>
              </div>
              <hr /> <!-- Adds a horizontal line between inquiries -->
            `;
        });

        htmlContent += `</div>`;

        // Insert the generated HTML content into the #responsesHere element
        document.getElementById("responsesHere").innerHTML = htmlContent;
      } else {
        console.error("Error fetching inquiries:", response.statusText);
        document.getElementById("responsesHere").innerHTML =
          "<p>Failed to load inquiries. Please try again later.</p>";
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("responsesHere").innerHTML =
        "<p>Something went wrong. Please try again later.</p>";
    }
  }

  // Fetch inquiries when the page loads
  fetchInquiries();
});
