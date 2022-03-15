import './App.css';
import './components/Result';
import Result from './components/Result.js';
import Simplecalc from './components/Simplecalc';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Result />
        <button className="scientific">Scientific</button>
        <button className="scientific">Normal</button>
        <Simplecalc />
      </div>
    </div>
  );
}

export default App;
