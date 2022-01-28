import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import commentRoutes from './routes/comments.js';


import connectDB from './config/db.js'
//Bakcend server settings
dotenv.config({ path: './config/config.env' });
connectDB();

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

const posts_url = '/posts';
const users_url = '/users';
const comments_url = '/comments';


const PORT = process.env.PORT;
;

const host_url = `http://localhost:${PORT}`
app.use(posts_url, postRoutes);
app.use(users_url, userRoutes);
app.use(comments_url, commentRoutes);

//

app.get('/', (req, res) => {
  res.status(200).json({ success: true });
});


// Handle promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));

})

const server = app.listen(PORT, console.log(`Server running in ${host_url}`))
