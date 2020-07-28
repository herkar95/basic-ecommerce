import React from 'react';
import Product from './Product';
import Proptypes from 'prop-types';

function Products({ products, onAddToCart }) {
  return (
    <div className='product-container'>
      {products.map((product) => (
        <Product
          key={product.name}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default Products;

// Proptypes
Products.propTypes = {
  products: Proptypes.array.isRequired,
  onAddToCart: Proptypes.func.isRequired,
};
