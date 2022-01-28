import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PostUser'
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

var PostArticle = mongoose.model('PostArticle', postSchema);

export default PostArticle;