const products = [
  {
    name: "Brown leather Jacket",
    image: "../assets/female/female1.png",
    price: "$18.99",
    description: "A stylish brown leather jacket.",
    id: 1, // Add unique ID to each product for linking
  },
  {
    name: "Abercrombie Hoodie",
    image: "../assets/female/female2.png",
    price: "$32.50",
    description: "A cozy hoodie for all seasons.",
    id: 2,
  },
  {
    name: "Green Sweater",
    image: "../assets/female/female3.png",
    price: "$24.99",
    description: "A vibrant green sweater.",
    id: 3,
  },
  {
    name: "Grey Off Shoulder Top",
    image: "../assets/female/female4.png",
    price: "$29.99",
    description: "Casual and chic off-shoulder top.",
    id: 4,
  },
  {
    name: "Grey Long Sleeve with Buttons",
    image: "../assets/female/female5.png",
    price: "$15.99",
    description: "Comfortable grey long sleeve with stylish buttons.",
    id: 5,
  },
  {
    name: "Ralph Lauren Navy American Flag Knitted Sweater",
    image: "../assets/female/female6.png",
    price: "$21.00",
    description: "Classic knitted sweater with American flag design.",
    id: 6,
  },
  {
    name: "Nike Sportswear Club Girls Oversized Joggers",
    image: "../assets/female/female7.png",
    price: "$35.00",
    description: "Stylish and comfortable oversized joggers.",
    id: 7,
  },
  {
    name: "North Face Women's Evolution Wide Leg Sweatpants",
    image: "../assets/female/female8.png",
    price: "$28.50",
    description: "Versatile and comfortable wide-leg sweatpants.",
    id: 8,
  },
];

// Function to generate product cards
function loadProducts() {
  const productList = document.getElementById("product-list");

  // Sort the products array by price (ascending order)
  const sortedProducts = products.sort((a, b) => {
    // Remove the dollar sign and parse the price as a number
    const priceA = parseFloat(a.price.replace("$", ""));
    const priceB = parseFloat(b.price.replace("$", ""));
    return priceA - priceB;
  });

  // Clear the product list before reloading it
  productList.innerHTML = "";

  // Loop through sorted products and create the product cards
  sortedProducts.forEach((product) => {
    console.log(product.image); // Log the image URL
    const productCard = document.createElement("div");
    productCard.classList.add("col-md-3", "mb-4", "text-center");

    productCard.innerHTML = `
      <a href="product.html?id=${product.id}">
        <img src="${product.image}" class="img-fluid" alt="${product.name}">
      </a>
      <div class="d-flex justify-content-center align-items-center mt-2">
        <h5 class="mb-0">${product.name}</h5>
      </div>
      <p><strong>${product.price}</strong></p>
    `;
    productList.appendChild(productCard);
  });
}

// Call the function to load products when the page is ready
loadProducts();
let clicked = false;
let sortButton = document.getElementById("sortButton");
sortButton.onclick = () => {
  if (clicked === false) {
    const productList = document.getElementById("product-list");

    // Sort the products array by price (ascending order)
    const sortedProducts = products.sort((b, a) => {
      // Remove the dollar sign and parse the price as a number
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));
      return priceA - priceB;
    });

    // Clear the product list before reloading it
    productList.innerHTML = "";

    // Loop through sorted products and create the product cards
    sortedProducts.forEach((product) => {
      console.log(product.image); // Log the image URL
      const productCard = document.createElement("div");
      productCard.classList.add("col-md-3", "mb-4", "text-center");

      productCard.innerHTML = `
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" class="img-fluid" alt="${product.name}">
        </a>
        <div class="d-flex justify-content-center align-items-center mt-2">
          <h5 class="mb-0">${product.name}</h5>
        </div>
        <p><strong>${product.price}</strong></p>
      `;
      productList.appendChild(productCard);
    });
    document.getElementById(
      "sortButton"
    ).innerHTML = ` Sort by Price<span id="arrow">&darr;&uarr;</span>`;
    clicked = true;
  } else if (clicked === true) {
    loadProducts();
    document.getElementById(
      "sortButton"
    ).innerHTML = ` Sort by Price<span id="arrow">&uarr;&darr;</span>`;
    clicked = false;
  }
};
