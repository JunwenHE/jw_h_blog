import express from 'express';
import mongoose from 'mongoose';
import PostComment from '../models/postComment.js';

const router = express.Router();

export const commentPost = async (req, res) => {
    const { comment, article, author } = req.body;

    const newPostComment = new PostComment({ comment, article, author })

    try {
        await newPostComment.save();

        res.status(201).json(newPostComment);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const getComments = async (req, res) => {
    try {
        const postComment = await PostComment.find();

        res.status(200).json(postComment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// get the detail comment with related article and author
export const getComment = async (req, res) => {
    const { id } = req.params;

    try {
        const comment = await PostComment.findById(id).populate([{
            path: 'article',
            model: 'PostArticle',
            populate: {
                path: 'creator',
                model: 'PostUser'
            }
        }, {
            path: 'author',
            model: 'PostUser'
        }]).exec();
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router; 