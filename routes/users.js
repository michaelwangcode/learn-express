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


// The POST route for creating a new user
router.post("/", (req, res) => {

  // Send a message
  res.send("Create User");
});


// The GET route for the /users/:id path
// The colon for "id" indicates it is a dynamic parameter that represents a user ID
router.get("/:id", (req, res) => {

  // Print out the user's name (which is set in the router.params function)
  // Will be called when visiting localhost:3000/users/1
  console.log(req.user);

  // Display a message with the user ID from the URL
  res.send(`Get User With ID ${req.params.id}`);
});


// The PUT route for the /users/:id path
router.put("/:id", (req, res) => {

  // Display a message with the user ID from the URL
  res.send(`Get User With ID ${req.params.id}`);
});


// The DELETE route for the /users/:id path
router.delete("/:id", (req, res) => {

  // Display a message with the user ID from the URL
  res.send(`Get User With ID ${req.params.id}`);
});


// An example array of users
const users = [{ name: "Kyle" }, { name: "Sally" }];


// This PARAM function runs every time it finds a param with the name you pass in (in this case: "id")
// It runs for all of our above routes with an id paramater
// It is a type of middleware, which is code that runs between the request being sent and the response being returned
router.param("id", (req, res, next, id) => {

  // The function runs the following code, but does not move on until the "next" function is called

  // Set a variable called "user" in the request object and set it to a user in the users array
  // We can now access "user" anywhere there is a req object
  req.user = users[id];

  // Call the next function to move on to the next piece of middleware (in this case the GET route)
  next();
});






// Export the router so it can be used in server.js
module.exports = router;
