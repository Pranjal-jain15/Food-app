// /backend/models/RecipeModel.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: [String],
    instructions: String,
    preparationTime: Number,
    serves: Number,
    tags: [String]
});

const RecipeModel = mongoose.model('Recipe', recipeSchema);
module.exports = RecipeModel;
