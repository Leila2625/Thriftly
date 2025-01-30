//products to be listed
const products = [
  {
    name: "Grey Lee Jorts",
    image: "../assets/male/male1.png",
    price: "$18.99",
    description: "Classic grey jorts with a timeless look.",
    id: 17,
  },
  {
    name: "Blue Lee Jorts",
    image: "../assets/male/male2.png",
    price: "$32.50",
    description: "Stylish blue jorts perfect for any casual outing.",
    id: 18,
  },
  {
    name: "Wrangler Carpenter Jorts",
    image: "../assets/male/male3.png",
    price: "$24.99",
    description: "Durable carpenter jorts from Wrangler.",
    id: 19,
  },
  {
    name: "Light Blue Jorts",
    image: "../assets/male/male4.png",
    price: "$29.99",
    description: "Light blue jorts that offer comfort and style.",
    id: 20,
  },
  {
    name: "Camo Cargos",
    image: "../assets/male/male5.png",
    price: "$15.99",
    description: "Camo-patterned cargos for outdoor adventures.",
    id: 21,
  },
  {
    name: "Black Carhartt Cargos",
    image: "../assets/male/male6.png",
    price: "$21.00",
    description: "Reliable black cargos from Carhartt.",
    id: 22,
  },
  {
    name: "Oversized Baggy Blue Jeans",
    image: "../assets/male/male7.png",
    price: "$35.00",
    description: "Comfortable oversized baggy blue jeans.",
    id: 23,
  },
  {
    name: "Oversized Grey Distressed Jeans",
    image: "../assets/male/male8.png",
    price: "$28.50",
    description: "Stylish oversized grey distressed jeans.",
    id: 24,
  },
];

// Function to create product cards
function loadProducts() {
  const productList = document.getElementById("product-list");

  // Sort the products by price
  const sortedProducts = products.sort((a, b) => {
    const priceA = parseFloat(a.price.replace("$", ""));
    const priceB = parseFloat(b.price.replace("$", ""));
    return priceA - priceB;
  });

  // Clear product list before reloading
  productList.innerHTML = "";

  // Loop through products and create the cards
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

// Call the function when page is ready
loadProducts();
//function for sorting products
let clicked = false;
let sortButton = document.getElementById("sortButton");
sortButton.onclick = () => {
  if (clicked === false) {
    const productList = document.getElementById("product-list");
    const sortedProducts = products.sort((b, a) => {
      // Remove dollar sign
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));
      return priceA - priceB;
    });

    productList.innerHTML = "";

    // Loop again
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
