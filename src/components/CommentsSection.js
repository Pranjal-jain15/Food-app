// src/components/CommentsSection.js
import React, { useEffect, useState } from 'react';

function CommentsSection({ recipeId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        fetch(`/api/comments/recipe/${recipeId}`)
            .then(response => response.json())
            .then(setComments)
            .catch(console.error);
    }, [recipeId]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const commentData = { recipeId, text: newComment };
        fetch('/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(commentData),
        })
            .then(response => response.json())
            .then(comment => {
                setComments(comments.concat(comment));
                setNewComment(''); // Reset comment input after submission
            })
            .catch(console.error);
    };

    return (
        <div>
            <h3>Comments</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment._id}>{comment.text}</li>
                ))}
            </ul>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                />
                <button type="submit">Post Comment</button>
            </form>
        </div>
    );
}

export default CommentsSection;
