const express = require("express");
const connection = require("../db"); // Database connection

const router = express.Router();

// ✅ Fetch all Sell/Donate entries
router.get("/", (req, res) => {
  connection.query("SELECT * FROM Sell_Form", (err, results) => {
    if (err) {
      console.error("Error fetching sell/donate entries:", err);
      return res.status(500).json({ error: "Error fetching entries" });
    }
    res.json(results);
  });
});

// ✅ Fetch a specific entry by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM Sell_Form WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Error fetching entry:", err);
        return res.status(500).json({ error: "Error fetching entry" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Entry not found" });
      }
      res.json(results[0]); // Return a single entry
    }
  );
});
router.post("/", (req, res) => {
  const { name, email, phone_number, inquiry } = req.body;

  if (!name || !email || !phone_number || !inquiry) {
    return res.status(400).json({ message: "All fields are required." });
  }

  console.log("Received donation request:", req.body);

  // SQL query to insert the data into the database
  const query =
    "INSERT INTO Sell_Form (name, email, phone_number, inquiry) VALUES (?, ?, ?, ?)";
  const values = [name, email, phone_number, inquiry];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error("Error inserting data into database:", err);
      return res.status(500).json({ message: "Failed to save donation." });
    }
    res.status(201).json({ message: "Form successfully submitted!" });
  });
});
module.exports = router;
