const express = require("express");
const connection = require("./db");
const cors = require("cors");
const productsRoutes = require("./routes/products");
const donateRoutes = require("./routes/donate_sell");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");
const orderItems = require("./routes/order_items");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/products", productsRoutes);
app.use("/donate", donateRoutes);
app.use(express.static("public"));
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
