import React from 'react';
import Proptypes from 'prop-types';

function Navigation({ navLinks, onFilterProducts }) {
  return (
    <nav>
      <h1>Categories</h1>
      <ul className='categories-nav'>
        {navLinks.map((navLink) => (
          <li
            key={navLink.text}
            className={
              navLink.active ? `${navLink.class} active` : navLink.class
            }
            onClick={(e) => onFilterProducts(e.target)}
          >
            {navLink.text}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

// Proptypes
Navigation.propTypes = {
  navLinks: Proptypes.array.isRequired,
  onFilterProducts: Proptypes.func.isRequired,
};
