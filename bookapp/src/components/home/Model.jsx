import React from 'react';
import './home.css';
import axios from 'axios';
import { useAuth } from '../../contexts/authContext';

const Model = ({ show, item, onClose }) => {
  const { currentUser } = useAuth();
  const email = currentUser.email;
  const username = email.substring(0, email.indexOf('@'));

  if (!show) {
    return null;
  }

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  const handleFavorite = () => {
    const favoriteData = {
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      publisher: item.volumeInfo.publisher,
      publishedDate: item.volumeInfo.publishedDate,
      description: item.volumeInfo.description,
      previewLink: item.volumeInfo.previewLink,
      user: username,
      thumbnail: thumbnail
    };

    axios.post('https://bookapp-qfuf.onrender.com/api/favorites', favoriteData)
      .then(response => {
        console.log('Favorite added:', response.data);
      })
      .catch(error => {
        console.error('Error adding favorite:', error);
      });
  };

  // const handleShare = () => {
  //   // Implement share functionality here
  //   console.log('Share button clicked');
  // };

  // const handleBuy = () => {
  //   // Implement buy functionality here
  //   console.log('Buy button clicked');
  // };

  return (
    <>
      <div className='overlay'>
        <div className='overlay-inner'>
          <div className="inner-box">
            <button className='close' onClick={onClose}>close</button>
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <br />
              <h3>{item.volumeInfo.authors}</h3><br />
              <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br />
              <button style={{marginRight:"3%"}}><a href={item.volumeInfo.previewLink}>More</a></button>
              <button style={{marginRight:"3%"}} onClick={handleFavorite}>Favorite</button>
              <button style={{marginRight:"3%"}} ><a href={item.saleInfo.buyLink}>Buy</a></button>
              <button style={{marginRight:"3%",marginTop:"3%"}}><a href={item.accessInfo.webReaderLink}>Read</a></button>
            </div>
          </div>
          <h4 className="des">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  )
}

export default Model;
