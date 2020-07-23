import React, { useState, useEffect } from 'react';
import Product from './Product';
import prod from '../../resources/products.json';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(prod);
  }, []);

  return (
    <div className='product-container'>
      {products.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </div>
  );
}

export default Products;
