import mongoose from 'mongoose';
//Database schema design
var CommentSchema = mongoose.Schema({
    comment: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    },

})

const Comment = mongoose.model('Comment', CommentSchema);
export default Comment;