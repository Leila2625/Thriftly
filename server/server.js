const express = require("express");
const connection = require("./db");
const cors = require("cors"); // Import cors

const productsRoutes = require("./routes/products");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json()); // Add this line
app.use("/products", productsRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
