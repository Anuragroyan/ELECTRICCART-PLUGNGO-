const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {Posts} = require('../models/Posts');

router.get('/',(req,res) => {
    Posts.find((err,docs) => {
        if(!err) {res.send(docs);}
        else { console.log('error in retriving post:'+JSON.stringify(err,undefined,2));}
    }); 
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send(`no records with given id : ${req.params.id}`);

      Posts.findById(req.params.id, (err,docs) =>{
          if(!err) { res.send(doc);}
          else { console.log('error in retriving: '+JSON.stringify(err,undefined,2));}
      });
});

router.post('/',(req,res) => {
    var pos = Posts({
        topic : req.body.topic,
        date : req.body.date,
        By : req.body.By,
        place : req.body.place,
        comment : req.body.comment,
        content : req.body.content,
        like : req.body.like,
        dislike : req.body.dislike,
    });
    pos.save((err,doc)=> {
        if(!err) { res.send(doc);}
        else { console.log('error in posts save:' + JSON.stringify(err,undefined,2));}
    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
  
        var pos = {
            topic : req.body.topic,
            date : req.body.date,
            By : req.body.By,
            place : req.body.place,
            comment : req.body.comment,
            content : req.body.content,
            like : req.body.like,
            dislike : req.body.dislike,
        };
    
    Posts.findByIdAndUpdate(req.params.id, { $set: pos }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc) ; }
        else { console.log('Error in posts Update :' + JSON.stringify(err, undefined, 2)); }
    });
  });
  
  router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
  
    Posts.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc) ; }
        else { console.log('Error in posts Delete :' + JSON.stringify(err, undefined, 2)); }
    });
  });
  
module.exports = router;

