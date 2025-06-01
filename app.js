const express = require('express');
const app = express();
const notesRoutes = require('./routes/noteRoutes');
require('dotenv').config();

//Middleware
app.use(express.json());

//Routes
//(all paths need a /api prefix)
app.use('/api/notes', notesRoutes);

//Root route
app.get('/', (req, res) => {
    res.send('API is running');
});

module.exports = app;