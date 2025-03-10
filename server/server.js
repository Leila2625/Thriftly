const express = require('express');
const db = require('./db'); // Import database connection
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

// API Route to Get All Products
app.get('/products', async (req, res) => {
    try {
        const [products] = await db.query("SELECT * FROM Products"); // Correct method: .query()
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(5001, () => {
  console.log('Server running on port 3000');
});
