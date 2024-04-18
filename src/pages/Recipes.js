import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import RecipeForm from '../components/RecipeForm';

const Recipes = () => {
    const [recipes, setRecipes] = useState(() => {
        // Get the recipes from local storage on initial load
        const savedRecipes = localStorage.getItem('recipes');
        return savedRecipes ? JSON.parse(savedRecipes) : [];
    });
    const [recipeToEdit, setRecipeToEdit] = useState(null);

    // Use useEffect to update local storage when recipes change
    useEffect(() => {
        // Save the recipes to local storage
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);

    const addRecipe = newRecipe => {
        const updatedRecipes = [...recipes, { ...newRecipe, id: Date.now() }];
        setRecipes(updatedRecipes);
    };

    const editRecipe = updatedRecipe => {
        const updatedRecipes = recipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        );
        setRecipes(updatedRecipes);
        setRecipeToEdit(null);
    };

    const deleteRecipe = id => {
        const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
        setRecipes(updatedRecipes);
    };

    return (
        <div className="container">
            <RecipeForm
                addRecipe={addRecipe}
                editRecipe={editRecipe}
                recipeToEdit={recipeToEdit}
                setRecipeToEdit={setRecipeToEdit}
            />
            <div className="recipes-container">
                {recipes.map(recipe => (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        onEdit={() => setRecipeToEdit(recipe)}
                        onDelete={() => deleteRecipe(recipe.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Recipes;
