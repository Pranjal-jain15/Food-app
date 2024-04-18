import React from 'react';
import '../styles/recipeform.scss';

export default function RecipeCard({ recipe, onEdit, onDelete }) {
    return (
        <div className="recipe-card">
            {recipe.image && <img src={recipe.image} alt={recipe.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
            <div className="recipe-card-info">
                <h3 className="recipe-title">{recipe.title}</h3>
                <p className="recipe-desc">{recipe.description}</p>
                <button className="edit-btn" onClick={() => onEdit(recipe)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(recipe.id)}>Delete</button>
                {/* <a className="view-btn" href="#!">VIEW RECIPE</a> */}
            </div>
        </div>
    );
}
