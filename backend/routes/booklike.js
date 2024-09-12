const express = require('express');
const router = express.Router();
const Favorite = require('../models/favorite'); // Model for favorite books
const BookLike = require('../models/booklike'); // Model for storing book likes

// Add a like to a book
router.put('/favorites/like/:id', async (req, res) => {
  try {
    const favorite = await Favorite.findById(req.params.id);
    if (!favorite) return res.status(404).json({ message: 'Favorite not found' });

    // Increment the likes count in the Favorite model
    favorite.likes += 1;
    await favorite.save();

    // Check if the book already has a like record in the BookLike collection
    let bookLike = await BookLike.findOne({ bookId: req.params.id });
    if (!bookLike) {
      // If no like record exists, create a new one
      bookLike = new BookLike({
        bookId: req.params.id,
        bookName: favorite.title,
        likeCount: 1
      });
    } else {
      // If a record exists, increment the like count
      bookLike.likeCount += 1;
    }

    await bookLike.save();

    // Return the updated like count from both the Favorite and BookLike collection
    res.json({ favoriteLikes: favorite.likes, totalLikes: bookLike.likeCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
