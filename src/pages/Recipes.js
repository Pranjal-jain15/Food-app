import React, { useState } from 'react';
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";
import AddRecipeForm from '../components/AddRecipeForm';
import CommentsSection from '../components/CommentsSection';

export default function Recipes() {
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);

    const recipes = [
        { id: "1", title: "Chicken Pan Pizza", image: "/img/gallery/img_1.jpg", authorImg: "/img/top-chefs/img_1.jpg" },
        { id: "2", title: "Spaghetti and Meatballs", image: "/img/gallery/img_4.jpg", authorImg: "/img/top-chefs/img_2.jpg" },
        { id: "3", title: "American Cheese Burger", image: "/img/gallery/img_5.jpg", authorImg: "/img/top-chefs/img_3.jpg" },
        { id: "4", title: "Mutton Biriyani", image: "/img/gallery/img_6.jpg", authorImg: "/img/top-chefs/img_5.jpg" },
        { id: "5", title: "Japanese Sushi", image: "/img/gallery/img_10.jpg", authorImg: "/img/top-chefs/img_6.jpg" }
    ].sort(() => Math.random() - 0.5);

    const handleRecipeClick = (id) => {
        console.log("Recipe selected with ID:", id); // Debugging log
        setSelectedRecipeId(id);
    };

    return (
        <div>
            <PreviousSearches />
            <AddRecipeForm />
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <div key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
                        <RecipeCard recipe={recipe} />
                        {selectedRecipeId === recipe.id && (
                            <CommentsSection recipeId={recipe.id} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
