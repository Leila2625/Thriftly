const express = require("express");
const connection = require("../db"); // Import DB connection

const router = express.Router();

// Get all products
router.get("/", (req, res) => {
  connection.query("SELECT * FROM Products", (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ error: "Error fetching products" });
    } else {
      res.json(results); // Send the results as JSON
    }
  });
});

// Example: Get a product by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM Products WHERE product_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Error fetching product:", err);
        res.status(500).json({ error: "Error fetching product" });
      } else {
        res.json(results); // Send the single product as JSON
      }
    }
  );
});

// You can add other product routes like POST, PUT, DELETE here

module.exports = router;
