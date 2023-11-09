// Require the express module to create a server
const express = require('express');
// Require the path module for handling and transforming file paths
const path = require('path');
// Create an instance of an express application
const app = express();

// Middleware to serve static files from the 'build' directory, which is typically used to serve React production build files
// '__dirname' is the current directory of this server file, and '../build' is the path to the static files relative to this file
app.use(express.static(path.join(__dirname, '../build')));

// Route to handle all GET requests. Since it's '*', it will catch all paths not previously matched by other routes
// This is commonly used in single-page applications where the index.html file acts as an entry point
app.get('*', (req, res) => {
  // Send the 'index.html' file in response to any GET request that isn't caught by the static middleware above
  // This ensures that a direct visit to any route defined on the client side will render the correct page
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Define the port for the server to listen on
// process.env.PORT is used for environments where the port is set in an environment variable, like cloud hosting platforms
// If process.env.PORT is not set, default to 5000 for local development
const port = process.env.PORT || 5000;
// Start the server and have it listen on the defined port
app.listen(port);

// Log a message to the console once the server starts listening
console.log(`Server listening on ${port}`);
