import mongoose from 'mongoose';
//Database schema design
const commentSchema = mongoose.Schema({
    authro: String,
    title: String,
    comment: String,
})

var PostComment = mongoose.model('PostComment', commentSchema);

export default PostComment;