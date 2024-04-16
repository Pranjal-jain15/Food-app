const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Food-App', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Models
require('./models/Recipe');
require('./models/Search');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/recipes', require('./routes/recipes'));
app.use('/api/searches', require('./routes/searches'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
