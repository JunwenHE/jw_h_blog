import Article from '../models/Article.js';
import express from 'express';
//import mongoose from 'mongoose';

const router = express.Router();

export const createArticle = async (req, res) => {
    const { title, message, creator, tags } = req.body;

    const postArticle = new Article({ title, message, creator, tags })

    try {
        await postArticle.save();
        res.status(201).json(postArticle);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;