const express = require('express');
const mongoose = require('mongoose');
const recipeRouter = require('./routes/RecipeRouter');
const commentRouter = require('./routes/CommentRouter'); // Ensure this is added for comment handling
const app = express();

app.use(express.json()); // for parsing application/json

mongoose.connect('mongodb://localhost/recipeDB', {

}).then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/recipes', recipeRouter);
app.use('/api/comments', commentRouter); // Route for comments

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
