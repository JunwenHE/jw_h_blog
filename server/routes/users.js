import express from 'express';
import { addUser, getUsers, deleteUser } from '../controllers/user.js'
const router = express.Router();

router.post('/', addUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser);
export default router;