const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    user_name: String,
    title: [String],
    comments: [String]

})

var articleSchema = new mongoose.Schema({
    title: String,
    author: String,
    comments: [{ user_name: String, comment: String }],
    date: {type: Date, default: Date.now}
})

var commentSchema = new mongoose.Schema({
    creator: String,
    content: String,
    data: {type: Date, default: Date.now}
})

