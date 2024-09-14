import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import './home.css';

const FavoriteBooks = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const { currentUser } = useAuth();
  const email = currentUser.email;
  const username = email.substring(0, email.indexOf('@'));

  useEffect(() => {

    // Fetch the favorite books including the likes count from the backend
    axios.get(`https://bookapp-qfuf.onrender.com/api/favorites?username=${username}`)


    axios.get(`https://bookapp-qfuf.onrender.com/api/favorites?username=${username}`)

      .then(response => {
        setFavoriteBooks(response.data);  // Ensure likes is included in the response
      })
      .catch(error => {
        console.error('Error fetching favorite books:', error);
      });
  }, [username]);

  const handleLike = (title) => {
    axios.post('https://bookapp-qfuf.onrender.com/api/favorites/like', { title })
      .then(response => {
        setFavoriteBooks(favoriteBooks.map(book => 
          book.title === title ? { ...book, likes: response.data.likes } : book
        ));
      })
      .catch(error => {
        console.error('Error liking the book:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://bookapp-qfuf.onrender.com/api/favorites/${id}`, { data: { username } })
      .then(response => {
        setFavoriteBooks(favoriteBooks.filter(book => book._id !== id));
      })
      .catch(error => {
        console.error('Error deleting favorite book:', error);
      });
  };

  return (
    <div className="favorite-books">
      <h2>Favorite Books</h2>
      {favoriteBooks.length === 0 ? (
        <p>No favorite books found.</p>
      ) : (
        <div className="books-list">
          {favoriteBooks.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book.thumbnail} alt={book.title} className="book-thumbnail" />
              <div className="book-info">
                <h3>{book.title}</h3>
                <h4>{book.authors.join(', ')}</h4>
                <p>{book.description}</p>

                <a href={book.previewLink} target="_blank" rel="noopener noreferrer">More Info</a>
                
                {/* Display the current like count */}
                <p>Likes: {book.likes || 0}</p>

                {/* Button to like the book */}
                <button onClick={() => handleLike(book.title)}>Like</button>


                <a href={book.previewLink} target='_blank' rel='noopener noreferrer'>More Info</a>
               

                <button onClick={() => handleDelete(book._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteBooks;
