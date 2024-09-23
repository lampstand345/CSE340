// /* ******************************************
//  * This server.js file is the primary file of the 
//  * application. It is used to control the project.
//  *******************************************/
// /* ***********************
//  * Require Statements
//  *************************/
// const express = require("express")
// const expressLayouts = require("express-layouts")
// const env = require("dotenv").config()
// const app = express()
// const static = require("./routes/static")


// /* ***********************
//  * View Engine and Template
//  *************************/
// app.set("view engine", "ejs")
// app.use(expressLayouts())
// app.set("layout", "./layouts/layout")//not at views root
// /* ***********************
//  * Routes
//  *************************/
// app.use(static)
// // Index route
// app.get("/", function(req, res) {
//   res.render("index", {title: "Home"})
// })

// /* ***********************
//  * Local Server Information
//  * Values from .env (environment) file
//  *************************/
// const port = process.env.PORT
// const host = process.env.HOST

// /* ***********************
//  * Log statement to confirm server operation
//  *************************/
// app.listen(port, () => {
//   console.log(`app listening on ${host}:${port}`)
// })

// const express = require("express");
// const expressLayouts = require("express-layouts");
// const app = express();
// const static = require("./routes/static");

// // Set view engine
// app.set("view engine", "ejs");

// // Initialize expressLayouts
// const layout = expressLayouts(app);

// // Use static route
// app.use(static);

// // Index route
// app.get("/", (req, res) => {
//   // Render the index view with the layout
// layout.render("index", { title: "Home" }, { locals: {} }, (err, html) => {
//     if (err) {
//       console.log(err);
//       return res.sendStatus(500);
//     }
//     return res.send(html);
//   });
// });

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`app listening on http://localhost:${port}`);
// });




/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/

const express = require("express");
const ejs = require("ejs");
const expressLayouts = require("express-layouts");
const app = express();
const static = require("./routes/static");

// Set view engine
app.set("view engine", "ejs");

// Initialize expressLayouts
app.use(expressLayouts);

// Use static route
app.use(static);

// Index route
app.get("/", (req, res) => {
  // Render the index view with the layout
res.render("index", { title: "Home", layout: "layout" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
