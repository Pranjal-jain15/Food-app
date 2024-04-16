const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

const recipeComments = {};

app.get('/recipes/:id/comments', (req, res) => {
    const { id } = req.params;
    res.json(recipeComments[id] || []);
});

app.post('/recipes/:id/comments', (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    if (!recipeComments[id]) {
        recipeComments[id] = [];
    }
    recipeComments[id].push(content);

    res.status(201).send({ message: "Comment added", comment: content });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
