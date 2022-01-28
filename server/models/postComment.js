import mongoose from 'mongoose';
//Database schema design
const commentSchema = mongoose.Schema({
    comment: String,
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PostArticle'
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PostUser'
    }
})

var PostComment = mongoose.model('PostComment', commentSchema);

export default PostComment;