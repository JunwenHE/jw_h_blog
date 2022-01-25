import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: String,
    userId: { type: mongoose.Schema.Types.ObjectId }
})
const User = mongoose.model('User', UserSchema)

export default User;