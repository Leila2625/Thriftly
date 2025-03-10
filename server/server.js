const express = require("express");
const db = require("./db"); // Import database connection
const productRoutes = require("./routes/products"); // Import products API

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

// ✅ Use Products API Routes
app.use("/api/products", productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
