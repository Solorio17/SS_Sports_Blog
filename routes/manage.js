const express = require("express"),
      router  = express.Router();

router.get("/", (req, res, next) => {
  res.send("MANAGE");
});

router.get("/articles/add", (req, res, next) => {
  res.render("add_article", {title: "Create Article"})
});

module.exports = router;
