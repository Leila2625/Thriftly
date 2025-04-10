const express = require("express");
const connection = require("../db");
const router = express.Router();

// Create a new order
router.post("/", (req, res) => {
  const { first_name, last_name, email, address, total_price } = req.body;

  if (
    !first_name ||
    !last_name ||
    !email ||
    !address ||
    total_price === undefined
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const query = `
    INSERT INTO Orders (first_name, last_name, email, address, total_price, order_date)
    VALUES (?, ?, ?, ?, ?, NOW())
  `;

  connection.query(
    query,
    [first_name, last_name, email, address, total_price],
    (err, result) => {
      if (err) {
        console.error("Error creating order:", err);
        return res.status(500).json({ message: "Error creating order" });
      }

      res.status(201).json({
        message: "Order created successfully",
        orderId: result.insertId,
      });
    }
  );
});

// Get all orders
router.get("/", (req, res) => {
  const query = "SELECT * FROM Orders";

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching orders:", err);
      return res.status(500).json({ message: "Error fetching orders" });
    }

    res.json(results);
  });
});

module.exports = router;
