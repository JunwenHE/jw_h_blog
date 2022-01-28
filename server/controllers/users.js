import express from 'express';
import mongoose from 'mongoose';

import PostUser from '../models/postUser.js';

const router = express.Router();

export const addUser = async (req, res) => {
    const { creator } = req.body;

    const newPostUser = new PostUser({ creator })

    try {
        await newPostUser.save();

        res.status(201).json(newPostUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getUsers = async (req, res) => {
    try {
        const postUser = await PostUser.find();

        res.status(200).json(postUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;