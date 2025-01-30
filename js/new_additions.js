// Array of products
const products = [
  {
    id: 1,
    name: "Brown leather Jacket",
    description: "A stylish brown leather jacket.",
    price: "$18.99",
    image: "../assets/female/female1.png", // Updated path for female product
    type: "Thrift Item", // Added type
  },
  {
    id: 2,
    name: "Abercrombie Hoodie",
    description: "Cozy and stylish hoodie.",
    price: "$32.50",
    image: "../assets/female/female2.png", // Updated path for female product
    type: "Thrift Item", // Added type
  },
  {
    id: 3,
    name: "Green Sweater",
    description: "Comfortable green sweater.",
    price: "$24.99",
    image: "../assets/female/female3.png", // Updated path for female product
    type: "Thrift Item", // Added type
  },
  {
    id: 5,
    name: "Grey Long Sleeve with Buttons",
    description: "Comfortable grey long sleeve with stylish buttons.",
    price: "$15.99",
    image: "../assets/female/female5.png", // Updated path for female product
    type: "Thrift Item", // Added type
  },
  {
    id: 6,
    name: "Ralph Lauren Navy American Flag Knitted Sweater",
    description: "Classic knitted sweater with American flag design.",
    price: "$21.00",
    image: "../assets/female/female6.png", // Updated path for female product
    type: "Thrift Item", // Added type
  },
  {
    id: 7,
    name: "Nike Sportswear Club Girls Oversized Joggers",
    description: "Stylish and comfortable oversized joggers.",
    price: "$35.00",
    image: "../assets/female/female7.png", // Updated path for female product
    type: "Thrift Item", // Added type
  },
  {
    id: 9,
    name: "Old Navy Leggings",
    description: "Comfy black leggings with a stretchy fit.",
    price: "$18.99",
    image: "../assets/female/female9.png", // Updated path for female product
    type: "Upcycled Item",
  },
  {
    id: 10,
    name: "Adidas Sports Shorts",
    description: "Lightweight sports shorts perfect for active days.",
    price: "$32.50",
    image: "../assets/female/female10.png", // Updated path for female product
    type: "Upcycled Item",
  },
  {
    id: 11,
    name: "Abercrombie Shorts",
    description: "Casual and comfy shorts for warm weather.",
    price: "$24.99",
    image: "../assets/female/female11.png", // Updated path for female product
    type: "Upcycled Item",
  },
  {
    id: 13,
    name: "Tilly's Blue Jeans",
    description: "Classic blue jeans with a comfortable fit.",
    price: "$15.99",
    image: "../assets/female/female13.png", // Updated path for female product
    type: "Upcycled Item",
  },
  {
    id: 14,
    name: "Blueberry T-Shirt",
    description: "Soft cotton T-shirt in a rich blueberry shade.",
    price: "$21.00",
    image: "../assets/female/female14.png", // Updated path for female product
    type: "Upcycled Item",
  },
  {
    id: 18,
    name: "Blue Lee Jorts",
    description: "Stylish blue jorts perfect for any casual outing.",
    price: "$32.50",
    image: "../assets/male/male2.png", // Updated path for male product
    type: "Thrift Item",
  },
  {
    id: 24,
    name: "Oversized Grey Distressed Jeans",
    description: "Stylish oversized grey distressed jeans.",
    price: "$28.50",
    image: "../assets/male/male8.png", // Updated path for male product
    type: "Thrift Item",
  },
  {
    id: 29,
    name: "White Nike T-Shirt",
    description: "Simple white T-shirt with a Nike logo.",
    price: "$15.99",
    image: "../assets/male/male13.png", // Updated path for male product
    type: "Upcycled Item",
  },
  {
    id: 30,
    name: "White Car T-Shirt",
    description: "White T-shirt featuring a classic car print.",
    price: "$21.00",
    image: "../assets/male/male14.png", // Updated path for male product
    type: "Upcycled Item",
  },

  {
    id: 32,
    name: "Navy Blue Carhartt Jacket",
    description: "Navy blue jacket from Carhartt, perfect for layering.",
    price: "$28.50",
    image: "../assets/male/male16.png", // Updated path for male product
    type: "Upcycled Item",
  },
];
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
