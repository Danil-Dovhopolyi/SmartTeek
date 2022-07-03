import Card from './components/Card/Card';
import './App.scss';
import { getRandomValue } from './Helper/GenerateCardsAndValues';
import { useState, useEffect } from 'react';

const createNumber = getRandomValue();
const getShuffledArray = createNumber.sort(() => Math.random() - 0.5);

function App() {
  const [counter, setCounter] = useState(8);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const handleChoice = (value) => {
    choiceOne ? setChoiceTwo(value) : setChoiceOne(value);
  };
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne === choiceTwo) {
        console.log('those cards match');
      } else {
        console.log('those cards do not match');
      }
      resetTurn();
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="wrapper">
      <div className="game__title">
        <h1>Mahjong-like game</h1>
        <p
          className="counter"
          style={counter === 0 ? { display: 'none' } : { display: 'block' }}
        >
          {counter}
        </p>
      </div>
      <div className="game__cardList">
        {getShuffledArray.map((value) => (
          <Card props={value} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
