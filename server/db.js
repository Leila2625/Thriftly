require("dotenv").config(); // Load environment variables from .env file
const mysql = require("mysql2");

// Set up the connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // Using the value from .env
  user: process.env.DB_USER, // Using the value from .env
  password: process.env.DB_PASSWORD, // Using the value from .env
  database: process.env.DB_NAME, // Using the value from .env
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database");
});

module.exports = connection; // Export the connection to use in other files
