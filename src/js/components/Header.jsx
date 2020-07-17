import React from 'react';
import Logo from '../../images/logo.png';

function Header() {
  return (
    <header>
      <div className='header-container'>
        <div className='header-logo'>
          <img src={Logo} alt='Logo' title='Logo' />
        </div>
        <div className='header-search'>
          <input type='text' className='text' placeholder='Sök produkt...' />
          <button className='btn btn-search'>Sök</button>
        </div>
        <div className='header-cart'>
          <button className='btn btn-cart'>
            <i className='fa fa-shopping-cart'></i>
            <span className='cart-text'>Kundvagn</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
