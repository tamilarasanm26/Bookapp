import React, { useState, useEffect } from 'react';
import './quoteCarousel.css';

const QuoteCarousel = () => {
  // General quotes
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The best way to predict the future is to invent it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The only way to do great work is to love what you do.",
    "You miss 100% of the shots you don't take.",
  ];

  // Famous book quotes
  const bookQuotes = [
    "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. - Pride and Prejudice",
    "All we have to decide is what to do with the time that is given to us. - The Fellowship of the Ring",
    "It was the best of times, it was the worst of times. - A Tale of Two Cities",
    "The only way out of the labyrinth of suffering is to forgive. - Looking for Alaska",
    "The moment you doubt whether you can fly, you cease forever to be able to do it. - Peter Pan",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBookQuoteIndex, setCurrentBookQuoteIndex] = useState(0);

  // Rotate general quotes every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [quotes.length]);

  // Rotate book quotes every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBookQuoteIndex((prevIndex) => (prevIndex + 1) % bookQuotes.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [bookQuotes.length]);

  return (
    <div className="quote-carousel-wrapper">
      <div className="quote-container">
        <div className="quote-carousel">
          <p>{quotes[currentIndex]}</p>
        </div>
      </div>
      <div className="book-quote-container">
        <div className="quote-carousel">
          <p>{bookQuotes[currentBookQuoteIndex]}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCarousel;
