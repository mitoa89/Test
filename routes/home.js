var express = require("express");
var router = express.Router();
var Contact = require("../routes/home");

router.get("/", function(req, res){
 res.redirect("/contacts");
});


module.exports = router;
