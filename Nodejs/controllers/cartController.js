const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {Register} = require('../models/cart');

router.get('/',(req,res) => {
  Register.find((err,docs) => {
    if(!err) {res.send(docs);}
    else { console.log('error in retriving cart:' + JSON.stringify(err,undefined,2));}
  });
 
});

router.get('/:id',(req,res) => {
   if(!ObjectId.isValid(req.params.id))
      return res.status(400).send(`no records with given id : ${req.params.id}`);

    Register.findById(req.params.id, (err,doc) => {
      if (!err) { res.send(doc);}
      else { console.log('error in retriving cart:' + JSON.stringify(err,undefined,2));}
    });  
});


router.post('/',(req,res) => {
  var register = new Register ({
   first_name : req.body.first_name,
   last_name : req.body.last_name,
   email_id : req.body.email_id,
   contact : req.body.contact,
   password : req.body.password,
  });
   register.save((err,doc)=> {
     if(!err) {res.send(doc);}
     else {console.log('Error in cart save:'+JSON.stringify(err,undefined,2));}
   });
});

router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  var register = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email_id: req.body.email_id,
      contact: req.body.contact,
      password: req.body.password,
  };
  Register.findByIdAndUpdate(req.params.id, { $set: register }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in register Update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  Register.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Register Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});
module.exports = router;