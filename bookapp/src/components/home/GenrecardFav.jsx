import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './card.css';

const GenrecardFav = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    
    axios.get('https://bookapp-qfuf.onrender.com/fav')
      .then(response => {
        setFavoriteBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching favorite books:', error);
      });
  }, []);

  return (
    <div className='favorite-books'>
      <h2>Favorite Books</h2>
      {favoriteBooks.length === 0 ? (
        <p>No favorite books found.</p>
      ) : (
        <div className='books-list'>
          {favoriteBooks.map((book, index) => (
            <div key={index} className='book-card'>
              <img src={book.thumbnail} alt={book.title} className='book-thumbnail' />
              <div className='book-info'>
                <h3>{book.title}</h3>
                <h4>{book.authors.join(', ')}</h4>
             
                <a href={book.previewLink} target='_blank' rel='noopener noreferrer'>More Info</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenrecardFav;
