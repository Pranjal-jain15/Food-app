const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    recipeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' },
    text: String,
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assuming User model exists
    postedAt: { type: Date, default: Date.now }
});

const CommentModel = mongoose.model('Comment', commentSchema);
module.exports = CommentModel;
