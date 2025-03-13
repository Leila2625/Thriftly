const express = require("express");
const connection = require("../db"); // Database connection

const router = express.Router();

//Fetch all the items in the cart (with product details from Products table)
router.get("/", (req, res) => {
  const query = `
SELECT Cart.cart_id, Cart.product_id, Cart.added_at,
Products.name, Products.price, Products.image_url
FROM Cart
JOIN Products ON Cart.product_id = Products.product_id
`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching cart items:", err);
      return res.status(500).json({ error: "Error fetching cart items" });
    }
    res.json(results);
  });
});

// Add item to the cart (Only product_id)
router.post("/", (req, res) => {
  const { product_id } = req.body;

  if (!product_id) {
    return res.status(400).json({ message: "Product ID is required." });
  }

  const query = "INSERT INTO Cart (product_id) VALUES (?)";
  connection.query(query, [product_id], (err, results) => {
    if (err) {
      console.error("Error adding product to cart:", err);
      return res
        .status(500)
        .json({ message: "Failed to add product to cart." });
    }
    res.status(201).json({
      message: "Product added to cart successfully!",
      cart_id: results.insertId,
    });
  });
});

// Remove item from the cart by cart_id
router.delete("/:cart_id", (req, res) => {
  const { cart_id } = req.params;

  const query = "DELETE FROM Cart WHERE cart_id = ?";
  connection.query(query, [cart_id], (err, results) => {
    if (err) {
      console.error("Error deleting item from cart:", err);
      return res.status(500).json({ error: "Failed to delete item from cart" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Item not found in cart" });
    }
    res.json({ message: "Item removed from cart successfully!" });
  });
});

// Clear entire cart
router.delete("/", (req, res) => {
  connection.query("DELETE FROM Cart", (err, results) => {
    if (err) {
      console.error("Error clearing cart:", err);
      return res.status(500).json({ error: "Failed to clear cart" });
    }
    res.json({ message: "Cart cleared successfully!" });
  });
});

module.exports = router;
