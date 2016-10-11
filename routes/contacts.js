var express = require("express");
var router = express.Router();

var Contact = require("../models/contact");


router.get("/", function(req, res){
 Contact.find({}, function(err, contacts){
  if(err) return res.json(err);
  res.render("main", {contacts:contacts} );
 })
});

router.post("/", function(req, res){
 Contact.create(req.body, function(err, contact){
  if(err) return res.json(err);
  res.redirect("/");
 });
});

router.get("/:id", function(req, res){
  Contact.findOne({_id:req.params.id}, function(err, contact){
    if(err) return res.json(err);
    res.render("main", {contact:contact});
   });
});

router.get("/:id/edit", function(req, res){
 Contact.findOne({_id:req.params.id}, function(err, contact){
  if(err) return res.json(err);
  res.render("edit", {contact:contact});
 });
});

router.put("/:id", function(req, res){
 Contact.findOneAndUpdate({_id:req.params.id}, req.body, function(err, contact){
  if(err) return res.json(err);
  res.redirect("/contacts");
  //res.redirect("/contacts/"+req.params.id);
 });
});

router.delete("/:id", function(req, res){
 Contact.remove({_id:req.params.id}, function(err, contact){
  if(err) return res.json(err);
  res.redirect("/contacts");
 });
});

router.post("new", function(req, res)
{

});

module.exports = router;
