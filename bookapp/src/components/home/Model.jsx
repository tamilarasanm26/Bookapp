import React from 'react';
import './home.css';
const Model=({show,item,onClose})=>{
  if(!show)
  {
    return null;
  }
  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className='overlay'>
        <div className='overlay-inner'>
          <button className='close' onClick={onClose}>close</button>
          <div className="inner-box">
            <img
              src={thumbnail}
              alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <br />
              <h3>{item.volumeInfo.authors}</h3><br />
              <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publisheedDate}</span></h4><br />
              <button><a   href={item.volumeInfo.previewLink}>More</a></button>
            </div>
          </div>
          <h4 className="des">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  )
}

export default Model