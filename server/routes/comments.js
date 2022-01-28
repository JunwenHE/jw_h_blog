import express from 'express';
import { commentPost, getComments, getComment } from '../controllers/comments.js'
const router = express.Router();
// Router for redirction 
router.post('/', commentPost);
router.get('/', getComments);
router.get('/:id', getComment);
export default router;