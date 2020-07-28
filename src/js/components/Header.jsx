import React from 'react';
import Logo from '../../images/logo.png';
import Proptypes from 'prop-types';

function Header({ open, onOpenCart, cart }) {
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
          <i
            className='fa fa-shopping-cart'
            title='Checkout'
            onClick={onOpenCart}
          ></i>
          <div className={open ? 'cart-open open' : 'cart-open'}>
            <h1>Your cart is empty</h1>
            <div className='cart-products'></div>
            <h3 className='cart-total'>0$</h3>
            <button className='btn'>To checkout</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

// Proptypes
Header.propTypes = {
  open: Proptypes.bool.isRequired,
  onOpenCart: Proptypes.func.isRequired,
  cart: Proptypes.object.isRequired,
};
