const express = require("express");
const connection = require("../db"); // Database connection

const router = express.Router();

// ✅ Fetch all products
router.get("/", (req, res) => {
  connection.query("SELECT * FROM Products", (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).json({ error: "Error fetching products" });
    }
    res.json(results);
  });
});

router.get("/upcycled", (req, res) => {
  connection.query(
    "SELECT * FROM Products WHERE category = 'Upcycled'",
    (err, results) => {
      if (err) {
        console.error("Error fetching thrift products:", err);
        return res
          .status(500)
          .json({ error: "Error fetching thrift products" });
      }
      res.json(results);
    }
  );
});

router.get("/thrift", (req, res) => {
  connection.query(
    "SELECT * FROM Products WHERE category = 'Thrift'",
    (err, results) => {
      if (err) {
        console.error("Error fetching thrift products:", err);
        return res
          .status(500)
          .json({ error: "Error fetching thrift products" });
      }
      res.json(results);
    }
  );
});
// ✅ Fetch product by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM Products WHERE product_id = ?", // Use correct column name
    [id],
    (err, results) => {
      if (err) {
        console.error("Error fetching product:", err);
        return res.status(500).json({ error: "Error fetching product" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(results[0]); // Return a single product
    }
  );
});
// Fetch all thrift products from the database

module.exports = router;
