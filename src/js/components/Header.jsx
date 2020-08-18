import React from 'react';
import Logo from '../../images/logo.png';
import Proptypes from 'prop-types';

function Header({
  open,
  onOpenCart,
  cart,
  showMenu,
  onShowMenu,
  onRemoveFromCart,
}) {
  return (
    <header>
      {open && <div className='modal'></div>}
      <div className='mobile-icon' onClick={onShowMenu}>
        <i className='fa fa-bars fa-2x'></i>
      </div>
      <div className={`header-container ${showMenu ? 'show' : ''}`}>
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
            title={open ? 'Close cart' : 'Open cart'}
            onClick={onOpenCart}
          ></i>
          {open && (
            /* Add or open class on click */
            <div className={`cart-open ${open ? 'open' : ''}`}>
              {/* If cart is empty */}
              <div className='cart-header'>
                <h1>
                  {cart.count === 0 ? 'Cart is empty' : 'Products in cart'}
                </h1>
                <i
                  className='fas fa-times-circle'
                  title='Close cart'
                  onClick={onOpenCart}
                ></i>
              </div>
              {/* // If cart contains products, loop through them */}
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
                    <i
                      className='far fa-trash-alt'
                      onClick={() => onRemoveFromCart(item.id)}
                      title='Remove from cart'
                    ></i>
                  </div>
                ))}
              </div>
              {cart.items.length > 0 && (
                <h3 className='cart-total'>{`Total: ${cart.total}$`}</h3>
              )}
              <button className='btn'>To checkout</button>
            </div>
          )}
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
  showMenu: Proptypes.bool.isRequired,
  onShowMenu: Proptypes.func.isRequired,
  onRemoveFromCart: Proptypes.func.isRequired,
};
