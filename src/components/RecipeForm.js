
import React, { useState, useEffect } from 'react';
import '../styles/recipeform.scss'

const RecipeForm = ({ addRecipe, editRecipe, recipeToEdit, setRecipeToEdit }) => {
    const [recipe, setRecipe] = useState({ id: null, title: '', description: '', image: '' });

    useEffect(() => {
        if (recipeToEdit) {
            setRecipe(recipeToEdit);
        } else {
            setRecipe({ id: null, title: '', description: '', image: '' });
        }
    }, [recipeToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (recipe.id) {
            editRecipe(recipe);
        } else {
            addRecipe({ ...recipe, id: Date.now() });
        }
        setRecipe({ id: null, title: '', description: '', image: '' });
        setRecipeToEdit(null);
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                name="title"
                value={recipe.title}
                onChange={handleChange}
                placeholder="Recipe Title"
                required
            />
            <textarea
                name="description"
                value={recipe.description}
                onChange={handleChange}
                placeholder="Recipe Description"
                required
            />
            <input
                type="text"
                name="image"
                value={recipe.image}
                onChange={handleChange}
                placeholder="Image URL (optional)"
            />
            <button type="submit">Post Recipe</button>
        </form>
    );
};

export default RecipeForm;
