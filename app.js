const express    = require("express"),
      bodyParser = require("body-parser"),
      path       = require("path"),
      session    = require("express-sessions"),
      validator  = require("express-validator");

//Setting App and Port
const app  = express(),
      port = 3000;

//Setting up Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Setting up Static Folder
app.use(express.static(path.join(__dirname, "public")));

//Express Messages
app.use(require('connect-flash')());
app.use((req, res, next) => {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//Express Validator
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
    const namespace = param.split(".")
    , root        = namespace.shift()
    , formParam   = root;

  while(namespace.length) {
    formParam += "[" + namespace.shift() + "]";
  }
  return {
    param : formParam,
    msg   : msg,
    value : value
   };
 }
}));

app.listen(3000, (req, res, next) => {
  console.log("Server Started on Port..."+port);
});
