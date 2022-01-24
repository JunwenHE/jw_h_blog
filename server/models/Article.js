import mongoose from 'mongoose';
const ObjectId = Schema.Types.ObjectId

const UserSchema = mongoose.Schema({
    name: String,
    userId: { type: ObjectId }
})

const ArticleSchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User, require: true
    },
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

const Article = mongoose.model('Article', ArticleSchema);
export default Article;