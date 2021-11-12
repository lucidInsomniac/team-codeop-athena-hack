var express = require('express');
var router = express.Router();
const db = require("../model/helper");
// const bodyParser = require("body-parser");

// router.use(bodyParser.json());

router.get("/", function (req, res, next) {
  res.send({ message: "Hello world!" });
});

module.exports = router;