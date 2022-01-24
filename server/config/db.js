import mongoose from 'mongoose';

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err) => {

        if (!err) {
            console.log(`MongoDB Connected: ${process.env.MONGODB_URL}`)

        }

        else {
            console.log('Error in MongoDB connection : ' + JSON.stringify(err))
        }
    });

}

export default connectDB;
