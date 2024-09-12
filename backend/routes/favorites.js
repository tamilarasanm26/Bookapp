const express = require('express');
const router = express.Router();
const Favorite = require('../models/favorite');

// Route to add a favorite item
router.post('/favorites', async (req, res) => {
  const { title, authors, publisher, publishedDate, description, previewLink, thumbnail, user } = req.body;

  const favorite = new Favorite({
    title,
    authors,
    publisher,
    publishedDate,
    description,
    previewLink,
    thumbnail,
    user,
    likes: 0  // Initialize likes to 0
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
  const { username } = req.query;
  try {
    const favorites = await Favorite.find({ user: username });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to delete a favorite item
router.delete('/favorites/:id', async (req, res) => {
  const { username } = req.body;
  try {
    const favorite = await Favorite.findById(req.params.id);
    if (!favorite) return res.status(404).json({ message: 'Favorite not found' });

    if (favorite.user !== username) {
      return res.status(403).json({ message: 'Not authorized to delete this favorite' });
    }

    await Favorite.findByIdAndDelete(req.params.id);
    res.json({ message: 'Favorite deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to like a favorite book
router.post('/favorites/like', async (req, res) => {
  const { title } = req.body;

  try {
    const favorite = await Favorite.findOne({ title });

    if (!favorite) {
      return res.status(404).json({ message: 'Book not found' });
    }

    favorite.likes = (favorite.likes || 0) + 1;

    await favorite.save();

    res.json({ likes: favorite.likes });
  } catch (error) {
    console.error('Error liking the book:', error);
    res.status(500).json({ message: 'Error liking the book' });
  }
});

module.exports = router;
