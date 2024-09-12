const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  authors: { type: [String], required: true },
  publisher: { type: String },
  publishedDate: { type: String },
  description: { type: String },
  previewLink: { type: String },
  thumbnail: { type: String },
  user: { type: String },
  likes: { type: Number, default: 0 }  // Add a default value of 0 for likes
});

module.exports = mongoose.model('Favorite', favoriteSchema);
