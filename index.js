const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});