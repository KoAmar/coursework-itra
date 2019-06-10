const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const postSchema = new Schema({
    title: {type: String},
    description: {type: String}
}, {collection: 'posts'});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;