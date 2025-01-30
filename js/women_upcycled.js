//products to be listed
const products = [
  {
    name: "Old Navy Leggings",
    image: "../assets/female/female9.png",
    price: "$18.99",
    description: "A stylish brown leather jacket.",
    id: 9,
  },
  {
    name: "Adidas Sports Shorts",
    image: "../assets/female/female10.png",
    price: "$32.50",
    description: "A cozy hoodie for all seasons.",
    id: 10,
  },
  {
    name: "Abercrombie Shorts ",
    image: "../assets/female/female11.png",
    price: "$24.99",
    description: "A vibrant green sweater.",
    id: 11,
  },
  {
    name: "Zara Grey Straight Leg Pants",
    image: "../assets/female/female12.png",
    price: "$29.99",
    description: "Casual and chic off-shoulder top.",
    id: 12,
  },
  {
    name: "Tilly's Blue Jeans",
    image: "../assets/female/female13.png",
    price: "$15.99",
    description: "Comfortable grey long sleeve with stylish buttons.",
    id: 13,
  },
  {
    name: "Blueberry T-Shirt",
    image: "../assets/female/female14.png",
    price: "$21.00",
    description: "Classic knitted sweater with American flag design.",
    id: 14,
  },
  {
    name: "Disco T-Shirt",
    image: "../assets/female/female15.png",
    price: "$35.00",
    description: "Stylish and comfortable oversized joggers.",
    id: 15,
  },
  {
    name: "White Ribbon T-Shirt",
    image: "../assets/female/female16.png",
    price: "$28.50",
    description: "Versatile and comfortable wide-leg sweatpants.",
    id: 16,
  },
];

// Function to generate product cards
function loadProducts() {
  const productList = document.getElementById("product-list");

  // Sort the products
  const sortedProducts = products.sort((a, b) => {
    // Remove the dollar sign
    const priceA = parseFloat(a.price.replace("$", ""));
    const priceB = parseFloat(b.price.replace("$", ""));
    return priceA - priceB;
  });

  // Clear the product list before reloading
  productList.innerHTML = "";

  // Loop through sorted products
  sortedProducts.forEach((product) => {
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

// Call function to load products when page is ready
loadProducts();
let clicked = false;
let sortButton = document.getElementById("sortButton");
sortButton.onclick = () => {
  if (clicked === false) {
    const productList = document.getElementById("product-list");

    // Sort the products
    const sortedProducts = products.sort((b, a) => {
      // Remove the dollar sign
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));
      return priceA - priceB;
    });

    productList.innerHTML = "";

    // Loop through sorted products
    sortedProducts.forEach((product) => {
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
