const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {feedback} = require('../models/feedback');

router.get('/',(req,res) =>{
    feedback.find((err,docs) => {
     if(!err) {res.send(docs); }
     else { console.log('error in retriving feedback:' +JSON.stringify(err,undefined,2)) ;}
    });
});

router.get('/:id',(req,res)=> {
     if(!ObjectId.isValid(req.params.id))
      return res.status(400).send(`no records with given id : ${req.params.id}`);

      feedback.findById(req.params.id, (err,doc) =>{
          if(!err) { res.send(doc);}
          else { console.log('error in retriving feedback:'+JSON.stringify(err,undefined,2)) ;}
      });
});

router.post('/',(req,res) => {
    var Feedback = feedback ({
        Names: req.body.Names,
        email_id: req.body.email_id,
        feedback: req.body.feedback
    });
    Feedback.save((err,doc)=>{
        if(!err) {res.send(doc);}
        else { console.log(`error in feedback save:`+JSON.stringify(err,undefined,2)) ;}
    });
});
module.exports = router;