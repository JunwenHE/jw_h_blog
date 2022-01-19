import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    creator: String,
    tatitle: [String],
    comments: [String],
})

var PostUser = mongoose.model('PostUser', userSchema);

export default PostUser;