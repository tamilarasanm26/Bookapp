import React from 'react'
import './home.css';
function Card({ book }) {
  console.log(book);
  return (

    <>
      {
        book.map((item) => {
          return (
            <div className='card'>
              <img src="https://imgs.search.brave.com/xHR9cpIzAhp0WMZl_r9XjfekhXFXIuFDOUR278kFtus/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWFj/dGpzZXhhbXBsZS5j/b20vY29udGVudC9p/bWFnZXMvMjAxOS8w/NC9SZWFjdC5qcGc" alt="" />
              <div>
                <h3 className='title'>React Js</h3>
                <p className='amt'>&#8377;3000</p>
              </div>
            </div>
          )
        })
      }

    </>
  )
}

export default Card