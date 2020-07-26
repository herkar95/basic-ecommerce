import React from 'react';
import Product from './Product';

function Products({ products }) {
  return (
    <div className='product-container'>
      {products.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </div>
  );
}

export default Products;
