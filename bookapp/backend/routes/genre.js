// routes/genre.js

const express = require('express');
const router = express.Router();
const Genre = require('../models/genre');

// POST route to save a favorite book
router.post('/fav', async (req, res) => {
  const { title, author, thumbnail, description } = req.body;

  try {
    const newFavorite = new Genre({
      title,
      author,
      thumbnail,
      description,
    });

    const savedFavorite = await newFavorite.save();
    res.status(201).json(savedFavorite);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/fav', async (req, res) => {
  try {
    const favorites = await Genre.find();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
