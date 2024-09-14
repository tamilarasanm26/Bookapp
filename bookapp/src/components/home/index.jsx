import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import './button.css';
import Card from './Card';
import './home.css';
import QuoteCarousel from './QuoteCarousel'; // Import the quote carousel
import FeedbackCarousel from './FeedbackCarousel'; // Import the feedback carousel

const Home = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  // Extract username
  const email = currentUser.email;
  const username = email.substring(0, email.indexOf('@'));

  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  // Reference the API key from the .env file
  const apiKey = import.meta.env.VITE_API_KEY;

  const searchBook = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}&maxResults=40`)
      .then((res) => setData(res.data.items))
      .catch(err => console.log(err));
  };

  return (

    <div className="home-container">
      {/* Feedback Carousel in the top left corner */}
      <FeedbackCarousel />
      
     
      <div className='top-buttons'>
        <Link to="/favorite"><button className='favorite-button'>Favorite</button></Link>&nbsp;
        <Link to="/filter"><button className='genre-button'>Genre</button></Link>

      </div>
      
      <h1 className="wel">Welcome, {currentUser.displayName || username}</h1>
      <div className="row2"></div>
      <div className="search">
        <input 
          type="text" 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
          placeholder="Search for a book" 
          className="search-input"
        />
        <br />
        <button style={{ width: "30%" }} type="submit" onClick={searchBook} className="search-button">
          Search
        </button>
      </div>
      <br />
      <div className="main-content">
        <div className="container">
          <Card book={bookData} />
        </div>
       <QuoteCarousel/>
      </div>
    </div>
   
  );
};

export default Home;
