const express = require("express");
const connection = require("./db");
const cors = require("cors"); // Import cors
const productsRoutes = require("./routes/products");
const donateRoutes = require("./routes/donate_sell");
const cartRoutes = require("./routes/cart");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/products", productsRoutes);
app.use("/donate", donateRoutes);
app.use(express.static("public"));
app.use("/cart", cartRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
