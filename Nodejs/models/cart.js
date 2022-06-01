const mongoose =  require('mongoose');

var Register = mongoose.model('Register', {
    first_name : { type: String},
    last_name : {type : String},
    email_id: { type: String},
    contact : {type : Number},
    password: { type : String}
});

module.exports = {Register};