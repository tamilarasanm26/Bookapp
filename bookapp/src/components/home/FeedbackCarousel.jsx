import React, { useState, useEffect } from 'react';
import './feedbackCarousel.css'; // You can style the carousel separately

const FeedbackCarousel = () => {
  const feedbacks = [
    "This app is amazing! I've found all my favorite books.",
    "Great selection and user-friendly interface!",
    "The book search feature is very responsive and fast.",
    "Highly recommend this app to any book lover.",
    "Wonderful experience, can't wait to explore more genres!"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 3000); // Rotate feedback every 3 seconds

    return () => clearInterval(intervalId);
  }, [feedbacks.length]);

  return (
    <div className="feedback-carousel">
      <p>{feedbacks[currentIndex]}</p>
    </div>
  );
};

export default FeedbackCarousel;
