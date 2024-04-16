// /src/components/RecipeComponent.js
import React, { useEffect, useState } from 'react';

function RecipeComponent() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/recipes')
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            {recipes.map(recipe => (
                <div key={recipe._id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.instructions}</p>
                    {/* More recipe details */}
                </div>
            ))}
        </div>
    );
}

export default RecipeComponent;
