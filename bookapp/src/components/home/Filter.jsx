import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Card from './Card';
function Filter() {

    
    const [filter, setFilter] = useState("");
    const [genreData, setGenre] = useState([]);
    const [genreData1, setGenre1] = useState([]);
    
    const searchGenre = (e) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBo2VdjjoSNMui0V4lDpA8PccA7ks8uf9I&maxResults=40`)
          .then((res) =>{setGenre(res.data.items)
            // setGenre1(genreData.filter(item=>item.items.categories==filter))
          } )
          .catch(err => console.log(err));
      };
      console.log(genreData)
    
  return (
    <div>
         <div className='search'>
          <input 
            type="text" 
            
            onChange={e => setSearch(e.target.value)} 
            placeholder='Search Genre' 
            className='search-input'
          />
          <br></br>
          <button style={{width:"50%"}}  type='submit' onClick={searchGenre} className='search-button'>Search</button>
        </div>
        <br />
      <div className='container'>
        <Card book={genreData}/>
      </div>
    </div>
  )
}

export default Filter