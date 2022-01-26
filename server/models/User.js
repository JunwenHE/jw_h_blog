import mongoose from 'mongoose';

var UserSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

var User = mongoose.model('User', UserSchema)

var junwen = new User({
    name: "junwen"
})

//junwen.save()

export default { User, junwen };

