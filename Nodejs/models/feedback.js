const mongoose = require('mongoose');

var feedback = mongoose.model('feedback', {
    Names: {type : String},
    email_id: {type : String},
    feedback: { type : String},
});

module.exports = {feedback};