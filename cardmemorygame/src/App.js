import Card from './components/Card/Card';
import './App.scss';
import { getRandomValue } from './Helper/GenerateCardsAndValues';

const createNumber = getRandomValue();
const getShuffledArray = createNumber.sort(() => Math.random() - 0.5);

function App() {
  return (
    <div className="wrapper">
      <div className="game__title">
        <h1>Mahjong-like game</h1>
      </div>
      <div className="game__cardList">
        {getShuffledArray.map((value) => (
          <Card props={value} />
        ))}
      </div>
    </div>
  );
}

export default App;
