import express from 'express';
import mongoose from 'mongoose';
import User from '../models/User.js';

const router = express.Router();

export const addUser = async (req, res) => {

    const { name } = req.body
    const newuser = new User({ name })

    try {
        await newuser.save();
        res.status(201).json(newuser);
    } catch (error) {
        if (res.status(409)) {
            res.status(409).json({ message: 'user is aleady existed' }
            )
        } else {
            console.log(error.message)
        };
    }
}

export const getUsers = async (req, res) => {
    try {
        const usersList = await User.find();

        res.status(200).json(usersList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    await User.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
}

export const deleteAllUser = async (req, res) => {

    await User.remove({});

    res.json({ message: "All User deleted successfully." });
}

export default router;