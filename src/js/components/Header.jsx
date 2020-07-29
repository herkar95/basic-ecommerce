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
          {/* Add or open class on click */}
          <div className={open ? 'cart-open open' : 'cart-open'}>
            {/* If cart is empty */}
            {cart.count === 0 ? (
              <h1>Your cart is empty</h1>
            ) : (
              // If cart contains products, loop through them
              <div className='cart-products'>
                {cart.items.map((item) => (
                  <div className='cart-product' key={item.id}>
                    <img
                      className='item-preview'
                      src={item.imgUrl}
                      alt={item.name}
                      title={item.name}
                    />
                    <span className='item-name'>{item.name}</span>
                    <span className='item-count'>{item.count}</span>
                    <strong className='item-price'>{`${
                      item.price * item.count
                    }$`}</strong>
                  </div>
                ))}
              </div>
            )}

            <h3 className='cart-total'>{`Total: ${cart.total}$`}</h3>
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
