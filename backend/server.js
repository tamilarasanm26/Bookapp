const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection const apiKey = import.meta.env.VITE_API_KEY;
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
const favoritesRoute = require('./routes/favorites');
const genreRoutes = require('./routes/genre');
app.use('/api', favoritesRoute);
app.use(genreRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
