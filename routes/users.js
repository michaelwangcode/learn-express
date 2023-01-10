// Import the express library
const express = require("express");

// Create a new router application
const router = express.Router();

// Use the "logger" middleware function we created in the app
router.use(logger);



// Note: the "/users" prefix for all URLs is specified in server.js

// The GET route for the /users path
router.get("/", (req, res) => {

  // Display a message on the web page
  res.send("User List");
});


// The GET route for the /users/new path
router.get("/new", (req, res) => {

  // Render out the file in users/new.ejs
  // The firstName variable is given a default value of "Test", which appears in the text input
  // When the submit button is pressed, the router.post function will be called
  res.render("users/new", { firstName: "Test" });
});


// The POST route for creating a new user
// This function gets called when the "Submit" button is clicked
router.post("/", (req, res) => {

  // Set the isValid variable to true to simulate a valid username
  const isValid = true;

  // If the name is valid,
  if (isValid) {

    // Print the name submitted in the form located in users/new.ejs
    console.log(req.body.firstName);

    // Push the name to the users array
    users.push({ firstName: req.body.firstName })

    // Redirect to the URL: users/number, which will print the user's name to the console
    res.redirect(`/users/${users.length - 1}`)

  // If the name is not valid
  } else { 

    // Print an error message
    console.log("Error");

    // Render the users/new page again, with the same input text
    res.render("users/new", { firstName: req.body.firstName })
  }

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



// Middleware

// A middleware function for logging out a user
function logger(req, res, next) {

  // Print a message to the console
  console.log("logger function called");

  // Print out the url for the request
  console.log(req.originalUrl);

  // Move on to the next part of code
  next();
}



// Export the router so it can be used in server.js
module.exports = router;
