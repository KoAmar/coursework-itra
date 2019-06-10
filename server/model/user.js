const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
    username: {type: String},
    password: {type: String},
    name: {type: String}
}, {collection: 'users'});

const User = mongoose.model('User', userSchema);

module.exports = User;