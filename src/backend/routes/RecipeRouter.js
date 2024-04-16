const express = require('express');
const router = express.Router();
const RecipeModel = require('../models/RecipeModel');

// POST a new recipe
router.post('/', async (req, res) => {
    const newRecipe = new RecipeModel(req.body);
    try {
        const savedRecipe = await newRecipe.save();
        res.status(201).send(savedRecipe);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await RecipeModel.find();
        res.status(200).send(recipes);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Add a new recipe
router.post('/', async (req, res) => {
    let recipe = new RecipeModel(req.body);
    recipe = await recipe.save();
    res.send(recipe);
});

// Update a recipe
router.put('/:id', async (req, res) => {
    const recipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(recipe);
});

// Delete a recipe
router.delete('/:id', async (req, res) => {
    await RecipeModel.findByIdAndRemove(req.params.id);
    res.send('Recipe deleted');
});

module.exports = router;
