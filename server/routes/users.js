import express from 'express';
import { addUser, getUser, getUsers, deleteUser, deleteAllUser } from '../controllers/user.js'
const router = express.Router();

router.post('/', addUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser);
router.delete('/', deleteAllUser)
router.get('/:id', getUser);
export default router;