import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
    comments: [String],
})

var PostArticle = mongoose.model('PostArticle', postSchema);

export default PostArticle;