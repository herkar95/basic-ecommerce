import React from 'react';

function Navigation() {
  return (
    <nav>
      <h1>Categories</h1>
      <ul className='categories-nav'>
        <li className='all active'>Show All</li>
        <li className='shoes'>Shoes</li>
        <li className='socks'>Socks</li>
        <li className='t-shirts'>T-shirts</li>
        <li className='hats'>Hats</li>
      </ul>
    </nav>
  );
}

export default Navigation;
