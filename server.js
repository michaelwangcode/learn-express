// Import the express library
const express = require('express');

// Create a new express application and store it in the app variable
const app = express();

// Set the app's view engine to EJS
app.set('view engine', 'ejs');          



// The GET route for the root path: "/"
// It contains code that gets executed when the "/" page loads:
app.get("/", (req, res) => {

  // Render the "index.ejs" file located in the "views" folder
  // The string "World" is assigned to a valuable called "text", which is accessible in the index.js file using the <%= %> syntax
  res.render("index", { text: "World" });
});



// Import the users routes located in the routes/users.js file
const userRouter = require('./routes/users')

// Use the routes specified in userRouter, and add '/users' to the beginning of each route
app.use('/users', userRouter)




// Run the app on localhost:3000
app.listen(3000);


