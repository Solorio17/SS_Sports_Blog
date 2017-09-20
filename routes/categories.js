const express = require("express"),
      router  = express.Router();

Category = require("../models/Category.js")

router.get("/", (req, res, next) => {
  Category.getCategories((err, categories) => {
      if(err){
        console.log(err);
      }
      res.render("categories", {
        title: "Categories",
        categories: categories
      });
  })
});

module.exports = router;
