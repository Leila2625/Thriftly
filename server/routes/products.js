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

// ✅ Fetch all Men's Upcycled Products
router.get("/men/upcycled", (req, res) => {
  connection.query(
    "SELECT * FROM Products WHERE category = 'Upcycled' AND gender = 'Male'",
    (err, results) => {
      if (err) {
        console.error("Error fetching men's upcycled products:", err);
        return res.status(500).json({ error: "Error fetching products" });
      }
      res.json(results);
    }
  );
});

// ✅ Fetch all Men's Thrifted Products
router.get("/men/thrift", (req, res) => {
  connection.query(
    "SELECT * FROM Products WHERE category = 'Thrift' AND gender = 'Male'",
    (err, results) => {
      if (err) {
        console.error("Error fetching men's thrifted products:", err);
        return res.status(500).json({ error: "Error fetching products" });
      }
      res.json(results);
    }
  );
});

// ✅ Fetch all Women's Upcycled Products
router.get("/women/upcycled", (req, res) => {
  connection.query(
    "SELECT * FROM Products WHERE category = 'Upcycled' AND gender = 'Female'",
    (err, results) => {
      if (err) {
        console.error("Error fetching women's upcycled products:", err);
        return res.status(500).json({ error: "Error fetching products" });
      }
      res.json(results);
    }
  );
});

// ✅ Fetch all Women's Thrifted Products
router.get("/women/thrift", (req, res) => {
  connection.query(
    "SELECT * FROM Products WHERE category = 'Thrift' AND gender = 'Female'",
    (err, results) => {
      if (err) {
        console.error("Error fetching women's thrifted products:", err);
        return res.status(500).json({ error: "Error fetching products" });
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

module.exports = router;
