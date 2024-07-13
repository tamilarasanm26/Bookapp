import React from 'react';
import './home.css';
import axios from 'axios';

const Model = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  const handleFavorite = () => {
    // Prepare data to send to the server
    const favoriteData = {
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      publisher: item.volumeInfo.publisher,
      publishedDate: item.volumeInfo.publishedDate,
      description: item.volumeInfo.description,
      previewLink: item.volumeInfo.previewLink,
      thumbnail: thumbnail
    };

    // POST request to send favorite data to server
    axios.post('http://localhost:5000/api/favorites', favoriteData)
      .then(response => {
        console.log('Favorite added:', response.data);
        // Optionally, you can add further UI feedback or state update here
      })
      .catch(error => {
        console.error('Error adding favorite:', error);
        // Handle error states or UI feedback for failed operation
      });
  };

  return (
    <>
      <div className='overlay'>
        <div className='overlay-inner'>
          <div className="inner-box">
            <button className='close' onClick={onClose}>close</button>
            <img
              src={thumbnail}
              alt=""
            />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <br />
              <h3>{item.volumeInfo.authors}</h3><br />
              <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br />
              <button><a href={item.volumeInfo.previewLink}>More</a></button>
              <button onClick={handleFavorite}>Favorite</button>
            </div>
          </div>
          <h4 className="des">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  )
}

export default Model;