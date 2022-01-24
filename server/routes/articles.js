import express from 'express';
import { createArticle } from '../controllers/article.js';

const router = express.Router();

// Router for redirction 
// router.get('/', getArticle);
router.post('/', createArticle);
//router.get('/:id', getArticle);
// router.patch('/:id', updateArticle);
// router.delete('/:id', deleteArticle);

// router.use('/:articleId/comments', commentRouter);
export default router;