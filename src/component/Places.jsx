import React, { useState } from 'react';
import './Places.css'
const Places = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cardsData = [
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIa6yxFcZZAqfoZPRyzKUyKGodl2ppmUI37SBd76wS6Q&s',
      message: 'Message 1',
    },
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjnEDzYHbJjDfOb3jdJAgE-NpEXe_E56qHrr34aP0rA&s',
      message: 'Message 2',
    },
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjnEDzYHbJjDfOb3jdJAgE-NpEXe_E56qHrr34aP0rA&s',
      message: 'Message 3',
    },
    // Add more card objects as needed
  ];

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  const currentCard = cardsData[currentCardIndex];

  return (
    <div className="split-screen">
      <div className="left-half">
        <img src={currentCard.imageSrc} alt="Card" className="card-image" />
      </div>
      <div className="right-half">
        <form className="card-login">
          <h1>User Details</h1>
          <p>{currentCard.message}</p>
        </form>
        <div className="button-container">
          <button onClick={handlePrevCard}>Previous</button>
          <button onClick={handleNextCard}>Next</button>
        </div>
      </div>
    </div>
);
};

export default Places;