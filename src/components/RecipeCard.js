import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomImage from "./CustomImage";

function Comment({ content }) {
    return <div className="comment">{content}</div>;
}

export default function RecipeCard({ recipe }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        // Fetch comments when the component mounts
        axios.get(`/recipes/${recipe.id}/comments`)
            .then(response => setComments(response.data))
            .catch(error => console.error('Error fetching comments:', error));
    }, [recipe.id]);

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const submitComment = (event) => {
        event.preventDefault();  // Prevent the default form submission behavior
        if (!newComment.trim()) return; // Avoid submitting empty comments
        axios.post(`/recipes/${recipe.id}/comments`, { content: newComment })
            .then(() => {
                setComments(prevComments => [...prevComments, newComment]);
                setNewComment(''); // Clear the textarea after submission
            })
            .catch(error => console.error('Error posting comment:', error));
    };

    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
                <img className="author-img" src={recipe.authorImg} alt="" />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.description}</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
            <div className="comments-section">
                {comments.map((comment, index) => (
                    <Comment key={index} content={comment} />
                ))}
                <form onSubmit={submitComment}>
                    <textarea
                        value={newComment}
                        onChange={handleCommentChange}
                        required
                        placeholder="Write your comment here..."
                    ></textarea>
                    <button type="submit">Post Comment</button>
                </form>
            </div>
        </div>
    );
}
