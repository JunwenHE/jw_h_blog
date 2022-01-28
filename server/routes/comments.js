import express from 'express';
import { commentPost, getComments, getComment } from '../controllers/comments.js'
const router = express.Router();
// Router for redirection 
router.post('/', commentPost);
router.get('/', getComments);
router.get('/:id', getComment);
export default router;