const express = require('express'); // Import the Express library
const cors = require('cors'); // Import the cors package that allows requests from specific origins
const app = express(); // Initialize the Express application
const port = 3000; // Set the port number on which the server will listen for incoming requests

app.use(cors()); // Enable CORS for all routes

// Serve the JSON file on GET request to '/data'
app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/data.json'); // Send the data.json file as a response to the client
  // __dirname is a Node.js global variable that represents the directory name of the current module
  // By concatenating __dirname with '/data.json', you get the absolute path to the data.json file
});

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log message to the console indicating server started
});
