const mongoose = require('mongoose');

const BookLikeSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Favorite', required: true },
  bookName: { type: String, required: true },
  likeCount: { type: Number, default: 0 },
});

module.exports = mongoose.model('BookLike', BookLikeSchema);
