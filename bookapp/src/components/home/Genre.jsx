import React, { useState } from 'react';
import './card.css';
import Model from './Model';
import { auth } from '../../firebase/firebase';

function Card({ genre }) {

  const [show,setShow] = useState(false);
  const [bookItem,setItem] = useState();

  return (
    <>
      {genre.map((item, index) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        let author = item.volumeInfo.authors && item.volumeInfo.authors;
        if(thumbnail!=undefined && amount!=undefined && auth !=undefined)
        {
          return (
           <>
            <div className='card' onClick={()=>{setShow(true),setItem(item)}}>
              <img src={thumbnail}alt=""/>
              <div>
                <h3 className='title'>{item.volumeInfo.title}</h3>
                <p className='amt' >{author}</p>
                <p className='amt'>&#8377;{amount}</p>
              </div>
            </div>
              
           </>
          )
        }
       
      })}
    </>
  );
}

export default Card;
