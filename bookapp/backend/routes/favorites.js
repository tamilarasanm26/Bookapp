const express = require('express');
const router = express.Router();
const Favorite = require('../models/favorite');

// Route to add a favorite item
router.post('/favorites', async (req, res) => {
  const { title, authors, publisher, publishedDate, description, previewLink, thumbnail,user } = req.body;

  const favorite = new Favorite({
    title,
    authors,
    publisher,
    publishedDate,
    description,
    previewLink,
    thumbnail,
    user
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

// Route to delete a favorite item
router.delete('/favorites/:id', async (req, res) => {
  const { username } = req.body;  // Extract username from the request body
  try {
    const favorite = await Favorite.findById(req.params.id);
    if (!favorite) return res.status(404).json({ message: 'Favorite not found' });
    
    // Check if the user matches
    if (favorite.user !== username) {
      return res.status(403).json({ message: 'Not authorized to delete this favorite' });
    }

    await Favorite.findByIdAndDelete(req.params.id);
    res.json({ message: 'Favorite deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
