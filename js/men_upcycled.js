const products = [
  {
    name: "Black Baggy Jeans",
    image: "../assets/male/male9.png",
    price: "$18.99",
    description: "Stylish black baggy jeans for a relaxed look.",
    id: 25,
  },
  {
    name: "Mouth T-Shirt",
    image: "../assets/male/male10.png",
    price: "$32.50",
    description: "Bold Mouth T-shirt perfect for casual wear.",
    id: 26,
  },
  {
    name: "Frank Ocean T-Shirt",
    image: "../assets/male/male11.png",
    price: "$24.99",
    description: "Frank Ocean-inspired T-shirt for music fans.",
    id: 27,
  },
  {
    name: "Seven Ball T-Shirt",
    image: "../assets/male/male12.png",
    price: "$29.99",
    description: "Trendy Seven Ball graphic T-shirt.",
    id: 28,
  },
  {
    name: "White Nike T-Shirt",
    image: "../assets/male/male13.png",
    price: "$15.99",
    description: "Simple and classic white Nike T-shirt.",
    id: 29,
  },
  {
    name: "White Car T-Shirt",
    image: "../assets/male/male14.png",
    price: "$21.00",
    description: "Casual white T-shirt with a cool car design.",
    id: 30,
  },
  {
    name: "Grey T-Shirt",
    image: "../assets/male/male15.png",
    price: "$35.00",
    description: "Comfortable grey T-shirt for everyday wear.",
    id: 31,
  },
  {
    name: "Navy Blue Carhartt Jacket",
    image: "../assets/male/male16.png",
    price: "$28.50",
    description: "Durable navy blue jacket from Carhartt.",
    id: 32,
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
