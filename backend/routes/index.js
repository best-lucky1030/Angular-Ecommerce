var express = require("express");
var router = express.Router();

// GET Home Page
router.get("/", function(req, res, next) {
  res.send({message: "Welcome to express server"});
});

module.exports = router;
