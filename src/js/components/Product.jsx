import React from 'react';
import Proptypes from 'prop-types';

function Product({ product, onAddToCart }) {
  return (
    <div className='product'>
      <div className='product-container'>
        <div className='product-image'>
          <img
            src={product.imgUrl}
            alt='View product page'
            title='View product page'
          />
        </div>
        <div className='product-name'>
          <h3>{product.name}</h3>
          <a
            href='#'
            className='image-author'
            title={`Submitted by ${product.author}`}
          >
            {product.author_handle}
          </a>
        </div>
        <button
          className='btn btn-purchase'
          onClick={() => onAddToCart(product)}
        >
          Buy
        </button>
        <span className='product-price'>{`${product.price}$`}</span>
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
