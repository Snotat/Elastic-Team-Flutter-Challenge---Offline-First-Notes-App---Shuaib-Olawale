var express = require("express");
var router = express.Router();
var message = require("../models/notes");

/* GET home page. */
router.get("/", function (req, res, next) {
  message
    .find()
    .then((rest) => {
      console.log(rest);
      res.send(rest);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.data);
    });
});

module.exports = router;
