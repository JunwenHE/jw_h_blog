const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User.js');

const router = express.Router();

export const addUser = async (req, res) => {
    const name = req.body;

    const newUser = new User({ name })

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
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

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    await User.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
}

export default router;