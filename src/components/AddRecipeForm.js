import React, { useState } from 'react';
import styles from '../styles/AddRecipeForm.scss';  // Update to use SCSS module

function AddRecipeForm() {
    const [recipe, setRecipe] = useState({
        title: '',
        ingredients: '',
        instructions: '',
    });

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to add recipe');
            })
            .then(data => {
                alert('Recipe added successfully');
                setRecipe({ title: '', ingredients: '', instructions: '' }); // Reset form
            })
            .catch((error) => {
                alert('Error adding recipe');
                console.error('Error:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <label>Title</label>
                <input type="text" name="title" value={recipe.title} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
                <label>Ingredients</label>
                <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
                <label>Instructions</label>
                <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required />
            </div>
            <button type="submit" className={styles.submitButton}>Add Recipe</button>
        </form>
    );
}

export default AddRecipeForm;
