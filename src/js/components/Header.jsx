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
          <input type='text' className='text' placeholder='Search product...' />
          <button className='btn btn-search'>Search</button>
        </div>
        <div className='header-cart'>
          <i className='fa fa-shopping-cart' title='Checkout'></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
