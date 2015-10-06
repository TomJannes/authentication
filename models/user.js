var mongoose = require('mongoose');
var BaseSchema = require('./baseSchema');

var userSchema = new BaseSchema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

var User = mongoose.model('User', userSchema);
module.exports = User;