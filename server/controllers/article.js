import express from 'express';
import mongoose from 'mongoose';
import Article from '../models/Article.js';

const router = express.Router();

// Actions for MongoDB
export const getArticles = async (req, res) => {
    try {
        const articles = await Article.find();

        res.status(200).json(articles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getArticle = async (req, res) => {
    const { id } = req.params;

    try {
        const article = await Article.findById(id);

        res.status(200).json(article);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createArticle = async (req, res) => {
    const { title, message, tags } = req.body;

    const newArticle = new Article({ title, message, tags })

    try {
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateArticle = async (req, res) => {
    const { id } = req.params;
    const { title, message, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No article with id: ${id}`);

    const updatedArticle = { title, message, tags, _id: id };

    await Article.findByIdAndUpdate(id, updatedArticle, { new: true });

    res.json(updatedArticle);
}

export const deleteArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Article.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;