import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Genre from './Genre';
import './home.css';

const Filter = () => {
  const [search, setSearch] = useState("");
  const [genreData, setGenre] = useState([]);


  const apiKey = import.meta.env.VITE_API_KEY;

  const searchGenre = (e) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=categories=${search}&key=${apiKey}&maxResults=40`)
      .then((res) => setGenre(res.data.items))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className='top-buttons'>
        <button className='favorite-button'><Link to="/genrefav">Favorite</Link></button>
        <button className='genre-button'><Link to="/home">Home</Link></button>
      </div>
      <div className='search'>
        <input 
          type="text" 
          onChange={e => setSearch(e.target.value)} 
          placeholder='Search Genre' 
          className='search-input'
        />
        <br />
        <button style={{ width: "30%" }} type='submit' onClick={searchGenre} className='search-button'>Search</button>
        <br />
      
      </div>
      <br />
      <div className='container'>
        <Genre genre={genreData} />
      </div>
    </div>
  );
}

export default Filter;
