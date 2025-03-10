const express = require("express");
const connection = require("../db"); // Database connection

const router = express.Router();

// Fetch all products from the database
router.get("/", (req, res) => {
  connection.query("SELECT * FROM Products", (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ error: "Error fetching products" });
    } else {
      res.json(results);
    }
  });
});

// Fetch product by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM Products WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Error fetching product:", err);
        res.status(500).json({ error: "Error fetching product" });
      } else if (results.length === 0) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.json(results[0]); // Return a single product
      }
    }
  );
});

module.exports = router;
