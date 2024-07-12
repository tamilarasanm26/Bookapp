import axios from 'axios'
import React, {useState} from 'react'
import Genre from './Genre';
import { Link } from 'react-router-dom';
function Filter() {

    
  const [search, setSearch] = useState("");
  const [genreData, setGenre] = useState([]);


    const searchGenre = (e) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=categories=${search}=&key=AIzaSyBo2VdjjoSNMui0V4lDpA8PccA7ks8uf9I&maxResults=40`)
        .then((res) => setGenre(res.data.items))
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
          <button style={{width:"30%"}}  type='submit' onClick={searchGenre} className='search-button'>Search</button>
          <br></br>
          <button style={{width:"30%"}}  type='submit'  className='search-button'><Link to={"/home"}>Searchbook</Link></button>
        </div>
        <br />
      <div className='container'>
        {/* <Card genre={genreData}/> */}
        <Genre genre={genreData}/>
      </div>
    </div>
  )
}

export default Filter