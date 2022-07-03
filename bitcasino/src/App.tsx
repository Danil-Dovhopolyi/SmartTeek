import React from 'react';
import './App.scss';
import Logo from './img/logo.svg';
import CurrencyInput from './components/CurrencyInput/CurrencyInput';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <div className="casino">
        <div className="casino__title">
          <img src={Logo} alt="logo" />
        </div>
        <div className="casino__content">
          <div className="casino__descrp">
            <p>
              <strong>Now you can track all your cryptos here!</strong>
            </p>
            <span>
              Just enter the cryptocurrency code on the form to the right.
            </span>
          </div>
          <CurrencyInput />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
