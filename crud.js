import mongoose from 'mongoose';
import express from 'express';
import { userSchema, articleSchema, commentSchema } from 'dbConfig'

const main = async () => {
    await mongoose
        .connect('mongodb://localhost:27017/train')
        .then((callback) => {
            console.log('success');
        })
        .catch((e) => {
        console.log(e);
        });
    
    const User = mongoose.model('User', userSchema)
}

main();
