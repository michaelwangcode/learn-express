// Import the express library
const express = require("express");

// Create a new router application
const router = express.Router();


// Note: the "/users" prefix for all URLs is specified in server.js

// The GET route for the /users path
router.get("/", (req, res) => {

  // Display a message on the web page
  res.send("User List");
});


// The GET route for the /users/new path
router.get("/new", (req, res) => {

  // Display a message on the web page
  res.send("User New Form");
});



// Export the router so it can be used in server.js
module.exports = router;
