import React, { useState } from 'react';
import './home.css';
import Model from './Model';
import { auth } from '../../firebase/firebase';

function Card({ book }) {
  const [show,setShow] = useState(false);
  const [bookItem,setItem] = useState();

 
  return (
    <>
      {book.map((item, index) => {
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
            
            <Model show={show} item={bookItem} onClose={()=>setShow(false)}/>
           </>
          )
        }
       
      })}
    </>
  );
}

export default Card;
