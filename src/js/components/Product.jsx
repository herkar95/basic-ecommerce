import React from 'react';
import Proptypes from 'prop-types';

function Product({ product, onAddToCart }) {
  return (
    <div className='product'>
      <div className='product-image'>
        <img src={product.imgUrl} alt={product.name} title={product.name} />
      </div>
      <div className='product-name'>
        <h3>{product.name}</h3>
      </div>
      <div className='product-info'>
        <div className='product-price' title='Product price'>
          {`${product.price}$`}
        </div>
        <div className='purhcase'>
          <button
            className='btn btn-purchase'
            onClick={() => onAddToCart(product)}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

// Proptypes
Product.propTypes = {
  product: Proptypes.object.isRequired,
  onAddToCart: Proptypes.func.isRequired,
};
