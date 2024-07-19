// Import the express module
import express from "express";

// Create an instance of express
const app = express();

// Define the port number
const PORT = 3000;

// Define a simple get method to display group names
app.get("/", (req, res) => {
  res.send("<h1>Group 20</h1><p>Phu Nguyen, Felipe Didone</p>");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
