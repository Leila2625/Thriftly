require("dotenv").config(); // Load environment variables from .env file
const mysql = require('mysql2'); // Use the promise-based version

// Set up the connection
const connection = mysql.createConnection({ // Use createPool for better connection handling
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database");
});

module.exports = connection;
