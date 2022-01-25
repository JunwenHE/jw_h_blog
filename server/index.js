import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
//import postRoutes from './routes/posts.js';
import connectDB from './config/db.js'
import articleRoutes from './routes/articles.js';
import usersRoute from './routes/users.js'

//Bakcend server settings
dotenv.config({ path: './config/config.env' });
connectDB();

const app = express();

app.use(cors());

//const posts_url = '/posts';
const PORT = process.env.PORT || 5000;
const host_url = `http://localhost:${PORT}`
const server = app.listen(PORT, console.log(`Server running in ${host_url}`))

app.use('/users', usersRoute);

app.get('/', (req, res) => {
  //res.setHeader('Content-Type', 'text/html');
  //res.write(`<h3>To review all posts, please redirect to ${host_url}${posts_url}</h3>`)
  res.status(200).json({ success: true });
});

// Body parser
app.use(express.json());

// Handle unhandle promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
})