import express from 'express';
import mongoose from 'mongoose';

import PostArticle from '../models/postMessage.js';
import PostUser from '../models/postUser.js';
import PostComment from '../models/postComment.js';

const router = express.Router();

// Actions for MongoDB
export const getPosts = async (req, res) => { 
  try {
        const postMessages = await PostArticle.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostArticle.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, message, creator, tags } = req.body;

    const newPostArticle = new PostArticle({ title, message, creator, tags })

    try {
        await newPostArticle.save();

        res.status(201).json(newPostArticle );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
  const { title, message, creator, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, _id: id };

    await PostArticle.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostArticle.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const commentPost = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const post = await PostArticle.findById(id);
    post.comments.push(value)

    const updatePost = await postMessage.findByIdAndUpdate(id, post, {new:true})

}

export default router;