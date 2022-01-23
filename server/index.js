import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import connectDB from './config/db.js'
//Bakcend server settings
dotenv.config({ path: './config/config.env' });
connectDB();

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

const posts_url = '/posts';
const PORT = process.env.PORT || 5000;

const host_url = `http://localhost:${PORT}`
app.use(posts_url, postRoutes);

app.get('/', (req, res) => {
  //res.setHeader('Content-Type', 'text/html');
  //res.write(`<h3>To review all posts, please redirect to ${host_url}${posts_url}</h3>`)
  res.status(200).json({ success: true });
});

const server = app.listen(PORT, console.log(`Server running in ${host_url}`))

// Handle promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));

})