import React, { useEffect, useState } from 'react';
import './Card.scss';
import CardNumber from './CardNumber';

export default function Card({ props, handleChoice }) {
  const [isVisible, setVisible] = useState(true);

  const handleClick = () => {
    handleChoice(props);
  };
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 8000);
  });

  return (
    <div className="game__body" onClick={() => setVisible(true)}>
      <button className="game__card" onClick={handleClick}>
        {isVisible && <CardNumber number={props} />}
      </button>
    </div>
  );
}
