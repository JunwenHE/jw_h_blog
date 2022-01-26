import mongoose from 'mongoose';
import junwen from './User.js';
var ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }]
})

var Article = mongoose.model('Article', ArticleSchema);

var article = new Article({
    title: "Hello world",
    content: "There are nothing in here",
    author: junwen._id
})

article.save(function (error) {
    if (!error) {
        Article.find({})
            .populate('author')
            .exec(function (error, articles) {
                console.log(JSON.stringify(articles, null, "\t"))
            })
    }
});
export default Article;

