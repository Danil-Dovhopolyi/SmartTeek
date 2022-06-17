import Card from './components/Card/Card';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="game__title">
        <h1>Mahjong-like game</h1>
      </div>
      <div className="game__cardList">
        <Card />
      </div>
    </div>
  );
}

export default App;
