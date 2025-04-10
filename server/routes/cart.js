const express = require("express");
const connection = require("../db"); // Database connection
const router = express.Router();

// Fetch all the items in the cart for a session (with product details)
router.get("/:session_id", (req, res) => {
  const session_id = req.params.session_id;

  const query = `
    SELECT Cart.cart_id, Cart.session_id, Cart.product_id, Cart.added_at,
           Products.name, Products.price, Products.image_url
    FROM Cart
    JOIN Products ON Cart.product_id = Products.product_id
    WHERE Cart.session_id = ?
  `;

  connection.query(query, [session_id], (err, results) => {
    if (err) {
      console.error("Error fetching cart items:", err);
      return res.status(500).json({ error: "Error fetching cart items" });
    }
    res.json(results);
  });
});

// Add item to cart
router.post("/", (req, res) => {
  const { product_id, session_id } = req.body;

  console.log("Received POST /cart");
  console.log("product_id:", product_id);
  console.log("session_id:", session_id);


  if (!product_id || !session_id) {
    return res
      .status(400)
      .json({ message: "Product ID and session ID are required." });
  }


    const checkQuery = "SELECT * FROM Cart WHERE product_id = ? AND session_id = ?";
  connection.query(checkQuery, [product_id, session_id], (err, results) => {
    if (err) {
      console.error("Error checking cart:", err);
      return res.status(500).json({ error: "Error checking cart" });
    }

    if (results.length > 0) {
      // Item already in cart, don't add it again
      return res.status(409).json({ message: "Item already in cart." });
    }

    // Add new item
    const insertQuery = "INSERT INTO Cart (product_id, session_id) VALUES (?, ?)";
    connection.query(insertQuery, [product_id, session_id], (err, result) => {
      if (err) {
        console.error("Error inserting into cart:", err);
        return res.status(500).json({ error: "Failed to add to cart" });
      }
      res.status(201).json({ message: "Product added to cart." });
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

// Clear cart for a specific session
router.delete("/session/:session_id", (req, res) => {
  const session_id = req.params.session_id;

  console.log("DELETE /cart/session/:session_id called with:", session_id);

  const query = "DELETE FROM Cart WHERE session_id = ?";
  connection.query(query, [session_id], (err, results) => {
    if (err) {
      console.error("Error clearing cart:", err);
      return res.status(500).json({ error: "Failed to clear cart" });
    }

    console.log("Cart cleared for session:", session_id);
    res.json({ message: "Cart cleared successfully!" });
  });
});



module.exports = router;
