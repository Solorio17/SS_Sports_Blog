const express    = require("express"),
      bodyParser = require("body-parser"),
      path       = require("path"),
      session    = require("express-sessions"),
      validator  = require("express-validator"),
      mongoose   = require("mongoose");

//Mongoose Connect
mongoose.connect("mongodb://localhost/sportsblog")
const db = mongoose.connection;

//Setting App and Port
const app  = express(),
      port = 3000;

const index      = require("./routes/index"),
      articles   = require("./routes/articles"),
      categories = require("./routes/categories"),
      manage     = require("./routes/manage");

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
app.use(validator({
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

app.use("/", index);
app.use("/articles", articles);
app.use("/categories", categories);
app.use("/manage", manage);

app.listen(port, () => {
  console.log("Server Started on Port..."+port);
});
