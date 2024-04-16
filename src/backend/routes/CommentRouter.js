const express = require('express');
const router = express.Router();
const CommentModel = require('../models/CommentModel');

// GET comments for a specific recipe
router.get('/recipe/:recipeId', async (req, res) => {
    try {
        const comments = await CommentModel.find({ recipeId: req.params.recipeId });
        res.send(comments);
    } catch (error) {
        res.status(500).send(error);
    }
});

// POST a new comment
router.post('/', async (req, res) => {
    const newComment = new CommentModel(req.body);
    try {
        const savedComment = await newComment.save();
        res.status(201).send(savedComment);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
