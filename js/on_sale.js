const products = [
  {
    name: "Grey Long Sleeve with Buttons",
    image: "../assets/female/female5.png",
    price: "$15.99",
    description: "Comfortable grey long sleeve with stylish buttons.",
    id: 5,
  },
  {
    name: "Brown leather Jacket",
    image: "../assets/female/female1.png",
    price: "$18.99",
    description: "A stylish brown leather jacket.",
    id: 1, // Add unique ID to each product for linking
  },
  {
    name: "Tilly's Blue Jeans",
    image: "../assets/female/female13.png",
    price: "$15.99",
    description: "Comfortable grey long sleeve with stylish buttons.",
    id: 13,
  },
  {
    name: "Old Navy Leggings",
    image: "../assets/female/female9.png",
    price: "$18.99",
    description: "A stylish brown leather jacket.",
    id: 9, // Add unique ID to each product for linking
  },
  {
    name: "Camo Cargos",
    image: "../assets/male/male5.png",
    price: "$15.99",
    description: "Camo-patterned cargos for outdoor adventures.",
    id: 21,
  },
  {
    name: "Grey Lee Jorts",
    image: "../assets/male/male1.png",
    price: "$18.99",
    description: "Classic grey jorts with a timeless look.",
    id: 17,
  },
  {
    name: "White Nike T-Shirt",
    image: "../assets/male/male13.png",
    price: "$15.99",
    description: "Simple and classic white Nike T-shirt.",
    id: 29,
  },
  {
    name: "Black Baggy Jeans",
    image: "../assets/male/male9.png",
    price: "$18.99",
    description: "Stylish black baggy jeans for a relaxed look.",
    id: 25,
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
