import React, { useState } from 'react';
// import './card.css';
// import './home.css';
import { auth } from '../../firebase/firebase';
import Model from './Model';

function Card({ book }) {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  console.log(book);
  return (
    <>
      {book.map((item, index) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        let author = item.volumeInfo.authors && item.volumeInfo.authors;
        if (thumbnail !== undefined && amount !== undefined && auth !== undefined) {
          return (
            <React.Fragment key={index}>
              <div className='card' onClick={() => { setShow(true); setItem(item); }}>
                <img src={thumbnail} alt="" />
                <div>
                  <h3 className='title'>{item.volumeInfo.title}</h3>
                  <p className='amt'>{author}</p>
                  <p className='amt'>&#8377;{amount}</p>
                </div>
              </div>

              <Model show={show} item={bookItem} onClose={() => setShow(false)} />
            </React.Fragment>
          )
        }
        return null;
      })}
    </>
  );
}

export default Card;
