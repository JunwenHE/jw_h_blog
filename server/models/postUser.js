import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    creator: String,
})

var PostUser = mongoose.model('PostUser', userSchema);

export default PostUser;