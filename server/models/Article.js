import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

const Article = mongoose.model('Article', ArticleSchema);
export default Article;