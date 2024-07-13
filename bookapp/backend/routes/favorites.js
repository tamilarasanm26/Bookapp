const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');

// Route to add a favorite item
router.post('/favorites', async (req, res) => {
  const { title, authors, publisher, publishedDate, description, previewLink, thumbnail } = req.body;

  const favorite = new Favorite({
    title,
    authors,
    publisher,
    publishedDate,
    description,
    previewLink,
    thumbnail
  });

  try {
    const savedFavorite = await favorite.save();
    res.status(201).json(savedFavorite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to get all favorite items
router.get('/favorites', async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
