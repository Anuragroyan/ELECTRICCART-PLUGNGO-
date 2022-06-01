const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { video } = require('../models/video');

router.get('/',(req,res) => {
    video.find((err,docs) => {
        if(!err) { res.send(docs);}
        else { 
            console.log('error in retriving videos:' + JSON.stringify(err,undefined,2));
        }
    });
});

router.get('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
     return res.status(400).send(` no records with given id : ${req.params.id}`);

     video.findById(req.params.id, (err,doc) => {
         if(!err) { res.send(doc);}
         else { console.log('error in retriving videos:'+JSON.stringify(err,undefined,2)) ;}
     });
});


router.post('/',(req,res) => {
    var Videos = video ({
        names : req.body.names,
        video: req.body.video,
        views: req.body.views,
    });

    Videos.save((err,doc)=> {
        if(!err) { res.send(doc);}
        else { console.log('error in video save:' +JSON.stringify(err,undefined,2));}
    });
});  
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var Videos = {
            names : req.body.names,
            video: req.body.video,
            views:req.body.views,
        };

        video.findByIdAndUpdate(req.params.id,{ $set: Videos}, { new: true}, (err,doc) => {
          if(!err) { res.send(doc); }
          else { console.log('Error in videos Update :' + JSON.stringify(err, undefined, 2));}
        });
    });


router.delete('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
     return res.status(400).send(`no record with given id: ${req.params.id}`);

      video.findByIdAndRemove(req.params.id, (err,doc) => {
       if (!err) { res.send(doc);}
       else { console.log('error in videos delete:' + JSON.stringify(err,undefined,2));}
      });
});
module.exports = router;