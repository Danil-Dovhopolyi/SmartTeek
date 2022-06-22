import React from 'react';
import './Card.scss';

export default function Card(props) {
  console.log(Object.values(props));
  return (
    <button className="game__card">
      <div className="game__cardText">
        <p>{Object.values(props)}</p>
      </div>
    </button>
  );
}
