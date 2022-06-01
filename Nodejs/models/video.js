const mongoose = require('mongoose');

var video = mongoose.model('Video', {
    names : { type : String},
    video: { type : String},
    views: { type: Number},
});

module.exports = {video};