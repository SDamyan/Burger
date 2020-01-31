var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var cat = require("../models/burger.js");

//todo router .get .post .put .delete

// Export routes for server.js to use.
module.exports = router;