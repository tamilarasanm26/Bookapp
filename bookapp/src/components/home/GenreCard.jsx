import React from 'react';
import './home.css';
import axios from 'axios';
import { useAuth } from '../../contexts/authContext';
const GenreCard = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  const { currentUser } = useAuth();
  const email = currentUser.email;
  const username = email.substring(0, email.indexOf('@'));


  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  const truncate = (str, num) => {
    return str.split(' ').slice(0, num).join(' ') + (str.split(' ').length > num ? '...' : '');
  };

  const handleFavoriteClick = async () => {
    try {
      const response = await axios.post('https://bookapp-qfuf.onrender.com/fav', {
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors,
        thumbnail: thumbnail,
        publishedDate: item.volumeInfo.publishedDate,
        description: item.volumeInfo.description,
        user: currentUser.displayName || username,
      });
      console.log(response.data);
      console.log('Favorite saved:', response.data);
    
    } catch (error) {
      console.error('Error saving favorite:', error);
      
    }
  };

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
              <button><a href={item.volumeInfo.previewLink}>More</a></button>
              <button onClick={handleFavoriteClick}>Favorite</button>
            </div>
          </div>
          <p className="des">{truncate(item.volumeInfo.description, 100)}</p>
        </div>
      </div>
    </>
  );
};

export default GenreCard;
