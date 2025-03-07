const express = require("express");
const connection = require("./db");
const productsRoutes = require("./routes/products"); // Import the database connection

const app = express();
const port = 3000; // Change the port if needed
app.use("/products", productsRoutes);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
