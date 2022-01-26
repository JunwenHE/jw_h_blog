import express from 'express';
import { createArticle, getArticle, getArticles, updateArticle, deleteArticle } from '../controllers/article.js';

const router = express.Router();

// Router for redirction 
router.get('/', getArticles);
router.post('/', createArticle);
router.get('/:id', getArticle);
router.patch('/:id', updateArticle);
router.delete('/:id', deleteArticle);
//router.get('/:id/')
export default router;