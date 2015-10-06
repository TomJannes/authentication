var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BaseSchema = require('./baseSchema');

var accessTokenSchema = new BaseSchema({
   token: { type: String, required: true },
   userId: { type: Schema.Types.ObjectId, ref: 'User' },
   clientId: { type: Schema.Types.ObjectId, ref: 'Client' }
});

var AccessToken = mongoose.model('AccessToken', accessTokenSchema);
module.exports = AccessToken;