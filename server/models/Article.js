import mongoose from 'mongoose';

var ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Comments'
    }
})

const Article = mongoose.model('Article', ArticleSchema);
export default Article;