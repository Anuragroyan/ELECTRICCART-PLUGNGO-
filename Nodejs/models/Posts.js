const mongoose = require('mongoose');

var Posts = mongoose.model('Posts', {
    topic: { type: String},
    date : { type: String},
    By : { type: String},
    place : { type: String},
    comment: { type : String},
    content: { type: String},
    like : { type: Number},
    dislike : { type: Number},
});

module.exports = { Posts};