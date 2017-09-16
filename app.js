const express    = require("express"),
      bodyParser = require("body-parser"),
      path       = require("path"),
      session    = require("express-session"),
      validator  = require("express-validator"),
      flash      = require("express-flash");

//Setting App and Port
const app  = express(),
      port = 3000;

//Setting up Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, (req, res, next) => {
  console.log("Server Started on Port..."+port);
});
