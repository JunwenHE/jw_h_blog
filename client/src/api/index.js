import axios from 'axios';

const article_url = 'http://localhost:5000/articles';
const user_url = 'http://localhost:5000/users';

export const fetchArticle = () => axios.get(article_url);
export const createArticle = (newArticle) => axios.post(article_url, newArticle);

export const addUser = (newUser) => axios.post(user_url, newUser);

export const updatePost = (id, updatedArticle) => axios.patch(`${article_url}/${id}`, updatedArticle);
export const deletePost = (id) => axios.delete(`${article_url}/${id}`);
