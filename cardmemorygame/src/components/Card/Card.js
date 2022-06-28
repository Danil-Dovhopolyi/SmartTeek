import React, { useEffect, useState } from 'react';
import './Card.scss';
import CardNumber from './CardNumber';

export default function Card({ props }) {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 8000);
  });

  return (
    <button className="game__card" onClick={() => setVisible(!isVisible)}>
      {isVisible && <CardNumber number={props} />}
    </button>
  );
}
