const express = require('express');
const router = express.Router();
const Genre = require('../models/genre');


router.post('/fav', async (req, res) => {
  const { title, author, thumbnail, description, user,publishedDate } = req.body;


 const newFavorite = new Genre({
   title,
   author,
   thumbnail,
   description,
   user,
   publishedDate
 });
  try {

    const savedFavorite = await newFavorite.save();
    res.status(201).json(savedFavorite);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/fav', async (req, res) => {
  const { username } = req.query;
  try {
    const favorites = await Genre.find({ user: username });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
