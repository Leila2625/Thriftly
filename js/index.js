const products = [
  {
    name: "Black Carhartt Cargos",
    image: "../assets/male/male6.png",
    price: "$21.00",
    description: "Reliable black cargos from Carhartt.",
    type: "Thrift Item",
    id: 22,
  },
  {
    name: "Abercrombie Hoodie",
    image: "../assets/female/female2.png",
    price: "$32.50",
    type: "Thrift Item",
    description: "A cozy hoodie for all seasons.",
    id: 2,
  },
  {
    name: "Blueberry T-Shirt",
    image: "../assets/female/female14.png",
    price: "$21.00",
    type: "Upcycled Item",
    description: "Classic knitted sweater with American flag design.",
    id: 14,
  },
  {
    name: "White Car T-Shirt",
    image: "../assets/male/male14.png",
    price: "$21.00",
    type: "Upcycled Item",
    description: "Casual white T-shirt with a cool car design.",
    id: 30,
  },
];

// Function to generate product cards
function loadProducts() {
  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    console.log(product.image); // Log the image URL
    const productCard = document.createElement("div");
    productCard.classList.add("col-md-3", "mb-4", "text-center");

    productCard.innerHTML = `
   <div class="text-start fst-italic">  <!-- Align product.type to the left -->
        ${product.type}
      </div>
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
