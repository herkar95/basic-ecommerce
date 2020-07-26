import React, { useState } from 'react';
import Header from './js/components/Header';
import Slideshow from './js/components/Slideshow';
import Products from './js/components/Products';
import Navigation from './js/components/Navigation';
import prod from './resources/products.json';

function App() {
  // State
  const [slides, setSlides] = useState([
    'https://source.unsplash.com/RyRpq9SUwAU/1600x900',
    'https://source.unsplash.com/ggZuL3BTSJU/1600x900',
    'https://source.unsplash.com/TMOeGZw9NY4/1600x900',
    'https://source.unsplash.com/yXpA_eCbtzI/1600x900',
    'https://source.unsplash.com/ULmaQh9Gvbg/1600x900',
  ]);
  const [products, setProducts] = useState(prod);
  const [navLinks, setNavLinks] = useState([
    {
      text: 'Show All',
      class: 'all',
      active: true,
    },
    {
      text: 'Shoes',
      class: 'shoes',
      active: false,
    },
    {
      text: 'Socks',
      class: 'socks',
      active: false,
    },
    {
      text: 'T-shirts',
      class: 't-shirts',
      active: false,
    },
    {
      text: 'Hats',
      class: 'hats',
      active: false,
    },
  ]);

  // Display products depending on active category
  function handleFilterProducts(target) {
    if (!target.classList.contains('active')) {
      // Applies active class to target element (removes active from other links)
      const links = navLinks.map((link) => {
        link.class === target.className
          ? (link.active = true)
          : (link.active = false);
        return link;
      });
      setNavLinks(links);
    }

    // Contains the filtered products
    let filteredProd = [];

    if (!target.classList.contains('active')) {
      // Filter products matching target element
      target.classList.contains('all')
        ? (filteredProd = prod)
        : (filteredProd = prod.filter(
            (prod) => prod.category === target.className
          ));

      setProducts(filteredProd);
    }
  }

  return (
    <div className='container'>
      <Header />
      <div className='main-content'>
        <div className='left-nav'>
          <Navigation
            navLinks={navLinks}
            onFilterProducts={handleFilterProducts}
          />
        </div>
        <div className='right-content'>
          {/* <Slideshow slides={slides} /> */}
          <Products products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;
