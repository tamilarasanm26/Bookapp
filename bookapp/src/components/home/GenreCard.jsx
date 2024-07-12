import React from 'react';


const GenreCard = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  const truncate = (str, num) => {
    return str.split(' ').slice(0, num).join(' ') + (str.split(' ').length > num ? '......' : '');
  }
   
  
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
             
            </div>
          </div>
          <p className="des">{truncate(item.volumeInfo.description, 100)} <button style={{width:"30%"}}><a href={item.volumeInfo.previewLink}>More</a></button></p>
        </div>
      </div>
    </>
  )
}

export default GenreCard;
