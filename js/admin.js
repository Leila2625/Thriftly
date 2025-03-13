document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch inquiries and display them
  async function fetchInquiries() {
    try {
      // Fetch the inquiries from the /donate route
      const response = await fetch("http://localhost:3000/donate");

      // Check if the response is okay (status 200)
      if (response.ok) {
        const data = await response.json();

        // Sort the data in descending order based on the created_at date
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        // Create a container to hold the inquiries
        let htmlContent = `<div class="container my-5">`; // Add Bootstrap container and margin

        // Loop through the response data and create a stacked display for each inquiry
        data.forEach((inquiry) => {
          // Format the date as MM-DD-YYYY
          const date = new Date(inquiry.created_at);
          const formattedDate = `${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${date
            .getDate()
            .toString()
            .padStart(2, "0")}-${date.getFullYear()}`;

          htmlContent += `
              <div class="inquiry-item card p-4 mb-4 shadow-sm rounded">
                <h5 class="card-title"><strong>Name:</strong> ${inquiry.name}</h5>
                <p class="card-text"><strong>Email:</strong> ${inquiry.email}</p>
                <p class="card-text"><strong>Phone Number:</strong> ${inquiry.phone_number}</p>
                <p class="card-text"><strong>Inquiry:</strong> ${inquiry.inquiry}</p>
                <p class="card-text"><strong>Date:</strong> ${formattedDate}</p>
              </div>
            `;
        });

        htmlContent += `</div>`; // End of the container

        // Insert the generated HTML content into the #responsesHere element
        document.getElementById("responsesHere").innerHTML = htmlContent;
      } else {
        console.error("Error fetching inquiries:", response.statusText);
        document.getElementById("responsesHere").innerHTML =
          "<p class='text-center'>Failed to load inquiries. Please try again later.</p>";
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("responsesHere").innerHTML =
        "<p class='text-center'>Something went wrong. Please try again later.</p>";
    }
  }

  // Fetch inquiries when the page loads
  fetchInquiries();
});
