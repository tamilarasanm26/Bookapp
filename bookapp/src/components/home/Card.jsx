import React from 'react';
import './home.css';
import Model from './Model';

function Card({ book }) {
  console.log(book)
  return (
    <>
      {book.map((item, index) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount
        if(thumbnail!=undefined && amount!=undefined )
        {
          return (
           <>
            <div className='card' key={index}>
              <img src={thumbnail}alt=""/>
              <div>
                <h3 className='title'>{item.volumeInfo.title}</h3>
                <p className='amt'>&#8377;{amount}</p>
              </div>
            </div>
            
            {/* <Model/> */}
           </>
          )
        }
       
      })}
    </>
  );
}

export default Card;
