import React from 'react';
import './Header.css';
import Wallet from './img/Wallet.png';

function Header() {
  return (
    <>
      <div id="header-text">
        <img
          src={Wallet}
          style={{ width: '30px', height: '30px', marginLeft: '20px' }}
          alt="wallet"
        ></img>
        <div style={{ marginLeft: '10px' }}>Currency converter</div>
      </div>
      <hr />
    </>
  );
}

export default Header;
