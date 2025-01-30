// products
const productData = [
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
    id: 4,
    name: "Grey Off Shoulder Top",
    description: "Trendy grey off-shoulder top.",
    price: "$29.99",
    image: "../assets/female/female4.png", // Updated path for female product
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
    id: 8,
    name: "North Face Women's Evolution Wide Leg Sweatpants",
    description: "Versatile and comfortable wide-leg sweatpants.",
    price: "$28.50",
    image: "../assets/female/female8.png", // Updated path for female product
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
    id: 12,
    name: "Zara Grey Straight Leg Pants",
    description: "Sleek, grey straight-leg pants for a polished look.",
    price: "$29.99",
    image: "../assets/female/female12.png", // Updated path for female product
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
    id: 15,
    name: "Disco T-Shirt",
    description: "Fun and bold T-shirt with a retro disco print.",
    price: "$35.00",
    image: "../assets/female/female15.png", // Updated path for female product
    type: "Upcycled Item",
  },
  {
    id: 16,
    name: "White Ribbon T-Shirt",
    description: "A simple, elegant white T-shirt with a ribbon detail.",
    price: "$28.50",
    image: "../assets/female/female16.png", // Updated path for female product
    type: "Upcycled Item",
  },
  {
    id: 17,
    name: "Grey Lee Jorts",
    description: "Classic grey jorts with a timeless look.",
    price: "$18.99",
    image: "../assets/male/male1.png", // Updated path for male product
    type: "Thrift Item",
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
    id: 19,
    name: "Wrangler Carpenter Jorts",
    description: "Durable carpenter jorts from Wrangler.",
    price: "$24.99",
    image: "../assets/male/male3.png", // Updated path for male product
    type: "Thrift Item",
  },
  {
    id: 20,
    name: "Light Blue Jorts",
    description: "Light blue jorts that offer comfort and style.",
    price: "$29.99",
    image: "../assets/male/male4.png", // Updated path for male product
    type: "Thrift Item",
  },
  {
    id: 21,
    name: "Camo Cargos",
    description: "Camo-patterned cargos for outdoor adventures.",
    price: "$15.99",
    image: "../assets/male/male5.png", // Updated path for male product
    type: "Thrift Item",
  },
  {
    id: 22,
    name: "Black Carhartt Cargos",
    description: "Reliable black cargos from Carhartt.",
    price: "$21.00",
    image: "../assets/male/male6.png", // Updated path for male product
    type: "Thrift Item",
  },
  {
    id: 23,
    name: "Oversized Baggy Blue Jeans",
    description: "Comfortable oversized baggy blue jeans.",
    price: "$35.00",
    image: "../assets/male/male7.png", // Updated path for male product
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
    id: 25,
    name: "Black Baggy Jeans",
    description: "Classic black baggy jeans with a laid-back style.",
    price: "$18.99",
    image: "../assets/male/male9.png", // Updated path for male product
    type: "Upcycled Item",
  },
  {
    id: 26,
    name: "Mouth T-Shirt",
    description: "Graphic T-shirt featuring a mouth print.",
    price: "$32.50",
    image: "../assets/male/male10.png", // Updated path for male product
    type: "Upcycled Item",
  },
  {
    id: 27,
    name: "Frank Ocean T-Shirt",
    description: "T-shirt with a classic Frank Ocean print.",
    price: "$24.99",
    image: "../assets/male/male11.png", // Updated path for male product
    type: "Upcycled Item",
  },
  {
    id: 28,
    name: "Seven Ball T-Shirt",
    description: "Stylish T-shirt with a bold seven-ball design.",
    price: "$29.99",
    image: "../assets/male/male12.png", // Updated path for male product
    type: "Upcycled Item",
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
    id: 31,
    name: "Grey T-Shirt",
    description: "Basic grey T-shirt, versatile and comfortable.",
    price: "$35.00",
    image: "../assets/male/male15.png", // Updated path for male product
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

// Get the product id
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Find product based on the id
const product = productData.find((item) => item.id == productId);

if (product) {
  // get product details on the page
  document.getElementById("productImage").src = product.image;
  document.getElementById("productType").textContent = product.type;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productDescription").textContent =
    product.description;
  document.getElementById("productPrice").textContent = product.price;
} else {
  // errors
  document.getElementById("productName").textContent = "Product Not Found";
}
//add quantity of products
function incrementQuantity() {
  const quantityInput = document.getElementById("quantity");
  const currentValue = parseInt(quantityInput.value);

  if (currentValue < 5) {
    quantityInput.value = currentValue + 1;
  }
}
function decrementQuantity() {
  const quantityInput = document.getElementById("quantity");
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}
//add to cart
function addToCart() {
  const size = document.getElementById("sizeSelect").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  //require size
  if (!size) {
    alert("Please select a size.");
    return;
  }

  // Get the cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add product to the cart
  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    size: size,
    quantity: quantity,
    image: product.image,
  };

  cart.push(cartItem);

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${product.name} added to cart!`);
}

document.getElementById("addToCartButton").addEventListener("click", addToCart);
