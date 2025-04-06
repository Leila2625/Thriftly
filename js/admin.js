document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch inquiries and display them
  async function fetchInquiries() {
    try {
      const response = await fetch("http://localhost:3000/donate");

      if (response.ok) {
        const data = await response.json();
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        let htmlContent = `<div class="container my-5">`;

        data.forEach((inquiry) => {
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

        htmlContent += `</div>`;
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

  // Function to fetch orders and display them
  async function fetchOrders() {
    try {
      const response = await fetch("http://localhost:3000/orders");

      if (response.ok) {
        const data = await response.json();
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        let htmlContent = `<div class="container my-5">`;

        data.forEach((order) => {
          const date = new Date(order.created_at);
          const formattedDate = `${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${date
            .getDate()
            .toString()
            .padStart(2, "0")}-${date.getFullYear()}`;

          htmlContent += `
            <div class="order-item card p-4 mb-4 shadow-sm rounded">
              <h5 class="card-title"><strong>Order ID:</strong> ${order.id}</h5>
              <p class="card-text"><strong>Customer:</strong> ${
                order.first_name
              } ${order.last_name}</p>
              <p class="card-text"><strong>Email:</strong> ${order.email}</p>
              <p class="card-text"><strong>Total Price:</strong> $${order.total_price.toFixed(
                2
              )}</p>
              <p class="card-text"><strong>Address:</strong> ${
                order.address
              }</p>
              <p class="card-text"><strong>Date:</strong> ${formattedDate}</p>
            </div>
          `;
        });

        htmlContent += `</div>`;
        document.getElementById("ordersHere").innerHTML = htmlContent;
      } else {
        console.error("Error fetching orders:", response.statusText);
        document.getElementById("ordersHere").innerHTML =
          "<p class='text-center'>Failed to load orders. Please try again later.</p>";
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("ordersHere").innerHTML =
        "<p class='text-center'>Something went wrong. Please try again later.</p>";
    }
  }

  // Show inquiries section and hide orders section
  window.showInquiries = function () {
    document.getElementById("inquiriesSection").style.display = "block";
    document.getElementById("ordersSection").style.display = "none";
    fetchInquiries();
  };

  // Show orders section and hide inquiries section
  window.showOrders = function () {
    document.getElementById("inquiriesSection").style.display = "none";
    document.getElementById("ordersSection").style.display = "block";
    fetchOrders();
  };

  // Fetch inquiries by default when the page loads
  fetchInquiries();
});
