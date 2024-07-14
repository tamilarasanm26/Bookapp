import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import './button.css';
import Card from './Card';
import './home.css';

const Home = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  // Extract username from email
  const email = currentUser.email;
  const username = email.substring(0, email.indexOf('@'));

  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (e) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBo2VdjjoSNMui0V4lDpA8PccA7ks8uf9I&maxResults=40`)
      .then((res) => setData(res.data.items))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className='top-buttons'>
        <button className='favorite-button'><Link to="/favorite">Favorite</Link></button>

        {/* <button className='favorite-button'><Link to="/genrefav">Genrefav</Link></button> */}
        <button className='genre-button'><Link to="/filter">Genre</Link></button>
      </div>
      <h1 style={{ display: "flex", justifyContent: "center" }} className='wel'>Welcome, {currentUser.displayName || username}</h1>
      <div className='row2'>
      </div>
      <div className='search'>
        <input 
          type="text" 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
          placeholder='Search for a book' 
          className='search-input'
        />
        <br />
        <button style={{ width: "30%" }} type='submit' onClick={searchBook} className='search-button'>Search</button>
      </div>
      <br />
      <div className='container'>
        <Card book={bookData} />
      </div>
    </div>
  );
};
export default Home;