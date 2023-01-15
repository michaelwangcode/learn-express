# Learn Express

This project is based off the [Learn Express JS In 35 Minutes](https://www.youtube.com/watch?v=SccSCuHhOw0) tutorial by Web Dev Simplified.

To run this project, type "nodemon server.js" in the terminal.

The project can be viewed in a web browser at: http://localhost:3000/


&nbsp;


## Project Setup

In the terminal, type "npm init -y" to create a package.json file with a list of dependencies and settings.

Type "npm i express" to install the express library.

Type "npm i --save-dev nodemon" to install nodemon, which automatically restarts the server when new changes are saved in the code.

Add "devStart": "nodemon server.js" in the "scripts" section of package.json. 
Typing "npm run devStart" will run server.js with nodemon.


&nbsp;


## Server Setup

In server.js, import express and set the port to 3000.


&nbsp;


## Basic Routing

A router is a JavaScript object that maps URLs to functions. The router calls a function based on the URL.

The GET method requests data from a specific resource.

Use the "get" method route to display information to a specific URL on localhost:3000.

The first parameter is the URL path: '/'

The second parameter is a function that takes three parameters: (req, res, next)

&nbsp;

Request (req) is an object that contains information about the HTTP request from the client.

Response (res) is an object that sends data from the server to the client through HTTP requests.

Next (next) passes control to the next middleware function. It is rarely used.

&nbsp;

Code in the {} brackets are executed whenever a user navigates to the '/' URL.

The res.send("Hi") function can be used to send basic information to the user at the URL.

The res.sendStatus(500) function can be used to send status codes to the user at the URL.


&nbsp;


## Sending Data

In the body of the app.get function, add code that will be executed when the page first loads.

Examples:

The console.log(req) statement print the req object to the console, which contains a lot of info about the HTTP request from the client.

The res.sendStatus(500) function sends and displays a status message on the page.

The res.status(500) sends a status code on the page.

Statuses and send functions can be chained: res.status(500).send("Hi") 

The res.json({ message: "Error" }) function sends JSON to the user and displays it on the screen.

The res.download("server.js") function downloads the contents of a file to the user's computer.


&nbsp;


## Rendering HTML

The most common use of the response (res) is to render out an HTML file.

To render an HTML file, add res.render("index") in the body of the app.get function. 

This will display the "index.ejs" file located in the "views" folder of the project.

By default, all views are placed inside of the "views" folder.

Before we can display an HTML page, we need to install a view engine called EJS (Embedded JavaScript) which allows us to render web pages.

This can be done by typing "npm i ejs" in the terminal and adding the code app.set('view engine', 'ejs') in server.js.

You can run JavaScript code in an EJS file by using the syntax: <%= %>

In server.js, we can send info to the index.ejs file by typing: res.render("index", { text: "World" }) which saves a string "World" in a variable called "text".

In index.ejs, the "text" variable can be accessed using the word "text" or "locals.text" to prevent the page from crashing if the text variable is not found.

Additionally, you can use the || operator to provide a default value if the text variable is not found.


&nbsp;


## Routers

Express has routers, which is a way to create another instance of your application (like a mini application) and insert it into the main application.

This prevents the server.js file from becoming too big if there are a lot of routes.

This can be done by adding a "routes" folder in the project directory.

For our project, create routes for users in a users.js file in the routes folder.

The users.js file imports router instead of app, and uses router.get instead of app.get.

It is then exported so it can be referenced in server.js.

In server.js, the users routes are imported as userRouter.


&nbsp;


## Advanced Routing

Use a POST request to create a new user.

You can use the colon character (:) to create a dynamic parameter, which is a URL that can be anything after the colon.

It is usually used for URLS such as IDs.

The id of the :id parameter can be accessed using: req.params.id

Express goes through routes in the file from top to bottom, so the order of routes is important.

You can use the router.route function to chain together GET, PUT and DELETE requests for a URL.

The router.param function is a type of middleware.

Middleware is code that is run between the request and response.

It takes a parameter name (such as id) and runs whenever you go to a route with an id parameter.

Within the body, you can set variables for the req object that will be accessible to any other routes with a req object.

You must call the next() function in the body to advance to the next section of code.


&nbsp;


## Middleware

Middleware is any code that gets executed between the server recieving a request and the server sending a response to the client.

Request -> Middleware -> Response

A common example of middleware is a function that logs users out.

To create your own middleware function, create a function that takes in req, res and next parameters.

Add it to the app by using the app.use(functionName) function at the top of the file.

If you only want the function to be accessible to a specific route, you can pass it as a parameter instead.


&nbsp;


## Rendering Static Files

You can easily render static files (HTML files that don't change) by using the express.static("public") function.

Create a "public" folder in the project directory add add html files and folders there. 

The files will be automatically accessible by accessing the URL path.

For example: localhost:3000/test/tt.html


&nbsp;


## Parsing Form/JSON Data

Express can be used to parse information from forms and text inputs.

At the users/new URL, create a page with a simple text input that allows you to input a user's name.

A default name of "Test" is stored in the text field.

When the Submit button is clicked, the POST function in users.js is executed.

This is because in new.ejs, the tag <form action="/users" method="POST"> specifies the /users URL as the action and POST as the method being called.

The express.urlencoded middleware in server.js allows us to access information coming from forms.

The variable req.body.firstName is used to access the name that the user submitted, and print it to the console or add it to the users array.

The res.render function can be used to pass down JSON to another URL.

To process JSON information, use the express.json middleware.


&nbsp;


## Parse Query Params

To get a query parameter (like a name in the URL), use the req.query.name variable.

This will allow you to access and print the name in the URL.

For example:
http://localhost:3000/users?name=Kyle

This is done in the GET route in users.js.
